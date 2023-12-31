import React from "react";

const Login = () => {
  return (
    <>

      {/* <!-- Modal --> */}
        <div className="login-box">
            <button className="btn btn-primary w-100 mb-4">
            <span className="fa fa-google me-2"></span> Sign in With Google
            </button>
            <button className="btn btn-primary w-100 mb-4">
            <span className="fa fa-facebook me-2"></span> Sign in With
            Facebook
            </button>
            <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
                </label>
                <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                Password
                </label>
                <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                />
            </div>
            <div className="mb-3 form-check">
                <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
                </label>
            </div>
            <button
                type="submit"
                className="btn btn-outline-primary w-100 mt-5"
            >
                Submit
            </button>
            </form>
        </div>
</>
);
};

export default Login;
