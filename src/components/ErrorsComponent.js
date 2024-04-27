import React from "react";
import {ErrorMessage} from "@hookform/error-message";


export function ErrorsComponent({errors, name}) {
    return (
        <ErrorMessage errors={errors}
                      name={name}
                      render={({messages}) =>
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                              <p className="text-left text-red-500 text-sm" key={type}>{message}</p>
                          ))
                      }
        />
    );
}