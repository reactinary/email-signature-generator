import axios from "axios";



export const deleteEmail = async (emailId: string) => {
  console.log(emailId);
  return axios.delete(`/api/emails/${emailId}`);
};
