const FeatureRow = ({ features }) => {
    return (
        <section id="features" className="py-24 bg-cafe-cream">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-cafe-gold font-medium tracking-widest uppercase">Why Choose Us</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-cafe-dark mt-4">
                        Crafted with Passion
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-cafe-gold/10"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-cafe-gold to-amber-400 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                {feature.icon}
                            </div>
                            <h3 className="font-display text-2xl font-bold text-cafe-dark mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-cafe-dark/70 leading-relaxed">
                                {feature.description}
                            </p>
                            <div className="mt-6 flex items-center text-cafe-gold font-medium group-hover:text-amber-600 transition-colors cursor-pointer">
                                <span>Learn More</span>
                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureRow;
