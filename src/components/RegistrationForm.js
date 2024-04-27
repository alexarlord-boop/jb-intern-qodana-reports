// legacy attempt to construct a nice form
// after a few hours I decided to delve into React Hook Form hook - all progress is presented in App.js

import React from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [showPassword, setShowPassword] = React.useState(false);

    const onSubmit = (data) => {
        console.log(data);
    };

    const handlePasswordToggle = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Registration Form</h2>
                <div>
                    <label htmlFor="email">Email:</label>

                    <input
                        defaultValue="test@mail.com"
                        type="email"
                        aria-invalid={errors.email ? "true" : "false"}
                        id="email"
                        name="email"
                        {...register("email", { required: true, maxLength: 50 })}
                    />
                    {/* use role="alert" to announce the error message */}
                    {errors.email && errors.email.type === "required" && (
                        <span role="alert">This is required</span>
                    )}
                    {errors.email && errors.email.type === "maxLength" && (
                        <span role="alert">Max length exceeded</span>
                    )}
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        defaultValue="test name"
                        type="username"
                        aria-invalid={errors.username ? "true" : "false"}
                        id="username"
                        name="username"
                        {...register("username", { required: true, maxLength: 30 })}
                    />
                    {/* use role="alert" to announce the error message */}
                    {errors.username && errors.username.type === "required" && (
                        <span role="alert">This is required</span>
                    )}
                    {errors.username && errors.username.type === "maxLength" && (
                        <span role="alert">Max length exceeded</span>
                    )}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        defaultValue="password"
                        type={showPassword ? "text" : "password"}
                        aria-invalid={errors.password ? "true" : "false"}
                        id="password"
                        name="password"
                        {...register("password", { required: true, minLength: 8 })}
                    />
                    {/* use role="alert" to announce the error message */}
                    {errors.password && errors.password.type === "required" && (
                        <span role="alert">This is required</span>
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                        <span role="alert">Password is too short</span>
                    )}

                    <button type="button" onClick={handlePasswordToggle}>
                        {showPassword ? "Hide Password" : "Show Password"}
                    </button>
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
