import React, { useEffect, useState } from "react";
import { signup } from "../../API/user";

function Signup() {
  const [file, setFile] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
      gender,
      file,
      phoneNumber,
      address
    )
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.log(e));
  };

  const inputs = [
    {
      name: "firstName",
      placeHolder: "First Name",
      type: "text",
      onChange: (e) => {
        setFirstName(e.target.value);
      },
      isValid: firstName !== "",
    },
    {
      name: "lastName",
      placeHolder: "Last Name",
      type: "text",
      onChange: (e) => {
        setLastName(e.target.value);
      },
      isValid: lastName !== "",
    },
    {
      name: "email",
      placeHolder: "Email",
      type: "text",
      onChange: (e) => {
        setEmail(e.target.value);
      },
      isValid: () => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      },
    },
    {
      name: "password",
      placeHolder: "Password",
      type: "password",
      onChange: (e) => {
        setPassword(e.target.value);
      },
      isValid: () => {
        const re =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
      },
    },
    {
      name: "dateOfBirth",
      placeHolder: "Date of Birth",
      type: "date",
      onChange: (e) => {
        setDateOfBirth(e.target.value);
      },
      isValid: dateOfBirth !== "",
    },
    {
      name: "phoneNumber",
      placeHolder: "Contact",
      type: "text",
      onChange: (e) => {
        setPhoneNumber(e.target.value);
      },
      isValid: phoneNumber !== "",
    },
    {
      name: "address",
      placeHolder: "Address",
      type: "text",
      onChange: (e) => {
        setAddress(e.target.value);
      },
      isValid: address !== "",
    },
    // {
    //   name: "profilePicture",
    //   placeHolder: "Profile Picture",
    //   type: "file",
    //   onChange: (e) => handleFileChange(e),
    //   isValid: Boolean(file),
    // },
  ];

  const selects = [
    {
      name: "gender",
      onChange: (e) => {
        setGender(e.target.value);
      },
      options: [
        {
          name: "Male",
          value: "male",
        },
        {
          name: "Female",
          value: "female",
        },
        {
          name: "Other",
          value: "other",
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Signup Page</h1>
      <p>Sign up for my app!</p>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <input
            key={input.name}
            type={input.type}
            placeholder={input.placeHolder}
            onChange={input.onChange}
          ></input>
        ))}
        {selects.map((select) => (
          <select
            key={select.name}
            id={select.name}
            name={select.name}
            defaultValue={select.options[0].value}
            onChange={select.onChange}
          >
            {select.options.map((option, index) => (
              <option key={option.name} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        ))}
        <button type="submit" onClick={handleSubmit}>
          Upload
        </button>
      </form>
    </div>
  );
}

export default Signup;
