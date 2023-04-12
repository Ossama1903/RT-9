import axios from "axios";

const ss = "http://localhost:4000";

export const login = async (email, password) => {
  var data = JSON.stringify({ email, password });

  var config = {
    method: "post",
    url: `${ss}/user/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = await axios(config);
  return response;
};

export const signup = async (email, password) => {
  var data = JSON.stringify({ email, password });

  var config = {
    method: "post",
    url: `${ss}/user/signup`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = await axios(config);
  return response;
};
