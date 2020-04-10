import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import logo from "./logo.svg";
import "./App.css";

function onSubmit(): void {
  console.log("submit called");
}

function onChange(params: string | null) {
  console.log("captcha code called with" + params);
}

function App() {
  const recaptchaRef = React.createRef<ReCAPTCHA>();
  return (
    <div className="App">
      Learn React
      <form onSubmit={onSubmit}>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6Lf_cugUAAAAAPCTqvGyz6b0NbqU1oEjO0FqFsOI"
          onChange={onChange}
        />
      </form>
    </div>
  );
}

export default App;
