
const validation = (values) => {
    let errors = {};

    if (!values.full_name) {
        errors.full_name = "Name is required";
    }

    if (!values.password) {
        errors.password = "password is required"
    } else if (values.password.length < 6) {
        errors.password = "password must be longer then 5 characters"
    }

    if (!values.email) {
        errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
    }

    return errors;
}

export default validation;