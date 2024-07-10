'use server'

import { Card } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/server'
import WhatsAppChat from './whatsapp'

export default async function Index() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const data  = supabase.auth.getSession();

  return (
    <Card>
      <div className="p-8">
        {user && <WhatsAppChat />}
      </div>
    </Card>
  )
}
