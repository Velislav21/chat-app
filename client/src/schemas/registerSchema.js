import * as yup from 'yup';

const registerSchema = yup.object().shape({
    fullname:
        yup.string()
            .required("Please enter your fullname."),
    username:
        yup.string()
            .required("Please enter your username.")
            .min(5, "The username must be at least 5 characters."),
    password:
        yup.string()
            .required("Please enter your password."),
    confirmPassword:
        yup.string().
            required("Repeat password is required")
            .oneOf([yup.ref("password"), null], "Passwords must match!"),
    gender:
        yup.string()
            .required("Please select your gender.")

})

export default registerSchema;