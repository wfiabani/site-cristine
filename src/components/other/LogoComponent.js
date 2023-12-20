import logo from '../../logo.png';

import { useContext } from 'react';
import { CounterContext } from '../../context/CounterContext';


const LogoComponent = () => {

    const counter = useContext(CounterContext);

    return (
        <div>
            {/*<h1>{counter.counter}</h1>*/}
            <img src={logo} className="logo" alt="logo" />
        </div>
    )
}

export default LogoComponent;