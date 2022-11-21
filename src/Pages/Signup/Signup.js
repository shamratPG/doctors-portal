import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='flex justify-center items-center my-16'>
            <form className="form-control shadow-lg p-6 rounded-lg">
                <h1 className='text-center text-xl font-semibold'>Signup</h1>
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
                <input className='btn btn-accent text-white' type='submit' value='Sign Up' />
                <label className="label">
                    <span className='label-text-alt'>Already have an account <Link to='/login' className="text-secondary">Log in</Link></span>
                </label>
                <div className="divider">OR</div>
                <button className='btn btn-outline btn-accent' type='submit'>Continue with Google</button>
            </form>
        </div>
    );
};

export default Signup;