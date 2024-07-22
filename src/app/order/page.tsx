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
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { FilterIcon } from 'lucide-react'
import order from '@/data/orders.json'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

function Order() {
  return (
    <div>
      <Card className="">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between items-center gap-x-2">
              <div className="w-1/3">
                <Input placeholder="Search here...." />
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <FilterIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Complete</DropdownMenuLabel>
                    <DropdownMenuLabel>Pending</DropdownMenuLabel>
                    <DropdownMenuLabel>Inprogress</DropdownMenuLabel>
                    <DropdownMenuLabel>Placed</DropdownMenuLabel>
                    <DropdownMenuLabel>Confirmed</DropdownMenuLabel>
                    <DropdownMenuLabel>Received</DropdownMenuLabel>
                    <DropdownMenuLabel>Delivered</DropdownMenuLabel>
                    <DropdownMenuLabel>Return/Exchange</DropdownMenuLabel>
                    <DropdownMenuLabel>Refund/Exchange</DropdownMenuLabel>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total(INR)</TableHead>
              <TableHead>Last Update</TableHead>
              <TableHead>Owner</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {order.map((o, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>
                    <div>{o.product_id}</div>
                    <div>QTY: {o.qty}</div>
                  </TableCell>
                  <TableCell>{o.status}</TableCell>
                  <TableCell>{o.total}</TableCell>
                  <TableCell>{o.last_update}</TableCell>
                  <TableCell>{o.name}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        <Pagination className='flex justify-end'>
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

export default Order
