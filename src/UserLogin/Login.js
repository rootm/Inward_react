import React from 'react';
import './css/login.css';





class Login extends React.Component {
    state = {
        name: 'Composed TextField',
    };

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (

            <div id="login" class="backdrop-modal">
                <div class="login-area">



                    <div class="email-login-topic">
                        <span>Login with Email</span>
                    </div>
                    <form class="email-login" >
                    <div class="text-container">
                        <div class="email-icon icon"></div>
                        <input type="text" placeholder="Email" id="login_email" name="user_email"/>

                    </div>
                    <div class="text-container">
                        <div class="email-icon icon"></div>
                        <input type="password" placeholder="Password" id="login_pass" name="user_pass"/>

                    </div>

                    <div class="login-link-area">
                        <div class="remember">

                            <label class="containerz">Remember Me
                                <input type="checkbox" checked="checked"/>
                                    <span class="checkmark"></span>
                            </label>

                        </div>
                        <div class="reset-link-area">
                            <a href="/password-forgot" class="forgot-link" aria-busy="false">Forgot my password!</a>
                        </div>
                    </div>


                    <button type="submit" class="log-button" name="login-button">Log in</button>
                </form>

                <div class="login-signup">
                    <span>New to FastFood? </span>
                    <span class="login-signup-link">
          <a href="/register">Sign up</a>
        </span>
                </div>
            </div>
    </div>

        );
    }
}



export default Login;