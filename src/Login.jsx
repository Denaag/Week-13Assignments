import React, {useState} from "react"; //allows us to store info put in

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents page from reloading
        console.log(email);
    }

    return (
        <div className="auth-form-container">
                <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
            <button className="link-button" onClick={() => props.onFormSwitch("register")}>Not already a valued member? Register Here!</button>
        </div>
    )
}