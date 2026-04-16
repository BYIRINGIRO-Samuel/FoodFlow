import React, { useState, useEffect } from 'react';
import './LiveOrderTracker.css';

const LiveOrderTracker = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(0);
    const steps = [
        { label: 'Order Confirmed', icon: '✅', time: '12:05 PM' },
        { label: 'Preparing Food', icon: '👨‍🍳', time: '12:10 PM' },
        { label: 'Out for Delivery', icon: '🚴', time: '12:25 PM' },
        { label: 'Arrived', icon: '🏠', time: '12:40 PM' }
    ];

    useEffect(() => {
        if (isOpen && step < steps.length - 1) {
            const timer = setTimeout(() => {
                setStep(prev => prev + 1);
            }, 5000); // Simulate progress every 5 seconds
            return () => clearTimeout(timer);
        }
    }, [isOpen, step, steps.length]);

    if (!isOpen) return null;

    return (
        <div className="tracker-overlay">
            <div className="tracker-modal">
                <button className="close-tracker" onClick={onClose}>×</button>
                <h3>Live Order Tracking</h3>
                <div className="rider-info">
                    <div className="rider-avatar">👤</div>
                    <div className="rider-details">
                        <p><strong>Samuel B.</strong></p>
                        <span>Your Delivery Hero</span>
                    </div>
                </div>

                <div className="tracking-steps">
                    {steps.map((s, index) => (
                        <div key={index} className={`step-item ${index <= step ? 'active' : ''}`}>
                            <div className="step-icon-wrapper">
                                <span className="step-icon">{s.icon}</span>
                                {index < steps.length - 1 && <div className="step-line"></div>}
                            </div>
                            <div className="step-content">
                                <p className="step-label">{s.label}</p>
                                <p className="step-time">{index <= step ? s.time : '--:--'}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="tracker-footer">
                    <p>Estimated Delivery: <strong>15-20 mins</strong></p>
                </div>
            </div>
        </div>
    );
};

export default LiveOrderTracker;
