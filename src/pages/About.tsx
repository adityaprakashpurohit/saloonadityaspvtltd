import { SectionHeading } from '../components/SectionHeading';

const About = () => {
  return (
    <div className="w-full pt-24 bg-ivory">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bfcfaa6362f?auto=format&fit=crop&q=80&w=2000" 
            alt="Salon Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Beauty With Intention.</h1>
          <p className="text-xl text-white/90 font-sans max-w-2xl mx-auto leading-relaxed">
            Lumière was created from a belief that beauty should never feel rushed. Every appointment is an opportunity to pause, connect, and leave feeling more like yourself.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Philosophy"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "PERSONAL", desc: "Every service begins with understanding you." },
              { title: "PRECISE", desc: "We care about every detail." },
              { title: "AUTHENTIC", desc: "Your beauty should feel like you." },
              { title: "TIMELESS", desc: "We create looks that stay beautiful beyond trends." }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto border-2 border-rose rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-2xl text-espresso">{i + 1}</span>
                </div>
                <h3 className="font-serif text-xl text-espresso mb-3">{value.title}</h3>
                <p className="font-sans text-slate">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000" 
                alt="Hair Styling"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div>
              <SectionHeading 
                align="left"
                label="Our Story"
                title="A space for self-care and artistry."
              />
              <div className="space-y-6 font-sans text-slate text-lg leading-relaxed">
                <p>
                  Founded with a vision to redefine the salon experience, Lumière blends luxury with a warm, welcoming environment. We believe that true beauty shines when you feel completely at ease.
                </p>
                <p>
                  Our team of master stylists, colorists, and artists are dedicated to their craft. They continually refine their techniques to bring you the highest standard of service, using only premium, carefully selected products.
                </p>
                <p>
                  Whether you are seeking a subtle refresh or a complete transformation, we invite you to experience the Lumière difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
