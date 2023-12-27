import imgWhatsapp from "../../assets/whatsapp.png";

const ContactComponent = () => {
    return (
        <div class="container container-contact">
        <div class="container contact">
          <div class="row">
            <div className="col">
              <br />
              <br />
              <h1>VENHA NOS VISITAR</h1>
              <br />
              <p className="container">
                Estamos localizados na rua Rua Independência, 509, sala 501.<br />
                Tapejara/RS - CEP 99950-000. <br /><br />
                <div class="row">
                    <a href="https://wa.me/5554999997978"><img className="whatsappButton" src={imgWhatsapp} /></a>
                </div>
                <br /><br />

                <h2>
                  <a target="_blank" href="https://www.instagram.com/cristinebiazuss/">
                  @cristinebiazuss
                  </a>  
                </h2>
              </p>
              <br />
            </div>
          </div>
          
        </div>
      </div>
    )
}

export default ContactComponent;