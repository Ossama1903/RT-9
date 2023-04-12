import React from "react";
import { login, signup } from "../../API/user";

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <p>Log in to my app!</p>
      <button
        onClick={() =>
          signup("ss", "ss").then((response) => {
            console.log(response);
          })
        }
      >
        dsapdma
      </button>
    </div>
  );
}

export default Login;
