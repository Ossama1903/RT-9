import React, { useState } from "react";
import { useAuth } from "../../components/Auth/Auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, rememberMe)
      .then((response) => console.log(response))
      .catch((e) => {
        console.log(e);
      });
  };

  const inputs = [
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
  ];

  return (
    <div>
      <h1>Login Page</h1>
      <p>Log in to my app!</p>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <input
            key={input.name}
            type={input.type}
            placeholder={input.placeHolder}
            onChange={input.onChange}
          ></input>
        ))}
        <input
          type="checkbox"
          name="myCheckbox"
          value={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <label htmlFor="myCheckbox">Remember Me</label>

        <button type="submit" onClick={handleSubmit}>
          Upload
        </button>
      </form>
    </div>
  );
}

export default Login;
