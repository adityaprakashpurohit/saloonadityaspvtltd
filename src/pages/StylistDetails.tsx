import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { stylists } from '../data/stylists';
import { Button } from '../components/Button';
import { ArrowLeft } from 'lucide-react';

const StylistDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const stylist = stylists.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!stylist) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex flex-col items-center justify-center bg-ivory text-center">
        <h2 className="text-4xl font-serif text-espresso mb-4">Stylist Not Found</h2>
        <p className="text-slate font-sans mb-8">The artist you're looking for doesn't exist.</p>
        <Button onClick={() => navigate('/stylists')} variant="outline">Back to Stylists</Button>
      </div>
    );
  }

  return (
    <div className="w-full pt-24 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-sm font-sans text-slate hover:text-rose transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image */}
          <div>
            <div className="sticky top-32">
              <img 
                src={stylist.image} 
                alt={stylist.name} 
                className="w-full h-auto aspect-[3/4] object-cover border border-champagne"
              />
            </div>
          </div>

          {/* Details */}
          <div className="pt-8">
            <span className="text-rose font-sans text-xs tracking-[0.2em] uppercase mb-4 block">
              {stylist.role}
            </span>
            <h1 className="text-5xl font-serif text-espresso mb-4">
              {stylist.name}
            </h1>
            
            <p className="text-slate font-sans text-sm tracking-wider uppercase mb-8">
              {stylist.experience} Experience
            </p>

            <div className="mb-12">
              <h3 className="text-lg font-serif text-espresso mb-4 border-b border-champagne pb-2">
                Specialties
              </h3>
              <div className="flex flex-wrap gap-2">
                {stylist.specialties.map((specialty, idx) => (
                  <span 
                    key={idx}
                    className="text-xs text-espresso font-sans px-3 py-1 bg-champagne/30 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-lg font-serif text-espresso mb-4 border-b border-champagne pb-2">
                About
              </h3>
              <p className="text-lg text-slate font-sans leading-relaxed">
                {stylist.bio}
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-lg font-serif text-espresso mb-4 border-b border-champagne pb-2">
                Signature Services
              </h3>
              <ul className="space-y-2">
                {stylist.services.map((service, idx) => (
                  <li key={idx} className="text-slate font-sans flex items-center">
                    <span className="w-1.5 h-1.5 bg-rose rounded-full mr-3" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <Link to={`/booking?artist=${stylist.id}`}>
              <Button size="lg" className="w-full md:w-auto">
                BOOK WITH {stylist.name.split(' ')[0].toUpperCase()}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylistDetails;
