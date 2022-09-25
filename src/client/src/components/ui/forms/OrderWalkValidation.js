const validation = (values) => {
    let errors = {};

    if (!values.dogName) {
        errors.dogName = "Select A Dog for a walk";
    }

    if (!values.location) {
        errors.location = "Location is required";
    }

    if (!values.walk_time) {
        errors.walk_time = "Walk Time is required";
    }

    if (!values.date) {
        errors.date = "Date is required"
    } else if (isInThePast(values.date)) {
        errors.date = "Not valid date"
    }

    if (!values.time) {
        errors.time = "Time is required"
    }

    return errors;
}
export default validation;

function isInThePast(date) {
    const today = new Date();
    return Date.parse(date) < Date.parse(today);
}
