import { useState } from 'react';
import { FormElementEvent, InputEvent } from './react-app-env';

export default function useForm<T>(
  emptyForm: T,
  callback?: (formData: FormData) => void,
): {
  handleChange: (event: InputEvent) => void;
  handleSubmit: (event: FormElementEvent) => void;
  values: T;
} {
  const [values, setValues] = useState<T>(emptyForm);

  return {
    handleChange(event: InputEvent): void {
      event.persist();
      setValues((values: T) => ({
        ...values,
        [event.target.name]: event.target.value,
      }));
    },
    handleSubmit(event: FormElementEvent): void {
      event.preventDefault();
      if (callback) {
        callback(new FormData(event.target));
      }
    },
    values,
  };
}