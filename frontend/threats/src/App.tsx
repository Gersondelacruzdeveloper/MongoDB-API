import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/dashboard'
import RegistrationPage from './pages/RegistrationPage'

function App() {
    return (
        <Router>
            <Routes>
               <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegistrationPage />} />
                {/* Other routes */}
            </Routes>
        </Router>
    );
}

export default App;
