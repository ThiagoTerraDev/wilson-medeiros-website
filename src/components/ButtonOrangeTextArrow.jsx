import styles from "./ButtonOrangeTextArrow.module.css";
import { useNavigate } from "react-router-dom";

const ButtonOrangeTextArrow = (props) => {

  const navigate = useNavigate();

  let pagina = "/";

  if (props.path === "sobre") {
    pagina = "/sobre";
  } else if (props.path === "porquecontratar") {
    pagina = "/porquecontratar";
  } else if (props.path === "contato") {
    pagina = "/contato";
  } else if (props.path === "salestalksoque") {
    pagina = "/salestalksoque";
  } else if (props.path === "salestalksmanifesto") {
    pagina = "/salestalksmanifesto";
  }
  
  return (
    <div className={styles.divButtonOrangeText}>
      <button className={styles.buttonOrangeText} onClick={() => navigate(pagina)}>{props.name}</button>
      <img src="/arrow-component.svg" alt="" />
    </div> 
  );
};

export default ButtonOrangeTextArrow;
