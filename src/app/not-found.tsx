import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex justify-center items-center'>
      <Card className="lg:w-2/4 w-full">
        <CardContent className="pt-5 flex justify-center items-center text-center">
          <div>
            <h2 className='text-9xl font-semibold'>404</h2>
            <h2 className='text-3xl font-semibold'>Not Found</h2>
            <Link href="/" className='cursor-pointer underline'>Return Home</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}