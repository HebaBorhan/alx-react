import React, { useContext } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext'; // Import the context

const styles = StyleSheet.create({
    header: {
        display: "flex",
        alignItems: "center",
        fontSize: "20px",
    },
    headerImg: {
        width: "200px",
    },
});

const Header = () => {
    const { user, logOut } = useContext(AppContext); // Access user and logOut from context

    return (
        <div className={css(styles.header)}>
            <img className={css(styles.headerImg)} src={logo} alt="Holberton School logo"></img>
            <h1>School dashboard</h1>
            {user.isLoggedIn && (
                <span onClick={logOut} style={{ cursor: "pointer", color: "blue" }}>
                    Logout
                </span>
            )}
        </div>
    );
};

export default Header;
