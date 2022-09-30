import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Error from './pages/Error'
import Detail from './pages/Detail'
import About from './pages/About'

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route path="/" element={<Gallery />} />
                    <Route path=":id" element={<Detail />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
