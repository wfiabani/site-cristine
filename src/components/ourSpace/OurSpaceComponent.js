import imgCristine from '../../../src/cristine.png';

const OurSpaceComponent = () => {
    return (
        <div class="container-fluid container-room">
        <div class="container room">
          <div class="row">
            <div className="col">
              <br />
              <br />
              <h1>NOSSO ESPAÇO</h1>
              <br />
              <p className="container">
                Dispomos de um espaço amplo e equipado com o que há de mais moderno na área de estética avançada, garantindo aos nossos clientes, proporcionando segurança e modernidade.
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
    )
}

export default OurSpaceComponent;