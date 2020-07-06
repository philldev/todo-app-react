export const signupField = [
  {
    type: "email",
    label: "Email",
    name: "email",
    validation: {
      required: true
    }
  },
  {
    type: "password",
    label: "Password",
    name: "password",
    validation: {
      required: true,
      minLength: 8
    }
  },
  {
    type: "password",
    label: "Confirm password",
    name: "confirmPassword",
    validation: {
      required: true,
      minLength: 8
    }
  },
  {
    type: "text",
    label: "First Name",
    name: "firstName",
    validation: {
      required: true,
      maxLength: 20
    }
  },
  {
    type: "text",
    label: "Last name",
    name: "lastName",
    validation: {
      required: true,
      maxLength: 20
    }
  },
  {
    type: "text",
    label: "Username",
    name: "username",
    validation: {
      required: true,
      maxLength: 20,
      minLength: 4
    }
  },
];

export const loginField = [
  {
    type: "email",
    label: "Email",
    name: "email",
  },
  {
    type: "password",
    label: "Password",
    name: "password",
  },
];