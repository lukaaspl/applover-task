import axios from "axios";
import api from "./api";

const getOrganizationDetails = async () => {
  const headers = {
    headers: {
      Authorization: "token which I am not getting anymore"
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
