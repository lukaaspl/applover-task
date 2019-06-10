import axios from "axios";
import api from "./api";

const login = async (email, password) => {
  try {
    const response = await axios.post(`${api.basePath}/login`, {
      email,
      password
    });

    if (response.status === 200) return true;
  } catch (error) {
    return false;
  }
};

export default login;
