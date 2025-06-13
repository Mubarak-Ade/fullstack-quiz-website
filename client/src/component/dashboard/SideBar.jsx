import { BsFillQuestionCircleFill } from "react-icons/bs"; 
import { motion } from "framer-motion";
import { AiOutlineSetting } from "react-icons/ai";
import { BsWindowStack } from "react-icons/bs";
import { CgHomeAlt } from "react-icons/cg";
import { HiOutlineUserGroup } from "react-icons/hi";
import { ImStatsBars } from "react-icons/im";
import { Link } from "react-router";
import Logo from "../../assets/logos.png";
import { useSelector } from "react-redux";

const SideBar = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    const linkVariant = {
        hover: {
            backgroundColor: "var(--color-green-700)",
            color: "var(--color-white)",
        },
        tap: {},
    };

    console.log(user);

    const AdminLink = [
        {
            link: "/admin/dashboard",
            icon: CgHomeAlt,
            text: "Dashboard",
        },
        {
            link: "/admin/quizzes",
            icon: BsWindowStack,
            text: "Quizzes",
        },
        {
            link: "/admin/questions",
            icon: BsFillQuestionCircleFill,
            text: "Questions",
        },
        {
            link: "/admin/users",
            icon: HiOutlineUserGroup,
            text: "Users",
        },
        {
            link: "/admin/results",
            icon: ImStatsBars,
            text: "Results",
        },
        {
            link: "/admin/settings",
            icon: AiOutlineSetting,
            text: "Settings",
        },
    ];

    const UserLink = [
        {
            link: "/user/dashboard",
            icon: CgHomeAlt,
            text: "Dashboard",
        },
        {
            link: "/user/results",
            icon: ImStatsBars,
            text: "Results",
        },
        {
            link: "/user/settings",
            icon: AiOutlineSetting,
            text: "Settings",
        },
    ];

    const isAdmin = user?.role === "admin";

    const links = isAdmin ? AdminLink : UserLink;

    return (
        <div className="min-w-60 border-r border-teal-900 bg-conic-240 from-teal-800 from-50% to-emerald-800 max-h-full">
            <nav className="flex gap-4 flex-col text-white w-full">
                <Link
                    to="/"
                    className="flex items-center p-3 gap-2 shadow-2xl shadow-teal-700"
                >
                    <img
                        src={Logo}
                        className="size-10 mix-blend-multiply"
                        alt={Logo}
                    />
                    <h1 className="text-2xl font-alata">Treevia</h1>
                </Link>
                <ul>
                    {links.map((link, index) => (
                        <Link key={index} to={link.link}>
                            <motion.span
                                variants={linkVariant}
                                whileHover="hover"
                                whileTap="tap"
                                className="flex items-center w-full p-4 gap-4"
                            >
                                <link.icon />
                                {link.text}
                            </motion.span>
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;
