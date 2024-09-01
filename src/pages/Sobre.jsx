import ButtonOrangeBackground from "../components/ButtonOrangeBackground";
import ButtonOrangeTextArrow from "../components/ButtonOrangeTextArrow";
import styles from "./Sobre.module.css";
import Artigos from "../artigos.json";
import { useState } from "react";

const Sobre = () => {

  const [activePage, setActivePage] = useState(1);
  const articlesPerPage = 3;

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const indexOfLastArticle = activePage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = Artigos.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <div>
      <section className={styles.introducaoSobre}>
        <div className={`${styles.introducaoSobreConteudo} container1`}>
          <div className={styles.introducaoSobreConteudoEscrito}>
            <h1>UM VENDEDOR NATO</h1>
            <p>Desde que comecei a atuar na área de vendas, ainda pequeno, vendendo produtos de porta em porta, eu me dei conta de que sem formação e vivência de campo eu seria apenas mais um simples vendedor.</p>
            <p>Como sempre gostei de aprender, me dediquei integralmente a estudar e entender o jogo das vendas. Como funcionava, como se jogava, quem eram os jogadores, qual tipo de formação, treino e, principalmente, qual era a melhor estratégia para me tornar um craque nesta área.</p>
            <ButtonOrangeTextArrow name="SAIBA MAIS" path="contato" />
          </div>
          <div className={styles.introducaoSobreImagem}>
            <img src="/sales-talks-sobre-intro.png" className={styles.imagemIntro} alt="Imagem Manifesto" />
          </div>
        </div>
      </section>

      <section className={styles.sobreFatosSection}>
        <div className={`${styles.sobreFatosConteudo} container1`}>
          <div className={styles.sobreFatosTextoLogo}>
            <div>
              <span>A EXPERIÊNCIA ME REVELOU</span>
              <h2>ALGUNS FATOS</h2>
            </div>
            <img src="/favicon-wm.svg" alt="Logo WM" />
          </div>
          <div className={styles.sobreFatosDivBlocos}>
            <div>
              <p>1/3 do grupo dos times de alta performance nunca explica a meta. Ele faz.</p>
            </div>
            <div>
              <p>1/3 dos vendedores ainda superam em mais de 100% a meta. Eles são considerados &quot;fora da curva&quot;.</p>
            </div>
            <div>
              <p>1/3 daqueles que compõem o &quot;terceiro grupo&quot; são conhecidos como &quot;especialistas em explicar&quot; porque as metas não foram cumpridas. Para eles, tudo é motivo de desculpa.</p>
            </div>
          </div>
          <ButtonOrangeBackground path="contato" name="OBTER SUCESSO EM VENDAS"/>
        </div>
      </section>

      <section className="container1">
        <div className={styles.sobrePreTrajetoria}>
          <div className={styles.sobrePreTrajetoriaTextos}>
            <p>Ser vendedor é ter o radar ligado para conhecer tempos e movimentos de clientes, potenciais clientes e ex-clientes –esses, aliás, têm muito a ensinar como melhor tratá-los e servi-los, para não perdê-los.</p>
            <p>Formador incansável de equipes, com viés de educador, tenho alguns &quot;mantras&quot; ou lemas que guiam os desafios estabelecidos para a reversão de um resultado negativo rumo ao crescimento.</p>
          </div>
          <h1>PORQUE TUDO É VENDA.</h1>
        </div>
      </section>

      <section className={styles.sobreQuotes}>
        <div className={`${styles.sobreQuotesDiv} container1`}>
          <div className={styles.sobreQuotesTexto}>
            <div>
              <p>Esperar não é uma alternativa.<br></br>Meta é pra bater.<br></br>Venda não espera.<br></br>Venda é processo.<br></br>Venda é atitude.<br></br>Venda é coragem.<br></br>Venda é estudar sem fim.<br></br>Venda é ter capacidade<br></br> de explorar.<br></br>Venda é escuta.<br></br>Venda é conexão.<br></br>Venda é saber fazer perguntas.<br></br>Venda é saber estabelecer<br></br>uma boa conversa.</p>
            </div>
          </div>
          <p className={styles.sobreQuotesAutor}>Wilson Medeiros</p>
          <img src="/shake-hands.png" alt="Apertando mãos." />
        </div>
      </section>

      <section className={`${styles.trajetoriaSection} container1`}>
        <h2>TRAJETÓRIA</h2>
        <p>Executivo com foco em posições comerciais estratégicas, com viés para expansão, IPOs e alianças, Wilson Medeiros é graduado em administração de empresas pela UNIMES de Santos, com MBA em Especialização de Negócios pela FGV-SP.</p>
        <p>Construiu sua carreira no segmento de vendas, trabalhando em bancos como Santander, Pine, Fibra e BMC, como executivo sênior de área comercial.</p>
        <p>Desde 2020, é Growth Officer da BRITech Brasil, liderando o movimento de expansão da empresa no Brasil. Possui a certificação de Líder Coach pelo ICI – Integrated Coaching Institute, e CCU Corporate Coach U International. É Membro do Instituto Brasileiro de Governança Corporativa-IBGC. É articulista de diversas publicações e autor do livro <b><a href="https://www.amazon.com.br/Diferencial-Qual-seu-Wilson-Medeiros-ebook/dp/B07GVQWJYC/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=JA2M0JRW0CTD&dib=eyJ2IjoiMSJ9.Aa227Bng8mCg7KHqxiRRBQ.Go1em2GGnSldvNmERJX-w5iO_FyUZ7KDUWWyk22tuds&dib_tag=se&keywords=diferencial+qual+e+o+seu+wilson+medeiros&qid=1723419424&s=digital-text&sprefix=diferencial+qual+e+o+seu+wilson+medeiros%2Cdigital-text%2C187&sr=1-1" target="blank">“Diferencial – Qual é o seu?” (ed. e-Galáxia).</a></b></p>
        <ButtonOrangeTextArrow name="ENTRE EM CONTATO" path="contato" />
      </section>

      <section className={styles.publicacoesFirst}>
        <div className="container1" style={ { display: "grid" } }>
          <h2>PUBLICAÇÕES</h2>
          <h3>ARTIGOS</h3>
          <div className={styles.publicacoesFirstBlocos}>
            {currentArticles.map((artigo, index) => {
              return <div key={index} className={styles.publicacoesFirstBlocosDivPrincipal}>
                <span>Publicado em: {artigo.dataPostagem}</span>
                <h4>{artigo.titulo}</h4>
                <span className={styles.localPublicado}>{artigo.localPublicado}</span>
                <p>{`"${artigo.resumo}"`}</p>
                <div className={styles.publicacoesFirstBlocosButtonDiv}>
                  <ButtonOrangeTextArrow name="Leia completo aqui" path={artigo.link} />
                </div>
              </div>;
            })}
          </div>
          <ul className={styles.publicacoesFirstPaginasArtigos}>
            {[1, 2, 3, 4, 5, 6, 7].map((pageNumber) => {
              return <li
                key={pageNumber}
                className={activePage === pageNumber ? styles.activePage : ""}
                onClick={() => handlePageClick(pageNumber)}
              >
                {pageNumber}
              </li>;
            })}
          </ul>
        </div>
      </section>

      <section className={`${styles.publicacoesSecond} container1`}>
        <h3>LIVROS</h3>
        <div className={styles.publicacoesSecondDiv}>
          <img src="/livro-diferencial.png" alt="Livro Diferencial2" />
          <div>
            <h4>DIFERENCIAL – QUAL É O SEU? (Ed. e-galáxia)</h4>
            <p>Como acessar o seu diferencial? Aquele talento que os colegas de profissão, amigos e parentes, destacam em sua personalidade, e que permeia suas relações durante toda a vida? Neste livro, Wilson Medeiros aborda os caminhos para cada um encontrar o seu Diferencial nos negócios e na vida. Conecte-se com a sua essência e descubra as respostas para questões que hoje as empresas tanto procuram: Como sair do lugar comum? Como ter coragem quando o medo é latente? O autor vai ajudá-lo a desvendar o passo a passo de como você pode deixar sua marca por onde passar. À venda na Amazon e livrarias digitais.</p>
            <div className={styles.divAntesBotao}>
              <ButtonOrangeTextArrow name="COMPRE AQUI" path="https://www.amazon.com.br/Loja-Kindle-Wilson-Medeiros/s?rh=n%3A5308307011%2Cp_27%3AWilson+Medeiros" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
