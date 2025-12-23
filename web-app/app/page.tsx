"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import Form from "./components/form/page";

export default function Home() {


  // this query function use for fetch data from backend server (start fnction)

  const query = useQuery({ queryKey: ['todos'], queryFn: () => fetch('http://localhost:5000/api/users').then(res => res.json()) });
  // end of query function

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

        {/* form start */}
        <div>
          <Form/>
        </div>
        {/* form end */}

        {/* query data fetch and maping */}

        {query.isPending && <p>Loading...</p>}

        {query.isError && <p>Error: {query.error?.message}</p>}

        {query.data && query.data.length > 0 && (
          <div>
            <h3 className="text-2xl mt-4">Users:</h3>
            <ul>
              {query.data.map((user:any) => (
                <li key={user._id}>{user.name} - {user.email}</li>
              ))}
            </ul>
          </div>
        )}



      </div>
    </div>
  );
}
