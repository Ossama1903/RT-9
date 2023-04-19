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
    {
      name: "profilePicture",
      placeHolder: "Profile Picture",
      type: "filetext",
      onChange: (e) => {
        setFile(e.target.value);
      },
      isValid: Boolean(file),
    },
  ];

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <p>Sign up for my app!</p>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <input
            type={input.type}
            placeholder={input.placeHolder}
            onChange={input.onChange}
          ></input>
        ))}
        <input type="file" onChange={handleFileChange} />
        <button type="submit" onClick={handleSubmit}>
          Upload
        </button>
      </form>
    </div>
  );
}

export default Signup;
