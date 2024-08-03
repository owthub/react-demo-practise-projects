import { useState } from "react"
import { RegisterControls, RegisterButton } from "./Controls"

const initialState = {
    name: "",
    email: "",
    password: ""
};

function RegisterFormInputs(){

    const [formData, setFormData] = useState(initialState);

    function handleControlInputChange(event){
        //console.log(event.target.value)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(formData)
    }

    return <>
        <div style={{ display: "flex" }}>
            <form onSubmit={handleFormSubmit}>
                {
                    RegisterControls?.length > 0 ? 
                    RegisterControls.map( (eachInput) => (
                        <p key={eachInput.id}>
                            <label htmlFor={eachInput.name}></label>
                            <input 
                                type={eachInput.type} 
                                name={eachInput.name} 
                                id={eachInput.id} 
                                placeholder={eachInput.placeholder} 
                                onChange={handleControlInputChange}
                            />
                        </p>
                    )) 
                    : null
                }
                <button type={RegisterButton.type}>{RegisterButton.text}</button>
            </form>
        </div>
    </>
}

export default RegisterFormInputs