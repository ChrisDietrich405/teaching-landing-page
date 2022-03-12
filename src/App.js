import AboutMe from "./img/about-me.jpg";
import Fabiana from "./img/fabiana.jpeg";
import Fabio from "./img/fabio.jpeg";
import Rodrigo from "./img/rodrigo.png";
import Mirian from "./img/mirian.png";

import Online from "./img/online.png";
import Experience from "./img/experience.png";
import Levels from "./img/levels.png";
import Dollars from "./img/prod-pict-dollar.png";

import "./App.css";

function App() {
  return (
    <div className="main-wrapper">
      <div className="title-container" id="home">
        <div className="name">
          <div className="name-block">
            <h1>
              Chris <br />
              Dietrich
            </h1>
            <h2>Professor de Inglês</h2>
          </div>
        </div>
        <div className="image">
          <img className="about-me-pic" src={AboutMe} />
        </div>
      </div>
      <div className="credentials">
        <div className="credential-box">
          <img src={Online} />
          <p>aulas de inglês online</p>
        </div>
        <div className="credential-box">
          <img src={Experience} />
          <p>+20 anos de experiência</p>
        </div>
        <div className="credential-box">
          <img src={Levels} />
          <p>aulas para todos os niveis</p>
        </div>
      </div>
      <div className="price">
        <img src={Dollars} />
        <div className="price-text">
          <h1>$15/hora</h1>
          <p>Compare meus preços com o Cambly!</p>
        </div>
      </div>

      <hr />
      <p id="benefits">Beneficios</p>

      <div className="credentials" id="credentials benefits-cards">
        <div className="credential-box" id="benefits-box">
          <ul className="benefits-list">
            <li>Política de cancelamento muito relaxada</li>
            <li>
              Concentre-se nas expressões idiomáticas, nos phrasal verbs mais
              atualizadas
            </li>
            <li>
              Concentre-se no sotaque padrão dos Estados Unidos (o inglês mais
              valorizado sotaque)
            </li>
            <li>
              Aulas personalizadas para suas necessidades específicas, por
              exemplo, entrevista preparação, gramática, conversação
            </li>
          </ul>
        </div>
        <div className="credential-box" id="benefits-box">
          <ul className="benefits-list">
            <li>
              Acessibilidade (se você tiver dúvidas fora da aula, mande-me uma
              mensagem a qualquer momento)
            </li>
            <li>
              {" "}
              Ajuda profissional (revisão de portfólio do LinkedIn, entrevista
              preparação, retomar a edição
            </li>
            <li>Preços competitivos Compare meus preços com o Cambly!</li>
            <li>
              Concentre-se em estratégias/práticas eficazes para o aprendizado
              de uma segunda língua
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <section className="testimonials" id="testimonials">
        <p>O que estao dizendo?</p>
        <div className="testimonials-inner">
          <blockquote>
            <img className="testimonial-pic-fab" src={Fabiana} />

            <div className="quote-container">
              <p>
                "Chris é um professor de inglês com algumas camadas de
                psicólogos, eu diria. Ele me ajudou muito a melhorar minha
                conversação, fluência, regras gramaticais, etc, mas
                principalmente minha confiança em falar outro idioma, entendendo
                as questões normais de não ser um falante nativo. Recentemente
                começamos a exercitar as “situações cotidianas” que tenho na
                minha vida profissional (entrevistas, apresentações, conversas,
                etc.), e isso me fez evoluir e ganhar confiança também no âmbito
                profissional! É muito bom ver o quanto somos capazes de aprender
                e evoluir com a ajuda certa!"
              </p>
              <footer>Fabiana Saraiva</footer>
            </div>
          </blockquote>
          <blockquote>
            <img className="testimonial-pic-fab" src={Mirian} />
            <div className="quote-container">
              <p>
                "Christopher e um professor nativo extremamente competente. Ele
                identifica as dificuldades no ingles e faz um trabalho
                personalizado! Super recomendo!"
              </p>
              <footer>Mirian Cardoso</footer>
            </div>
          </blockquote>
        </div>
        <div className="testimonials-inner" id="second-quotes">
          <blockquote>
            <img className="testimonial-pic-fab" src={Rodrigo} />
            <div className="quote-container">
              <p>
                "Meu ingles nunca foi tao bom. Devo muito ao Chris, obrigado."
              </p>
              <footer>Rodrigo Pitorri</footer>
            </div>
          </blockquote>
          <blockquote>
            <img className="testimonial-pic-fab" src={Fabio} />
            <div className="quote-container">
              <p>
                "O Chris é um professor excepcional. Sempre muito paciente e
                atencioso aos meus objetivos de estudo, fazendo correções
                precisas e se empenhando em agregar sua vasta experiência como
                educador com a empatia em entender a deficiência de cada aluno.
                Além disto, estimula muito a confiança em falar em público,
                incentivando o exercício do que é aprendido. Faço aulas com ele
                há mais de 2 anos para me manter atualizado, e recomendo seu
                trabalho de olhos fechados."
              </p>
              <footer>Fabio Novais</footer>
            </div>
          </blockquote>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-bar">Copyright © 2021</div>
      </footer>
    </div>

    // <script src="javascript/index.js"></script>
  );
}

export default App;
