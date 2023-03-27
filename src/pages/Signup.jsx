import { NavLink } from "react-router-dom";
import "./Form.css";
function Signup() {
  return (
    <div className="text">
      <div className="">
        <div>
          <a href="/">
            <h2 className="">Sign Up Form</h2>
          </a>
        </div>
        <div className="">
          <form>
            <div>
              <label htmlFor="name" className="label">
                Name
              </label>
              <div className="">
                <input type="text" name="name" className="" />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="">
                <input type="email" name="email" className="" />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="">
                <input type="password" name="password" className="" />
              </div>
            </div>
            <div className="">
              <label style={{ textAlign: "left" }} htmlFor="" className="label">
                Confirm Password
              </label>
              <div className="">
                <input
                  type="password"
                  name="password_confirmation"
                  className=""
                />
              </div>
            </div>
            <div className="">
              <NavLink className="link-btn" to="/signin">
                Signin?
              </NavLink>
              <button type="submit" className="">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
