import axios from "axios";
const Profile = ({ user }) => {
  return (
    <div>
      <h2>My Profile:</h2>

      <p>
        Name: {user.firstname} {user.lastname}
      </p>
      <p>Email: {user.email}</p>

      <h3>My Reserved Books:</h3>
      {user.reservations && user.reservations.length ? (
        user.reservations.map((book) => (
          <div key={book.id}>
            <p>{book.title}</p>
          </div>
        ))
      ) : (
        <p>You have no reserved books.</p>
      )}
    </div>
  );
};

export default Profile;
