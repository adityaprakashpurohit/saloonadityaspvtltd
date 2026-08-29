import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/services';
import { Search } from 'lucide-react';

const Services = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Hair', 'Color', 'Treatments', 'Makeup', 'Nails', 'Bridal'];

  const filteredServices = services.filter(service => {
    const matchesCategory = filter === 'All' || service.category === filter;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full pt-24 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading 
          title="Our Services"
          subtitle="Explore our curated selection of premium beauty treatments."
          className="mb-12"
        />

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm font-sans rounded-full transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-espresso text-ivory' 
                    : 'bg-white border border-champagne text-espresso hover:border-rose hover:text-rose'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search services..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-champagne px-4 py-2 pl-10 rounded-sm font-sans text-sm focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate" />
          </div>
        </div>

        {/* Service Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h3 className="text-2xl font-serif text-espresso mb-3">No services found</h3>
            <p className="text-slate font-sans">Try selecting a different category or refining your search term.</p>
            <button 
              onClick={() => { setFilter('All'); setSearchQuery(''); }}
              className="mt-6 text-rose hover:text-espresso font-medium transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
