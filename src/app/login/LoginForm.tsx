// 'use client'

// import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'
// import { createClient } from '../../../utils/supabase/client'

// const LoginForm = () => {
//   const supabase = createClient()
//   return (
//     <div className="flex justify-center items-center min-h-screen h-full min-w-screen w-full">
//       <div className='w-full m-5 md:w-[600px]'>
//         <Auth
//           supabaseClient={supabase}
//           appearance={{ theme: ThemeSupa }}
//           view="sign_up"
//           providers={['google', 'facebook', 'twitter']}
//           localization={{
//             variables: {
//               sign_in: {
//                 email_label: 'Email',
//                 password_label: 'Password',
//               },
//             },
//           }}
//         />
//       </div>
//     </div>
//   )
// }

// export default LoginForm

'use client'
import { Button } from '@/components/ui/button'
import { login, signup } from './actions'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen h-full min-w-screen w-full">
      <div className="w-full m-5 md:w-[600px]">
        <Card>
          <CardContent>
            <div className="py-10 md:px-6">
              <div className="text-center text-2xl font-bold underline mb-10">
                Supabase
              </div>
              <form>
                <label htmlFor="email" className="text-xs">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  required
                  className="border border-input w-full rounded p-1"
                />

                <div className="mt-4">
                  <label htmlFor="password" className="text-xs">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    required
                    className="border border-input w-full rounded p-1"
                  />
                </div>
                <div className='text-xs text-end mt-4'>
                  <Link href="#">Forgot Password</Link>
                </div>
                <div className="flex gap-x-4 mt-4">
                  <Button
                    variant={'default'}
                    className="w-full"
                    formAction={login}
                  >
                    Log in
                  </Button>
                  <Button
                    variant={'default'}
                    className="w-full"
                    formAction={signup}
                  >
                    Sign up
                  </Button>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
