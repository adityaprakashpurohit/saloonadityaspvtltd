import { SectionHeading } from '../components/SectionHeading';
import { StylistCard } from '../components/StylistCard';
import { stylists } from '../data/stylists';

const Stylists = () => {
  return (
    <div className="w-full pt-24 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading 
          title="Meet Your Artists."
          subtitle="Our team of master stylists, colorists, and artists are dedicated to their craft."
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stylists.map(stylist => (
            <StylistCard key={stylist.id} stylist={stylist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stylists;
