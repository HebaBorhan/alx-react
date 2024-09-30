import React, { useState, useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext'; // Import the context

const styles = StyleSheet.create({
    login: {
        margin: "10px",
        width: "100%",
        '@media (max-width: 900px)': {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: '5px',
        }
    },
    inputField: {
        margin: "0 15px",
        '@media (max-width: 900px)': {
            margin: 0,
        }
    },
    buttonOk: {
        minWidth: "50px",
        minHeight: "30px",
        fontWeight: "bold",
        backgroundColor: "white",
        color: "#e1003c",
        border: "1px solid lightgrey",
        borderRadius: "5px",
        ":hover": {
            backgroundColor: "#e1003c",
            color: "white",
        },
        ":active": {
            backgroundColor: "#8e0127",
        }
    }
});

const Login = () => {
    const { logIn } = useContext(AppContext); // Access the logIn function from context
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        logIn(email, password); // Call logIn with email and password
    };

    return (
        <div className={css(styles.login)}>
            <p>Login to access the full dashboard</p>
            <form onSubmit={handleLoginSubmit}>
                <label>Email:</label>
                <input className={css(styles.inputField)} type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password:</label>
                <input className={css(styles.inputField)} type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input className={css(styles.buttonOk)} type="submit" value="OK" />
            </form>
        </div>
    );
}

export default Login;
