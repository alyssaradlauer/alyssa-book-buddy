import NavBar from "./NavBar";
import { Outlet } from "react-router";

const Layout = ({ user, setUser }) => {
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
