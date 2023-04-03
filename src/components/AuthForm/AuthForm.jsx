import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {login, register} from "../../redux/auth/authOperation"


const AuthForm = () => {
    const dispatch = useDispatch();
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required("Fill the field")
            .email("Please enter your email")
            .max(50, "Max length 50 symbols"),
        password: Yup.string()
            .required("Fill the field")
            .min(6, "Enter more than 6 symbols")
            .max(16, "Max 16 symbols")
    });

    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(login(values));
                    setSubmitting(false);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <div>
                        <h2>Login to our app using e-mail and password:</h2>
                        <Form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                            <div>
                                <button
                                    type="submit"
                                    value="signin"
                                    disabled={isSubmitting}
                                >
                                    SIGN IN
                                </button>
                                <button
                                    type="submit"
                                    value="signup"
                                    onClick={() => dispatch(register(values))}
                                    disabled={isSubmitting}
                                >
                                    SIGN UP
                                </button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default AuthForm;