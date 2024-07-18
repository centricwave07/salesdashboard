
interface MenuInterface {
  title: string
  url: string
  pathname: string
  icon: any
  inactiveIcon: any
}

export const menu: MenuInterface[] = [
  {
    title: 'Dashboard',
    pathname: 'dashboard',
    url: '/dashboard',
    icon: 'images/sidebar/dashboard.svg',
    inactiveIcon: 'images/sidebar/dashboardInactive.svg',
  },
  {
    title: 'Leaderboard',
    pathname: 'leaderboard',
    url: '/leaderboard',
    icon: 'images/sidebar/bar.svg',
    inactiveIcon: 'images/sidebar/barInactive.svg',
  },
  {
    title: 'Order',
    pathname: 'order',
    url: '/order',
    icon: 'images/sidebar/order.svg',
    inactiveIcon: 'images/sidebar/orderInactive.svg',
  },
  {
    title: 'Products',
    pathname: 'products',
    url: '/products',
    icon: 'images/sidebar/products.svg',
    inactiveIcon: 'images/sidebar/productsInactive.svg',
  },
  {
    title: 'Sales Report',
    pathname: 'sales-report',
    url: '/sales-report',
    icon: 'images/sidebar/salesReport.svg',
    inactiveIcon: 'images/sidebar/salesReportInactive.svg',
  },
  {
    title: 'Messages',
    pathname: 'messages',
    url: '/messages',
    icon: 'images/sidebar/message.svg',
    inactiveIcon: 'images/sidebar/messageInactive.svg',
  },
  {
    title: 'Settings',
    pathname: 'settings',
    url: '/settings',
    icon: 'images/sidebar/settings.svg',
    inactiveIcon: 'images/sidebar/settingsInactive.svg',
  },
  {
    title: 'Sign Out',
    pathname: 'sign-out',
    url: '/sign-out',
    icon: 'images/sidebar/logout.svg',
    inactiveIcon: 'images/sidebar/logoutInactive.svg',
  },
]
