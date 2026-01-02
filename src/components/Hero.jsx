const Hero = ({ data, brand }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${data.backgroundImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-cafe-dark/70 via-cafe-dark/50 to-cafe-dark/80"></div>
            </div>

            {/* Navigation */}
            <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <span className="text-3xl">☕</span>
                        <span className="font-display text-2xl font-bold text-white">{brand.name}</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
                        <a href="#offer" className="text-white/80 hover:text-white transition-colors">Offer</a>
                        <button className="btn-secondary text-sm py-2 px-6">
                            Order Now
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <p className="text-cafe-gold font-medium tracking-widest uppercase mb-4 animate-fade-in">
                    {brand.tagline}
                </p>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
                    {data.headline}
                    <br />
                    <span className="text-cafe-gold">{data.subheadline}</span>
                </h1>
                <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    {data.description}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="btn-primary">
                        Explore Menu
                    </button>
                    <button className="btn-secondary">
                        Our Story
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-white/80 rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
