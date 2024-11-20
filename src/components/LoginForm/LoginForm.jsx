import { ErrorMessage, Field, Formik, Form } from "formik"
import css from "./LoginForm.module.css"

import { loginFormSchema } from "../../components/formsSchema"
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";



const INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(login(values));
    actions.resetForm();
};

  return (
    <div>


      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={loginFormSchema}>
        <Form className={css.form}>       
            
          <label className={css.u}>
            <span className={css.lu}>Email</span>
            <Field
              type="text"
              name="email"
              placeholder="exemple.email@example.com"
              className={css.field}
            />
            <ErrorMessage
              name="email"
              component="span"
              className={css.error}
            />
          </label>

          <label className={css.u}>
            <span className={css.lu}>Password</span>
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              className={css.field}
            />
            <ErrorMessage
              name="password"
              component="span"
              className={css.error}
            />
          </label>
          
          <button type="submit" className={css.btn}>
            Log In
          </button>

        </Form>
      </Formik>
    </div>
  )
}

export default LoginForm