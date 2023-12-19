import imgCristine from '../../../src/cristine.png';

const AboutComponent = () => {
    return (
        <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div className="cristine-foto">
              <img src={imgCristine} className="imgCristine" alt="Cristine Biazus" />
            </div>
          </div>
          <div class="col-md-6 col-sm-12 about-cristine">

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
    )
}

export default AboutComponent;