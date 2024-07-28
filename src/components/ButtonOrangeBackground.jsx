import styles from "./ButtonOrangeBackground.module.css";
import { useNavigate } from "react-router-dom";

const ButtonOrangeBackground = (props) => {

  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate(pagina);
    window.scrollTo(0, 0);
  };

  let pagina = "/";

  if (props.path === "sobre") {
    pagina = "/sobre";
  } else if (props.path === "porquecontratar") {
    pagina = "/porquecontratar";
  } else if (props.path === "contato") {
    pagina = "/contato";
  } else if (props.path === "salestalksmanifesto") {
    pagina = "/salestalksmanifesto";
  }

  return (
    <button className={styles.buttonOrangeBgClass} onClick={handleClickButton}>{props.name}</button>
  );
};

export default ButtonOrangeBackground;
