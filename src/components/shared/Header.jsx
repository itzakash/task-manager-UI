import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    console.log("Hello");

    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Tasks</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>

      <button onClick={handleLogOut} style={{ float: "right" }}>
        logout
      </button>
    </div>
  );
};

export default Header;
