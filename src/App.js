import './App.css';
import {Input} from './components/InputComponent';
import {useForm} from "react-hook-form";
import React from "react";
import {PasswordInputComponent} from "./components/PasswordInputComponent";
import toast, {Toaster} from 'react-hot-toast';

function App() {
    const defaultValues = {
        username: 'test_username',
        email: 'test@email.com',
        password: 'test_passwordD1',
    };

    // React Hook Form hook for form management
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({criteriaMode: "all", defaultValues});


    // Form submission handler
    const onSubmit = (data) => {
        console.log(data);
        toast.success('All fields are valid!');
    }

    // CSS classes for focus ring styling
    const focusClassName = "focus:ring focus:ring-orange-400 ring-offset-4";
    const inputClassName = "w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60 focus:outline-none " + focusClassName;


    return (
        <div className="App">
            <Toaster
                position='top-right'
            />

            <div className="w-2/3 mx-auto">
                <h1 className="text-4xl font-extrabold text-center mt-5">Hello Qodana Team!</h1>

                <div className="w-1/3 mx-auto mt-5 text-center">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
                        <div className="grid   md:grid-cols-1">
                            {/* Username input field */}
                            <Input
                                className={inputClassName}
                                tabIndex="1"
                                name="username"
                                type="text"
                                id={"username-test"}
                                label="username"
                                placeholder="type your username..."

                                register={register}
                                required={{
                                    required: "Username is required",
                                    minLength: {value: 6, message: "Username should be at least 6    characters"},
                                    pattern: {
                                        value: /^[a-zA-Z_]+$/,
                                        message: 'Username can only contain letters and underscores.',
                                    }

                                }}
                                errors={errors}
                            />

                            {/* Email input field */}
                            <Input
                                className={inputClassName}
                                tabIndex="2"
                                name="email"
                                type="email"
                                id="email-test"
                                label="email"
                                placeholder="type your email..."

                                register={register}
                                required={{
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                        message: 'Please enter a valid email.',
                                    }
                                }}
                                errors={errors}
                            />


                            {/* Password input field */}
                            <PasswordInputComponent
                                className={inputClassName}
                                name="password"
                                id={"password-test"}
                                label="password"
                                placeholder="type your password..."

                                register={register}
                                required={{
                                    required: "Password is required.",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters long."
                                    },
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                        message: "Password must contain at least one uppercase letter, one lowercase letter, and one number."
                                    }
                                }}
                                errors={errors}

                            />


                            {/* Submit button */}
                            <button
                                tabIndex="5"
                                className={"mt-5 text-center text-lg   p-5 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none " + focusClassName}>
                                Submit Form
                            </button>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default App;
