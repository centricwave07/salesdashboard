import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { SearchInput } from '../ui/searchInput'
import { Bell, ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { menu } from '@/data/menu'

function Header() {
  const pathname = usePathname().split('/')[1]
  const [isSidebar, setIsSidebar] = useState(false)

  return (
    <div>
      <div className="md:hidden block">
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4">
          <div className="mx-1">
            <div className='flex justify-between items-center'>
              <div className='flex justify-center items-center cursor-pointer' onClick={() => setIsSidebar(!isSidebar)}>
                <Menu />
              </div>
              <div className="flex items-center justify-between gap-x-2 h-full">
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div className="flex justify-center items-center">
                        <Image
                          src="/images/englishLogo.svg"
                          alt="en"
                          height={24}
                          width={24}
                          className="h-6 w-h-6"
                        />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Language</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>It</DropdownMenuItem>
                      <DropdownMenuItem>Hin</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex items-center">
                  <div className="bg-[#FFFAF1] rounded-[8px] h-10 w-10 relative">
                    <div>
                      <div className="absolute right-0 h-1 w-1 rounded-full bg-[#EB5757] m-1"></div>
                    </div>
                    <div className="flex justify-center items-center h-full">
                      <Bell className="text-[#FFA412] h-6 w-6" />
                    </div>
                  </div>
                </div>

                <div className="flex h-full justify-center items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Image
                        src="/images/user.svg"
                        alt="profile"
                        height={40}
                        width={40}
                        className="rounded h-[47px] w-[47px]"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Profile</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Setting</DropdownMenuItem>
                      <DropdownMenuItem>Status</DropdownMenuItem>
                      <DropdownMenuItem>Update Password</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

              </div>
            </div>
          </div>
        </header>
        {/* Menu list */}
        {isSidebar &&
          <div className="fixed top-0 left-0 h-screen w-screen bg-white z-50 p-4">
            <div className="container mx-auto">
              <div className="flex justify-between items-center w-full py-[20px]">
                <Link href="/" className="flex gap-x-[14px] ">
                  <div className="bg-[#5D5FEF] flex justify-center items-center p-[12px] rounded-[8px]">
                    <Image
                      src="/images/logo.svg"
                      alt="logo"
                      height={24}
                      width={24}
                      className="h-6 w-6"
                    />
                  </div>
                  <span className="self-center text-2xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                    Dabang
                  </span>
                </Link>
                <div className='cursor-pointer' onClick={() => setIsSidebar(false)}><X /></div>
              </div>
              <ul className="space-y-2 font-medium">
                {menu?.map((o) => {
                  return (
                    <li key={o.title}>
                      <Link
                        href={o.url}
                        className={`flex items-center 2xl:px-6 lg:px-3 px-1 2xl:py-4 lg:py-2 py-1
                          group ${pathname === o.pathname
                            ? 'text-white rounded-lg bg-[#5D5FEF] dark:hover:bg-gray-700'
                            : 'text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        onClick={() => setIsSidebar(false)}
                      >
                        <Image
                          src={
                            pathname === o.pathname ? o.icon : o.inactiveIcon
                          }
                          alt={o.title}
                          height={32}
                          width={32}
                          className="2xl:mr-6 lg:mr:3 mr-1 2xl:h-8 lg:h-6 h-4 2xl:w-8 lg:w-6 w-4"
                        />
                        <span className="2xl:ms-3 lg:ms-2 ms-1 capitalize xl:text-lg lg:text-base text-sm text- leading-[27px]">
                          {o.title}
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        }
      </div>
      {/*---------Desktop header---------------  */}
      <div className="md:block hidden">
        <nav className="xl:ml-[345px] ml-[200px] fixed top-0 z-50 xl:w-[calc(100%-345px)] w-[calc(100%-200px)] bg-white dark:bg-gray-800 dark:border-gray-700">
          <div className="grid 2xl:grid-cols-3 grid-cols-2 2xl:py-[30px] py-[15px] 2xl:px-10 px-4 2xl:gap-x-2 gap-x-1 w-full">
            <div className="text-4xl leading-[50.4px] font-semibold flex items-center text-[#151D48]">
              Dashboard
            </div>
            <div className="2xl:block hidden">
              <div className="flex items-center">
                <SearchInput placeholder="Search here..." />
              </div>
            </div>
            <div className="flex items-center justify-end 2xl:gap-x-[14px] gap-x-2">
              <div className="flex items-center justify-between 2xl:gap-x-[42px] gap-x-2">
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div className="flex 2xl:gap-x-[14px] gap-x-2">
                        <Image
                          src="/images/englishLogo.svg"
                          alt="en"
                          height={24}
                          width={24}
                          className="h-6 w-h-6"
                        />
                        <span className="text-lg leading-[27px] text-[#374557]">
                          Eng(US)
                        </span>
                        <ChevronDown className="text-[#A098AE]" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Language</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>It</DropdownMenuItem>
                      <DropdownMenuItem>Hin</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex 2xl:gap-x-[14px] gap-x-2 pl-[10px] items-center justify-center">
                  <div className="bg-[#FFFAF1] rounded-[8px] h-12 w-12 relative">
                    <div>
                      <div className="absolute right-0 h-2 w-2 rounded-full bg-[#EB5757] m-1"></div>
                    </div>
                    <div className="flex justify-center items-center h-full">
                      <Bell className="text-[#FFA412]" />
                    </div>
                  </div>
                  <div className="flex 2xl:gap-x-[14px] gap-x-2">
                    <Image
                      src="/images/user.svg"
                      alt="profile"
                      height={30}
                      width={30}
                      className="rounded-[16px] h-[60px] w-[60px]"
                    />
                    <div className="flex flex-col justify-center">
                      <div>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <div className="flex 2xl:gap-x-[14px] gap-x-2">
                              <div className="text-base font-medium">Komal</div>
                              <ChevronDown />
                            </div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>Profile</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Setting</DropdownMenuItem>
                            <DropdownMenuItem>Status</DropdownMenuItem>
                            <DropdownMenuItem>Update Password</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="text-sm font-normal text-[#737791]">
                        Admin
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:hidden block">
            <div className="flex items-center p-[10px] ">
              <SearchInput placeholder="Search here..." />
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
