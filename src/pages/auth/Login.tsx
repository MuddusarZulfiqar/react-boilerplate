// src/pages/LoginPage.tsx
import {
  Button,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { LoginFormValues } from "@/types/form";
import { loginSchema } from "@/validations";
import { useAuth } from "@/hooks/useAuth";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import usePageTitle from "@/hooks/usePageTitle";

// Define the shape of form values

const LoginPage: React.FC = () => {
  usePageTitle("Login");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { login } = useAuth();
  const initialValues: LoginFormValues = {
    username: "emilys",
    password: "emilyspass",
  };

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>
  ) => {
    try {
      // Call your API here
      await login(values);
      const redirectTo = searchParams.get("redirectTo") || "/dashboard";
      navigate(redirectTo, { replace: true });
    } catch (error) {
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
      }) => (
        <Form noValidate>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              type="text"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.username && Boolean(errors.username)}
              helperText={touched.username && errors.username}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
              disabled={isSubmitting}
            >
              Login
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;
