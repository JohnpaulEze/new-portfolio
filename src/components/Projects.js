import React from "react";
import eatsimple from "../assets/eatsimple.png";
import sanity from "../assets/sanity.png";
import blogpage from "../assets/blogpage.png";
import accessibility from "../assets/accessibility.png";
import chatapp from "../assets/chatapp.png";
import todo from "../assets/todo.png";

const Projects = () => {
  const projects = [
    {
      img: sanity,
      title: "Jamstack e-commerce site",
      desc: " interactive product media gallery built with Sanity, Cloudinary, Netlify and Next.js ",
      live: "https://codesandbox.io/s/sanity-netlify-cloudinary-ecomm-r2pfgf",
      code: "https://github.com/JohnpaulEze/sanity-netlify-cloudinary-ecomm",
    },
    {
      img: blogpage,
      title: "eatsiple",
      desc: "personal blog app built with Next.js and chakra ui",
      live: "https://operas-blog.netlify.app/blog",
      code: "https://github.com/JohnpaulEze/next-chakra-blog",
    },
    {
      img: eatsimple,
      title: "eat simple",
      desc: "Food ordering app with flutterwave payment integration built with Javascript and vanilla CSS",
      live: "https://eat-simple.netlify.app/",
      code: "https://github.com/JohnpaulEze/eat-simple",
    },
    {
      img: todo,
      title: "Todo-app",
      desc: "A Todo app with add/remove task options built with React and Vanilla CSS",
      live: "https://operas-chat-app.netlify.app/",
      code: "https://github.com/JohnpaulEze/My-TodoApp",
    },
    {
      img: chatapp,
      title: "Chat app",
      desc: "An interactive chat application built with Next.js and Chatengine.io",
      live: "https://operas-chat-app.netlify.app/",
      code: "https://github.com/JohnpaulEze/my-chat-app",
    },
    {
      img: accessibility,
      title: "optimized assets",
      desc: "improve the accessibility of media assets using Cloudinary and Next.js.",
      live: "https://codesandbox.io/s/purple-dust-5klbu7?file=/",
      code: "https://github.com/JohnpaulEze/next-media-assets",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="text-1xl lg:text-1.5xl">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
