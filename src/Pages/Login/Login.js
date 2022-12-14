import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center items-center my-16'>
            <form className="form-control shadow-lg p-6 rounded-lg">
                <h1 className='text-center text-xl font-semibold'>Login</h1>
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Your Email</span>
                    </label>
                    <input type="email" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='my-2'>

                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input type="password" className="input input-bordered w-full max-w-xs" />

                    <label className="label">
                        <Link className="label-text-alt">Forget Password?</Link>
                    </label>
                </div>
                <input className='btn btn-accent text-white' type='submit' value='logIn' />
                <label className="label">
                    <span className='label-text-alt'>New to Doctor's Portal? <Link to='/signup' className="text-secondary">Create new account</Link></span>
                </label>
                <div className="divider">OR</div>
                <button className='btn btn-outline btn-accent' type='submit'>Continue with Google</button>
            </form>
        </div>
    );
};

export default Login;