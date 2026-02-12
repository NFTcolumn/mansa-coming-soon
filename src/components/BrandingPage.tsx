import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BRAND_ASSETS = [
    {
        name: 'Mill Sign',
        value: '₥',
        description: 'The core symbol of the ₥AN$A identity.',
        display: <span className="text-3xl md:text-4xl font-bold">₥</span>
    },
    {
        name: 'Full Logo Text',
        value: '₥AN$A',
        description: 'The complete brand wordmark.',
        display: (
            <span className="text-2xl md:text-3xl font-bold tracking-[0.2em]">
                <span className="inline-block scale-110 origin-center -translate-y-[0.05em] mr-[0.05em]">₥</span>AN$A
            </span>
        )
    },
    {
        name: 'Brand Tagline',
        value: 'you might not get this...',
        description: 'The official mission statement and landing text.',
        display: <p className="text-sm md:text-base font-serif italic text-white/80">you might not get this...</p>
    }
];

export const BrandingPage: React.FC = () => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="min-h-screen bg-black text-white relative flex flex-col items-center py-10 md:py-12 px-6 overflow-x-hidden">
            {/* Background Glows */}
            <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-600/5 blur-[150px] rounded-full animate-pulse pointer-events-none" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-500/5 blur-[150px] rounded-full animate-pulse pointer-events-none" />
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 w-full max-w-4xl mb-10">
                <Link
                    to="/"
                    className="inline-block mb-6 text-white/40 hover:text-white text-[8px] md:text-[9px] tracking-[0.4em] uppercase transition-all duration-300"
                >
                    ← back to entry
                </Link>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-2">
                            BRANDING
                        </h1>
                        <p className="text-white/40 text-[8px] md:text-[10px] tracking-[0.4em] uppercase">
                            Official Assets & Visual Identity
                        </p>
                    </div>
                </div>
            </div>

            {/* Asset Showcase Grid */}
            <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {BRAND_ASSETS.map((asset, index) => (
                    <div
                        key={asset.name}
                        className="group relative bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 md:p-6 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500"
                    >
                        <div className="h-24 md:h-32 flex items-center justify-center mb-4 md:mb-6 bg-black/40 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors">
                            {asset.display}
                        </div>

                        <div className="flex justify-between items-start gap-3">
                            <div>
                                <h3 className="text-white/90 text-sm md:text-base font-medium mb-1">{asset.name}</h3>
                                <p className="text-white/40 text-[10px] md:text-xs leading-relaxed max-w-[180px]">
                                    {asset.description}
                                </p>
                            </div>
                            <button
                                onClick={() => handleCopy(asset.value, index)}
                                className={`px-4 py-2 rounded-full text-[8px] tracking-widest uppercase font-bold transition-all duration-300 ${copiedIndex === index
                                        ? 'bg-amber-500 text-black border-amber-500'
                                        : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                                    }`}
                            >
                                {copiedIndex === index ? 'Copied' : 'Copy'}
                            </button>
                        </div>
                    </div>
                ))}

                {/* Visual Identity Logo Card */}
                <div className="group relative bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 md:p-6 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500 md:col-span-2">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <div className="w-full md:w-1/2 h-40 md:h-48 flex flex-col items-center justify-center gap-6 md:gap-8 bg-black/40 rounded-lg border border-white/5">
                            <img src="/mansa sign.png" alt="₥ Sign" className="h-12 md:h-16 w-auto opacity-90 group-hover:opacity-100 transition-opacity" />
                            <img src="/wordmark.png" alt="MAN$A Wordmark" className="h-8 md:h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 tracking-tight text-white/90">Visual Mark</h3>
                            <p className="text-white/40 text-[10px] md:text-xs leading-relaxed mb-4 md:mb-6">
                                The ₥AN$A visual system is built on precision and minimalist luxury. The mill sign (₥) serves as the primary icon.
                            </p>
                            <div className="flex gap-3">
                                <div className="w-6 h-6 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.2)]" title="Primary Amber" />
                                <div className="w-6 h-6 rounded-full bg-orange-600 shadow-[0_0_10px_rgba(234,88,12,0.2)]" title="Secondary Orange" />
                                <div className="w-6 h-6 rounded-full bg-[#0a0a0a] border border-white/10" title="Deep Black" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ₥AN$A Signature */}
            <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] pointer-events-none opacity-40 group scale-75 md:scale-90">
                <span className="text-lg md:text-2xl font-bold tracking-[0.2em] md:tracking-[0.3em] text-white/90">
                    <span className="inline-block scale-125 origin-center -translate-y-[0.05em] mr-[0.05em]">₥</span>AN$A
                </span>
            </div>
        </div>
    );
};
