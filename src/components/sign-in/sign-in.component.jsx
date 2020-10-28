import React from "react";

import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils"

class SignIn extends React.Component {
    constructor(props) {
        super();

        this.props = props;
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label="Email" type="email" handleChange={this.handleChange} name="email" value={this.state.email} required/>

                    <FormInput label="Password" type="password" handleChange={this.handleChange} name="password" value={this.state.password} required/>
                    <div className="buttons">
                        <CustomButton type="submit" >Sign IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in With GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
