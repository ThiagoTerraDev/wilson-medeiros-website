import styles from "./PorqueContratar.module.css";
import ButtonOrangeBackground from "../components/ButtonOrangeBackground";

const PorqueContratar = () => {
  return (
    <div>
      <section className={styles.introContratar}>
        <div className={`${styles.introContratarConteudo} container1`}>
          <div className={styles.introContratarConteudoEscrito}>
            <h1>POR MELHORES RESULTADOS</h1>
            <p>A cadeira e o poder podem gerar solidão empresarial. Conversar é preciso.
            Para isso, existe o Sales Talks. A escuta atenta e uma boa análise, seguida de um diagnóstico preciso, são as matérias-primas para o alinhamento necessário e o direcionamento do seu negócio, visando melhores resultados futuros.</p>
            <ButtonOrangeBackground path="contato" name="ENTRE EM CONTATO"/>
          </div>
          <div className={styles.introConteudoImagem}>
            <img src="/porque-contratar-intro.png" className={styles.imagemIntro} alt="Imagem Wilson Medeiros" />
          </div>
        </div>
        <div className={`${styles.introContratarItens} container1`}>
          <div>
            <h5>Profissional conectado
            e atualizado</h5>
            <p>Colunista, articulista, escritor, palestrante e conselheiro. Especializado em vendas, liderança, gestão de times de alta performance e inteligência estratégica.</p>
          </div>
          <div>
            <h5>Resultados comprovados</h5>
            <p>Exemplos de cases similares já vivenciados. Competitividade comercial alinhada ao segmento de Empresas Médias (Middle Market).</p>
          </div>
          <div>
            <h5>Flexibilidade e melhor custo-benefício</h5>
            <p>Em geral, uma grande consultoria leva muito tempo de análise e o custo é alto demais. Na Sales Talks, é tudo no seu tempo, no local de sua preferência, com agilidade.</p>
          </div>
        </div>
      </section>

      <section className="container1">
        <div className={styles.maioresDesafiosFirst}>
          <div>
            <span>DESENVOLVIMENTO DO NEGÓCIO</span>
            <h2>MAIORES DESAFIOS</h2>
          </div>
          <img src="/favicon-wm.svg" alt="Logo WM" />
        </div>
      </section>
      
      <section className={styles.maioresDesafiosSecond}>
        <div className={`${styles.maioresDesafiosSecondDivs} container1`}>
          <div>
            <p><b>O desafio de crescer</b> - Junto ao crescimento orgânico, aparecem questões de movimentos de IPO, aquisições de empresas, parcerias e alianças.</p>
            <p>Como explorar novos segmentos ou nichos de atuação. Como vender em outras regiões, cidades etc.</p>
            <p>Como explorar a sinergia com fornecedores ou concorrentes.</p>
            <p>Como vender através de outras plataformas e canais.</p>
            <p>Desenvolver a produtividade sustentável.</p>
            <p>Mais do que crescer, reter.</p>
          </div>
          <div>
            <p>Reverter resultado negativo em determinada unidade de negócio.</p>
            <p>Reduzir a retenção de clientes (churn).</p>
            <p>Ajustar o perfil do time, a partir de análises e conversas, para ouvi-los e motivá-los.</p>
            <p>Aconselhamento em tomadas de decisões complexas.</p>
            <p>Combater a solidão empresarial em conversas pontuais.</p>
            <p>Menos reunião, mais ação.</p>
          </div>
        </div>
      </section>

      <section className="container1">
        <div className={styles.parteDepoimentos}>
          <div>
            <p>&quot;Wilson é aquela pessoa magnética e envolvida, possui as competências essenciais de um líder nato. É firme em suas convicções e está sempre com aquela inquietação inspiradora. Com paixão pelo que faz, está preparado para guiar pessoas e empresas a novos patamares&quot;</p>
            <span>Mario Luis Buonfiglio, Diretor da Videolink Filmes</span>
          </div>
          <div>
            <p>&quot;Raras vezes encontrei um profissional que demonstre tanta garra e determinação para alcançar resultados. Wilson exige tanto de si mesmo como de suas equipes, sabendo que todos podem ser e dar sempre um pouco mais quando orientados e liderados com respeito
            e competência&quot;</p>
            <span>José Cascão, Publicitário, Diretor de Criação</span>
          </div>
        </div>
      </section>

      <section className={styles.ganhosContratacao}>
        <div className={`${styles.ganhosContratacaoConteudo} container1`}>
          <span>GANHOS DA CONTRATAÇÃO</span>
          <h2>O QUE OFERECEMOS</h2>
          <div className={styles.ganhosContratacaoItens}> 
            <div className={styles.ganhosContratacaoItem1}>
              <h3>PARCERIA</h3>
              <div>
                <p>O profissional Sales Talks não competirá com o time interno.</p>
              </div>
            </div>
            <div className={styles.ganhosContratacaoItem2}>
              <h3>IMPARCIALIDADE</h3>
              <div>
                <p>Visão externa, sem o vício interno, compreendendo questões emocionais.</p>
              </div>
            </div>
            <div className={styles.ganhosContratacaoItem3}>
              <h3>CONFIDENCIALIDADE</h3>
              <div>
                <p>A Sales Talks assume compromisso contratual de não trabalhar para outra empresa do mesmo segmento. Condição comercial prevista em contrato.</p>
              </div>
            </div>
            <div className={styles.ganhosContratacaoItem4}>
              <h3>PERSONALIZAÇÃO</h3>
              <div>
                <p>Encontros presenciais ou virtuais no local, plataforma e data/hora de sua preferência. Disponibilidade para viagens nacionais e internacionais.</p>
              </div>
            </div>
            <div className={styles.ganhosContratacaoItem5}>
              <h3>CONEXÃO PLENA</h3>
              <div>
                <p>Profissional com experiência e longo investimento em autoconhecimento, preparado para ouvir ativamente, sem prejulgar, com viés de acolhimento.</p>
              </div>
            </div>
            <div className={styles.ganhosContratacaoItem6}>
              <h3>CONTEÚDO</h3>
              <div>
                <p>Acesso a publicações, livros e artigos e ao ecossistema da Sales Talks.</p>
              </div>
            </div>
          </div>
          <ButtonOrangeBackground path="contato" name="CONTRATE AQUI"/>
        </div>
      </section>

      <section>
        <div className={`${styles.depoimentoHome} container1`}>
          <img src="/estrelas.svg" alt="" />
          <p>&quot;Um dos poucos profissionais que conheço, em vendas, que efetivamente consegue inspirar, motivar seu time, com liderança, inteligência e foco. Valoriza a competição, atuando segundo os princípios da sustentabilidade e da ética, gerando resultados consistentes para os acionistas e todas as partes interessadas. A alta energia motivacional, em aderência ao ritmo do varejo, combinadas a diversidade da bagagem profissional, são atributos que o diferenciam no mercado&quot;</p>
          <span>Luiz Marcelo da Cruz, executivo da área comercial</span>
        </div>
      </section>
    </div>
  );
};

export default PorqueContratar;
