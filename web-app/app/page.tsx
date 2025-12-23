import Image from "next/image";
import Link from "next/link";

export default function Home() {
   const blogs = [
    { id: 1, title: "Blog One" },
    { id: 2, title: "Blog Two" },
    { id: 3, title: "Blog Three" },
  ];
  return (
    <div className="container">
      <div>
        <h2 className="text-4xl text-center">welcome to the app </h2>
        <Link href="/components/about">About Page</Link>

        {/* dynamic routing start */}
        <div className="blogs">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-item">
              <Link href={`/components/blog/${blog.id}`}>{blog.title}</Link>
            </div>
          ))}
        </div>
        {/* dynamic routing end */}

        
      </div>
    </div>
  );
}
