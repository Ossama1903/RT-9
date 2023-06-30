import React, { useState } from "react";
import { useAuth } from "../../components/Auth/Auth";
import { Grid } from "@mui/material";
import theme from "../../theme/theme";
import CustomizedGrid from "../../utilityComponents/CustomizedGrid";
import useCustomizable from "../../useCustomizable";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const { loginHeading, loginSubHeading } = useCustomizable();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
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
      <CustomizedGrid
        items={[
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              backgroundColor: theme.palette.customGreen,
              minHeight: "100vh",
            }}
          >
            <h1>{loginHeading}</h1>
            <p>{loginSubHeading}</p>
            <form onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <input
                  key={input.name}
                  type={input.type}
                  placeholder={input.placeHolder}
                  onChange={input.onChange}
                ></input>
              ))}
              <button type="submit" onClick={handleSubmit}>
                Upload
              </button>
            </form>
          </Grid>,
          <Grid
            item
            md={4}
            sx={{
              display: { xs: "none", md: "block" },
              backgroundColor: theme.palette.customBlack,
              minHeight: "100vh",
            }}
          >
            Grid Item 2
          </Grid>,
        ]}
      />
    </div>
  );
}

export default Login;
