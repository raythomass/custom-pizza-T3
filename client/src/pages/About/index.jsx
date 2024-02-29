    
    import './about.css'
    const AboutUs = () => {
        return (
            <body className="about-body">
                <main className="about-main">
                    <div>
                        <section className="mission-values" style={{color:"rgb(190, 190, 190)"}}>
                            <h2>Our Mission & Values</h2>
                            <p>At Custom Pizza, our mission is to provide delicious and convenient meals delivered straight to your doorstep. We value quality, convenience, and customer satisfaction above all else.</p>
                        </section>
                        <section className="team-members">
                            <h2>Meet Our Team</h2>
                            <div className="team-member" style={{color:"rgb(190, 190, 190)"}}>
                                {/* <img src="team-member1.jpg" alt="John" /> */}
                                <h3>John</h3>
                                <p>Founder & CEO</p>
                            </div>
                            <div className="team-member" style={{color:"rgb(190, 190, 190)"}}>
                                {/* <img src="team-member2.jpg" alt="Jane" /> */}
                                <h3>Jane Smith</h3>
                                <p>Head Chef</p>
                            </div>
                            {/* Add more team members as needed */}
                        </section>
                        <section className="contact-info" style={{color:"rgb(190, 190, 190)"}}>
                            <h2>Contact Us</h2>
                            <p>If you have any questions or inquiries, feel free to reach out to us:</p>
                            <ul className="about-header-nav-ul">
                                <li className="about-header-nav-ul-li">Email: info@custompizza.com</li>
                                <li className="about-header-nav-ul-li">Phone: 123-456-7890</li>
                                <li className="about-header-nav-ul-li">Address: 123 Main Street, Cityville</li>
                            </ul>
                        </section>
                        <section className="testimonials">
                            <h2>Customer Testimonials</h2>
                            <div className="testimonial" style={{color:"rgb(190, 190, 190)"}}>
                                <p> Ray's Pizzeria is amazing! The food is always fresh and delicious, and the delivery is super fast! </p>
                                <cite>- Sarah Johnson</cite>
                            </div>
                            {/* Add more testimonials as needed */}
                        </section>
                        
                    </div>
            </main>
            </body>
        );
    };

export default AboutUs;