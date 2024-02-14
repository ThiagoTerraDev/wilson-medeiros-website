import styles from "./Home.module.css";

const Home = () => {
    return (
        <div>
            <section className={styles.introducaoHome}>
                <div className={styles.introducaoConteudo}>
                    <div className={styles.introConteudoEscrito}>
                        <h1>VENDER É SABER CRIAR CONEXÃO</h1>
                        <p>Ouvir mais do que falar. Esse é o lema de Wilson Medeiros e da Sales Talks. Uma boa conversa, 
                            com a escuta atenta, focada na análise do seu negócio, é a dinâmica para o diagnóstico e o 
                            alinhamento necessário para obter melhores resultados nas vendas.</p>
                        <button></button>
                    </div>
                    <div className={styles.introConteudoImagem}>
                        <img src="/imagem-home-intro.png" className={styles.imagemIntro} alt="Imagem Wilson Medeiros" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
