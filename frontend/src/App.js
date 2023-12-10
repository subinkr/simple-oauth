import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Github from "./components/oauth/Github";
import Google from "./components/oauth/Google";
import Kakao from "./components/oauth/Kakao";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/auth/github/callback" element={<Github />} />
                <Route path="/auth/google/callback" element={<Google />} />
                <Route path="/auth/kakao/callback" element={<Kakao />} />
            </Routes>
        </div>
    );
}

export default App;
