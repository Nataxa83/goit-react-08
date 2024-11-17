import { ErrorMessage, Field, Formik } from "formik"
import { Form } from "react-router-dom"
import css from "./RegistrationForm.module.css"

const RegistrationForm = () => {
  return (
    <div>
      <Formik>
        <Form>

        <label className={css.label}>
            <span className={css.labelText}>Name</span>
            <Field
              type="text"
              name="username"
              placeholder="Enter your name"
              className={css.field}
            />
            <ErrorMessage
              name="username"
              component="span"
              className={css.error}
            />
          </label>
          <label className={css.label}>
            <span className={css.labelText}>Email</span>
            <Field
              type="text"
              name="useremail"
              placeholder="Enter your email"
              className={css.field}
            />
            <ErrorMessage
              name="useremail"
              component="span"
              className={css.error}
            />
          </label>
          <label className={css.label}>
            <span className={css.labelText}>Password</span>
            <Field
              type="password"
              name="userpassword"
              placeholder="Enter your password"
              className={css.field}
            />
            <ErrorMessage
              name="userpassword"
              component="span"
              className={css.error}
            />
          </label>
          <button type="submit" className={css.button}>
            Registration
          </button>

        </Form>
      </Formik>
    </div>
  )
}

export default RegistrationForm