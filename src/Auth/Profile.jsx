import axios from "axios";
const Profile = ({ user, authenticate }) => {
  const returnBook = async (reservationId) => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      alert("Please log in");
      return;
    }
    try {
      await axios.delete(
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${reservationId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser({
        ...user,
        reservations: user.reservations.filter(
          (reservation) => reservation.id !== reservationId
        ),
      });

      alert("Book returned!");
    } catch (error) {
      console.error(error);
      alert("could not return book");
    }
  };

  return (
    <div>
      <h2>My Profile:</h2>

      <p>
        Name: {user.firstname} {user.lastname}
      </p>
      <p>Email: {user.email}</p>

      <h3>My Reserved Books:</h3>
      {user.reservations && user.reservations.length ? (
        user.reservations.map((reservation) => (
          <div key={reservation.id}>
            <p>{reservation.title}</p>
            <button
              onClick={() => {
                returnBook(reservation.id);
              }}
            >
              Return Book
            </button>
          </div>
        ))
      ) : (
        <p>You have no reserved books.</p>
      )}
    </div>
  );
};

export default Profile;
