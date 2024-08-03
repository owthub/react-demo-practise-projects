import { createContext, useState } from "react";

export const AppGlobalFormContext = createContext(null);

export const initialFormData = {
    email: "",
    password: "",
    role_type: ""
};

export function handleInputOnChangeByContext(event){
    console.log(event.target.value);   
}

function AppGlobalFormState ({children}) {
    
    const [formData, setFormData] = useState(initialFormData);

    return <AppGlobalFormContext.Provider value={{initialFormData, formData, setFormData, handleInputOnChangeByContext}}>
             {children}
           </AppGlobalFormContext.Provider>
}

export default AppGlobalFormState;