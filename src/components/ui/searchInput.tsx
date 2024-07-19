import * as React from 'react'

import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <Search className='text-theme' />
        </span>
        <input
          type={type}
          className={cn(
            'flex h-[60px] w-full pl-12 pr-4 rounded-md bg-background text-[#737791] text-lg leading-[27px] font-normal ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)
SearchInput.displayName = 'SearchInput'

export { SearchInput }
