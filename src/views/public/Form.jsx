import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Button,
  TextField,
  Checkbox,
  FormGroup,
  FormHelperText,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import { FirstFromValidation } from "@/utils";
function FormView() {
  const initialValue = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    sports: [],
    gender: "",
    image: "",
    select: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Container>
      <Formik
        initialValues={initialValue}
        validationSchema={FirstFromValidation}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const { name, gender, select } = props.values;
          return (
            <Form>
              {/* First Way */}
              <TextField
                label="Name"
                name="name"
                fullWidth
                variant="outlined"
                margin="dense"
                value={name}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                helperText={<ErrorMessage name="name" />}
                error={props.errors.name && props.touched.name}
                required
              />
              {/* Second Way */}
              <Field
                as={TextField}
                label="Email"
                type="Email"
                name="email"
                fullWidth
                variant="outlined"
                margin="dense"
                helperText={<ErrorMessage name="email" />}
                error={props.errors.email && props.touched.email}
              />

              <Field
                as={TextField}
                label="Phone Number"
                name="phoneNumber"
                fullWidth
                variant="outlined"
                margin="dense"
                helperText={<ErrorMessage name="phoneNumber" />}
                error={props.errors.phoneNumber && props.touched.phoneNumber}
              />

              <Field
                as={TextField}
                label="Password"
                name="password"
                type="password"
                fullWidth
                variant="outlined"
                margin="dense"
                helperText={<ErrorMessage name="password" />}
                error={props.errors.password && props.touched.password}
              />

              <Field
                as={TextField}
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                fullWidth
                variant="outlined"
                margin="dense"
                helperText={<ErrorMessage name="confirmPassword" />}
                error={
                  props.errors.confirmPassword && props.touched.confirmPassword
                }
              />

              {/* CheckBox */}
              <FormGroup>
                <FormLabel>Sports</FormLabel>
                <Stack direction="row" spacing={2} alignItems={"center"}>
                  <Field
                    as={Checkbox}
                    type="checkbox"
                    name="sports"
                    value="Cricket"
                  />
                  <label>Cricket</label>
                </Stack>
                <Stack direction="row" spacing={2} alignItems={"center"}>
                  <Field
                    as={Checkbox}
                    type="checkbox"
                    name="sports"
                    value="Football"
                  />
                  <label>Football</label>
                </Stack>
                <Stack direction="row" spacing={2} alignItems={"center"}>
                  <Field
                    as={Checkbox}
                    type="checkbox"
                    name="sports"
                    value="Hockey"
                  />
                  <label>Hockey</label>
                </Stack>
                <FormHelperText error>
                  <ErrorMessage name="sports" />
                </FormHelperText>
              </FormGroup>

              {/* Radio Button */}

              <FormLabel>Gender</FormLabel>
              <RadioGroup
                name="gender"
                value={gender}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                row
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
                <FormControlLabel
                  value="disabled"
                  disabled
                  control={<Radio />}
                  label="other"
                />
              </RadioGroup>
              <FormHelperText error component={"div"}>
                <ErrorMessage name="gender" />
              </FormHelperText>

              {/* Select */}
              <FormControl fullWidth margin="dense">
                <FormLabel>Select</FormLabel>
                <Select
                  value={select}
                  name="select"
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.errors.select && props.touched.select}
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="1">One</MenuItem>
                  <MenuItem value="2">Two</MenuItem>
                </Select>
                <FormHelperText error>
                  <ErrorMessage name="select" />
                </FormHelperText>
              </FormControl>
              <TextField
                name="image"
                type="file"
                fullWidth
                variant="outlined"
                margin="dense"
                onChange={(event) =>
                  props.setFieldValue("image", event.target.files[0])
                }
                onBlur={props.handleBlur}
                helperText={<ErrorMessage name="image" />}
                error={props.errors.image && props.touched.image}
                required
              />

              <Button
                variant="contained"
                type="submit"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}

export default FormView;
