import { redirect } from 'next/navigation'
import { createClient } from '../../lib/supabase/server'
import ProductsList from './products'

export default async function Index() {

  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  
  if (error || !data?.user) {
    redirect('/login')
  }

  return(
    <ProductsList />
  )
}
