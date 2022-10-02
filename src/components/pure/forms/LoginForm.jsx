import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../../../styles/login-form.scss';

const LoginForm = () => {
    return (
        <div>
            <Formik>

                <Form className='login-form'>

                    <h1>Login</h1>
                    <h2>and start putting your stuff in order!</h2>
                    <p>Please, enter you email and password to do login</p>

                    <Field type="email" name="email" id="email" placeholder="example@mail.com" />

                    <Field  type="password" name="password" id="password" placeholder="password"/>

                    <button type='submit' className='contained-button'>Log in</button>

                </Form>
            </Formik>
        </div>
    );
}

export default LoginForm;
