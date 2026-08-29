import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { Clock, Tag, Check, ArrowLeft } from 'lucide-react';

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex flex-col items-center justify-center bg-ivory text-center">
        <h2 className="text-4xl font-serif text-espresso mb-4">Service Not Found</h2>
        <p className="text-slate font-sans mb-8">The service you're looking for doesn't exist.</p>
        <Button onClick={() => navigate('/services')} variant="outline">Back to Services</Button>
      </div>
    );
  }

  const relatedServices = services
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

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
                src={service.image} 
                alt={service.name} 
                className="w-full h-auto aspect-[4/5] object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div>
            <span className="text-rose font-sans text-xs tracking-[0.2em] uppercase mb-4 block">
              {service.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-espresso mb-6">
              {service.name}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-8 text-espresso font-sans">
              <div className="flex items-center">
                <Tag className="w-5 h-5 mr-2 text-rose" />
                <span className="text-lg">From ₹{service.price}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-rose" />
                <span className="text-lg">{service.duration}</span>
              </div>
            </div>

            <p className="text-lg text-slate font-sans leading-relaxed mb-12">
              {service.description}
            </p>

            <div className="mb-12">
              <h3 className="text-xl font-serif text-espresso mb-6 border-b border-champagne pb-4">
                What's Included
              </h3>
              <ul className="space-y-4">
                {service.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start text-slate font-sans">
                    <Check className="w-5 h-5 text-rose mr-3 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-serif text-espresso mb-6 border-b border-champagne pb-4">
                Recommended For
              </h3>
              <ul className="space-y-2">
                {service.recommendedFor.map((item, idx) => (
                  <li key={idx} className="text-slate font-sans flex items-center">
                    <span className="w-1.5 h-1.5 bg-rose rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link to={`/booking?service=${service.id}`}>
              <Button size="lg" className="w-full md:w-auto">
                BOOK THIS SERVICE
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="mt-32 pt-16 border-t border-champagne/50">
            <SectionHeading 
              title="You might also like"
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map(s => (
                <Link to={`/services/${s.id}`} key={s.id} className="group flex items-center gap-4 p-4 border border-champagne hover:border-rose transition-colors bg-white">
                  <img src={s.image} alt={s.name} className="w-20 h-20 object-cover" />
                  <div>
                    <h4 className="font-serif text-espresso group-hover:text-rose transition-colors">{s.name}</h4>
                    <span className="text-sm font-sans text-slate">From ₹{s.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
