import axios from "axios";
const RegisterForm = ({ setView }) => {
  const register = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    const user = {
      username,
      password,
    };
    try {
      const { data } = await axios.post("API", user);
      console.log(data);
      alert("Thanks for registering!");
      setView("allBooks");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form action={register}>
      <h2>Register</h2>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="text" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
