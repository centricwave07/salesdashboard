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
import { productAdd } from './action'
import { useState } from 'react'
import { Input } from '@/components/ui/input'

function AddProducts(props: any) {
  const [isDialog, setIsDialog] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    try {
      const result = await productAdd(formData);
    
      if (result.success) {
        setIsDialog(false);
        props.setIsAdd(true)
      } else {
        setError("Something went wrong");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setError("Something went wrong");
    }
    
  };

  return (
    <Dialog open={isDialog} onOpenChange={() => setIsDialog(!isDialog)}>
      <DialogTrigger asChild>
        <Button variant="default">+ Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleFormSubmit}>
          <div className='text-center w-full'>{error}</div>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input
                id="category"
                name="category"
                type="text"
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
                className="col-span-3 border rounded p-1 text-xs"
              />
            </div>
          </div>
          <div className='flex justify-end'>
            <Button variant={'default'} type="submit">
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}


// export const getServerSideProps = (async(formData: FormData) => {
//   const supabase = createClient()

//   const product = {
//     category: formData.get('category') as string,
//     productname: formData.get('productName') as string,
//     amount: formData.get('amount') as string,
//     status: formData.get('status') as string,
//   }

//   const add = await supabase.from('products').insert([product]);


//     console.log("Error", add)
  
//   revalidatePath('/', 'layout')
//   redirect('/products')

// })
export default AddProducts
