// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (initialValue) => {
    //useForm can be used for any form that displays a message on submit.
    const [values, handleChanges] = useFormValues(initialValue)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSuccessMessage(true);
    };

    return [values, showSuccessMessage, handleChanges, handleSubmit]
}

const useFormValues = (initialValue) => {
    //useFormValues could be used on any form
    const [values, setValues] = useState(initialValue);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    return [values, handleChanges]
}
