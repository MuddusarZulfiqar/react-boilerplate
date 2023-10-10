const globalValidation = {
  filesFormat: ["image/jpeg", "image/jpg", "image/png"],
  fileSize: 524288,
};
const globalRegex = {
  phoneNumber:
    /^(?:(?:(?:\+|00)\d{1,3})?[-. ]?)?\(?\d{1,4}\)?[-. ]?\d{1,4}[-. ]?\d{1,9}$/,
  password:
    /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  name: /^[a-zA-Z ]{2,30}$/,
};

export { globalValidation, globalRegex };
