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
                Estamos localizados na rua Quintano Vieira, 505, sala 02. <br /><br />
                <div class="row">
                <a href="https://wa.me/5554999771600"><img src={imgWhatsapp} /></a>
                </div>
                <br /><br />

                <h2>@crisbiazus</h2>
              </p>
              <br />
            </div>
          </div>
          
        </div>
      </div>
    )
}

export default ContactComponent;