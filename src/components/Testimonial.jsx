const Testimonial = ({ testimonial }) => {
    return (
        <section className="py-24 bg-cafe-cream relative overflow-hidden">
            {/* Decorative Quotes */}
            <div className="absolute top-10 left-10 text-cafe-gold/10 text-9xl font-serif">"</div>
            <div className="absolute bottom-10 right-10 text-cafe-gold/10 text-9xl font-serif rotate-180">"</div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <div className="mb-8">
                    <div className="flex justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-6 h-6 text-cafe-gold" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                </div>

                <blockquote className="font-display text-2xl md:text-4xl text-cafe-dark italic leading-relaxed mb-8">
                    "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-cafe-gold to-amber-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.author.charAt(0)}
                    </div>
                    <div className="text-left">
                        <div className="font-semibold text-cafe-dark">{testimonial.author}</div>
                        <div className="text-cafe-dark/60 text-sm">{testimonial.role}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
