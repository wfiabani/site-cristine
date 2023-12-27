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
            <br />
            <p>
            <h2>CURRÍCULO</h2>
            Graduação em Farmácia Bioquímica (Universidade de Passo Fundo) <br />
            Pós-graduação em Estética Avançada (FISEPE) <br /><br />
            
            <h2>CURSOS</h2>
            Ambulatório Avançado em Preenchimentos Faciais (Emanuele Vieira Cursos) <br />
            Toxina Botulínica Avançada (Facial Academy) <br />
            Estratégias para o Tratamento do Melasma (Prof. Marcio Guidone) <br />
            Peeling Químicos (Prof. Marcio Guidone) <br />
            Microagulhamento (Prof. Isabella Crema) <br />
            Skinbooster (Prof. Isabella Crema) <br />
            Jato de Plasma (Fabiana Tozo) <br />
            Peeling Evolution 3 (NF Academy -Nadila Ferreira) <br />
            Fenol atenuado (NFace - Daniele Stuart) <br />
            DOMINANDO O ATA ( Prof. Marcio Guidone) <br />
            Esculpindo Lábios (Dra. Luiza Brum) <br />
            Bioestimuladores de Colágeno e Fios de Sustentação (Facial Academy) <br />
            Curso de Prescrição de Nutracêuticos (Prof. Marcio Guidone) <br />
            Eletroterapia (Fabiana Tozo) <br />
            Abordagem no tratamento da Acne (Prof. Marcio Guidone) <br />
            Gestão e Marketing em Estética (Portal Idea) <br />
            Ultraformer (Facial Academy) <br />
            Intercorrências (Facial Academy) <br />
            </p>


          </div>
        </div>
      </div>
    )
}

export default AboutComponent;