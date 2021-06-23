import Style from "./style.module.css";
import Error from "./img/error.png";
import Ok from "./img/ok.png";
import Script from "./script";
import AllComponents from "../../allComponents";
function ClearFormBody(props) {
    const { Formik } = props;
    const EmailRenderError = Script.Render(Formik.touched.email && Formik.errors.email);
    const PasswordRenderError = Script.Render(Formik.touched.password && Formik.errors.password);

    const EmailRenderOk = Script.Render(Formik.touched.email && !Formik.errors.email);
    const PasswordRenderOk = Script.Render(Formik.touched.password && !Formik.errors.password);
    return (
        <form className={Style.FormBody} onSubmit={Formik.handleSubmit}>
            <label>
                <input id="email" type={"text"} placeholder={"E-mail"} {...Formik.getFieldProps("email")}
                    style={{ marginBottom: "34px" }} autoComplete={"true"} onFocusCapture={(e) => Script.paintBorderOk(e, PasswordRenderOk(true))}
                    onBlurCapture={(e) => Script.paintBorderDef(e)}>
                </input>
                {EmailRenderError(<AllComponents.RenderResponse Img={Error} Alt={"x"} />)}
                {EmailRenderOk(<AllComponents.RenderResponse Img={Ok} Alt={"J"} />)}
                {EmailRenderError(<span className={Style.Error} >{Formik.errors.email}</span>)}
            </label>
            <label>
                <input id="password" type={"password"} placeholder={"Password"} {...Formik.getFieldProps("password")}
                    style={{ marginBottom: "40px" }} autoComplete={"true"} onFocusCapture={(e) => Script.paintBorderOk(e, PasswordRenderOk(true))}
                    onBlurCapture={(e) => Script.paintBorderDef(e)}>
                </input>
                {PasswordRenderError(<AllComponents.RenderResponse Img={Error} Alt={"x"} />)}
                {PasswordRenderOk(<AllComponents.RenderResponse Img={Ok} Alt={"J"} />)}
                {PasswordRenderError(<span className={Style.Error} >{Formik.errors.password}</span>)}
            </label>
            <button type={"submit"}>Login</button>
            <p>Forgot your password?<span> Reset it here.</span></p>
        </form>
    )
}

export default ClearFormBody;