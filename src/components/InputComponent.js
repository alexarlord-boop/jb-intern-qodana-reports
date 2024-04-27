import React from "react"
import {ErrorsComponent} from "./ErrorsComponent";


export function Input({ register, name, required, errors, label, type, id, placeholder, ...rest }) {
    return (
        <div className="flex flex-col w-full gap-2 mt-5">
            <div className="flex justify-between">
                <label htmlFor={id} className="font-semibold capitalize text-lg">
                    {label}
                </label>
            </div>
            <input
                {...register(name, { ...required })}
                {...rest}
                id={id}
                type={type}
                placeholder={placeholder}
                aria-label={label}
                aria-required={required.required ? "true" : "false"}
            />
            <ErrorsComponent errors={errors} name={name} />

        </div>
    );
}


