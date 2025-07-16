import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set('.contact-card', { y: 60, opacity: 0 });
      gsap.set('.contact-form', { y: 60, opacity: 0 });
      gsap.set('.contact-map', { y: 60, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.to('.contact-card', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }).to('.contact-form', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4').to('.contact-map', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const { name, email, subject, message } = formData;

    const whatsappMessage = encodeURIComponent(
      `New Inquiry from Genesis Website:\n\n` +
      `👤 Name: ${name}\n` +
      `📧 Email: ${email}\n` +
      `📌 Subject: ${subject}\n` +
      `📝 Message: ${message}`
    );

    const whatsappNumber = '918471916297';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, '_blank');

    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9864351008 | +91 8471916297',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'genesispnp@gmail.com',
      href: 'mailto:genesispnp@gmail.com',
      description: 'Send us your requirements'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '+91 8471916297',
      href: 'https://wa.me/918471916297',
      description: 'Message us on WhatsApp'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '348 Express Highway (VIP Road), Opp. Doordarshan Colony, Near Six Mile, Barbari, Guwahati-781036',
      href: 'https://www.google.com/maps/place/Genesis+Printers+%26+Publishers+Private+Limited/@26.1381865,91.8028296,15z',
      description: 'Visit our printing facility'
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="heading-lg text-blue-900 mb-4">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="body-lg text-blue-700 max-w-2xl mx-auto">
            Ready to start your printing project? Get in touch with our team and let's bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Card */}
          <div className="contact-card">
            <div className="bg-[#2E177A] text-white rounded-2xl p-8 h-full shadow-xl relative">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-white/90 mb-8">We offer high-quality, reliable printing and binding services. Contact us for your next project!</p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                      <p className="text-white/80 text-sm mb-2">{info.description}</p>
                      <a href={info.href} target={info.title === 'Address' ? '_blank' : undefined} rel="noopener noreferrer" className="text-white hover:text-white/80 break-words">{info.content}</a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full opacity-30"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <div className="bg-white rounded-2xl p-8 shadow-xl h-full border border-blue-200">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h2>

              {submitStatus === 'success' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center space-x-2 bg-green-50 text-green-700 p-4 rounded-lg mb-6">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-blue-900">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.name ? 'border-red-500' : 'border-blue-200'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-blue-900">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-blue-200'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-blue-900">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.subject ? 'border-red-500' : 'border-blue-200'
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-blue-900">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none transition-colors ${
                      errors.message ? 'border-red-500' : 'border-blue-200'
                    }`}
                    placeholder="Tell us about your printing project..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors shadow-lg flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
