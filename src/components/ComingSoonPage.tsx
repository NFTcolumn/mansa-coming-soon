import React, { useState, useRef, useEffect } from 'react';

const YOUTUBE_VIDEO_ID = 'W2IcsBCi1to';

export const ComingSoonPage: React.FC = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const videoWrapperRef = useRef<HTMLDivElement>(null);

    const handlePlayVideo = () => {
        setIsClosing(false);
        setShowVideo(true);
    };

    const handleCloseVideo = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        setIsClosing(true);
        setTimeout(() => {
            setShowVideo(false);
            setIsClosing(false);
        }, 500);
    };

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            videoWrapperRef.current?.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    useEffect(() => {
        const onFSChange = () => setIsFullScreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', onFSChange);
        return () => document.removeEventListener('fullscreenchange', onFSChange);
    }, []);

    return (
        <div className="relative w-full h-screen bg-black text-white overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-600/5 blur-[150px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-500/5 blur-[150px] rounded-full animate-pulse" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

            {/* Landing Text */}
            {!showVideo && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="relative group cursor-pointer" onClick={handlePlayVideo}>
                        <div className="absolute inset-0 bg-amber-500/5 blur-2xl group-hover:bg-amber-500/10 transition-all duration-700 rounded-lg" />
                        <div className="relative max-w-[480px] aspect-[481/170] flex items-center justify-center p-8">
                            <p className="text-white/80 font-serif italic text-lg md:text-xl tracking-wide animate-fade-in text-center group-hover:text-white transition-colors duration-500">
                                you might not get this...
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* YouTube Video Layer */}
            {showVideo && (
                <div
                    className={`absolute inset-0 z-30 flex flex-col items-center justify-center ${isClosing ? 'animate-fade-out' : ''
                        }`}
                >
                    {/* Video wrapper - this goes fullscreen */}
                    <div
                        ref={videoWrapperRef}
                        className={`relative bg-black overflow-hidden ${isFullScreen
                            ? 'w-full h-full'
                            : 'w-full aspect-video md:w-[70%] md:rounded-lg'
                            }`}
                    >
                        <iframe
                            className={`absolute inset-0 w-full h-full ${isFullScreen ? 'scale-[3] md:scale-100 origin-center' : ''
                                }`}
                            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                            title="₥AN$A - you might not get this"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                            allowFullScreen
                            style={{ border: 'none' }}
                        />

                        {/* Mask layer - Ensures our UI handles clicks in fullscreen mode */}
                        {isFullScreen && (
                            <div
                                className="absolute inset-0 z-[2147483645] bg-transparent"
                                onClick={(e) => {
                                    // Default behavior: click anywhere in the mask to toggle fullscreen/zoom
                                    e.stopPropagation();
                                    toggleFullScreen();
                                }}
                            />
                        )}

                        {/* X button to exit fullscreen - top right corner */}
                        {isFullScreen && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleFullScreen();
                                }}
                                className="absolute top-8 right-8 z-[2147483647] text-white/90 hover:text-white text-4xl transition-all duration-300 pointer-events-auto bg-black/60 hover:bg-black/90 w-16 h-16 flex items-center justify-center rounded-full border-2 border-white/40 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] active:scale-90"
                                aria-label="Exit Zoom"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    {/* Controls below video - always visible for mobile */}
                    {!isFullScreen && (
                        <div className="flex gap-8 mt-8 md:mt-6 items-center">
                            <button
                                onClick={handleCloseVideo}
                                className="whitespace-nowrap text-white/40 hover:text-white text-[8px] md:text-[10px] tracking-[0.4em] uppercase transition-all duration-300"
                            >
                                close
                            </button>
                            <button
                                onClick={toggleFullScreen}
                                className="whitespace-nowrap text-white/40 hover:text-white text-[8px] md:text-[10px] tracking-[0.4em] uppercase transition-all duration-300"
                            >
                                fullscreen
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* ₥AN$A Logo */}
            <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] pointer-events-none">
                <span className="text-lg md:text-2xl font-bold tracking-[0.2em] md:tracking-[0.3em] text-white/90 drop-shadow-[0_0_20px_rgba(0,0,0,0.6)]">
                    <span className="inline-block scale-125 origin-center -translate-y-[0.05em] mr-[0.05em]">₥</span>AN$A
                </span>
            </div>
        </div>
    );
};
