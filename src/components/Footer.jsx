const Footer = ({ brand }) => {
    return (
        <footer className="bg-cafe-dark py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center space-x-2">
                        <span className="text-3xl">☕</span>
                        <span className="font-display text-2xl font-bold text-white">{brand.name}</span>
                    </div>

                    <div className="flex items-center gap-6">
                        {['Instagram', 'Twitter', 'Facebook'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-cafe-gold hover:text-cafe-dark transition-all duration-300"
                            >
                                {social.charAt(0)}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center">
                    <p className="text-white/60 text-sm">
                        © 2024 {brand.name}. All rights reserved. | Demo Project
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
