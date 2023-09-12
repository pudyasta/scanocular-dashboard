import axios from "axios";

export const handleSubmit = (email, password) => {
  axios
    .post("https://scanocular.online/api/users/dokter/signin/", {
      email,
      password,
    })
    .then((res) => {})
    .catch((e) => {});
};
