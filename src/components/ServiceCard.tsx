import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Service } from '../data/types';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group flex flex-col bg-white border border-champagne/40 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-500 ease-out">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-sans tracking-widest uppercase text-espresso">
          {service.category}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif text-espresso mb-3">{service.name}</h3>
        <p className="text-slate text-sm font-sans mb-6 flex-grow line-clamp-2 leading-relaxed">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-champagne/40">
          <div className="flex flex-col">
            <span className="text-xs text-slate uppercase tracking-wider mb-1">Starting from</span>
            <span className="text-lg font-serif text-espresso">₹{service.price}</span>
          </div>
          <Link 
            to={`/services/${service.id}`}
            className="inline-flex items-center text-sm font-medium text-rose group/btn"
          >
            <span className="mr-2">View Details</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
