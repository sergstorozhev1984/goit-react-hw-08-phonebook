import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUserThunk } from "redux/authUser/authUserThunk";

export const Register = () => { 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    
    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
            name,
            email,
            password,
        }
        dispatch(registerUserThunk(formData))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>E-mail
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>Password
                    <input type="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}