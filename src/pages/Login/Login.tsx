import {FC} from 'react';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
  } from 'formik';
interface LoginFormValue{
    login: string;
    email: string;
}
export const Login:FC = () => {
    const getDataFromForm = (data:LoginFormValue) => {
        console.log(data)
    }
    return (
        <div>
            <Formik initialValues={{
                login: '',
                email: ''
            }}
            onSubmit={(
                values: LoginFormValue,
                {setSubmitting}: FormikHelpers<LoginFormValue>
            )=>{
                getDataFromForm(values)
            }}
            ><Form>
                <Field name="login"/>
                <Field name="email" type="email"/>
                <button type='submit'>Submit</button>
            </Form>

            </Formik>
        </div>
    );
};
