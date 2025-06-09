
const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Brand Story Campaign',
      description: 'A cinematic brand story that redefined luxury retail.',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop&crop=center',
      category: 'Branding'
    },
    {
      id: 2,
      title: 'Tech Product Launch',
      description: 'High-energy product reveal with dynamic motion graphics.',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop&crop=center',
      category: 'Motion'
    },
    {
      id: 3,
      title: 'Documentary Series',
      description: 'Award-winning documentary exploring sustainable design.',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center',
      category: 'Direction'
    },
    {
      id: 4,
      title: 'Fashion Campaign',
      description: 'Editorial fashion campaign with bold visual storytelling.',
      thumbnail: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop&crop=center',
      category: 'Design'
    },
    {
      id: 5,
      title: 'Corporate Identity',
      description: 'Complete rebrand and visual identity for Fortune 500 company.',
      thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&crop=center',
      category: 'Branding'
    },
    {
      id: 6,
      title: 'Music Video',
      description: 'Artistic music video with experimental visual techniques.',
      thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop&crop=center',
      category: 'Motion'
    }
  ];

  return (
    <section id="work" className="py-24 px-6 lg:px-8 bg-genesis-darkGray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-black tracking-tight mb-4">
            WORK
          </h2>
          <p className="text-xl text-genesis-lightGray max-w-2xl mx-auto">
            Selected projects that showcase our creative range
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-genesis-gray cursor-pointer"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-sm font-medium text-genesis-lightGray mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-genesis-lightGray leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              <div className="p-6 lg:opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-sm font-medium text-genesis-lightGray mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-genesis-lightGray leading-relaxed lg:hidden group-hover:block">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
