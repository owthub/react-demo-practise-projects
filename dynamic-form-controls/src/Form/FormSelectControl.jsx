import { useContext, useEffect } from "react";
import { AppGlobalFormContext } from "../Context/AppGlobalFormContext";

function FormSelectControl({ inputAttr }) {
  const { formData, setFormData } = useContext(AppGlobalFormContext);

  function handleInputOnChange(event) {
    setFormData((prevFormData) => ({
        ...prevFormData,
        [event.target.name]: event.target.value
    }));
  }

  useEffect( () => {
    console.log(formData)
  }, [formData]);

  return (
    <select onChange={handleInputOnChange} name={inputAttr.name} id={inputAttr.id}>
      {inputAttr?.options?.length > 0
        ? inputAttr.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))
        : null}
    </select>
  );
}

export default FormSelectControl;
