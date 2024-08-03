import { useState } from "react";

const initialState = {
    name: "",
    email: "",
    phone: ""
};

function Form1(){

    const [nameValue, setNameValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [phoneValue, setPhoneValue] = useState("")
    const [formData, setFormData] = useState(initialState)

    function handleInputChange(event){
      //console.log(event.target.name, event.target.value);
      setNameValue(event.target.value);
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
      console.log(formData);
    }

    function handleEmailChange(event){
        //console.log(event.target.name, event.target.value);
        setEmailValue(event.target.value);
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
        console.log(formData);
    }

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(formData, "-----");
        setFormData(initialState);
    }

    function handlePhoneChange(event){
        setPhoneValue(event.target.value)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div>
            <h1>Hello Form</h1>
            <form onSubmit={handleFormSubmit}>
                <p>
                    <label htmlFor="name">Name</label>
                    <input type="text" value={nameValue} name="name" id="name" className="name" placeholder="Enter name" onChange={handleInputChange}/>
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={emailValue} name="email" id="email" className="email" placeholder="Enter email" onChange={handleEmailChange}
                    />
                </p>
                <p>
                    <label htmlFor="">Phone Number</label>
                    <input
                        type="text"
                        defaultChecked={phoneValue}
                        name="phone"
                        id="phone"
                        className="phone"
                        placeholder="Enter phone number"
                        onKeyUp={handlePhoneChange} // Attach the onKeyUp event handler
                    />
                </p>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form1;