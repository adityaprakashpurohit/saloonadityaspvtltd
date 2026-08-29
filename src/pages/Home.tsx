import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { StylistCard } from '../components/StylistCard';
import { services } from '../data/services';
import { stylists } from '../data/stylists';
import { testimonials } from '../data/testimonials';

const Home = () => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=2000" 
            alt="Premium Salon Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="text-white/80 font-sans text-xs tracking-[0.3em] uppercase mb-6 block">
            Hair • Beauty • Self-Care
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8">
            Beauty That Feels Like You.
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-sans max-w-2xl mx-auto mb-12 leading-relaxed">
            Thoughtfully crafted hair and beauty experiences designed to bring out your most confident self.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/booking">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white text-espresso hover:bg-ivory hover:text-espresso">
                BOOK AN APPOINTMENT
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="ghost" size="lg" className="w-full sm:w-auto text-white hover:bg-white/10 hover:text-white border border-white/20">
                EXPLORE SERVICES
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/60">
          <span className="text-[10px] tracking-widest uppercase mb-2">Scroll to discover</span>
          <ArrowRight className="w-4 h-4 rotate-90" />
        </div>

        {/* Floating Trust Element */}
        <div className="absolute bottom-12 right-8 hidden lg:flex bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-sm items-center gap-4">
          <div className="flex flex-col">
            <div className="flex items-center text-rose mb-1">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-white font-serif text-xl">4.9/5 Rating</span>
            <span className="text-white/70 font-sans text-xs">Rated by 1,200+ clients</span>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80&w=1000" 
                alt="Stylist working on hair" 
                className="w-full max-w-md ml-auto object-cover aspect-[3/4]"
              />
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" 
                alt="Beautiful hair detail" 
                className="absolute -bottom-12 -left-8 w-64 h-64 object-cover border-8 border-ivory hidden md:block"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading 
                align="left"
                label="Welcome to Lumière"
                title="Where beauty becomes an experience."
              />
              <p className="text-slate font-sans text-lg leading-relaxed mb-10 max-w-lg">
                Lumière is more than a salon. It is a space designed to slow down, reconnect, and leave feeling beautifully renewed. We believe in enhancing what makes you uniquely you, with personalized care and exceptional artistry.
              </p>
              <Link to="/about">
                <Button variant="outline" className="group">
                  OUR STORY 
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Beauty, Your Way."
            subtitle="From signature cuts to transformative color and effortless styling, every service is tailored to you."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/services">
              <Button variant="secondary">VIEW ALL SERVICES</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE EXPERIENCE */}
      <section className="py-24 bg-espresso text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Your Time. Your Space. Your Experience."
            className="mb-20 text-white"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { num: "01", title: "CONSULT", desc: "We listen to your goals, preferences, and personal style." },
              { num: "02", title: "CREATE", desc: "Our artists bring your vision to life with precision and care." },
              { num: "03", title: "REFINE", desc: "Every detail is finished with intention." },
              { num: "04", title: "REVEAL", desc: "Leave feeling refreshed, confident, and completely yourself." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-4xl font-serif text-rose/50 mb-6">{step.num} —</span>
                <h4 className="text-xl font-serif text-white mb-4 tracking-wide">{step.title}</h4>
                <p className="text-sand font-sans leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STYLISTS PREVIEW */}
      <section className="py-24 bg-champagne/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Meet Your Artists."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stylists.map(stylist => (
              <StylistCard key={stylist.id} stylist={stylist} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/stylists">
              <Button variant="outline">MEET THE TEAM</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading 
            title="Loved By Our Clients."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="p-8 border border-champagne bg-ivory flex flex-col items-center text-center">
                <div className="flex text-rose mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-espresso font-serif text-lg leading-relaxed italic mb-8 flex-grow">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h5 className="font-sans font-medium text-espresso text-sm">{testimonial.name}</h5>
                    <span className="text-xs text-slate">{testimonial.serviceBooked}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="relative py-32 flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=2000" 
            alt="Salon atmosphere" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso/60" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Ready for your next look?
          </h2>
          <p className="text-white/80 font-sans text-lg mb-10">
            Take a little time for yourself. You deserve it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/booking">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                BOOK AN APPOINTMENT
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="ghost" size="lg" className="w-full sm:w-auto text-white border border-white/20 hover:bg-white/10 hover:text-white">
                VIEW SERVICES
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
