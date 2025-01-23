// src/once-ui/components/Background.tsx

"use client";

import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import React, { CSSProperties, forwardRef } from 'react';

interface BackgroundProps {
    position?: CSSProperties['position'];
    className?: string;
    style?: React.CSSProperties;
}

const Background = forwardRef<HTMLDivElement, BackgroundProps>(({
    position = 'fixed',
    className = '',
    style
}, ref) => {
    return (
        <div
            ref={ref}
            className={`pointer-events-auto absolute inset-0 z-0 bg-mask bg-[length:200px] bg-left-top opacity-60 mix-blend-overlay md:opacity-20 ${className}`}
            style={{
                position: position,
                top: '50%',
                left: '50%',
                zIndex: '0',
                width: 'full',
                height: '100%',
                ...style,
            }}
        >
            
            {/* Your content here */}
        </div>
    );
});

Background.displayName = 'Background';

export { Background };