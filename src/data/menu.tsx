import { BarChart2, LayoutDashboard, LineChart, LogOut, MessageSquareMore, Settings, ShoppingBag, ShoppingCart } from "lucide-react"

interface MenuInterface {
  title: string
  url: string
  pathname: string
  icon: any
  // inactiveIcon: any
}

export const menu: MenuInterface[] = [
  {
    title: 'Dashboard',
    pathname: 'dashboard',
    url: '/dashboard',
    icon: LayoutDashboard
    // icon: 'images/sidebar/dashboard.svg',
    // inactiveIcon: 'images/sidebar/dashboardInactive.svg',
  },
  {
    title: 'Leaderboard',
    pathname: 'leaderboard',
    url: '/leaderboard',
    icon: BarChart2
    // icon: 'images/sidebar/bar.svg',
    // inactiveIcon: 'images/sidebar/barInactive.svg',
  },
  {
    title: 'Order',
    pathname: 'order',
    url: '/order',
    icon: ShoppingCart
    // icon: 'images/sidebar/order.svg',
    // inactiveIcon: 'images/sidebar/orderInactive.svg',
  },
  {
    title: 'Products',
    pathname: 'products',
    url: '/products',
    icon: ShoppingBag
    // icon: 'images/sidebar/products.svg',
    // inactiveIcon: 'images/sidebar/productsInactive.svg',
  },
  {
    title: 'Sales Report',
    pathname: 'sales-report',
    url: '/sales-report',
    icon: LineChart
    // icon: 'images/sidebar/salesReport.svg',
    // inactiveIcon: 'images/sidebar/salesReportInactive.svg',
  },
  {
    title: 'Messages',
    pathname: 'messages',
    url: '/messages',
    icon: MessageSquareMore
    // icon: 'images/sidebar/message.svg',
    // inactiveIcon: 'images/sidebar/messageInactive.svg',
  },
  {
    title: 'Settings',
    pathname: 'settings',
    url: '/settings',
    icon: Settings
    // icon: 'images/sidebar/settings.svg',
    // inactiveIcon: 'images/sidebar/settingsInactive.svg',
  },
  {
    title: 'Sign Out',
    pathname: 'sign-out',
    url: '/sign-out',
    icon: LogOut
    // icon: 'images/sidebar/logout.svg',
    // inactiveIcon: 'images/sidebar/logoutInactive.svg',
  },
]
