import logo from './logo.png';
import imgCristine from './cristine.png';

import './App.css';

function App() {
  return (
    <div className="App">



      <header>
        <img src={logo} className="logo" alt="logo" />
      </header>


      {/* begin row 01 */}
      <div class="container">
        <div class="row">
          <div class="col-6">
            <div className="cristine-foto">
              <img src={imgCristine} className="imgCristine" alt="Cristine Biazus" />
            </div>
          </div>
          <div class="col-6 about-cristine">

            <h1>DR. FERNANDO RODRIGUES</h1>
            <h2>Médico Cirurgião Plástico</h2>
            <h3>CRM-MG: 38.261 - RQE: 19.244</h3>
            <br />
            <br />
            <p>
            Fernando Henrique Oliveira Carmo Rodrigues é Cirurgião Plástico em Belo Horizonte. Desde muito jovem teve apreço por artes e pela natureza humana. No início de 1997, aos 17 anos, ingressou na Faculdade de Medicina da Universidade Federal de Minas Gerais (UFMG), localizada em Belo Horizonte – “Beagá”, local de nascimento e na qual se formou como médico, após 6 anos de curso.
            </p>

            <p>
            Logo em seguida, foi aprovado em 1º lugar geral no concurso para Residência Médica em Cirurgia Geral no Hospital Alberto Cavalcanti da Fundação Hospitalar do Estado de Minas Gerais (FHEMIG), tornando-se cirurgião geral registrado pelo Ministério da Educação e Cultura (MEC) e pelo Conselho Federal de Medicina (CFM), após 2 anos de residência.
            </p>


          </div>
        </div>
      </div>
      {/* end row 01 */}



      {/* begin row 02 */}
      <div class="container-fluid solutions">
        <div class="row">
          <div className="col">
            <br />
            <br />
            <br />
            <h1>SOLUÇÕES</h1>
            <br />
            <br />
            <p className="container">
              Cristine Biazus Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. .
            </p>
            <br />
            <br />
          </div>
        </div>
        <div class="row">
          <div className="col-sm-6 col-md-3">
            <div className="solution-item">
              Preenchimento labial
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="solution-item">
              Toxina Botulínica
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="solution-item">
              Protocoll
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="solution-item">
              Bioestimuladores de colágeno
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="solution-item">
              Fios de Sustentação
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="solution-item">
              Lifting sem cortes
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="solution-item">
              Preenchimento Facial
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="solution-item">
              Bichectomia
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="solution-item">
              A lipoaspiração HD ultrassônica da papada
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="solution-item">
              Tratamento anti-idade
            </div>
          </div>
        </div>
      </div>
      {/* end row 02 */}


      {/* begin row 03 */}
      <div class="container-fluid container-room">
        <div class="container room">
          <div class="row">
            <div className="col">
              <br />
              <br />
              <h1>NOSSO ESPAÇO</h1>
              <br />
              <p className="container">
                Dispomos de um espaço amplo e equipado com o que há de mais moderno na área de estética avançada, garantindo aos nossos clientes conforto, segurança e modernidade.
              </p>
              <br />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="imgSpace imgSpace001"></div>
            </div>
            <div class="col">
              <div class="imgSpace imgSpace002"></div>
            </div>
            <div class="col">
              <div class="imgSpace imgSpace003"></div>
            </div>
          </div>
        </div>
      </div>
      {/* end row 03 */}


      {/* begin row 04 */}
      <div class="container container-contact">
        <div class="container contact">
          <div class="row">
            <div className="col">
              <br />
              <br />
              <h1>VENHA NOS VISITAR</h1>
              <br />
              <p className="container">
                Estamos localizados na rua Quintano Vieira, 505, sala 02. <br /><br />

                <h2>@crisbiazus</h2>
              </p>
              <br />
            </div>
          </div>
          <div class="row">
            
          </div>
        </div>
      </div>
      {/* end row 04 */}


      <br />
      <br />

    </div>
  );
}

export default App;
