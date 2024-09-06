// src/App.tsx
import React from 'react';
import CyberThreatList from '../compnents/CyberThreatList';
import AddCyberThreat from '../compnents/CyberThreatList'

const App: React.FC = () => {
    return (
        <div>
            {/* <AddCyberThreat /> */}
            <CyberThreatList />
        </div>
    );
};

export default App;
