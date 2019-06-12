import axios from "axios";
import api from "./api";

const getOrganizationDetails = async () => {
  const headers = {
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJvcmdhbml6YXRpb25faWQiOjEsImV4cCI6MTU2MTUyODg1MCwiY3JlYXRlZF9hdCI6IjIwMTktMDYtMTIgMDY6MDA6NTAgVVRDIn0.5A4tfKchQl34FwtBuUp0CFwmS4HoJG-1eG1_WsKSgMc"
    }
  };

  try {
    const response = await axios.get(`${api.basePath}/organization`, headers);

    if (response.status === 200) return response;
  } catch (error) {
    return false;
  }
};

export default getOrganizationDetails;
