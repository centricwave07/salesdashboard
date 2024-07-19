'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import Header from './header'
import { menu } from '@/data/menu'

function SidebarComponent(props: any) {
  const pathname = usePathname().split('/')[1]
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="flex bg-card">
          {/* Sidebar Section */}
          <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 bottom-0 z-40 xl:w-[345px] w-[200px] h-full overflow-y-auto flex flex-col justify-between bg-card"
            aria-label="Sidebar"
          >
            <div className="flex justify-center items-center w-full py-[40px]">
              <Link href="/" className="flex gap-x-[14px] ">
                <div className="bg-theme flex justify-center items-center p-[15.75px] rounded-[8px]">
                  <Image
                    src="/images/logo.svg"
                    alt="logo"
                    height={24}
                    width={24}
                    className="h-6"
                  />
                </div>
                <span className="self-center text-3xl leading-[45px] font-semibold sm:text-2xl whitespace-nowrap">
                  Dabang
                </span>
              </Link>
            </div>
            <div className="h-full 2xl:px-[46px] px-[23px] lg:pb-4 pb-2 bg-card flex flex-col justify-between">
              <ul className="space-y-2 font-medium">
                {menu?.map((o) => {
                  return (
                    <li key={o.title}>
                      <Link
                        href={o.url}
                        className={`flex items-center 2xl:px-6 lg:px-3 px-1 2xl:py-4 lg:py-2 py-1
                          group ${pathname === o.pathname
                            ? 'dark:text-text text-white rounded-lg bg-theme dark:hover:bg-gray-700'
                            : 'dark:text-text rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
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
            <div className="flex justify-center items-center bg-card">
              <div
                className="bg-cover bg-center  2xl:w-[238px] w-[180px] h-[261px] my-10 flex flex-col justify-center items-center px-[30px] py-[46px] text-center rounded-[8px] text-white"
                style={{ backgroundImage: "url('images/proBackground.svg')" }}
              >
                <div className="bg-white flex justify-center items-center p-[15.75px] rounded-[8px]">
                  <Image
                    src="/images/logo-purple.svg"
                    alt="logo"
                    height={24}
                    width={24}
                    className="h-6"
                  />
                </div>
                <div className="mt-2 text-xl leading-[32px] font-semibold">
                  Dabang Pro
                </div>
                <div className="mt2 text-xs leading-4 font-medium">
                  Get access to all features on tetumbas
                </div>
                <Button
                  className="text-text mt-8 text-base font-semibold leading-6"
                  variant={'secondary'}
                >
                  Get Pro
                </Button>
              </div>
            </div>
          </aside>

          {/* Header Section */}
          <Header />
        </div>

        {/* Main Section */}
        <div className="p-8 xl:ml-[345px] ml-[200px] 2xl:mt-[120px] mt-[150px] bg-background min-h-[calc(100vh-130px)] h-auto w-auto">
          {props.pages}
        </div>
      </div>

      {/* Mobile View */}
      <Header />
      <div className='md:hidden block p-4 bg-background pt-[120px] min-h-screen h-screen'>
        {props.pages}
      </div>
    </div>
  )
}

export default SidebarComponent
