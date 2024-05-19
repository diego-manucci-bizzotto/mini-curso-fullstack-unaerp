import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Eventos from "../pages/eventos.jsx";
import Atividades from "../pages/atividades.jsx";
import Participantes from "../pages/participantes.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/eventos",
                element: <Eventos/>
            },
            {
                path: "/eventos/:idEvento/atividades",
                element: <Atividades/>
            },
            {
                path: "/eventos/:idEvento/atividades/:idAtividade/participantes",
                element: <Participantes/>
            }
        ]
    },
]);

export default router;