import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <h2 className=''>Not Found</h2>
      
      <Link href="/">Return Home</Link>
    </div>
  )
}