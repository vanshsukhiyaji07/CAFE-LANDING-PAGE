import { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Star, Clock, MapPin, Phone, Mail, Menu, X, Award, Leaf, Heart, Users, ArrowRight, Facebook, Instagram, Twitter } from 'lucide-react';
import './App.css';

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your reservation request! We will contact you shortly to confirm.');
        setFormData({ name: '', email: '', date: '', time: '', guests: '2', message: '' });
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    const menuItems = [
        { name: 'Cappuccino', price: '$4.50', description: 'Rich espresso with steamed milk and foam', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400', popular: true },
        { name: 'Avocado Toast', price: '$12.00', description: 'Sourdough with fresh avocado, eggs & herbs', image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400', popular: true },
        { name: 'Blueberry Muffin', price: '$4.00', description: 'Freshly baked with wild blueberries', image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400', popular: false },
        { name: 'Matcha Latte', price: '$5.50', description: 'Premium matcha with oat milk', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400', popular: true }
    ];

    const testimonials = [
        { name: 'Sarah Mitchell', text: 'The best coffee in town! The atmosphere is so cozy and the staff is incredibly friendly.', rating: 5, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
        { name: 'James Wilson', text: 'Amazing pastries and the perfect spot for remote work. Fast WiFi and great service!', rating: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
        { name: 'Emily Chen', text: 'Their avocado toast is legendary! I come here every weekend with friends.', rating: 5, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' }
    ];

    return (
        <div className="cafe-landing">
            {/* Navigation */}
            <nav className="navbar">
                <div className="container navbar-container">
                    <a href="#" className="nav-logo" onClick={() => scrollToSection('hero')}>
                        <Coffee size={32} />
                        <span>Brew & Bites</span>
                    </a>

                    <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                        <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a>
                        <a href="#menu" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}>Menu</a>
                        <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Reviews</a>
                        <a href="#booking" onClick={(e) => { e.preventDefault(); scrollToSection('booking'); }}>Book a Table</a>
                        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
                    </div>

                    <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" className="hero">
                <div className="hero-background"></div>
                <div className="container hero-container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="hero-badge">
                            <Coffee size={18} /> Est. 2020
                        </span>
                        <h1>Where Every Cup Tells a <span className="text-gradient">Story</span></h1>
                        <p>Experience the perfect blend of artisan coffee, delicious food, and warm hospitality in the heart of the city.</p>
                        <div className="hero-buttons">
                            <button className="btn btn-primary btn-lg" onClick={() => scrollToSection('menu')}>
                                Explore Menu <ArrowRight size={20} />
                            </button>
                            <button className="btn btn-outline btn-lg" onClick={() => scrollToSection('booking')}>
                                Reserve a Table
                            </button>
                        </div>
                        <div className="hero-stats">
                            <div className="hero-stat">
                                <Star size={20} className="text-yellow" />
                                <span><strong>4.9</strong> Rating</span>
                            </div>
                            <div className="hero-stat">
                                <Users size={20} />
                                <span><strong>10K+</strong> Happy Guests</span>
                            </div>
                            <div className="hero-stat">
                                <Award size={20} />
                                <span><strong>5</strong> Awards</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600" alt="Coffee and pastries" />
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Why Choose Us</span>
                        <h2>The <span className="text-gradient">Brew & Bites</span> Experience</h2>
                        <p>Discover what makes our cafe a beloved destination for coffee lovers and food enthusiasts</p>
                    </div>

                    <div className="features-grid">
                        {[
                            { icon: <Coffee size={32} />, title: 'Artisan Coffee', desc: 'Carefully sourced beans roasted to perfection by our expert baristas' },
                            { icon: <Leaf size={32} />, title: 'Fresh Ingredients', desc: 'Farm-to-table produce ensuring the freshest flavors in every dish' },
                            { icon: <Heart size={32} />, title: 'Made with Love', desc: 'Every item crafted with passion and attention to detail' },
                            { icon: <Award size={32} />, title: 'Award Winning', desc: 'Recognized for excellence in taste and customer service' }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Preview Section */}
            <section id="menu" className="menu-preview section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Our Menu</span>
                        <h2>Signature <span className="text-gradient">Favorites</span></h2>
                        <p>A taste of our most loved coffee and food creations</p>
                    </div>

                    <div className="menu-grid">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="menu-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item.popular && <span className="popular-badge">Popular</span>}
                                <div className="menu-card-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="menu-card-content">
                                    <div className="menu-card-header">
                                        <h3>{item.name}</h3>
                                        <span className="menu-price">{item.price}</span>
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="menu-cta">
                        <button className="btn btn-primary btn-lg" onClick={() => scrollToSection('booking')}>
                            Visit Us Today <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="testimonials section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Testimonials</span>
                        <h2>What Our <span className="text-gradient">Guests Say</span></h2>
                        <p>Real stories from our valued customers</p>
                    </div>

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="testimonial-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="testimonial-rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={18} fill="#F4A261" color="#F4A261" />
                                    ))}
                                </div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <div className="testimonial-author">
                                    <img src={testimonial.avatar} alt={testimonial.name} />
                                    <span>{testimonial.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Section */}
            <section id="booking" className="booking section">
                <div className="container">
                    <div className="booking-grid">
                        <motion.div
                            className="booking-info"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-badge">Reserve</span>
                            <h2>Book Your <span className="text-gradient">Table</span></h2>
                            <p>Reserve your spot at Brew & Bites and enjoy an exceptional cafe experience. Perfect for meetings, dates, or catching up with friends.</p>

                            <div className="booking-features">
                                <div className="booking-feature">
                                    <Clock size={24} />
                                    <div>
                                        <h4>Opening Hours</h4>
                                        <p>Mon-Fri: 7AM - 9PM</p>
                                        <p>Sat-Sun: 8AM - 10PM</p>
                                    </div>
                                </div>
                                <div className="booking-feature">
                                    <Phone size={24} />
                                    <div>
                                        <h4>Call Us</h4>
                                        <p>+1 (234) 567-8900</p>
                                    </div>
                                </div>
                                <div className="booking-feature">
                                    <MapPin size={24} />
                                    <div>
                                        <h4>Location</h4>
                                        <p>123 Coffee Street, Brew City</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="booking-form-container"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <form className="booking-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Your Name</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Date</label>
                                        <input
                                            type="date"
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Time</label>
                                        <input
                                            type="time"
                                            value={formData.time}
                                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Number of Guests</label>
                                    <select
                                        value={formData.guests}
                                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                            <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Special Requests</label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Any special requests or dietary requirements..."
                                        rows="3"
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg btn-block">
                                    Reserve Now <ArrowRight size={20} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta section">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Ready to Experience <span className="text-gradient">Brew & Bites</span>?</h2>
                        <p>Join us for exceptional coffee, delicious food, and a warm atmosphere. Your table is waiting!</p>
                        <div className="cta-buttons">
                            <button className="btn btn-primary btn-lg" onClick={() => scrollToSection('booking')}>
                                Book Now <ArrowRight size={20} />
                            </button>
                            <button className="btn btn-outline-white btn-lg" onClick={() => scrollToSection('menu')}>
                                View Menu
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <a href="#" className="footer-logo">
                                <Coffee size={32} />
                                <span>Brew & Bites</span>
                            </a>
                            <p>Your neighborhood cafe serving artisan coffee and delicious food since 2020.</p>
                            <div className="footer-social">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={20} /></a>
                            </div>
                        </div>

                        <div className="footer-links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>About Us</a></li>
                                <li><a href="#menu" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}>Our Menu</a></li>
                                <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Reviews</a></li>
                                <li><a href="#booking" onClick={(e) => { e.preventDefault(); scrollToSection('booking'); }}>Reservations</a></li>
                            </ul>
                        </div>

                        <div className="footer-contact">
                            <h4>Contact Us</h4>
                            <ul>
                                <li><MapPin size={18} /> 123 Coffee Street, Brew City</li>
                                <li><Phone size={18} /> +1 (234) 567-8900</li>
                                <li><Mail size={18} /> hello@brewandbites.com</li>
                                <li><Clock size={18} /> Mon-Fri: 7AM - 9PM</li>
                            </ul>
                        </div>

                        <div className="footer-hours">
                            <h4>Opening Hours</h4>
                            <ul>
                                <li><span>Monday - Friday</span><span>7:00 AM - 9:00 PM</span></li>
                                <li><span>Saturday</span><span>8:00 AM - 10:00 PM</span></li>
                                <li><span>Sunday</span><span>8:00 AM - 10:00 PM</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2024 Brew & Bites. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
