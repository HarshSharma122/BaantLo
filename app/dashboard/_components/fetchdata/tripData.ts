import { toast } from "sonner";

export const fetchTripData = async () => {
  const response = await fetch("/api/createTrip", {
    method: "GET",
  });
  if (response.ok) {
    return response.json();
  } else {
    toast.message("Network issue!");
  }
};