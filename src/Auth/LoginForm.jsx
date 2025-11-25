import axios from "axios";
import { useNavigate } from "react-router";

const LoginForm = ({ authenticate }) => {
  const navigate = useNavigate();

  const login = async (formData) => {
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const password = formData.get("password");
    const user = {
      firstname,
      lastname,
      email,
      password,
    };
    try {
      const { data } = await axios.post(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login",
        user
      );
      console.log(data);
      window.localStorage.setItem("token", data.token);
      authenticate();
      navigate("/books");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form action={login}>
      <h2>Login</h2>
      <label>
        First Name:
        <input type="text" name="first name" />
      </label>
      <label>
        Last Name:
        <input type="text" name="last name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="text" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
