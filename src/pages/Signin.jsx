import { NavLink } from "react-router-dom";
import "./Form.css";
function Signin() {
  return (
    <div className="text">
      <div className="">
        <div>
          <a href="/">
            <h2 className="">Login Form</h2>
          </a>
        </div>
        <div className="">
          <form>
            <div className="">
              <label htmlFor="email" className="">
                Email
              </label>
              <div className="">
                <input type="email" name="email" className="" />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="">
                Password
              </label>
              <div className="">
                <input type="password" name="password" className="" />
              </div>
            </div>

            <div className="">
              <NavLink className="" to="/signup">
                Signup?
              </NavLink>
              <button type="submit" className="">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
