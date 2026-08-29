import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const pricingCategories = [
    {
      title: 'Hair Design',
      items: [
        { name: 'Signature Haircut', price: '₹1,200+', desc: 'Includes wash & blow dry' },
        { name: 'Men\'s Precision Cut', price: '₹800+', desc: 'Includes wash & styling' },
        { name: 'Blow Dry & Styling', price: '₹600+', desc: 'Classic or voluminous' },
        { name: 'Updo / Event Styling', price: '₹1,500+', desc: 'Special occasion styling' },
      ]
    },
    {
      title: 'Color Studio',
      items: [
        { name: 'Global Color', price: '₹2,500+', desc: 'Single process color' },
        { name: 'Root Touch Up', price: '₹1,500+', desc: 'Up to 1 inch of regrowth' },
        { name: 'Balayage / Ombre', price: '₹4,500+', desc: 'Hand-painted highlights' },
        { name: 'Foil Highlights', price: '₹3,000+', desc: 'Half or full head' },
      ]
    },
    {
      title: 'Treatments',
      items: [
        { name: 'Keratin Smoothing', price: '₹3,500+', desc: 'Frizz reduction' },
        { name: 'Luxury Hair Spa', price: '₹1,500+', desc: 'Deep conditioning & massage' },
        { name: 'Olaplex Bond Builder', price: '₹2,000+', desc: 'Damage repair treatment' },
        { name: 'Scalp Detox', price: '₹1,200+', desc: 'Exfoliation and cleansing' },
      ]
    },
    {
      title: 'Beauty & Nails',
      items: [
        { name: 'Party Makeup', price: '₹2,000+', desc: 'Event ready look' },
        { name: 'Bridal Makeup', price: '₹8,000+', desc: 'Complete bridal package' },
        { name: 'Classic Manicure', price: '₹500+', desc: 'Shaping & polish' },
        { name: 'Luxury Pedicure', price: '₹900+', desc: 'Scrub, mask & massage' },
      ]
    }
  ];

  return (
    <div className="w-full pt-24 bg-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading 
          title="Simple, Transparent Pricing."
          subtitle="Invest in yourself with our premium, carefully curated services."
          className="mb-16"
        />

        <div className="space-y-16">
          {pricingCategories.map((category, idx) => (
            <div key={idx} className="bg-white p-8 md:p-12 border border-champagne">
              <h3 className="text-3xl font-serif text-espresso mb-8 pb-4 border-b border-champagne">
                {category.title}
              </h3>
              <ul className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
                    <div className="flex flex-col">
                      <span className="text-xl font-serif text-espresso mb-1">{item.name}</span>
                      <span className="text-sm font-sans text-slate">{item.desc}</span>
                    </div>
                    <div className="mt-2 sm:mt-0 flex-shrink-0">
                      <span className="text-xl font-sans font-medium text-rose">{item.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-slate font-sans text-sm italic">
          * Prices may vary depending on hair length, product requirements, and service complexity. A definitive quote will be provided during your consultation.
        </div>
        
        <div className="mt-16 text-center">
           <Link to="/booking">
             <Button size="lg">BOOK AN APPOINTMENT</Button>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
