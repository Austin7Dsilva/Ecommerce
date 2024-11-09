import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import $ from "jquery";

export default function Navbar() {
    const state = useSelector((state) => state.handleCart);
    function testing() {
        if ($(".navbar-collapse").hasClass("d-none")) {
            $(".navbar-collapse").removeClass("d-none");
        } else {
            $(".navbar-collapse").addClass("d-none");
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm ">
                <div className="container">
                    <NavLink
                        className="navbar-brand fw-bold fs-4"
                        aria-current="page"
                        to="/"
                    >
                        Austin's Collections
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="/navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={testing}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink
                                to="/login"
                                className="btn btn-outline-dark"
                            >
                                <i className="fa fa-sign-in me-1"></i> Login
                            </NavLink>
                            <NavLink
                                to="/cart"
                                className="btn btn-outline-dark ms-2"
                            >
                                <i className="fa fa-shopping-cart me-1"></i>{" "}
                                Cart({state.length})
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
