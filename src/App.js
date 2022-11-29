import { useState } from "react";
import Resenias from "./data/Resenias";


import Header from "./components/Header";
import Resenia from "./components/Resenia";
import ReseniaList from "./components/ReseniaList";

function App() {
    const [listResenias, setListResenias ] = useState(Resenias);

    return (
        <div className="container" >
            <ReseniaList listaResenias={listResenias} />
        </div>
    )
}
export default App;