import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { offers } from '../data/offers';
import { Link } from 'react-router-dom';

const Offers = () => {
  return (
    <div className="w-full pt-24 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading 
          title="A Little Something Extra."
          subtitle="Exclusive packages and seasonal offers designed just for you."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {offers.map(offer => (
            <div key={offer.id} className="bg-white border border-champagne p-8 flex flex-col hover:border-rose transition-colors">
              <div className="text-4xl font-serif text-rose mb-4">{offer.discount}</div>
              <h3 className="text-2xl font-serif text-espresso mb-4">{offer.title}</h3>
              <p className="text-slate font-sans mb-8 flex-grow">{offer.description}</p>
              <Link to="/booking">
                <Button variant="outline" className="w-full">BOOK OFFER</Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Beauty Packages */}
        <SectionHeading 
          title="Signature Packages"
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "GLOW",
              price: "2,999",
              includes: ["Hair Spa", "Classic Manicure", "Luxury Pedicure"]
            },
            {
              title: "SIGNATURE",
              price: "5,999",
              includes: ["Precision Haircut", "Luxury Hair Spa", "Express Facial", "Classic Manicure"]
            },
            {
              title: "BRIDAL PREP",
              price: "12,999",
              includes: ["Hair Treatment", "Radiance Facial", "Luxury Mani & Pedi", "Makeup Trial"]
            }
          ].map((pkg, idx) => (
            <div key={idx} className="bg-espresso text-white p-8 flex flex-col border border-espresso hover:border-rose transition-colors">
              <h3 className="text-2xl font-serif text-rose mb-2 uppercase tracking-widest">{pkg.title}</h3>
              <div className="text-3xl font-sans font-light mb-8">₹{pkg.price}</div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="font-sans text-sand/90 flex items-center">
                    <span className="w-1 h-1 bg-rose rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link to="/booking">
                <Button variant="secondary" className="w-full">BOOK PACKAGE</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
