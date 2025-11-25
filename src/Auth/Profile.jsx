import { useBooks } from "./Books/BooksContent";

const Profile = ({ user }) => {
  return (
    <div>
      <h2>My Profile:</h2>

      <p>
        Name: {user.firstname} {user.lastname}
      </p>
      <p>Email: {user.email}</p>

      <h3>My Reserved Books:</h3>
    </div>
  );
};
