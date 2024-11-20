import { ErrorMessage, Field, Formik, Form } from "formik"
import css from "./RegistrationForm.module.css"

import { registrationFormSchema } from "../../components/formsSchema"
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values))
    .unwrap()
    .then((result) => {
      toast.success(`User ${result.user.email} has been successfully registered!`); 
    })
    .catch(() => {
      toast.error(`This account already exists!`);
    });
    actions.resetForm();
};

  return (
    <div>
      <Toaster />
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={registrationFormSchema}>
        <Form className={css.form}>

        <label className={css.u}>
            <span className={css.uu}>Name</span>
            <Field
              type="text"
              name="name"
              placeholder="Enter your name"
              className={css.field}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css.error}
            />
          </label>
          
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
            Sign Up
          </button>

        </Form>
      </Formik>
    </div>
  )
}

export default RegistrationForm