import React, { useState } from 'react';
import { useApiQuery } from '../../server/api';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    const handleLogin = (e) => {
        e.preventDefault()
        let dt = {
        email:email,
        password:password
        }
        console.log(dt);
        useApiQuery.login(dt).then((res)=>{
            console.log(res);
            //if success then uncomment the next line else give error message
            // window.location.href = '/logbook';
        });
        

    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input value={password} onChange={(e) =>setPassword(e.target.value)} type="password" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">

                            <button className="btn btn-primary" onClick={(e) => handleLogin(e)}>LogIn
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;