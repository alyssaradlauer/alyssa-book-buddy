import axios from "axios";
import { useNavigate } from "react-router";

const LoginForm = ({ authenticate }) => {
  const navigate = useNavigate();

  const login = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    const user = {
      username,
      password,
    };
    try {
      const { data } = await axios.post("API", user);
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
        Username:
        <input type="text" name="username" />
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
