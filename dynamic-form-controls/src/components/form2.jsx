import FormLayout from "../Form/FormLayout";

function Form2(){
    return (
        <div>
            <h2>Login Form</h2>
            <FormLayout formType={"login"} />

            <h2>Register Form</h2>
            <FormLayout formType={"register"} />
        </div>
    )
}

export default Form2