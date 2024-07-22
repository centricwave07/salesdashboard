import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { FilterIcon } from 'lucide-react'
import products from '@/data/products.json'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import Image from 'next/image'
import AddEditProduct from "./addEditProduct";

function Products() {
  return (
    <div>
      <Card className="">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between items-center gap-x-2">
              <div className="w-1/3">
                <Input placeholder="Search here...." />
              </div>
              <div className="flex gap-x-2">
                <AddEditProduct />
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <FilterIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel className='cursor-pointer'>All</DropdownMenuLabel>
                    <DropdownMenuLabel className='cursor-pointer'>Active</DropdownMenuLabel>
                    <DropdownMenuLabel className='cursor-pointer'>Inactive</DropdownMenuLabel>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <div className="mx-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price(INR)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((o, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>
                      <Image
                        src={o.image}
                        alt="product"
                        height={100}
                        width={100}
                        className='h-[100px] w-[100px]'
                      />
                    </TableCell>
                    <TableCell className='capitalize'>{o.name}</TableCell>
                    <TableCell className='capitalize'>{o.status}</TableCell>
                    <TableCell>{o.price}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
        <Pagination className="flex justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Card>
    </div>
  )
}

export default Products
