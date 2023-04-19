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
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(password);
  console.log(dateOfBirth);
  console.log(gender);
  console.log(profilePicture);
  console.log(phoneNumber);
  console.log(address);

  // var data = JSON.stringify({
  //   firstName,
  //   lastName,
  //   email,
  //   password,
  //   dateOfBirth,
  //   gender,
  //   phoneNumber,
  //   address,
  // });
  // var config = {
  //   method: "post",
  //   url: `${ss}/user/signup`,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   data: data,
  // };
  // const response = await axios(config);
  // return response;
};
