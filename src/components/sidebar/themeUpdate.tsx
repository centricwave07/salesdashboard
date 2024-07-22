import { Fragment } from 'react'
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { useTheme } from 'next-themes'
import { useThemeContext } from '@/lib/themeContext'
import { cn } from '@/lib/utils'

const availableThemeColors = [
  { name: 'Default', light: 'bg-zinc-900', dark: 'bg-zinc-700' },
  { name: 'Rose', light: 'bg-rose-600', dark: 'bg-rose-700' },
  { name: 'Blue', light: 'bg-blue-600', dark: 'bg-blue-700' },
  { name: 'Green', light: 'bg-green-600', dark: 'bg-green-500' },
  { name: 'Orange', light: 'bg-orange-500', dark: 'bg-orange-700' },
]

const ThemeUpdate = () => {
  const { setTheme, theme } = useTheme()
  const { themeColor, setThemeColor } = useThemeContext()

  const createSelectItems = () => {
    return availableThemeColors.map(({ name, light, dark }) => (
      <SelectItem key={name} value={name}>
        <div className="flex item-center space-x-3">
          <div
            className={cn(
              'rounded-full',
              'w-[20px]',
              'h-[20px]',
              theme === 'light' ? light : dark,
            )}
          ></div>
          <div className="text-sm">{name}</div>
        </div>
      </SelectItem>
    ))
  }

  return (
    <Fragment>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      <Select
        onValueChange={(value) => setThemeColor(value as ThemeColors)}
        defaultValue={themeColor}
      >
        <SelectTrigger className="w-[180px] ring-offset-transparent focus:ring-transparent">
          <SelectValue placeholder="Select Color" />
        </SelectTrigger>
        <SelectContent className="border-muted">
          {createSelectItems()}
        </SelectContent>
      </Select>
    </Fragment>
  )
}

export default ThemeUpdate
