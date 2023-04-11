import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { TextField, Button, Box, Typography } from "@mui/material";

import { login, register } from "../../redux/auth/authOperation";

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
      .max(16, "Max 16 symbols"),
  });

  return (
    <div
      style={{ marginTop: "60px", marginLeft: "32px", marginBottom: "48px" }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
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
          isSubmitting,
        }) => (
          <Form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                              alignItems: "center",
                backgroundColor:"#ffffff",
                // width: "501px",
                // height: "527px",
                padding: "40px",
                border: "1px solid #e0e0e0",
                boxShadow: "0px 4px 15px rgba(2, 23, 42, 0.1)",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h2" sx={{ fontSize: "14px" }}>
                Login to our app using e-mail and password:
              </Typography>
              <TextField
                required
                variant="outlined"
                margin="normal"
                fullWidth
                id="outlined-required"
                label="Email"
                name="email"
                // autoComplete="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                helperText={errors.email && touched.email && errors.email}
                error={Boolean(errors.email && touched.email)}
              />
              <TextField
                required
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                // autoComplete="current-password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                helperText={
                  errors.password && touched.password && errors.password
                }
                error={Boolean(errors.password && touched.password)}
              />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  sx={{ mt: 2, display: "flex", width: "170px" }}
                  onClick={() => dispatch(login(values))}
                >
                  SIGN IN
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  disabled={isSubmitting}
                  sx={{
                    mt: 2,
                    display: "flex",

                    width: "170px",
                    marginLeft: "17px",
                  }}
                  onClick={() => dispatch(register(values))}
                >
                  SIGN UP
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;

// const AuthForm = () => {
//     const dispatch = useDispatch();
//     const validationSchema = Yup.object().shape({
//         email: Yup.string()
//             .required("Fill the field")
//             .email("Please enter your email")
//             .max(50, "Max length 50 symbols"),
//         password: Yup.string()
//             .required("Fill the field")
//             .min(6, "Enter more than 6 symbols")
//             .max(16, "Max 16 symbols")
//     });

//     return (
//         <div>
//             <Formik
//                 initialValues={{ email: "", password: "" }}
//                 validationSchema={validationSchema}

//             >
//                 {({
//                     values,
//                     errors,
//                     touched,
//                     handleChange,
//                     handleBlur,
//                     handleSubmit,
//                     isSubmitting,

//                 }) => (
//                     <div>
//                         <h2>Login to our app using e-mail and password:</h2>
//                         <Form onSubmit={handleSubmit}>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.email}
//                             />
//                             {errors.email && touched.email && errors.email}
//                             <input
//                                 type="password"
//                                 name="password"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.password}
//                             />
//                             {errors.password && touched.password && errors.password}
//                             <div>
//                                 <button
//                                     type="submit"
//                                     value="signin"
//                                     disabled={isSubmitting}
//                                     onClick={() => dispatch(login(values))}
//                                 >
//                                     SIGN IN
//                                 </button>
//                                 <button
//                                     type="submit"
//                                     value="signup"
//                                     onClick={() => dispatch(register(values))}
//                                     disabled={isSubmitting}
//                                 >
//                                     SIGN UP
//                                 </button>
//                             </div>
//                         </Form>
//                     </div>
//                 )}
//             </Formik>
//         </div>
//     )
// }

// export default AuthForm;
