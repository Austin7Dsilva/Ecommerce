import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-black border-0">
        <img src="https://ik.imagekit.io/ugdlmxlzt/bg.jpg?updatedAt=1688552996957" className="card-img" alt="background" height="550px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
                 <h5 className="card-title display-3 fw-bolder mb-0">LATEST TRENDS</h5>
                    <p className="card-text lead fs-2">
                        Check out all the trends
                    </p>
            </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
