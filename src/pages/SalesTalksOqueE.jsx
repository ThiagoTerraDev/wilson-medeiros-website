import styles from "./SalesTalksOqueE.module.css";
import ButtonOrangeBackground from "../components/ButtonOrangeBackground";

const SalesTalksOqueE = () => {


  return (
    <div>
      <section className={styles.introSalesOque}>
        <div className={`${styles.introSalesOqueConteudo} container1`}>
          <div className={styles.introSalesOqueConteudoEscrito}>
            <h1>Sales Talks<br></br> A ARTE DA VENDA</h1>
            <p>Sales Talks mostra os caminhos da arte de vender, como uma ponte que nos conecta a venda de forma diferenciada, jogando luz nos desafios, iluminando as perspectivas e ajudando a enxergar com clareza onde está o problema que estancou o fluxo do crescimento.</p>
            <ButtonOrangeBackground path="salestalksmanifesto" name="ACESSE O MANIFESTO"/>
          </div>
        </div>
      </section>

      <section className={styles.introSalesOqueParagrafosSection}>
        <div className={`${styles.introSalesOqueParagrafos} container1`}>
          <p>Assim como um artista, o vendedor é um mestre da criação e da expressão. Ambos compartilham uma paixão inabalável por sua arte e buscam com seu talento transmitir emoções e impactar a vida das pessoas. Ele não apenas oferece um produto ou serviço, mas cria uma experiência que cativa e inspira. Como um pintor, ele tem uma tela em branco diante de si a cada interação com um cliente. Usa sua criatividade para escolher as cores, pincelar os temas da conversa e criar um quadro atraente.</p>
          <p>No momento da venda, podemos observar o artista conectado a todos os detalhes que antecederam aquele encontro. O estudo, a estratégia,
          o repertório. Cada profissional tem seu estilo, seu ritual, sua maneira de selecionar os argumentos antes de colocá-los em palavras.</p>
          <p>Quando comparado a um escritor, o vendedor domina a arte da narrativa, criando histórias para prender a atenção e despertar o imaginário de seu interlocutor. Com palavras bem escolhidas, consegue criar imagens que fazem o cliente sonhar… Como um dançarino, o vendedor possui um ritmo próprio. Ele se move com confiança, adaptando-se aos passos do cliente enquanto lidera na pista de negociação. Um vendedor, afinal, é um artista dos negócios. Combina habilidades técnicas com intuição, criatividade com estratégia. Assim, cria uma experiência memorável que deixa uma marca na vida de seus clientes.</p>
          <p>Ah, o vendedor pode ser similar a tantos artistas! Como um escultor, ele esculpe soluções personalizadas e vai refinando os detalhes até alcançar a perfeição. Cada venda é uma obra de arte única e valiosa.</p>
        </div>
      </section>

      <section className={styles.diferenciaisSection}>
        <p>O mundo digital trouxe inúmeros benefícios, entre eles a escalabilidade da venda, sem fronteiras e limitação geográfica, a agilidade de comunicação, entre outros. Mesmo diante das transformações positivas,
        sempre faço questão de frisar o que não mudou e segue valendo por tempo indeterminado:</p>
        <div className={`${styles.diferenciaisDiv} container1`}>
          <img src="/sales-talks-logo-box.svg" alt="Logotipo Sales Talks" />
          <ul className={styles.diferenciaisLista}>
            <li className={styles.gridColuna}>
              <h4>SATISFAÇÃO</h4>
              <p>Acima de tudo, o cliente precisa estar satisfeito com a sua prestação de serviços e com a identidade da sua marca, que deve seguir a cartilha ESG.</p>
            </li>
            <li className={styles.gridColuna}>
              <h4>CONEXÃO</h4>
              <p>Tudo o que importa é a presença, a conexão que vai fazer com que a venda aconteça, pelos mais diversos canais. É por meio dessa arte que o vendedor constrói relacionamentos, deixa sua marca e imprime seu diferencial.</p>
            </li>
            <li className={styles.gridColuna}>
              <h4>COMPREENSÃO</h4>
              <p>Mais escuta do que fala. Aqui mora o diferencial dos vendedores preparados de alta performance: a arte em fazer perguntas e explorar o interlocutor para obter a melhor compreensão possível do contexto do cliente.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.salesTalksOqueComplemento}>
        <div className="container1">
          <div className={styles.salesTalksOqueComplementoDivGrid}>
            <div>
              <p className={styles.normalParagraph}>Se quero crescer, reter ou reverter uma situação, quanto do meu tempo de executivo tenho dedicado para tal? E a sua equipe, o quanto está motivada e envolvida no processo de crescimento?</p>
              <p className={styles.normalParagraph}>Por mais óbvio que possa parecer, muitas empresas e gestores ainda deslizam nesse quesito: medir o grau de satisfação e pertencimento de seu time.</p>
            </div>
            <div>
              <h1>NÃO É O QUE VOCÊ VENDE</h1>
            </div>
          </div>
          <div className={styles.salesTalksOqueComplementoDivGrid}>
            <div>
              <p className={styles.quoteParagraph}>&quot;Os consumidores estão cada vez mais exigentes e seletivos. Não basta oferecer produtos e serviços de qualidade. É cada vez mais necessário que as empresas sejam transparentes sobre seus valores e a forma como se relacionam com os clientes e com o planeta.&quot;</p>
              <p className={styles.quoteParagraph}>Wilson Medeiros</p>
            </div>
            <div>
              <h1>E SIM COMO VOCÊ VENDE</h1>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.diferenciaisVisaoEstrategicaSection}>
        <div className={`${styles.diferenciaisVisaoEstrategicaDiv} container1`}>
          <span>DIFERENCIAIS</span>
          <h2>VIVÊNCIA E VISÃO ESTRATÉGICA</h2>
          <p>O aprendizado na arena competitiva do mercado fez com que Wilson Medeiros assumisse desde cedo a cadeira de diretoria de bancos, em que precisava entender o negócio, a atividade, a cabeça do dono e seu nível de Governança, para assim buscar a aprovação de crédito para suportar novos investimentos ou apoio financeiro para a sobrevivência da empresa.</p>
          <p>Em sua trajetória, ele teve a oportunidade de conhecer cada canto do país. Estamos falando de visita presencial em estados diferentes, conversando com cada proprietário, cada empresário, nos mais diversos segmentos.</p>
          <p>São histórias e negócios fascinantes que desbancam muitas teses de <i>business plan</i> elogiadas no mundo acadêmico, nas cadeiras executivas e nas discussões com as grandes consultorias mundiais. Experiência e muita quilometragem, portanto, são diferenciais da Sales Talks.</p>
          <ButtonOrangeBackground path="contato" name="ENTRE EM CONTATO"/>
        </div>
      </section>

      <section>
        <div className={`${styles.depoimentoSalesTalks} container1`}>
          <img src="/estrelas.svg" alt="" />
          <p>&quot;Wilson é um grande potencializador de negócios. Um profissional com visão apurada, com grande capacidade de liderar grupos e equipes para o sucesso da empresa. Trabalhar com ele é uma oportunidade única de aprendizado contínuo,
          de troca e respeito ao outro&quot;</p>
          <span>Drika Saad, Consultora de Serviços de Spa e Wellness em empresas</span>
        </div>
      </section>
    </div>
  );
};

export default SalesTalksOqueE;
