import { useState } from "react";

export const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const formData = {
    //         email,
    //         password,
    //     }

    // }
    return (
        <div>
            <form>
                <label>E-mail
                    <input type="email" value={(e) => setEmail(e.target.value)}/>
                </label>
                <label>Password
                    <input type="password" value={(e) => setPassword(e.target.value)}/>
                </label>
            </form>
        </div>
    )
}