import * as Yup from 'yup';

function validate() {
    return Yup.object({
        email: Yup.string()
            .email("Invalid Username")
            .required('This field is required'),
        password: Yup.string()
            .required('This field is required')
    })
}

const initValues = {
    email: "",
    password: ""
}

function Submit(values, { resetForm }) {
    resetForm();
    alert(JSON.stringify(values));
}

function Render(condition) {
    return (element) => condition ? element : null;
}

function paintBorderOk(e, flag) {
    flag && (e.target.style.borderColor = "green");
}

function paintBorderDef(e) {
    e.target.style.borderColor = "rgb(153, 153, 153, 0.28)";
}

const obj = { validate, initValues, Submit, Render, paintBorderOk, paintBorderDef };

export default obj;
