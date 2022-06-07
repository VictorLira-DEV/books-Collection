import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Heading/heading.module.css";
import { BiPlus } from "react-icons/bi";

const Heading = () => {
    return (
        <>
            <header className={styles.header}>
                <nav>
                    <li>
                        <Link className={styles.link} to="/addTransaction">
                            <BiPlus/>
                            Add Transaction
                        </Link>
                    </li>
                </nav>
            </header>
        </>
    );
};

export default Heading;
