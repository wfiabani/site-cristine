import imgCristine from '../../../src/cristine.png';
import { useState } from 'react';

const ServicesComponent = () => {

    const [currentTitle, setCurrentTitle] = useState("");
    const [currentDesc, setCurrentDesc] = useState("");

    const [service01Title, setService01Title] = useState("Toxina Botulínica")
    const [service02Title, setService02Title] = useState("Preenchimento Labial")
    const [service03Title, setService03Title] = useState("Bioestimuladores de Colágeno")
    const [service04Title, setService04Title] = useState("Fios de Sustentação")
    const [service05Title, setService05Title] = useState("Preenchimentos Full Face")
    const [service06Title, setService06Title] = useState("Gerenciamento do Envelhecimento")
    const [service07Title, setService07Title] = useState("Prescrição de Fórmulas")
    const [service08Title, setService08Title] = useState("PEIM (Procedimento Estético Injetável para Microvazos)")
    const [service09Title, setService09Title] = useState("Tratamentos Corporais")
    const [service10Title, setService10Title] = useState("Tratamento de Acne")

    const [service01Desc, setService01Desc] = useState("A aplicação da toxina é conhecida por amenizar os sinais de envelhecimento da pele, garantindo um resultado rápido e eficiente. Podendo ser aplicada em toda face (full face) e pescoço. ")
    const [service02Desc, setService02Desc] = useState("Procedimento estético que pode ser realizado para aumentar o volume do lábio, hidratar, dar contorno e corrigir assimetrias. É um procedimento personalizado e alinhado às expectativas do cliente.")
    const [service03Desc, setService03Desc] = useState("Indicado para prevenir, restaurar a estrutura da pele e renovar sua firmeza natural. À medida que envelhecemos, a produção de colágeno diminui, fazendo com que a pele fique flácida. Os bioestimuladores devolvem a firmeza natural de maneira gradual e duradoura. ")
    const [service04Desc, setService04Desc] = useState("Tem como objetivo estímulo de colágeno e melhora do contorno facial.")
    const [service05Desc, setService05Desc] = useState("Feitos com ácido hialorônico, ajuda a amenizar rugas, marcas de expressão, melhoram a estrutura e contorno da face e devolve o volume perdido com o passar dos anos.")
    const [service06Desc, setService06Desc] = useState("Esse tratamento tem ganhado cada vez mais força no tratamento dos efeitos do tempo sobre a pele. Procedimentos personalizados que auxiliam você a retardar os sinais de envelhecimento como rugas, flacidez, manchas. Atuando de diferentes maneiras na prevenção, amenização e manutenção da beleza da paciente de forma natural. ")
    const [service07Desc, setService07Desc] = useState("Esse serviço oferece como vantagem a prescrição de fórmulas com ativos personalizados para as necessidades da sua pele. Também, é realizada a prescrição de nutracêuticos orais (vitaminas, suplementos), que tratam a pele de dentro para fora, complementando os tratamentos tópicos.")
    const [service08Desc, setService08Desc] = useState("É um tratamento realizado com o objetivo de eliminar os vasinhos que aparecem nas pernas e se tornam um incômodo estético para muitas mulheres. ")
    const [service09Desc, setService09Desc] = useState("Procedimentos para tratar gordura localizada, flacidez e estrias.  ")
    const [service10Desc, setService10Desc] = useState("Através de procedimentos feitos em consultório associados à prescrição de produtos home care. ")

    return (
        <div class="container-fluid solutions">
        <div class="row">
          <div className="col">
            <br />
            <br />
            <br />
            <h1>SERVIÇOS</h1>
            <br />
            <br />
            <p className="container">
              Conheça as soluções que temos a lhe oferecer.
            </p>
            <br />
            <br />
          </div>
        </div>
        <div class="row">
          <div className="col-sm-6 col-md-3">
            <div onClick={() => { setCurrentTitle(service01Title); setCurrentDesc(service01Desc);}} data-bs-toggle="modal" data-bs-target="#exampleModal" className="solution-item">
              {service01Title}
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div onClick={() => { setCurrentTitle(service02Title); setCurrentDesc(service02Desc);}} data-bs-toggle="modal" data-bs-target="#exampleModal" className="solution-item">
              {service02Title}
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div onClick={() => { setCurrentTitle(service03Title); setCurrentDesc(service03Desc);}} data-bs-toggle="modal" data-bs-target="#exampleModal" className="solution-item">
              {service03Title}
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div onClick={() => { setCurrentTitle(service04Title); setCurrentDesc(service04Desc);}} data-bs-toggle="modal" data-bs-target="#exampleModal" className="solution-item">
              {service04Title}
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div onClick={() => { setCurrentTitle(service05Title); setCurrentDesc(service05Desc);}} data-bs-toggle="modal" data-bs-target="#exampleModal" className="solution-item">
              {service05Title}
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div onClick={() => { setCurrentTitle(service06Title); setCurrentDesc(service06Desc);}} data-bs-toggle="modal" data-bs-target="#exampleModal" className="solution-item">
              {service06Title}
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div onClick={() => { setCurrentTitle(service07Title); setCurrentDesc(service07Desc);}} data-bs-toggle="modal" data-bs-target="#exampleModal" className="solution-item">
              {service07Title}
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div onClick={() => { setCurrentTitle(service08Title); setCurrentDesc(service08Desc);}} data-bs-toggle="modal" data-bs-target="#exampleModal" className="solution-item">
              {service08Title}
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div onClick={() => { setCurrentTitle(service09Title); setCurrentDesc(service09Desc);}} data-bs-toggle="modal" data-bs-target="#exampleModal" className="solution-item">
              {service09Title}
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div onClick={() => { setCurrentTitle(service10Title); setCurrentDesc(service10Desc);}} data-bs-toggle="modal" data-bs-target="#exampleModal" className="solution-item">
              {service10Title}
            </div>
          </div>
        </div>

        {/* teste modal */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">{currentTitle}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {currentDesc}
              </div>
            </div>
          </div>
        </div>
        {/* teste modal */}

      </div>
    )
}

export default ServicesComponent;