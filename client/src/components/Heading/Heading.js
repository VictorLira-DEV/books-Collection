import React from "react";
import { Link } from "react-router-dom";
import styles from "./heading.module.css";
import { BiPlus } from "react-icons/bi";

const Heading = () => {
    return (
        <>
            <header className={styles.header}>
                <nav>
                    <li>
                        <Link className={styles.link} to="/add">
                            <BiPlus/>
                            Add User
                        </Link>
                    </li>
                </nav>
            </header>
        </>
    );
};

export default Heading;
