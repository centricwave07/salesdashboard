import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { SearchInput } from "../ui/searchInput"
import { Bell, ChevronDown } from "lucide-react"

function Header() {
  return (
    <nav className="xl:ml-[345px] ml-[300px] fixed top-0 z-50 xl:w-[calc(100%-345px)] w-[calc(100%-300px)] bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="grid grid-cols-3 py-[30px] 2xl:px-10 px-4 gap-x-2 w-full">
        <div className="text-4xl leading-[50.4px] font-semibold flex items-center text-[#151D48]">
          Dashboard
        </div>
        <div className="flex items-center">
          <SearchInput placeholder="Search here..." />
        </div>
        <div className="flex items-center 2xl:justify-end justify-start 2xl:gap-x-[14px] gap-x-2">
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
    </nav>
  )
}

export default Header
