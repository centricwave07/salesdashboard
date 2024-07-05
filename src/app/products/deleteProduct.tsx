'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { productDelete } from './action'
import { useState } from 'react'
import { Trash } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

function DeleteProducts(props: any) {
  const supabase = createClient()

  const [isDialog, setIsDialog] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFormSubmit = async () => {
    try {
      const result = await productDelete(props.id)

      if (result.success) {
        setIsDialog(false)
        props.setIsDelete(true)
      } else {
        setError('Something went wrong')
      }
    } catch (error) {
      setError('Something went wrong')
    }
  }

  return (
    <Dialog open={isDialog} onOpenChange={() => setIsDialog(!isDialog)}>
      <DialogTrigger asChild>
        <Button variant="default">
          <Trash />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <div>Are you sure you want to delete data</div>
          </DialogTitle>
        </DialogHeader>
        <div className="flex gap-x-5 justify-end mt-5">
          <Button onClick={() => setIsDialog(false)}>Cancel</Button>
          <Button onClick={handleFormSubmit}>Yes</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteProducts
