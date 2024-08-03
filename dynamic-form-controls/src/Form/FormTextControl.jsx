import { useContext } from "react";
import { AppGlobalFormContext } from "../Context/AppGlobalFormContext";

function FormTextControl({inputAttr}){

    const { formData, setFormData, handleInputOnChangeByContext } = useContext(AppGlobalFormContext);

    function handleInputOnChange(event) {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        }));
    }

    return <>
        <input 
            name={inputAttr.name || ""} 
            id={inputAttr.id || ""} 
            placeholder={inputAttr.placeholder || "Type here"} 
            type={inputAttr.type}
            onChange={ (event) => handleInputOnChangeByContext(event) }
        />
    </>
}

export default FormTextControl;