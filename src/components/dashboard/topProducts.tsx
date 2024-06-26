import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const products = [
  {
    id: '01',
    name: 'Home Decor Range',
    popularity: 80,
    sales: '45%',
    color: '#0095FF',
    opacity: '#CDE7FF',
  },
  {
    id: '02',
    name: "Disney Princess Pink Bag 18'",
    popularity: 60,
    sales: '29%',
    color: '#00E096',
    opacity: '#8CFAC7',
  },
  {
    id: '03',
    name: 'Bathroom Essentials',
    popularity: 50,
    sales: '18%',
    color: '#884DFF',
    opacity: '#C5A8FF',
  },
  {
    id: '04',
    name: 'Apple Smartwatches',
    popularity: 30,
    sales: '25%',
    color: '#FF8F0D',
    opacity: '#FFD5A4',
  },
]

function TopProducts() {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Popularity</TableHead>
          <TableHead>Sales</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products &&
          products?.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>
                <div
                  className="w-full rounded-full h-1"
                  style={{ backgroundColor: product.opacity }}
                >
                  <div
                    className=" h-1 rounded-full"
                    style={{
                      width: product.popularity,
                      backgroundColor: product.color,
                    }}
                  ></div>
                </div>
              </TableCell>
              <TableCell>
                <span
                  className="text-xs font-medium me-2 px-2.5 py-0.5 rounded border"
                  style={{
                    backgroundColor: product.opacity,
                    borderColor: product.color,
                    color: product.color,
                  }}
                >
                  {product.sales}
                </span>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}

export default TopProducts
