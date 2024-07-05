'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { productEdit } from './action'
import { useCallback, useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Pencil } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

interface Product {
  category: string
  productname: string
  amount: string
  status: string
}

function EditProducts(props: any) {
  const supabase = createClient()

  const [isDialog, setIsDialog] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [product, setProduct] = useState<Product | null>(null)

  const getProductsDetails = useCallback(async () => {
    if (props.id) {
      const { data, error, status } = await supabase
        .from('products')
        .select('*')
        .eq('id', props.id)
      if (data && data.length > 0) {
        setProduct(data[0])
      }
    }
  }, [props.id, supabase])

  useEffect(() => {
    if (isDialog) {
      getProductsDetails()
    } else {
      setProduct(null)
    }
  }, [isDialog, supabase, getProductsDetails])

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    try {
      const result = await productEdit(formData, props.id)

      if (result.success) {
        setIsDialog(false)
        props.setIsUpdate(true)
      } else {
        setError('Something went wrong')
      }
    } catch (error) {
      console.error('Error occurred:', error)
      setError('Something went wrong')
    }
  }

  return (
    <Dialog open={isDialog} onOpenChange={() => setIsDialog(!isDialog)}>
      <DialogTrigger asChild>
        <Button variant="default">
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleFormSubmit}>
          <div className="text-center w-full">{error}</div>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input
                id="category"
                name="category"
                type="text"
                defaultValue={product?.category}
                className="col-span-3 border rounded p-1 text-xs"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="productName"
                name="productName"
                defaultValue={product?.productname}
                className="col-span-3 border rounded p-1 text-xs"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <Input
                id="amount"
                name="amount"
                defaultValue={product?.amount}
                className="col-span-3 border rounded p-1 text-xs"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <Input
                id="status"
                name="status"
                defaultValue={product?.status}
                className="col-span-3 border rounded p-1 text-xs"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant={'default'} type="submit">
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditProducts
