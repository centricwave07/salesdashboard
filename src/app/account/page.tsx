import { createClient } from '../../lib/supabase/server'
import AccountForm from './account-form'

export default async function Account() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return <AccountForm user={user} />
}