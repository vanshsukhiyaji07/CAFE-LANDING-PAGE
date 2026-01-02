const OfferBanner = ({ offer }) => {
    return (
        <section id="offer" className="bg-gradient-to-r from-cafe-brown via-cafe-dark to-cafe-brown py-16 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 bg-cafe-gold rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-cafe-gold rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="bg-gradient-to-r from-cafe-gold/20 to-amber-500/20 rounded-3xl p-8 md:p-12 border border-cafe-gold/30 backdrop-blur-sm">
                    <div className="text-center">
                        <span className="inline-block bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full mb-4 animate-pulse">
                            {offer.title.toUpperCase()}
                        </span>
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
                            {offer.highlight}
                        </h2>
                        <p className="text-cafe-gold text-lg md:text-xl mb-6">
                            {offer.description}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                            <div className="bg-cafe-dark/50 rounded-xl px-8 py-4 border-2 border-dashed border-cafe-gold">
                                <span className="text-white/60 text-sm">Use Code:</span>
                                <span className="block font-mono text-2xl font-bold text-cafe-gold tracking-wider">
                                    {offer.code}
                                </span>
                            </div>
                        </div>
                        <p className="text-white/60 text-sm">{offer.validUntil}</p>
                        <button className="mt-8 btn-primary">
                            Claim Offer Now →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferBanner;
