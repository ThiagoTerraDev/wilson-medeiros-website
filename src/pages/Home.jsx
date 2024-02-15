import ButtonOrangeBackground from "../components/ButtonOrangeBackground";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div>
            <section className={styles.introducaoHome}>
                <div className={`${styles.introducaoConteudo} container1`}>
                    <div className={styles.introConteudoEscrito}>
                        <h1>VENDER É SABER CRIAR CONEXÃO</h1>
                        <p>Ouvir mais do que falar. Esse é o lema de Wilson Medeiros e da Sales Talks. Uma boa conversa, 
                            com a escuta atenta, focada na análise do seu negócio, é a dinâmica para o diagnóstico e o 
                            alinhamento necessário para obter melhores resultados nas vendas.</p>
                        <ButtonOrangeBackground path="contato" name="ENTRE EM CONTATO"/>
                    </div>
                    <div className={styles.introConteudoImagem}>
                        <img src="/imagem-home-intro.png" className={styles.imagemIntro} alt="Imagem Wilson Medeiros" />
                    </div>
                </div>
            </section>

            <section className={`${styles.salesTalksHome} container1`}>
                <div className={styles.salesTalksText}>
                    <div>
                        <h2>VENDAS NÃO ESPERAM</h2>
                        <p>Sales Talks é uma conversa sobre arte – a arte de vender. Wilson Medeiros mostra os caminhos dessa arte, como uma ponte que nos conecta a venda de forma diferenciada, jogando luz nos desafios, iluminando as perspectivas e ajudando a enxergar com clareza onde está o problema que estancou o fluxo do crescimento.</p>
                        <p>Seja para o vendedor ou para o cliente, tudo o que importa é a presença, a troca que vai fazer com que a venda aconteça. É por meio dessa arte que o vendedor constrói relacionamentos, deixa sua marca e imprime seu diferencial.</p>
                    </div>
                    <img src="/favicon-wm.svg" alt="Logo WM" />
                </div>
                <div className={styles.salesTalksBlocks}>
                    <img src="/sales-block-1.png" alt="Men in meeting" />
                    <img src="sales-block-2.png" alt="Men using cell phones" />
                    <img src="sales-block-3.png" alt="Corporate buildings" />
                    <div className={styles.blockOneText}>
                        <h3>Praticar e provocar o exercício da troca</h3>
                        <p>Este é o chassi da Sales Talks. A principal premissa das relações, especialmente as comerciais, é trocar ideias com todos os tipos de pessoas, das mais simples às acadêmicas.</p>
                    </div>
                    <div className={styles.blockTwoText}>
                        <h3>Nova era de vendas</h3>
                        <p>Novas competências digitais, novas perspectivas de vendas e relacionamento com clientes. É o momento de abraçar uma abordagem mais humana, autêntica e diferenciada para alcançar o sucesso.</p>
                    </div>
                    <div className={styles.blockThreeText}>
                        <h3>Middle Market</h3>
                        <p>Inspirar e contribuir com fundadores, empresários e gestores de empresas médias que precisam superar obstáculos relacionados ao crescimento e/ou reverter resultados adversos.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
