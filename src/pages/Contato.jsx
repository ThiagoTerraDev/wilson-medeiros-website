import styles from "./Contato.module.css";

const Home = () => {
  return (
    <div>
      <section className={styles.blueContato}>
        <div className="container1">
          <span>FALE CONOSCO</span>
          <h2>TALK ME</h2>
        </div>
      </section>
      <section className={styles.whiteContato}>
        <div className="container1">
          <h3>&quot;Meta é pra bater&quot;</h3>
          <span>Wilson Medeiros</span>
        </div>
      </section>

      <section className={`${styles.cardContato} container1`}>
        <div className={styles.cardContatoGridWrapper}>
          <div className={styles.cardContatoGrid}>
            <img src="/card-contato-img.png" alt="" />
            <div className={styles.cardContatoGridTextos}>
              <h2>WILSON MEDEIROS</h2>
              <div className={styles.cardContatoGridTextosDiv}>
                <a href="">
                  <p>wmedeiros@wilsonmedeiros.com.br</p>
                </a>
              </div>
              <div className={styles.cardContatoGridTextosDiv}>
                <a href="">
                  <p>+55 11 98439-7810</p>
                </a>
              </div>
              <div className={styles.cardContatoGridTextosDiv}>
                <a href=""> 
                  <p>Perfil no LinkedIn</p>
                </a>
              </div>
              <div className={styles.cardContatoGridTextosDiv}>
                <a href="">
                  <p>Perfil no Instagram</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
