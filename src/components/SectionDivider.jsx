import React from 'react';

const SectionDivider = ({ type = 'wave', color, backgroundColor = 'transparent', height = '60px', flip = false }) => {
    const style = {
        backgroundColor: backgroundColor,
        lineHeight: 0,
        width: '100%',
        height: height,
        transform: flip ? 'scaleX(-1)' : 'none',
        position: 'relative',
        zIndex: 1
    };

    const renderSvg = () => {
        switch (type) {
            case 'wave':
                return (
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                        <path d="M0 120L1440 120L1440 0C1440 0 1082.5 99.5 720 99.5C357.5 99.5 0 0 0 0L0 120Z" fill={color} />
                    </svg>
                );
            case 'slant':
                return (
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                        <path d="M0 100L1440 100L1440 0L0 100Z" fill={color} />
                    </svg>
                );
            case 'curve':
                return (
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                        <path d="M0 100L1440 100L1440 0C1440 0 720 100 0 0L0 100Z" fill={color} />
                    </svg>
                );
            case 'zigzag':
                return (
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                        <path d="M0 100L1440 100L1440 0L1380 30L1320 0L1260 30L1200 0L1140 30L1080 0L1020 30L960 0L900 30L840 0L780 30L720 0L660 30L600 0L540 30L480 0L420 30L360 0L300 30L240 0L180 30L120 0L60 30L0 0L0 100Z" fill={color} />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div style={style}>
            {renderSvg()}
        </div>
    );
};

export default SectionDivider;
