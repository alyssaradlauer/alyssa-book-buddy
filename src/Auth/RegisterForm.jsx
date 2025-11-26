import axios from "axios";
import { useNavigate } from "react-router";
const RegisterForm = ({ setView }) => {
  const navigate = useNavigate();
  const register = async (formData) => {
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
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register",
        user
      );
      console.log(data);
      alert("Thanks for registering!");
      navigate("/books");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form action={register} className="authForm">
      <h2>Register</h2>
      <label>
        First Name:
        <input type="text" name="firstname" />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastname" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
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
