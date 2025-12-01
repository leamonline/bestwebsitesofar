import React, { useEffect, useRef, useState } from 'react';

const ParallaxSection = ({ children, speed = 0.5, className, style }) => {
    const ref = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const scrollY = window.scrollY;
            // Calculate offset based on scroll position relative to viewport
            // Simple parallax: move element based on scroll
            setOffset(scrollY * speed);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...style,
                transform: `translateY(${offset}px)`,
                transition: 'transform 0.1s ease-out',
                willChange: 'transform'
            }}
        >
            {children}
        </div>
    );
};

export default ParallaxSection;
