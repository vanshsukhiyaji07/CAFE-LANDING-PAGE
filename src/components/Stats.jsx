const Stats = ({ stats }) => {
    return (
        <section className="py-20 bg-cafe-dark">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="font-display text-4xl md:text-5xl font-bold text-cafe-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </div>
                            <div className="text-white/70 text-sm md:text-base uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
