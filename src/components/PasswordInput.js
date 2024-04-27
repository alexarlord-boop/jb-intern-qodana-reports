import React from "react"
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {ErrorsComponent} from "./ErrorsComponent";


export function PasswordInput({register, name, required, errors, label, id, placeholder, ...rest}) {
    const [showPassword, setShowPassword] = React.useState(false);
    const handlePasswordToggle = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div className="flex flex-col w-full gap-2 mt-5">
            <div className="flex justify-between">
                <label htmlFor={id} className="font-semibold capitalize text-lg">
                    {label}
                </label>
                <button
                    tabIndex="4"
                    type="button"
                    onClick={handlePasswordToggle}
                    className="ml-2  text-gray-800 font-light  px-8 text-xl rounded inline-flex items-center focus:outline-none focus:ring focus:ring-orange-500"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                >
                    {showPassword ? (
                        <>
                            <span aria-hidden="true"><FaEyeSlash/></span>
                            <label className="text-semibold text-lg">&nbsp;Hide Password</label>
                        </>
                    ) : (
                        <>
                            <span aria-hidden="true"><FaEye/></span>
                            <label className="text-semibold text-lg">&nbsp;Show Password</label>
                        </>
                    )}
                </button>
            </div>
            <div className="flex">
                <input
                    tabIndex="3"
                    {...register(name, {...required})}
                    {...rest}
                    id={id}
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    aria-label={label}
                    aria-required={required.required ? "true" : "false"}
                />

            </div>
            <ErrorsComponent errors={errors} name={name}/>
        </div>
    );
}

