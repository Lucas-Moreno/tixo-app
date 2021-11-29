import axios from "axios"

const baseUrl = 'http://localhost:80/'

export const login = async (body) => {
  try {
    const liveRes = await axios.post(baseUrl + `auth/login`, body)
    if (liveRes) {
      return liveRes.data;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};


export const register = async (body) => {
  try {
    const liveRes = await axios.post(baseUrl + `auth/register`, body)
    if (liveRes) {
      return liveRes.data;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};
