'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../../lib/supabase/server'

// import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)


  // if (error) {
  //   redirect('/error')
  // }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = createClient()
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  try {
    const { error: signUpError, data } = await supabase.auth.signUp({
      email,
      password,
    })

    if (signUpError) {
      console.error('Sign up error:', signUpError)
      // return;
    }

    // const { data } = await supabase.auth.getUser()

    const profileData = {
      id: data?.user?.id,
      first_name: 'Komal',
      last_name: 'Suthar',
      email: email,
    };

    const { error: insertError } = await supabase.from('profiles').insert([profileData]);

    if (insertError) {
      throw insertError; // Throw error if insertion fails
    }

    // Redirect after successful signup and profile creation
    redirect('/dashboard')

  } catch (error) {
    console.error('Error in signup:', error)
    // Redirect to error page or handle error as needed
  }
}

