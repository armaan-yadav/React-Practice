import PrimaryButton from "../utils/PrimaryButton";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className=" navbar w-full  h-[66px] px-[5rem] flex items-center justify-between border-b border-gray-300">
        <img
          src="https://logohistory.net/wp-content/uploads/2023/02/Nike-Logo.png"
          alt="logo"
          className="h-[50px]"
        />
        <div className="menu">
          <ul className="flex gap-5 uppercase font-[600]">
            <li>
              <Link to="/">Menu</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/location">Location</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link to={"/login"}>
          {" "}
          <PrimaryButton name={"Login"}></PrimaryButton>{" "}
        </Link>
      </div>
    </>
  );
};
export default Navbar;
