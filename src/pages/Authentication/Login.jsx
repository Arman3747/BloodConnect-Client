import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const { signIn } = use(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [firebaseError, setFirebaseError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(() => {

                Swal.fire({
                    icon: "success",
                    title: "Logged In Successfully !",
                    showConfirmButton: true,
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            navigate(`${location.state ? location.state : '/'}`);
                        }
                    });
            })
            .catch((error) => {

                Swal.fire({
                    icon: "error",
                    title: error.message,
                    showConfirmButton: false,
                    timer: 1500
                });

                setFirebaseError(error.message);
            })
    }


    return (
        <div className='max-w-[1600px] mx-auto py-20 flex justify-center items-center'>
            <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-4xl font-bold text-center">Login now!</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="fieldset">

                        {/* email  */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            {...register('email', {
                                required: 'Email is required !', pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Please provide a CORRECT email address !',
                                },
                            })}
                            className="input" placeholder="Email" />

                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

                        {/* password  */}
                        <label>Password:</label>
                        <input
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters',
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                                    message: 'Must include at least one uppercase and one lowercase letter',
                                },
                            })}
                            className="input"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password.message}</p>
                        )}

                        <div>
                            <Link className="link link-hover text-indigo-700" to="/login">Forgot password?</Link>
                        </div>

                        {
                            firebaseError && <p className='text-red-500'>{firebaseError}</p>
                        }

                        <button type='submit' className="btn bg-black text-white mt-4">Login</button>
                    </form>

                    <p className='font-medium'>Don't have an account? Please {" "}
                        <Link to='/register' className='text-indigo-700 underline text-lg'>
                            Register !
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;