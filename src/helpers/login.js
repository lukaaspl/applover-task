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

/*


navigator.geolocation.getCurrentPosition(
  position => {
    console.log(position.coords.latitude);
  },
  error => console.warn(error.message)
);

const success

const detectCountry = async () => {
  if (!navigator.geolocation) return false;

  const coordinates = navigator.geolocation.getCurrentPosition(async position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    return await 
  });
  console.log(coordinates);
  // const request = `${api.geolocationPath}?key=${
  //   api.keys.opencagedata
  // }&q=${latitude}+${longitude}&no_annotations=1`;

  // try {
  //   const response = await axios.get(request);

  //   if (response.status === 200)
  //     return response.data.results[0].components.country_code;
  //   else return false;
  // } catch (error) {
  //   console.warn(error);
  // }
};
const countryCode = await response.data.results[0].components.country_code
*/
