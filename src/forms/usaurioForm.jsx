import { useState } from 'react';

function useForm(initialValues = {}, validate = () => ({})) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const fieldValue = type === 'checkbox' ? checked : value;

    const newValues = {
      ...values,
      [name]: fieldValue,
    };

    setValues(newValues);
    const validationErrors = validate(newValues);
    setErrors(validationErrors);
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    resetForm,
    setErrors,
  };
}

export default useForm;