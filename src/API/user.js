import axios from "axios";

const ss = "http://localhost:4000";

export const login = async (email, password) => {
  var data = JSON.stringify({
    email,
    password,
  });

  var config = {
    method: "post",
    url: `${ss}/user/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = axios(config);
  return response;
};

export const signup = async (
  firstName,
  lastName,
  email,
  password,
  dateOfBirth,
  gender,
  profilePicture,
  phoneNumber,
  address
) => {
  const formData = new FormData();
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("dateOfBirth", dateOfBirth);
  formData.append("gender", gender);
  formData.append("phoneNumber", phoneNumber);
  formData.append("address", address);
  formData.append("profilePicture", profilePicture);
  var config = {
    method: "post",
    url: `${ss}/user/signup`,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  };
  const response = await axios(config);
  return response;
};
