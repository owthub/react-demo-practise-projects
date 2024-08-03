export const LoginControls = [
    {
        controlType: "text",
        name: "email",
        placeholder: "Enter Email",
        id: "email",
        type: "email"
    },
    {
        controlType: "text",
        name: "password",
        placeholder: "Enter Password",
        id: "password",
        type: "password"
    },
    {
        controlType: "select",
        name: "role_type",
        id: "role_type",
        type: "select",
        options:[
            {
                text: "Admin",
                value: "admin"
            },
            {
                text: "Customer",
                value: "customer"
            },
            {
                text: "Seller",
                value: "seller"
            }
        ]
    }
];

export const LoginButton = {
    type: "submit",
    text: "Login"
};

export const RegisterControls = [
    {
        controlType: "text",
        name: "name",
        placeholder: "Enter Full name",
        id: "name",
        type: "text"
    },
    {
        controlType: "text",
        name: "email",
        placeholder: "Enter Email",
        id: "email",
        type: "text"
    },
    {
        controlType: "text",
        name: "password",
        placeholder: "Enter Password",
        id: "password",
        type: "password"
    }
];

export const RegisterButton = {
    type: "submit",
    text: "Register Now"
};