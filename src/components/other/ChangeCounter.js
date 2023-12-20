import { useContext } from "react";

import { CounterContextProvider } from "./CounterContextProvider";

const ChangeCounter = () => {

    const {counter, setCounter} = useContext(CounterContext);

    return (
        <div onClick={() => setCounter(counter+1)}>Clique to add</div>
    );
}

export default ChangeCounter;