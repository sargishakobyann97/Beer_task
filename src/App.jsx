import { useSelector } from "react-redux";
import Loader from "./components/Loader";
import RootRouter from "./router";

function App() {
    const loading = useSelector((state) => state.beers.loading);
    return (
        <div className="App">
            <RootRouter />
            {loading && <Loader />}
        </div>
    );
}

export default App;
