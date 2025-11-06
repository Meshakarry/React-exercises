import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from '@/components/ui/button'

import { PopoverPortal } from '@radix-ui/react-popover'
import { CircleUserRound, ShoppingCart, ChevronDown, LogOut, Search } from 'lucide-react'
import { useState } from 'react'
import HeaderLinks from './HeaderLinks'
import MobileNav from './MobileNav'

export default function Header () {
  const [user, setUser] = useState(true);

  return (
    <header className="shadow">
      <div className="container flex flex-wrap items-center justify-between py-4">
        <a href="/" className="max-w-36">
          Here goes the logo..
        </a>

        <InputGroup className="flex relative order-1 border-0 mt-4 h-10 w-full min-w-72 shadow-none has-[[data-slot=input-group-control]:focus-visible]:ring-0 md:mt-0 md:w-fit md:basis-1/2 md:order-0">
          <InputGroupInput placeholder="Type to search..." className="border border-[#c2c5e1] rounded-full py-2.5 px-6 h-full" />
          <InputGroupAddon align="inline-end" className="absolute right-0 py-1 justify-end h-full bg-red-200 rounded-r-full has-[>button]:mr-0 pr-0">
            <InputGroupButton className="h-full px-3 py-2 [&_svg]:size-6">
              <Search size={24} className="size-6" />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>

        <div className="hidden md:block">
          {user ? (
            <div className="flex gap-4 items-center">
              <Button size="icon" variant="link" className="h-6 w-6 [&_svg]:size-6" asChild>
                <a href="/korpa">
                  <ShoppingCart size={24} />
                </a>
              </Button>
              <Popover>
                <PopoverTrigger className="flex items-center">
                  <div className="text-left cursor-pointer pr-2">
                    <span className="block text-sm text-gray-300">Pozdrav,</span>
                    <span className="block text-red-300">Indevitus</span>
                  </div>
                  <div className="flex h-full cursor-pointer justify-center">
                    <ChevronDown size={24} className="text-gray-300"/>
                  </div>
                </PopoverTrigger>
                <PopoverPortal>
                  <PopoverContent className="PopoverContent max-w-fit rounded-md border-black/10 bg-white shadow my-2.5">
                    <ul>
                      <li className="py-2.5 user-select-none">
                        <a href="/page-1" className="flex items-center gap-1 lg:gap-2.5">
                          <CircleUserRound size={24} />
                          <span className="text-base leading-4 text-blue-300">Moj profil</span>
                        </a>
                      </li>

                      <li className="py-2.5">
                        <a href="/page-2" className="flex items-center gap-1 lg:gap-2.5">
                          <LogOut size={24} />
                          <span className="text-base leading-4 text-blue-300">Odjava</span>
                        </a>
                      </li>
                    </ul>
                  </PopoverContent>
                </PopoverPortal>
              </Popover>
            </div>
          ): (
            <Button variant="link" asChild className="h-6 p-0 [&_svg]:size-6">
              <a href="/prijava">
                <CircleUserRound size={24} />
                <span className="text-base leading-4">Prijava</span>
              </a>
            </Button>
          )}
        </div>

        <div className="flex gap-2 md:hidden">
          <Button size="icon" variant="link" className="h-6 w-6 [&_svg]:size-6" asChild>
            <a href="/korpa">
              <ShoppingCart size={24} />
            </a>
          </Button>

          <MobileNav  />
        </div>
      </div>

      <HeaderLinks className="hidden md:block" />
  </header>
  )
}
