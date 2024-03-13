import { ClientProvider } from "./providers/ClientContext";
import { RoutesMain } from "./routes"
import "./styles/index.scss";


function App() {
    return (
        <ClientProvider>
            <RoutesMain />
        </ClientProvider>

    )
}

export default App
