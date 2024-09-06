// src/App.tsx
import React from 'react';
import CyberThreatList from '../compnents/CyberThreatList';
import AddCyberThreat from '../compnents/CyberThreatList'

const App: React.FC = () => {
    return (
        <div>
            <h1>Cyber Threat Management System</h1>
            <AddCyberThreat />
            <CyberThreatList />
        </div>
    );
};

export default App;
