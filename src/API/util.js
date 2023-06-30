import axios from "axios";

const ss = "http://localhost:4000";

export const authenticate = async (token) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${ss}/user/authorize`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.request(config);
  return response;
};
