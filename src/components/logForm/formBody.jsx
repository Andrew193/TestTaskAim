import { useFormik } from "formik";
import AllComponents from "../../allComponents";
import Script from "./script";
function FormBody() {
    const Formik = useFormik({
        initialValues: Script.initValues,
        validationSchema: Script.validate(),
        onSubmit: (values, additionalInfo) => Script.Submit(values, additionalInfo),
    })
    return (<AllComponents.ClearFormBody Formik={Formik} />)
}

export default FormBody;