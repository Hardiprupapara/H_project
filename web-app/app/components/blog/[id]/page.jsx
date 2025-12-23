'use client'
import { useParams } from 'next/navigation';
const Blog = () => {
  const { id } = useParams();// Replace with actual dynamic parameter retrieval
  return (
    <div>
      <h2>this blog number is {id}</h2>
    </div>
  )
}

export default Blog
