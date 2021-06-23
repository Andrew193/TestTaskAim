import Style from "./style.module.css"
import AllComponents from "../../allComponents"
function FormContainer() {
    return (
        <div className={Style.Container}>
            <AllComponents.PageHeader />
            <AllComponents.FormBody />
        </div>
    )
}

export default FormContainer;