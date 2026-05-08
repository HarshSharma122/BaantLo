import { toast } from "sonner";

export const fetchTripRequest = async () => {
  const response = await fetch("/api/request", {
    method: "GET",
  });
  if (response.ok) {
    return response.json();
  } else {
    toast.error("Some Error!");
  }
};
