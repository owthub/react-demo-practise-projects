import LoginFormInputs from "./LoginFormInput"
import RegisterFormInputs from "./RegisterFormInput"

function FormLayout({formType}){

    return <>
        <div>
            {
                formType == "login" ? 
                <LoginFormInputs /> : 
                <RegisterFormInputs />
            }
        </div>
    </>
}

export default FormLayout