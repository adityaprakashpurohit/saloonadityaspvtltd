import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Stylist } from '../data/types';

interface StylistCardProps {
  stylist: Stylist;
}

export const StylistCard: React.FC<StylistCardProps> = ({ stylist }) => {
  return (
    <div className="group relative overflow-hidden bg-ivory">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={stylist.image} 
          alt={stylist.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-80" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500">
        <h3 className="text-3xl font-serif text-white mb-1">{stylist.name}</h3>
        <p className="text-rose text-sm font-sans uppercase tracking-widest mb-4">
          {stylist.role}
        </p>
        
        <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <div className="flex flex-wrap gap-2 mb-6">
            {stylist.specialties.map((specialty, index) => (
              <span 
                key={index}
                className="text-xs text-white/90 font-sans px-3 py-1 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm"
              >
                {specialty}
              </span>
            ))}
          </div>
          
          <Link 
            to={`/stylists/${stylist.id}`}
            className="inline-flex items-center text-sm font-medium text-white hover:text-rose transition-colors"
          >
            <span className="mr-2 tracking-wider">VIEW PROFILE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
