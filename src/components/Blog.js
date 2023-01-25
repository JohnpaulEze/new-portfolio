import React from "react";

const Blog = () => {
  const post = [
    {
      img: "https://res.cloudinary.com/johnpaul/image/upload/v1674579271/blog-images/black-friday-sales_t0yjrv.jpg",
      title: "Modern e-commerce with Xata and Cloudinary",
      url: "https://dev.to/hackmamba/modern-e-commerce-with-xata-and-cloudinary-foc",
    },
    {
      img: "https://res.cloudinary.com/johnpaul/image/upload/v1674579504/blog-images/dragndrop_enzctl.jpg",
      title: "Drag and Drop Image uploader using React-dropzone and Cloudinary",
      url: "https://dev.to/johnpaul/drag-and-drop-image-uploader-using-react-dropzone-and-cloudinary-4a8n",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
            Blogs
          </h2>

          <p className="text-1.5xl lg:text-1.5xl">Some of my best blogs.</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {post.map((item) => {
          return (
            <div>
              <img src={item.img} alt={item.title} />
              <h3 className="py-5 text-2xl">{item.title}</h3>
              <a
                href={item.url}
                className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
