import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="w-full pt-24 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading 
          title="Come Say Hello."
          subtitle="We'd love to hear from you. Book an appointment or simply drop by for a consultation."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <div className="bg-white p-8 md:p-12 border border-champagne space-y-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-rose mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl text-espresso mb-2">Address</h4>
                  <p className="font-sans text-slate leading-relaxed">
                    Lumière Salon<br />
                    123 Luxury Avenue<br />
                    Bhubaneswar, Odisha<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-rose mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl text-espresso mb-2">Phone</h4>
                  <p className="font-sans text-slate">+91 90000 00000</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-rose mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl text-espresso mb-2">Email</h4>
                  <a href="mailto:hello@lumieresalon.com" className="font-sans text-slate hover:text-rose transition-colors">
                    hello@lumieresalon.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-rose mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl text-espresso mb-2">Hours</h4>
                  <p className="font-sans text-slate leading-relaxed">
                    Monday–Saturday: 9:00 AM – 8:00 PM<br />
                    Sunday: 10:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-8 bg-champagne w-full h-64 flex items-center justify-center font-sans text-slate border border-champagne">
              Interactive Map Placeholder
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border border-champagne">
              <h3 className="text-3xl font-serif text-espresso mb-8">Send a Message</h3>
              
              {isSuccess ? (
                <div className="bg-rose/10 border border-rose p-6 text-center">
                  <h4 className="font-serif text-xl text-rose mb-2">Thank You</h4>
                  <p className="font-sans text-espresso text-sm">We've received your message and will be in touch soon.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-sans text-espresso mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-ivory border border-champagne px-4 py-3 font-sans text-sm focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-sans text-espresso mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-ivory border border-champagne px-4 py-3 font-sans text-sm focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-sans text-espresso mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-ivory border border-champagne px-4 py-3 font-sans text-sm focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-sans text-espresso mb-2">Service Interested In</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-ivory border border-champagne px-4 py-3 font-sans text-sm focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-colors"
                    >
                      <option value="">Select a service (optional)</option>
                      <option value="hair">Hair Design</option>
                      <option value="color">Hair Color</option>
                      <option value="makeup">Makeup</option>
                      <option value="bridal">Bridal Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-sans text-espresso mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-ivory border border-champagne px-4 py-3 font-sans text-sm focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-colors resize-none"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
