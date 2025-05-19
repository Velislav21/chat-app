import { useState, useEffect } from "react"
import useInputValidation from "./useInputValidation"
import { toast } from "react-hot-toast"

export default function useForm(initialFormState, submitHandler, validationSchema) {
    const [values, setValues] = useState(initialFormState)
    const { validationErrors, validationFn } = useInputValidation(validationSchema);

    useEffect(() => {
        const errorMessages = Object.values(validationErrors).flat();
        errorMessages.forEach(message => toast.error(message))
    }, [validationErrors])

    function handleInputChange(e) {
        const { name, value } = e.target
        setValues(prev => ({ ...prev, [name]: value }))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const valid = await validationFn(values)
        if (valid) {
            submitHandler(values)
        }
    }

    return {
        values,
        handleInputChange,
        handleSubmit,
    }
}
