import styles from "./SalesTalksManifesto.module.css";
import ButtonOrangeTextArrow from "../components/ButtonOrangeTextArrow";

const SalesTalksManifesto = () => {


  return (
    <div>
      <section className={styles.introducaoManifesto}>
        <div className={`${styles.introducaoManifestoConteudo} container1`}>
          <div className={styles.introConteudoEscrito}>
            <h1>MANIFESTO DA NOVA ERA DAS VENDAS</h1>
            <p>Nós, vendedores de alta performance e agentes da nova era das vendas, estabelecemos a partir de hoje um novo paradigma na arte de vender. Reconhecemos que as antigas abordagens comerciais caducaram diante das velozes transformações sociais, tecnológicas e econômicas do mundo contemporâneo. É o momento de abraçar uma abordagem mais humana, autêntica e diferenciada para alcançar o sucesso.</p>
          </div>
          <div className={styles.introConteudoImagem}>
            <img src="/manifesto.png" className={styles.imagemIntro} alt="Imagem Manifesto" />
          </div>
        </div>
      </section>

      <section className={styles.itensManifesto}>
        <div className={styles.conteudoColorido}>
          <div className="container1">
            <h2>I. VENDAS NÃO ESPERAM</h2>
            <p>
              O futuro das vendas requer agilidade do começo ao fim, da abordagem inicial à conclusão. Não deixemos para amanhã a venda que podemos fechar hoje.
            </p>
          </div>
        </div>
        <div className={styles.conteudoBranco}>
          <div className="container1">
            <h2>II. HUMANIZAÇÃO E EMPATIA NO TOPO DAS PRIORIDADES</h2>
            <p>
            Comprometemo-nos a enxergar cada cliente como um ser humano único. Não somos apenas vendedores, mas também ouvintes, conselheiros e solucionadores de problemas. Colocamos as emoções dos clientes no centro das negociações, adaptando nossa abordagem para atender às suas expectativas e garantir uma experiência empática. Colocamos o cliente em primeiro lugar, do primeiro contato ao pós-venda, antecipando suas necessidades e superando suas expectativas.
            </p>
          </div>
        </div>
        <div className={styles.conteudoColorido}>
          <div className="container1">
            <h2>III. VENDAS NÃO É SÓ PROCESSO</h2>
            <p>
            Tampouco consiste em acompanhar modismos e métricas. Vendas também exige técnica, e técnica pode ir até mesmo na contramão do processo. Mais do que nos preocupar em aumentar a quantidade de clientes abordados, dedicamos tempo para personalizar a mensagem, oferecendo um diferencial, ajustando o tom, o argumento, de modo que cada cliente se sinta único.
            </p>
          </div>
        </div>
        <div className={styles.conteudoBranco}>
          <div className="container1">
            <h2>IV. SOLUÇÕES MAIS PERSONALIZADAS</h2>
            <p>Os seres humanos não são máquinas, eles escapam aos algoritmos, portanto, não esperamos que eles se encaixem em um padrão. Em vez de adotar uma abordagem &quot;tamanho único&quot;, nos esforçamos para entender os desafios individuais. Para isso, investimos tempo e estudo para conhecer a fundo o mercado de atuação de nossos clientes, e os produtos e serviços que oferecemos.
            </p>
          </div>
        </div>
        <div className={styles.conteudoColorido}>
          <div className="container1">
            <h2>V. EQUIPES MOTIVADAS E ENGAJADAS</h2>
            <p>
            Enquanto líderes, vamos nos comportar como regentes de uma grande orquestra, alavancando todo o potencial que os colaboradores talvez nem saibam possuir. Os maestros ficam em um plano mais baixo, de costas, valorizando a orquestra. As principais organizações de vendas reconhecem que as experiências do cliente estão intrinsecamente ligadas às experiências que proporcionam aos seus vendedores.
            </p>
          </div>
        </div>
        <div className={styles.conteudoBranco}>
          <div className="container1">
            <h2>VI. APRENDIZADO CONSTANTE</h2>
            <p>
            O estudo de técnicas e aprimoramentos de novos conceitos é sem fim. Estamos sempre em busca de aprendizados, para dominar novas tecnologias, compreender e antecipar tendências do mercado. Dedicamos boa parte do dia ao aperfeiçoamento e planejamento. Isso ganha o jogo.
            </p>
          </div>
        </div>
        <div className={styles.conteudoColorido}>
          <div className="container1">
            <h2>VII. &quot;NÃO&quot; SEM REJEIÇÃO</h2>
            <p>
            Somos corajosos e não levamos as objeções dos clientes para o lado pessoal. Investimos no autoconhecimento para lidar com o combate diuturno da rejeição.
            </p>
          </div>
        </div>
        <div className={styles.conteudoBranco}>
          <div className="container1">
            <h2>VIII. &quot;VENDAS É SÓ POESIA E PROBABILIDADE&quot;</h2>
            <p>
            O acelerador de vendas e best-seller Jeb Blount é nosso porta-voz. Por ele, sabemos que muitas vezes, mesmo conduzindo o processo com perfeição, a venda não ocorre, ao passo que, mesmo fazendo tudo ao contrário, ela pode ocorrer. Portanto, acreditamos na beleza da imprevisibilidade e abraçamos a poesia que envolve a arte de vender.
            </p>
          </div>
        </div>
        <div className={`${styles.buttonDiv} container1`}>
          <ButtonOrangeTextArrow name="ENTRE EM CONTATO" path="contato" />
        </div>
      </section>

      
    </div>
  );
};

export default SalesTalksManifesto;
