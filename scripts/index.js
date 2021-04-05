//login

import { LOCAL_SEARCH, API_AUTH_URL } from "./constants.js";

const loginForm = document.getElementById("login-form");

loginForm.onsubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const options = {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(API_AUTH_URL, options);

  const jsonData = await response.json();

  // console.log(jsonData);
  sessionStorage.setItem("userId", jsonData.id);
  location.href = LOCAL_SEARCH;
};
