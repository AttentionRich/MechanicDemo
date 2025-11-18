import { useState, FormEvent } from 'react';
import { Phone, CheckCircle2, Instagram, Facebook, Mail, MapPin, MessageCircle } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: null as Date | null,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s()-]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a preferred date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        service: '',
        date: null,
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleDateChange = (date: Date | null) => {
    setFormData((prev) => ({ ...prev, date }));
    if (errors.date) {
      setErrors((prev) => ({ ...prev, date: '' }));
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-black py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us Today</h1>
          <p className="text-xl text-gray-300 mb-6">
            Fill in the form below for any enquiries and we will call you back
          </p>
        </div>
      </section>

      <section className="bg-[#0a0a0a] pt-6 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#1a1a1a] rounded-xl shadow-2xl shadow-black/50 p-8 md:p-12 border border-white/10">
            {isSuccess ? (
              <div className="text-center py-12">
                <CheckCircle2 size={64} className="text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-green-500">
                  Thanks! We've received your enquiry.
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  We will contact you soon to discuss your requirements.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all bg-[#0a0a0a] text-white placeholder:text-[#666666] ${
                      errors.name ? 'border-red-500' : 'border-[#333333]'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-white">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="087 123 4567"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all bg-[#0a0a0a] text-white placeholder:text-[#666666] ${
                      errors.phone ? 'border-red-500' : 'border-[#333333]'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold mb-2 text-white"
                  >
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all bg-[#0a0a0a] text-white ${
                      errors.service ? 'border-red-500' : 'border-[#333333]'
                    }`}
                  >
                    <option value="">Select a service</option>
                    <option value="car-servicing">Car Servicing</option>
                    <option value="auto-body">Auto Body Repairs</option>
                    <option value="van-hire">Van Hire</option>
                    <option value="recovery">Recovery Service</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-semibold mb-2 text-white">
                    Preferred Date
                  </label>
                  <DatePicker
                    selected={formData.date}
                    onChange={handleDateChange}
                    minDate={new Date()}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Select a date"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all bg-[#0a0a0a] text-white placeholder:text-[#666666] ${
                      errors.date ? 'border-red-500' : 'border-[#333333]'
                    }`}
                    wrapperClassName="w-full"
                  />
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your needs..."
                    className="w-full px-4 py-3 border border-[#333333] rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all bg-[#0a0a0a] text-white placeholder:text-[#666666]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="inline-block w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></span>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Enquiry'
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="text-center mt-8 space-y-6">
            <div>
              <p className="text-gray-300 mb-4">Prefer to call?</p>
              <a
                href="tel:0871712185"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transform hover:-translate-y-1 transition-all duration-300"
              >
                <Phone size={20} />
                Call 087 171 2185
              </a>
            </div>
            <div>
              <p className="text-gray-300 mb-4">Have a question? Text us on WhatsApp</p>
              <a
                href="https://wa.me/353871712185"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transform hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Inter Cars Ltd</h3>
              <p className="text-gray-400 mb-4">Quality Vehicle Restoration in Galway</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-red-600" />
                  <a href="tel:0871712185" className="hover:text-red-600 transition-colors">087 171 2185</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-red-600" />
                  <a href="mailto:damien.intercars@gmail.com" className="hover:text-red-600 transition-colors">damien.intercars@gmail.com</a>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin size={16} className="text-red-600 mt-1 flex-shrink-0" />
                  <span>Riverside Industrial Estate, Tuam Road, Galway</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/intercarsgarage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-white transition-colors duration-300"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook size={28} />
                </a>
                <a
                  href="https://www.instagram.com/intercarsgarage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-white transition-colors duration-300"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href="https://wa.me/353871712185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-white transition-colors duration-300"
                  aria-label="Message us on WhatsApp"
                >
                  <MessageCircle size={28} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500">&copy; 2025 Inter Cars Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
