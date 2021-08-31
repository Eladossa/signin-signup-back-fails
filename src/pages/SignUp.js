import { useHistory, useLocation } from "react-router";
import React, { useEffect } from "react";

const SignUp = ({ setAuth }) => {
  const history = useHistory();
  let location = useLocation();
  console.log(location.state);

  useEffect(() => {
    window.onpopstate = () => {
      console.log("useEffect SignUp", location.state?.from === "fromSignIn");
      if (location.state?.from === "fromSignIn") {
        history.push({
          pathname: "/signin",
          state: { from: "fromSignUp" }
        });
      } else {
        setAuth(false);
      }
    };
  }, [location.state, history]);

  return (
    <div>
      <div>Hello! Please SignUp!</div>
      <button
        onClick={() => {
          setAuth(false);
          history.push("/");
        }}
      >
        SIGNOUT
      </button>
      <br /> <br />
      <button
        onClick={() => {
          history.push("/signin", { from: "fromSignUp" });
        }}
      >
        To sign in
      </button>
    </div>
  );
};

export default SignUp;
