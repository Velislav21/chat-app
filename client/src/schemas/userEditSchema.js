import * as yup from 'yup';

const userEditSchema = yup.object().shape({
    fullname:
        yup.string()
            .required("Please enter your fullname."),
    username:
        yup.string()
            .required("Please enter your username.")
            .min(5, "The username must be at least 5 characters."),
})

export default userEditSchema;