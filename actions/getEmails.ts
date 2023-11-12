import axios from "axios";


export default async function getEmails() {
  const response = await axios.get("/api/emails")
  return response.data;
}
