'use client'
import { useCallback, useEffect, useState } from 'react'
import { type User } from '@supabase/supabase-js'
import { createClient } from '../../lib/supabase/client'

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<{} | null>(null)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)
      const { data, error, status } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        console.log(error)
        throw error
      }

      if (data) {
        setData(data)

      }
    } catch (error) {
      console.log("error", error)
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])


  // console.log("data:", data)
  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email : {user?.email}</label><br />
        <label htmlFor="role">Role : {user?.role}</label><br />
        <label htmlFor="email">Phone :{user?.phone}</label><br />
      </div>
     

     
      <div>
        <form action="/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  )
}