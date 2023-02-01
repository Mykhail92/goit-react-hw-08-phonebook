import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
// import { FormControl, Input, FormLabel, Button } from '@chakra-ui/react';
import Button from '../Button/button';
import { Form, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <input type="text" name="name" autoComplete="off" />
      </Label>
      <Label>
        Email
        <input type="email" name="email" autoComplete="off" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" autoComplete="off" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
