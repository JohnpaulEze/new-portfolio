import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="text-3xl lg:text-2xl">
            Hi, My Name Is Johnpaul Eze everyone calls me Johnpaul. I am a
            Frontend Developer and a Technical writer. I build beautifull websites with Modern technologies.
          </p>
          <p className="text-3xl lg:text-2xl">
            I am proficient in Frontend skills like React.js, Vue.js, Next.js,
            Nuxt.js, Axios, Tailwind CSS, SaSS, Css3 and many more.
          </p>

          <p className="text-3xl lg:text-2xl">In backend I know Node.js, Express.js, MongoDB, and Mongoose. I'm also proficient in Headless CMSs</p>

          <p className="text-3xl lg:text-2xl">
            In my spare time I write blogs on my Blog.
            Where I talk about programming theory and build various projects.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
