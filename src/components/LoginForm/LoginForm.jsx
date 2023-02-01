import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label } from './LoginForm.styled';
import Button from '../Button/button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      {' '}
      <Label>
        {' '}
        Email <input type="email" name="email" autoComplete="off" />{' '}
      </Label>{' '}
      <Label>
        {' '}
        Password <input
          type="password"
          name="password"
          autoComplete="off"
        />{' '}
      </Label>{' '}
      <Button type="submit">Log In</Button>{' '}
    </Form>
  );
};
