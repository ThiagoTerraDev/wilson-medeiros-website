import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={`${styles.footerContent} container1`}>
          <div>
            <img src="/logo-tagline-wm.svg" alt="Wilson Medeiros logo" />
          </div>
          <div>
            <h4>WILSON MEDEIROS</h4>
            <p>wmedeiros@wilsonmedeiros.com.br</p>
            <p>+55 11 98439-7810</p>
            <div className={styles.links}>
              <a href="" target="blank">
                <img src="/insta.svg" alt="Instagram" />
              </a>
              <a href="" target="blank">
                <img src="/linkedin.svg" alt="Linkedin" />  
              </a>
              <a href="" target="blank">
                <img src="/whatsapp.svg" alt="Whatsapp" />
              </a>
            </div>
          </div>
        </div>
        <p className={`${styles.lastParagraph} container1`}>Wilson Medeiros © Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Footer;