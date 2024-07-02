import Login from '@/app/login/page'
import SidebarComponent from '../ui/sidebar'
import { createClient } from '../../lib/supabase/server'

async function Sidebar(props: any) {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()


  return (
    <div>
      {user ? <SidebarComponent user={user} pages={props.pages} /> : <Login />}
    </div>
  )
}

export default Sidebar
