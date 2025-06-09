
const Contact = () => {
  const socialLinks = [
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'Vimeo', url: '#', icon: '🎬' }
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-genesis-darkGray">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl lg:text-7xl font-black tracking-tight mb-8">
          CONTACT
        </h2>
        
        <p className="text-xl text-genesis-lightGray mb-12 max-w-2xl mx-auto">
          Ready to create something extraordinary? Let's start a conversation.
        </p>
        
        <div className="space-y-8">
          <div>
            <p className="text-genesis-lightGray mb-4">Get in touch</p>
            <a 
              href="mailto:hello@genesis-studio.com"
              className="text-2xl lg:text-3xl font-mono font-medium hover:text-genesis-lightGray transition-colors duration-200"
            >
              hello@genesis-studio.com
            </a>
          </div>
          
          <div className="flex justify-center space-x-8 pt-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="flex items-center space-x-2 text-genesis-lightGray hover:text-white transition-colors duration-200 group"
              >
                <span className="text-xl">{social.icon}</span>
                <span className="font-medium group-hover:underline">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
