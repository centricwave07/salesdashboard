'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import AddProducts from './addProduct'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import EditProducts from './editProduct'
import DeleteProducts from './deleteProduct'
import { toast, Toaster } from 'sonner'

function ProductsList() {
  const supabase = createClient()

  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<any>([])
  const [isAdd, setIsAdd] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const [isDelete, setIsDelete] = useState(false)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)
      const { data, error, status } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: true })

      if (error && status !== 406) {
        console.log(error)
        throw error
      }

      if (data) {
        setLoading(false)
        setProducts(data)
        setIsAdd(false)
        setIsUpdate(false)
        setIsDelete(false)
      }
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoading(false)
    }
  }, [supabase])

  useEffect(() => {
    getProfile()
  }, [getProfile])

  useEffect(() => {
    if (isAdd) {
      getProfile()
      toast.success('Data added successfully!')
    }
  }, [isAdd, getProfile])
 
  useEffect(() => {
    if (isUpdate) {
      getProfile()
      toast.success('Data updated successfully!')
    }
  }, [isUpdate, getProfile])

  useEffect(() => {
    if (isDelete) {
      getProfile()
      toast.success('Data deleted successfully!')
    }
  }, [isDelete, getProfile])

  return (
    <div>
      <Toaster />
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <input
              placeholder="Search here...."
              type="text"
              name="search"
              className="border rounded-[8px] w-1/4 p-1"
            />

            <AddProducts setIsAdd={() => setIsAdd(true)} />
          </div>
        </CardHeader>
        <CardContent className="mt-4">
          {loading ? (
            <div className="flex justify-center items-center w-full">
              Not Found(404)
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products?.map((product: any, index: any) => {
                  return (
                    <TableRow key={product.id}>
                      <TableCell>#PID{index + 1}</TableCell>
                      <TableCell>{product.image}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.productname}</TableCell>
                      <TableCell>{product.status}</TableCell>
                      <TableCell>{product.amount}</TableCell>
                      <TableCell className="flex justify-end">
                        <div className="flex gap-x-4">
                          <EditProducts
                            setIsUpdate={() => setIsUpdate(true)}
                            id={product.id}
                          />
                          {/* <Trash  onClick={() => handleDeleteProduct(product.id)}/> */}
                          <DeleteProducts
                            setIsDelete={() => setIsDelete(true)}
                            id={product.id}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductsList
