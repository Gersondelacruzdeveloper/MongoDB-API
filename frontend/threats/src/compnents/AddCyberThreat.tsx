// src/components/AddCyberThreat.tsx
import React, { useState } from 'react';
import { CyberThreat } from '../types';
import { addCyberThreat } from '../api';

const AddCyberThreat: React.FC = () => {
    const [form, setForm] = useState<CyberThreat>({
        threat_id: '',
        description: '',
        severity_level: '',
        source: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addCyberThreat(form);
        // Clear the form
        setForm({ threat_id: '', description: '', severity_level: '', source: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Threat ID</label>
                <input type="text" name="threat_id" value={form.threat_id} onChange={handleChange} required />
            </div>
            <div>
                <label>Description</label>
                <textarea name="description" value={form.description} onChange={handleChange} required />
            </div>
            <div>
                <label>Severity Level</label>
                <input type="text" name="severity_level" value={form.severity_level} onChange={handleChange} required />
            </div>
            <div>
                <label>Source</label>
                <input type="url" name="source" value={form.source} onChange={handleChange} required />
            </div>
            <button type="submit">Add Threat</button>
        </form>
    );
};

export default AddCyberThreat;
