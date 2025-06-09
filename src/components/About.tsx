
const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-genesis-darkGray">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tight mb-4">
                ABOUT
              </h2>
              <h3 className="text-xl lg:text-2xl font-light text-genesis-lightGray tracking-wide">
                Creative Vision Meets Technical Excellence
              </h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-genesis-lightGray">
                Genesis is a collective of visionary creatives who push the boundaries of video production. 
                We craft compelling narratives that resonate with audiences and drive meaningful engagement.
              </p>
              
              <p className="text-lg leading-relaxed text-genesis-lightGray">
                From concept to completion, we deliver premium video content that elevates brands and 
                tells stories that matter. Our team combines artistic vision with cutting-edge technology 
                to create immersive experiences.
              </p>
            </div>
            
            <div className="flex space-x-8 text-sm font-medium">
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-genesis-lightGray">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5</div>
                <div className="text-genesis-lightGray">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold">25+</div>
                <div className="text-genesis-lightGray">Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop&crop=center"
              alt="Creative team at work"
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg hover-scale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
