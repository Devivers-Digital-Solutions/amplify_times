
const Services = () => {
  const services = [
    {
      title: 'Branding',
      description: 'Strategic brand identity and visual storytelling that connects with your audience.',
      icon: '🎨'
    },
    {
      title: 'Motion',
      description: 'Dynamic motion graphics and animations that bring your ideas to life.',
      icon: '🎬'
    },
    {
      title: 'Design',
      description: 'Clean, purposeful design solutions that communicate effectively.',
      icon: '✨'
    },
    {
      title: 'Direction',
      description: 'Creative direction that ensures every project delivers maximum impact.',
      icon: '🎯'
    },
    {
      title: 'Editing',
      description: 'Post-production excellence with attention to every detail.',
      icon: '✂️'
    },
    {
      title: 'Consulting',
      description: 'Strategic guidance to optimize your creative and production workflows.',
      icon: '💡'
    }
  ];

  return (
    <section id="services" className="py-24 px-6 lg:px-8 bg-genesis-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-black tracking-tight mb-4">
            SERVICES
          </h2>
          <p className="text-xl text-genesis-lightGray max-w-2xl mx-auto">
            Comprehensive creative solutions for modern brands
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-genesis-darkGray p-8 rounded-lg hover:bg-genesis-gray transition-all duration-300 hover-scale cursor-pointer"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-genesis-white transition-colors">
                {service.title}
              </h3>
              <p className="text-genesis-lightGray leading-relaxed group-hover:text-genesis-white transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
