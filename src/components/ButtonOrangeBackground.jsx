import styles from "./ButtonOrangeBackground.module.css";
import { useNavigate } from "react-router-dom";

const ButtonOrangeBackground = (props) => {

  const navigate = useNavigate();

  let pagina = "/";

  if (props.path === "sobre") {
    pagina = "/sobre";
  } else if (props.path === "porquecontratar") {
    pagina = "/porquecontratar";
  } else if (props.path === "contato") {
    pagina = "/contato";
  }

  return (
    <button className={styles.buttonOrangeBgClass} onClick={() => navigate(pagina)}>{props.name}</button>
  );
};

export default ButtonOrangeBackground;
