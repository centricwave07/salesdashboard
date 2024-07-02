import { redirect } from 'next/navigation'
import { createClient } from '../lib/supabase/client'

export default async function Home() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (user == null) {
    return redirect('/login')
  } else {
    return redirect('/dashboard')
  }
}
