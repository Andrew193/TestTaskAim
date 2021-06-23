import Style from "./style.module.css";

function ResponseIcon(props) {
    const { Img, Alt } = props;
    return (<img src={Img} alt={Alt} className={Style.ResponseIcon}></img>)
}

export default ResponseIcon;