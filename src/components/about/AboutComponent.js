import imgCristine from '../../cristine.png';

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

            <h1>CRISTINE BIAZUS VALENTINI </h1>
            <h2>Farmacêutica Esteta </h2>
            <h3>CRF-RS: 1-8295</h3>

            <br />
            <br />

            <p>
            Cristine Biazus Valentini é farmacêutica Esteta em Tapejara, RS. Desde muito jovem teve apreço pela área da saúde. No início de 1998, aos 18 anos, ingressou na Faculdade de Farmácia da Universidade de Passo Fundo (UPF), na qual se formou farmacêutica após 5 anos de curso, e já iniciou sua carreira trabalhando em uma farmácia e no Hospital de sua cidade. 
Cristine sempre gostou muito da área do embelezamento, então, ingressou em uma Pós-graduação na área da Estética Avançada, na FISEPE em Passo Fundo. Um ano e meio após, obteve o título de Farmacêutica Esteta. 
Há alguns anos, Cristine atua nesta área proporcionando beleza natural e autoestima, através de procedimentos minimamente invasivos de Harmonização Facial e Corporal. A área que mais gosta de trabalhar é o Gerenciamento do Envelhecimento.
            </p>


          </div>
        </div>
      </div>
    )
}

export default AboutComponent;