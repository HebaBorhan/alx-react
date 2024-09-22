import React from 'react';
import { StyleSheet, css } from 'aphrodite';


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
    return (
        <div className={css(styles.login)}>
            <p>Login to access the full dashboard</p>
            <label>Email:</label>
            <input className={css(styles.inputField)} type="email" id="email" />
            <label>Password:</label>
            <input className={css(styles.inputField)} type="password" id="password"></input>
            <button className={css(styles.buttonOk)}>OK</button>
        </div>
    )
}

export default Login