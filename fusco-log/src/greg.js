import './styles/App.css';
import NavBar from './navBar';
import { useState } from "react";
import { useAuth } from './contexts/AuthContext';
import { useNavigate } from "react-router-dom";

function Greg(props) {

    return (
        <>
            <NavBar />
            <div class="main">
                

            </div>
        </>
    );
}

export default Greg;