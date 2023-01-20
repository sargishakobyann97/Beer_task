import { Route, Routes } from "react-router-dom";
import BeerView from "../components/BeerView";
import Home from "../components/Home";

function RootRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<BeerView />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </>
    );
}
export default RootRouter;
