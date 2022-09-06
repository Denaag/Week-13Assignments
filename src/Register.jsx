import React, {useState} from "react"; //allows us to store info put in

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents page from reloading
        console.log(email);
    }

    return (
        <div className="auth-form-container">
                <h1>Register</h1>
            <form className="register-form"  onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Enter Full Name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
            <button className="link-button" onClick={() => props.onFormSwitch("login")}>Already a valued member? Sign-In Here!</button>
        </div>
    )
}