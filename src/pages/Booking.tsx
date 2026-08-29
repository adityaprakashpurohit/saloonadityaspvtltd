import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { services } from '../data/services';
import { stylists } from '../data/stylists';
import { Check, Calendar as CalendarIcon, Clock, User, Scissors } from 'lucide-react';
import { cn } from '../utils/cn';

const STEPS = ['SERVICE', 'ARTIST', 'DATE', 'TIME', 'DETAILS'];

const Booking = () => {
  const [searchParams] = useSearchParams();
  const preSelectedService = searchParams.get('service');
  const preSelectedArtist = searchParams.get('artist');

  const [currentStep, setCurrentStep] = useState(() => {
    if (preSelectedService && preSelectedArtist) return 2;
    if (preSelectedService) return 1;
    if (preSelectedArtist) return 0;
    return 0;
  });
  
  const [bookingData, setBookingData] = useState({
    service: preSelectedService || '',
    artist: preSelectedArtist || '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    requests: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(curr => curr + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(curr => curr - 1);
      window.scrollTo(0, 0);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0: return !!bookingData.service;
      case 1: return !!bookingData.artist;
      case 2: return !!bookingData.date;
      case 3: return !!bookingData.time;
      case 4: return !!bookingData.name && !!bookingData.email && !!bookingData.phone;
      default: return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo(0, 0);
    }, 2000);
  };

  const selectedServiceObject = services.find(s => s.id === bookingData.service);
  const selectedArtistObject = stylists.find(s => s.id === bookingData.artist);

  // Mock Available Times
  const availableTimes = ['10:00 AM', '11:30 AM', '01:00 PM', '03:00 PM', '04:30 PM', '06:00 PM'];

  if (isSuccess) {
    return (
      <div className="w-full pt-24 bg-ivory min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-rose/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-rose">
            <Check className="w-10 h-10 text-rose" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-espresso mb-6">
            Appointment Request Received
          </h1>
          <p className="text-lg text-slate font-sans mb-10 leading-relaxed">
            Thank you, {bookingData.name.split(' ')[0]}. Your appointment request for {selectedServiceObject?.name} with {bookingData.artist === 'any' ? 'any available artist' : selectedArtistObject?.name} on {bookingData.date} at {bookingData.time} has been recorded. We'll contact you shortly to confirm your booking.
          </p>
          <Button onClick={() => window.location.href = '/'} size="lg">
            RETURN HOME
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-24 bg-ivory min-h-screen pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading 
          title="Let's make time for you."
          subtitle="Reserve your experience in just a few steps."
          className="mb-16"
        />

        {/* Progress Indicator */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 font-sans text-xs sm:text-sm tracking-widest uppercase">
          {STEPS.map((step, idx) => (
            <div key={step} className="contents">
              <div className={cn(
                "transition-colors duration-300",
                idx === currentStep ? "text-rose font-medium" : 
                idx < currentStep ? "text-espresso" : "text-slate/50"
              )}>
                <span className="mr-2">{String(idx + 1).padStart(2, '0')}</span>
                {step}
              </div>
              {idx < STEPS.length - 1 && (
                <div className="text-champagne mx-2">→</div>
              )}
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-white p-8 md:p-12 border border-champagne">
          
          {/* STEP 1: SERVICE */}
          {currentStep === 0 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-serif text-espresso mb-8 flex items-center">
                <Scissors className="w-5 h-5 mr-3 text-rose" />
                Select a Service
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map(service => (
                  <button
                    key={service.id}
                    onClick={() => setBookingData({ ...bookingData, service: service.id })}
                    className={cn(
                      "text-left p-6 border transition-all duration-300 flex flex-col",
                      bookingData.service === service.id
                        ? "border-rose bg-rose/5"
                        : "border-champagne hover:border-rose/50"
                    )}
                  >
                    <span className="font-serif text-xl text-espresso mb-1">{service.name}</span>
                    <div className="flex justify-between items-center w-full mt-2 text-sm font-sans text-slate">
                      <span>{service.duration}</span>
                      <span className="font-medium text-espresso">From ₹{service.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: ARTIST */}
          {currentStep === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-serif text-espresso mb-8 flex items-center">
                <User className="w-5 h-5 mr-3 text-rose" />
                Select an Artist
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setBookingData({ ...bookingData, artist: 'any' })}
                  className={cn(
                    "text-left p-6 border transition-all duration-300 flex items-center h-full",
                    bookingData.artist === 'any'
                      ? "border-rose bg-rose/5"
                      : "border-champagne hover:border-rose/50"
                  )}
                >
                  <div className="w-12 h-12 rounded-full bg-champagne flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-espresso/50" />
                  </div>
                  <span className="font-serif text-xl text-espresso">Any Available Artist</span>
                </button>
                
                {stylists.map(stylist => (
                  <button
                    key={stylist.id}
                    onClick={() => setBookingData({ ...bookingData, artist: stylist.id })}
                    className={cn(
                      "text-left p-6 border transition-all duration-300 flex items-center",
                      bookingData.artist === stylist.id
                        ? "border-rose bg-rose/5"
                        : "border-champagne hover:border-rose/50"
                    )}
                  >
                    <img 
                      src={stylist.image} 
                      alt={stylist.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div className="flex flex-col">
                      <span className="font-serif text-xl text-espresso">{stylist.name}</span>
                      <span className="font-sans text-xs text-slate uppercase tracking-wider">{stylist.role}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: DATE */}
          {currentStep === 2 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-serif text-espresso mb-8 flex items-center">
                <CalendarIcon className="w-5 h-5 mr-3 text-rose" />
                Select a Date
              </h3>
              <div className="max-w-md mx-auto">
                <input 
                  type="date" 
                  min={new Date().toISOString().split('T')[0]}
                  value={bookingData.date}
                  onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  className="w-full bg-ivory border border-champagne px-6 py-4 font-sans text-lg focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-colors"
                />
                <p className="text-sm font-sans text-slate mt-4 text-center">
                  Please select a date at least 24 hours in advance.
                </p>
              </div>
            </div>
          )}

          {/* STEP 4: TIME */}
          {currentStep === 3 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-serif text-espresso mb-8 flex items-center">
                <Clock className="w-5 h-5 mr-3 text-rose" />
                Select a Time
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {availableTimes.map(time => (
                  <button
                    key={time}
                    onClick={() => setBookingData({ ...bookingData, time })}
                    className={cn(
                      "py-4 text-center border transition-all duration-300 font-sans text-lg",
                      bookingData.time === time
                        ? "border-rose bg-rose text-white"
                        : "border-champagne hover:border-rose/50 text-espresso"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: DETAILS */}
          {currentStep === 4 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-serif text-espresso mb-8 flex items-center">
                <User className="w-5 h-5 mr-3 text-rose" />
                Your Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-sans text-espresso mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      className="w-full bg-ivory border border-champagne px-4 py-3 font-sans text-sm focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-sans text-espresso mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={bookingData.email}
                      onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      className="w-full bg-ivory border border-champagne px-4 py-3 font-sans text-sm focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-sans text-espresso mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      className="w-full bg-ivory border border-champagne px-4 py-3 font-sans text-sm focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="requests" className="block text-sm font-sans text-espresso mb-2">Special Requests (Optional)</label>
                    <textarea 
                      id="requests" 
                      rows={5}
                      value={bookingData.requests}
                      onChange={(e) => setBookingData({ ...bookingData, requests: e.target.value })}
                      className="w-full bg-ivory border border-champagne px-4 py-3 font-sans text-sm focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-ivory p-6 border border-champagne">
                <h4 className="font-serif text-lg text-espresso mb-4">Booking Summary</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-sans text-slate">
                  <div>
                    <span className="block text-xs uppercase tracking-wider mb-1">Service</span>
                    <span className="font-medium text-espresso">{selectedServiceObject?.name}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider mb-1">Artist</span>
                    <span className="font-medium text-espresso">{bookingData.artist === 'any' ? 'Any Artist' : selectedArtistObject?.name}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider mb-1">Date & Time</span>
                    <span className="font-medium text-espresso">{bookingData.date} at {bookingData.time}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider mb-1">Est. Price</span>
                    <span className="font-medium text-espresso">From ₹{selectedServiceObject?.price}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-between pt-8 border-t border-champagne">
            <Button 
              variant="ghost" 
              onClick={handlePrev}
              disabled={currentStep === 0 || isSubmitting}
              className={currentStep === 0 ? "opacity-0" : ""}
            >
              Back
            </Button>
            
            {currentStep < STEPS.length - 1 ? (
              <Button 
                onClick={handleNext}
                disabled={!isStepValid()}
              >
                Continue
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
              >
                {isSubmitting ? 'Confirming...' : 'CONFIRM APPOINTMENT'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
