
const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Video Production',
      excerpt: 'Exploring emerging technologies and techniques shaping the industry.',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop&crop=center',
      date: 'Dec 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Crafting Compelling Brand Stories',
      excerpt: 'How to create narratives that resonate with your target audience.',
      thumbnail: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop&crop=center',
      date: 'Nov 2024',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Behind the Scenes: Genesis Process',
      excerpt: 'An inside look at our creative workflow and production methodology.',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop&crop=center',
      date: 'Nov 2024',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Color Grading Mastery',
      excerpt: 'Professional techniques for achieving cinematic color aesthetics.',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&crop=center',
      date: 'Oct 2024',
      readTime: '10 min read'
    }
  ];

  return (
    <section id="blog" className="py-24 px-6 lg:px-8 bg-genesis-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-black tracking-tight mb-4">
            BLOG
          </h2>
          <p className="text-xl text-genesis-lightGray max-w-2xl mx-auto">
            Insights, tutorials, and industry perspectives
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-genesis-darkGray rounded-lg overflow-hidden hover-scale cursor-pointer"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-genesis-lightGray mb-3 space-x-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-genesis-white transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-genesis-lightGray leading-relaxed group-hover:text-genesis-white transition-colors">
                  {post.excerpt}
                </p>
                
                <div className="mt-4 text-sm font-medium group-hover:text-genesis-white transition-colors">
                  Read More →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
