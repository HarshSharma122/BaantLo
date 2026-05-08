import { Webhook } from "svix";
import { headers } from "next/headers";
import dbConnect from "@/lib/Db";
import user from "@/models/user/user.model";

export async function POST(req: Request) {
  await dbConnect();
  const payload = await req.text();
  const headerPayload = await headers();

  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing svix headers", { status: 400 });
  }

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

  let evt: any;

  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Webhook verification failed", err);
    return new Response("Error", { status: 400 });
  }

  // 🎯 HANDLE EVENT
  if (evt.type === "user.created") {
    const userData = evt.data;
    

    await user.create({
      userId: userData.id,
      email: userData.email_addresses[0]?.email_address,
      name: userData.first_name,
      image: userData.image_url,
    });
  }

  return new Response("OK", { status: 200 });
}
