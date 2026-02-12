import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BRAND_ASSETS = [
    {
        name: 'Mill Sign',
        value: '₥',
        description: 'The core symbol of the ₥AN$A identity.',
        display: <span className="text-6xl font-bold">₥</span>
    },
    {
        name: 'Full Logo Text',
        value: '₥AN$A',
        description: 'The complete brand wordmark.',
        display: (
            <span className="text-4xl font-bold tracking-[0.2em]">
                <span className="inline-block scale-125 origin-center -translate-y-[0.05em] mr-[0.05em]">₥</span>AN$A
            </span>
        )
    },
    {
        name: 'Brand Tagline',
        value: 'you might not get this...',
        description: 'The official mission statement and landing text.',
        display: <p className="text-xl font-serif italic text-white/80">you might not get this...</p>
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
        <div className="min-h-screen bg-black text-white relative flex flex-col items-center py-20 px-6 overflow-x-hidden">
            {/* Background Glows */}
            <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-600/5 blur-[150px] rounded-full animate-pulse pointer-events-none" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-500/5 blur-[150px] rounded-full animate-pulse pointer-events-none" />
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 w-full max-w-4xl mb-20">
                <Link
                    to="/"
                    className="inline-block mb-12 text-white/40 hover:text-white text-[10px] tracking-[0.4em] uppercase transition-all duration-300"
                >
                    ← back to entry
                </Link>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                            BRANDING
                        </h1>
                        <p className="text-white/40 text-[10px] md:text-[12px] tracking-[0.4em] uppercase">
                            Official Assets & Visual Identity
                        </p>
                    </div>
                </div>
            </div>

            {/* Asset Showcase Grid */}
            <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {BRAND_ASSETS.map((asset, index) => (
                    <div
                        key={asset.name}
                        className="group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500"
                    >
                        <div className="h-40 flex items-center justify-center mb-8 bg-black/40 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                            {asset.display}
                        </div>

                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <h3 className="text-white/90 font-medium mb-2">{asset.name}</h3>
                                <p className="text-white/40 text-sm leading-relaxed max-w-[200px]">
                                    {asset.description}
                                </p>
                            </div>
                            <button
                                onClick={() => handleCopy(asset.value, index)}
                                className={`px-6 py-3 rounded-full text-[10px] tracking-widest uppercase font-bold transition-all duration-300 ${copiedIndex === index
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
                <div className="group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500 md:col-span-2">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2 h-64 flex flex-col items-center justify-center gap-10 bg-black/40 rounded-xl border border-white/5">
                            <img src="/mansa sign.png" alt="₥ Sign" className="h-20 w-auto opacity-90 group-hover:opacity-100 transition-opacity" />
                            <img src="/wordmark.png" alt="MAN$A Wordmark" className="h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl font-bold mb-4 tracking-tight text-white/90">Visual Mark</h3>
                            <p className="text-white/40 text-sm leading-relaxed mb-8">
                                The ₥AN$A visual system is built on precision and minimalist luxury. The mill sign (₥) serves as the primary icon, representing the fusion of digital currency aesthetics with refined craftsmanship.
                            </p>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]" title="Primary Amber" />
                                <div className="w-8 h-8 rounded-full bg-orange-600 shadow-[0_0_15px_rgba(234,88,12,0.3)]" title="Secondary Orange" />
                                <div className="w-8 h-8 rounded-full bg-[#0a0a0a] border border-white/10" title="Deep Black" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ₥AN$A Signature */}
            <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] pointer-events-none opacity-40 group">
                <span className="text-lg md:text-2xl font-bold tracking-[0.2em] md:tracking-[0.3em] text-white/90">
                    <span className="inline-block scale-125 origin-center -translate-y-[0.05em] mr-[0.05em]">₥</span>AN$A
                </span>
            </div>
        </div>
    );
};
