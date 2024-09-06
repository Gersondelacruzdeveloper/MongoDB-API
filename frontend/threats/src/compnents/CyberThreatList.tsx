// src/components/CyberThreatList.tsx
import React, { useEffect, useState } from 'react';
import { CyberThreat } from '../types';
import { getCyberThreats } from '../api';
import '../assets/scss/CyberThreatList.scss';

const CyberThreatList: React.FC = () => {
    const [cyberThreats, setCyberThreats] = useState<CyberThreat[]>([]);

    useEffect(() => {
        async function fetchThreats() {
            const data = await getCyberThreats();
            setCyberThreats(data);
        }
        fetchThreats();
    }, []);

    return (
        <div className="cyber-threat-list">
            <h2>Cyber Threats</h2>
            <ul>
                {cyberThreats.map((threat) => (
                    <li key={threat.threat_id}>
                        <h3>{threat.threat_id}</h3>
                        <p><strong>Description:</strong> {threat.description}</p>
                        <p><strong>Severity:</strong> {threat.severity_level}</p>
                        <p><strong>Source:</strong> <a href={threat.source}>{threat.source}</a></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CyberThreatList;
