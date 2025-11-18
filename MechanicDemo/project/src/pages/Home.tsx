import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Wrench, Car, Truck, LifeBuoy, Star, Facebook, Instagram, Mail, MapPin, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    type: 'image' as const,
    image: '/Frederic.webp',
    text: "Damien and his team did a cracking job on my old 2CV who needed a full body restoration. Throughout the process Damien was reliable, honest and straightforward. The quality of their work is excellent and they essentially saved my car. Many thanks!",
    author: "Frédéric"
  },
  {
    type: 'text' as const,
    text: "My partner and I were road-tripping through Ireland when we ran into car trouble. The team at Intercars Garage were fully booked for the week, but they understood our situation and told us to bring the car in anyway. They went above and beyond, getting us back on the road within just a couple of days so we could continue our trip. Couldn't recommend them highly enough to anyone needing car repairs.",
    author: "Luke, August 2025"
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      <section
        className="relative h-screen md:h-[100vh] flex items-center justify-center bg-black overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/Background.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl">
            Your Car Deserves Expert Care
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 drop-shadow-lg">
            Professional Restoration & Repair Services in Galway
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transform hover:-translate-y-1 transition-all duration-300 inline-block shadow-xl"
            >
              Book Your Service
            </Link>
            <a
              href="tel:0871712185"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 hover:border-red-600 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-xl backdrop-blur-sm"
            >
              <Phone size={20} />
              Call Now: 087 171 2185
            </a>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              number="01"
              icon={<Wrench size={48} className="text-red-600" />}
              title="Car Servicing"
              description="Comprehensive car servicing from regular maintenance to complex repairs."
            />
            <ServiceCard
              number="02"
              icon={<Car size={48} className="text-red-600" />}
              title="Auto Body Repairs"
              description="Expert auto body repairs to restore your vehicle to pristine condition."
            />
            <ServiceCard
              number="03"
              icon={<Truck size={48} className="text-red-600" />}
              title="Van Hire"
              description="Well-maintained fleet available for personal or business use."
            />
            <ServiceCard
              number="04"
              icon={<LifeBuoy size={48} className="text-red-600" />}
              title="Recovery Service"
              description="Reliable roadside assistance to get you back on the road quickly."
            />
          </div>
          <div className="text-center mt-12">
            <Link
              to="/booking"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transform hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>


      <section className="bg-[#0a0a0a] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            What Our Customers Say
          </h2>

          <div className="relative">
            <div className="bg-black rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10">
              {testimonials[currentTestimonial].type === 'image' && (
                <div className="mb-8">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt="Restored 2CV"
                    className="w-full h-64 md:h-96 object-cover rounded-xl"
                  />
                </div>
              )}

              <div className="flex items-start gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-white text-lg md:text-xl leading-relaxed mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>

              <p className="text-red-600 font-semibold text-lg">
                — {testimonials[currentTestimonial].author}
              </p>
            </div>

            <button
              onClick={previousTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-transparent hover:bg-white/10 text-white p-3 rounded-full transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-transparent hover:bg-white/10 text-white p-3 rounded-full transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-red-600 w-8' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contact Us Today</h2>
            <p className="text-lg text-gray-300">Fill in the Booking Enquiry form or call us for any enquiries</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.8!2d-8.983!3d53.283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDE2JzU4LjgiTiA4wrA1OCc1OC44Ilc!5e0!3m2!1sen!2sie!4v1700000000000!5m2!1sen!2sie"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px', minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Inter Cars Ltd Location"
              ></iframe>
            </div>

            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Address</h3>
                    <p className="text-gray-300">Riverside Industrial Estate, Tuam Road, Galway, Ireland</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <a href="tel:0871712185" className="text-red-600 hover:text-red-700 transition-colors duration-300 text-lg">
                      087 171 2185
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:damien.intercars@gmail.com" className="text-red-600 hover:text-red-700 transition-colors duration-300">
                      damien.intercars@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4">
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/intercarsgarage/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-white transition-colors duration-300"
                      aria-label="Visit our Facebook page"
                    >
                      <Facebook size={32} />
                    </a>
                    <a
                      href="https://www.instagram.com/intercarsgarage/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-white transition-colors duration-300"
                      aria-label="Visit our Instagram page"
                    >
                      <Instagram size={32} />
                    </a>
                    <a
                      href="https://wa.me/353871712185"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-white transition-colors duration-300"
                      aria-label="Message us on WhatsApp"
                    >
                      <MessageCircle size={32} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-8">
                <Link
                  to="/booking"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transform hover:-translate-y-1 transition-all duration-300 inline-block text-center"
                >
                  Book Your Service
                </Link>
                <a
                  href="tel:0871712185"
                  className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call 087 171 2185
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500">&copy; 2025 Inter Cars Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  const [showDetails, setShowDetails] = React.useState(false);

  const getFullDescription = (serviceTitle: string) => {
    const descriptions: Record<string, string> = {
      "Car Servicing": "Our skilled technicians are trained in comprehensive car servicing, ensuring that your vehicle receives the attention it deserves. From regular maintenance to complex repairs, we have the expertise to keep your car in optimal condition.",
      "Auto Body Repairs": "Our dedicated auto body shop is equipped with the latest tools and technologies to restore your vehicle's appearance after accidents or damages. We pay attention to every detail, providing exceptional results that will make your vehicle look as good as new.",
      "Van Hire": "Need a van for personal or business use? Our well-maintained fleet is at your disposal. Whether it's for moving, business deliveries, or any other purpose, we have you covered.",
      "Recovery Service": "If you find yourself in need of roadside assistance, our reliable recovery team is available to assist you promptly. We understand that vehicle breakdowns can be stressful, and our service is designed to get you back on the road as quickly as possible."
    };
    return descriptions[serviceTitle] || description;
  };

  return (
    <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-lg shadow-black/50 hover:shadow-[0_6px_20px_rgba(220,38,38,0.3)] hover:-translate-y-1 transition-all duration-300 border border-white/10 relative overflow-hidden group">
      <div className="absolute top-4 right-4 text-6xl font-bold text-red-600/10 group-hover:text-red-600/20 transition-colors">
        {number}
      </div>
      <div className="flex justify-center mb-4 relative z-10">{icon}</div>
      <h3 className="text-2xl font-bold text-center mb-4 text-white relative z-10">{title}</h3>
      <p className="text-gray-300 text-center leading-relaxed relative z-10 mb-4">
        {showDetails ? getFullDescription(title) : description}
      </p>
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="text-red-600 hover:text-red-700 font-semibold text-sm transition-colors relative z-10 mx-auto block"
      >
        {showDetails ? 'Show Less' : 'Learn More'}
      </button>
    </div>
  );
}

