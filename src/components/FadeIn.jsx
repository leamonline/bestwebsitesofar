import React, { useEffect, useRef, useState } from 'react';

const FadeIn = ({ children, delay = 0, className = '' }) => {
    const isTest = typeof window !== 'undefined' && window.IS_TEST;
    const [isVisible, setIsVisible] = useState(isTest);
    const domRef = useRef();

    useEffect(() => {
        if (isTest) return;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, [isTest]);

    if (isTest) {
        return <>{children}</>;
    }

    return (
        <div
            ref={domRef}
            className={`${className} ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${delay}ms`, transitionDuration: '0.8s', transitionProperty: 'opacity, transform' }}
        >
            {children}
        </div>
    );
};

export default FadeIn;
