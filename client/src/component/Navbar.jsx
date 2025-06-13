import React, { useEffect, useState } from "react";
import * as Fa from "react-icons/fa6";
import Logo from "../assets/logos.png";
import { Link, Navigate } from "react-router-dom";
import { hover, motion } from "framer-motion";
import { HeaderVariant } from "../utils/Animation/variant/IntroAnimationVariant";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../features/auth/authSlice";

const Navbar = () => {
    // const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("user"));
    const [display, setDisplay] = useState(false);

    const handleLogout = () => {
        dispatch(logOut());
        setDisplay(false);
        <Navigate to="/login" />
    };

    return (
        <motion.div
            variants={HeaderVariant}
            initial="initial"
            animate="animate"
            transition={{
                duration: 1,
            }}
            className="bg-teal-700/40 w-full px-10 py-2.5 border-b border-slate-200 shadow-xs flex justify-between items-center"
        >
            <Link to="/">
                <div className="flex gap-4 justify-center items-center">
                    <img
                        className="size-15 rounded-full mix-blend-multiply"
                        src={Logo}
                        alt={Logo}
                    />
                    <h1 className="text-teal-900 text-4xl font-pacifico">
                        Treevia
                    </h1>
                </div>
            </Link>
            <nav className="flex items-center justify-center gap-15 font-alata text-green-800">
                <ul className="flex gap-5">
                    <Link to="/">Home</Link>
                    <Link to="/quizzes">Quiz</Link>
                    <Link to="/result">Result</Link>
                </ul>
                {user ? (
                    <div className="relative flex flex-row-reverse">
                        <motion.span
                            whileTap={{
                                scale: 0.8,
                            }}
                            className="flex justify-center text-2xl rounded-full cursor-pointer text-teal-100 items-center bg-teal-500 p-2"
                            onClick={() =>
                                setDisplay(() =>
                                    !display
                                        ? setDisplay(true)
                                        : setDisplay(false)
                                )
                            }
                        >
                            <Fa.FaUser />
                        </motion.span>
                        <Link to={user.role === "admin" ? `/admin/dashboard` : `/user/dashboard`} className="p-2">
                            Dashboard
                        </Link>
                        {display && (
                            <div className="fixed bg-teal-900 shadow-2xl text-white w-60 m-2 p-4 top-20 z-50 right-0 rounded-xl before:content-[''] before:size-10 before:bg-teal-900">
                                {/* <motion.span
                                    whileTap={{
                                        scale: 0.8
                                    }}
                                    className="text-[0.5rem] cursor-pointer shadow-2xl absolute top-1 left-1 size-5 bg-teal-800 flex justify-center items-center text-white rounded-full" >
                                        <Fa.FaX />
                                    </motion.span> */}
                                <h2>{user.username}</h2>
                                <h4>{user.email}</h4>
                                <button
                                    className="bg-teal-700 w-full p-2 mt-4 cursor-pointer"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex gap-4">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </nav>
            {/* <span className='text-3xl text-white'>
                <Fa.FaBars />
            </span> */}
        </motion.div>
    );
};

export default Navbar;
