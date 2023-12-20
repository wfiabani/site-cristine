import './App.css';

// logo
import LogoComponent from './components/other/LogoComponent';
import AboutComponent from './components/about/AboutComponent';
import ContactComponent from './components/contact/ContactComponent';
import ServicesComponent from './components/services/ServicesComponent';
import OurSpaceComponent from './components/ourSpace/OurSpaceComponent';
//import ChangeCounter from './components/other/ChangeCounter';


function App() {
  return (
    <div className="App">


      <header>
        <LogoComponent />
      </header>


      {/* begin row 01 */}
        <AboutComponent />
      {/* end row 01 */}



      {/* begin row 02 */}
      <ServicesComponent />
      {/* end row 02 */}


      {/* begin row 03 */}
      <OurSpaceComponent />
      {/* end row 03 */}


      {/* begin row 04 */}
      <ContactComponent />
      {/* end row 04 */}


      <br />
      <br />

    </div>
  );
}

export default App;
