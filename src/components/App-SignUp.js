import React, {useContext, useState} from "react"
import { useNavigate } from "react-router-dom";
// import {UserContext} from "../RouteSwitch.js"
import "../assets/styles/App-SignUp.css"
import { UserContext } from "../userDetails";


/* {user, setUser} */
const SignUp = () => {
    const { username, setUsername } = useContext(UserContext);
    // const navigate = useNavigate();

    const [showError, setShowError] = useState("");
    const [didSubmit, setDidSubmit] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);


    const errorMessage = (message, duration= 2000) => {
        setShowError(message);
        setTimeout(() => {
            setShowError(false);
        }, duration);
    }

    const clearFields = (fields) => {
        fields.forEach(i => {
            i.value = ""
            i.classList.remove("valid");
            i.classList.remove("invalid");
        })
    }

    const showSuccessTimeout = (duration = 5000) => {
        setSuccessMessage(true)
        setTimeout(() => {
            setSuccessMessage(false);
        }, duration)
    }

    const checkForEmptyFields = (fields) => {
        return [...fields].map(i => {
            if (i.value === "" || i.className.split(" ")[1] === "invalid") {
                return i
            }
        }).filter(i => i !== undefined);
    }

    const updateUserObj = (fields) => {
        console.log(fields)
        const obj = {}
        fields.forEach(i => obj[i.name] = i.value)

        const storedUser = JSON.parse(localStorage.getItem("user"))

        if (!storedUser || didSubmit) {
            localStorage.setItem("user", JSON.stringify(obj));
            setUsername(obj);
            // navigate("/store");
            // console.log(user, "USER");
            setDidSubmit(false);
            showSuccessTimeout();
            clearFields(fields);
        } else {
            setDidSubmit(true);
            errorMessage("There is already a user, click register again to update");
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const fields = document.querySelectorAll(".SignUp-Field input");

        checkForEmptyFields(fields).length === 0 ? updateUserObj(fields) : errorMessage("1 or more fields are empty or invalid");
    }

    const addValid = (field) => {
        field.classList.remove("invalid")
        field.classList.add("valid");
    }

    const addInvalid = (field) => {
        field.classList.remove("valid")
        field.classList.add("invalid");
    }

    const validate = (e) => {
        const input = e.target;
        const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        const nameRegex = new RegExp(/^[^\p{P}\d\s_]+$/u)
        
        if ((input.name === "first" && !nameRegex.test(input.value)) || (input.name === "last" && !nameRegex.test(input.value))) {
            addInvalid(input);
        } else if (input.name === "email" && !emailRegex.test(input.value)) {
            addInvalid(input);
        } else {
            addValid(input);
        }

    }

    return (
        <div className="App-SignUp">
            <div className="SignUp-Info">
                <h1 className="newFont">Why Register?</h1>
                <p>
                    We keep you in the loop with the latest news regarding our projects. We are constantly working to improve the our user's experience.
                    for instance we are working on a automatically signing IOS from your mobile device without having to be near your home network. We also
                    have apps everyday that we are working on and we will email you a list of apps in development upon request. We are not in the buisness of selling personal 
                    information or sending you spam. We make unsubscribing pretty easy as well so If you don't want to recieve emails you can cancel your registration at any time.
                </p>
            </div>

            <form className="SignUp">
                <h1 className="newFont">Sign Up!</h1>
                <div className="SignUp-Field">
                    <label htmlFor="name">First Name:</label>
                    <input className="glow" onChange={validate} type="text" name="first" required></input>
                </div>
                <div className="SignUp-Field">
                    <label htmlFor="last">Last Name:</label>
                    <input className="glow" onChange={validate} type="text" name="last" required></input>
                </div>
                <div className="SignUp-Field">
                    <label htmlFor="email">Email:</label>
                    <input className="glow" onChange={validate} type="email" name="email" required></input>
                </div>
                    {showError && (
                        <div className="error-message show">{showError}</div>
                    )}
                <button 
                    id="register" 
                    className={successMessage ? 'success' : ''} 
                    onClick={onSubmit}>
                        {successMessage ? 'Success!' : 'Register'}
                </button>
            </form>
      </div>
    )
}

export default SignUp