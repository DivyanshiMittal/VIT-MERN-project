import React from 'react';
import './Home.css'; // Importing the CSS file for styling

const Home = () => {
    return (
        <div>
            <div className="background-image"></div>
            <div className="content">
                <div className="left-section">
                    <img src="com.webp" alt="Description" className="left-image" />
                </div>
                <div className="right-section">
                    <button className="btn" onClick={signIn}>Sign In</button>
                    <button className="btn" onClick={signUp}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}


const signIn = () => {
    console.log("Sign In clicked");
}

const signUp = () => {
    console.log("Sign Up clicked");
}

export default Home;
