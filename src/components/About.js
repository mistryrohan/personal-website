import React from 'react';

const About = () => {
  return (
    <section id="about" className="mx-auto mt-[60px] mb-20 max-w-3xl px-6">
      <div className="text-center">
        <h2 className="mb-8 hidden text-4xl font-bold text-white md:block">
          Welcome to my website!
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>
            I am a developer who loves to learn about new tech and using it
            in real projects. If you want to chat or connect, I would love to hear
            from you!
          </p>

          <p>
            Outside of building things, I follow soccer and basketball, I enjoy
            going to concerts, and I am always curious about better ways to
            understand the world around me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
