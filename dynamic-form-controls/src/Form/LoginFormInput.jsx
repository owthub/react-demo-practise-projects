import { useContext, useState } from "react";
import { LoginControls, LoginButton } from "./Controls"
import FormTextControl from "./FormTextControl";
import FormSelectControl from "./FormSelectControl";
import { AppGlobalFormContext } from "../Context/AppGlobalFormContext";

const formControlTypes = {
    TEXT: "text",
    TEXTAREA: "textarea",
    SELECT: "select",
    RADIO: "radio",
    CHECKBOX: "checkbox"
}

function LoginFormInputs(){

    const {initialFormData, formData, setFormData} = useContext(AppGlobalFormContext);

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(formData);
        setFormData(initialFormData);
    }

    function renderFormInputControl(formInput){
        
        let content = null;

        switch (formInput.controlType) {
            case formControlTypes.TEXT:
                content = <FormTextControl inputAttr={formInput} />
                break;
            case formControlTypes.SELECT:
                content = <FormSelectControl inputAttr={formInput} />
                break;
        
            default:
                break;
        }

        return content;
    }

    return <>
        <div style={{ display: "flex" }}>
            <form onSubmit={handleFormSubmit}>
                {
                    LoginControls?.length > 0 ? 
                    LoginControls.map( (eachInput) => (
                        <p key={eachInput.id}>
                            <label htmlFor={eachInput.name}></label>
                            {
                                renderFormInputControl(eachInput)
                            }
                        </p>
                    )) 
                    : null
                }
                <button type={LoginButton.type}>{LoginButton.text}</button>
            </form>
        </div>
    </>
}

export default LoginFormInputs