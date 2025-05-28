import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/LoginPage.tsx
import { Button, Stack, TextField, InputAdornment, IconButton, } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Formik, Form } from "formik";
import { loginSchema } from "@/validations";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, useSearchParams } from "react-router";
import usePageTitle from "@/hooks/usePageTitle";
// Define the shape of form values
const LoginPage = () => {
    usePageTitle("Login");
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();
    const initialValues = {
        username: "",
        password: "",
    };
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            console.log("Submitted values:", values);
            // Call your API here
            await login(values);
            const redirectTo = searchParams.get("redirectTo") || "/dashboard";
            navigate(redirectTo, { replace: true });
        }
        catch (error) {
        }
        finally {
            setSubmitting(false);
        }
    };
    return (_jsx(Formik, { initialValues: initialValues, validationSchema: loginSchema, onSubmit: handleSubmit, children: ({ values, errors, touched, handleChange, handleBlur, isSubmitting, }) => (_jsx(Form, { noValidate: true, children: _jsxs(Stack, { spacing: 3, children: [_jsx(TextField, { fullWidth: true, label: "Username", name: "username", type: "text", value: values.username, onChange: handleChange, onBlur: handleBlur, error: touched.username && Boolean(errors.username), helperText: touched.username && errors.username }), _jsx(TextField, { fullWidth: true, label: "Password", name: "password", type: showPassword ? "text" : "password", value: values.password, onChange: handleChange, onBlur: handleBlur, error: touched.password && Boolean(errors.password), helperText: touched.password && errors.password, InputProps: {
                            endAdornment: (_jsx(InputAdornment, { position: "end", children: _jsx(IconButton, { onClick: () => setShowPassword((prev) => !prev), edge: "end", children: showPassword ? _jsx(VisibilityOff, {}) : _jsx(Visibility, {}) }) })),
                        } }), _jsx(Button, { type: "submit", variant: "contained", color: "secondary", fullWidth: true, size: "large", disabled: isSubmitting, children: "Login" })] }) })) }));
};
export default LoginPage;
