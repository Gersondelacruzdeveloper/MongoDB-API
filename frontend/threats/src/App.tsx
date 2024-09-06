import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/dashboard'

function App() {
    return (
        <Router>
            <Routes>
               <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                {/* Other routes */}
            </Routes>
        </Router>
    );
}

export default App;
