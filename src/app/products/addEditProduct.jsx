import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function AddEditProduct() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex justify-center items-center border rounded px-3 py-1">
          <Plus className="h-4 w-4" />{' '}
          <span className="text-sm font-semibold">Product</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>
            <Input type="text" placeholder="Enter product name" name="name" />
            <Input type="text" placeholder="Enter product price" name="price" />
            <Input type="text" placeholder="Enter product quantity" name="qty" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="deactive">Deactive</SelectItem>
              </SelectContent>
            </Select>
          </DialogDescription>
        </DialogHeader>
        <Button variant="default" className="">
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default AddEditProduct
