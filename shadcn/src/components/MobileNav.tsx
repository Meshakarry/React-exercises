import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from '@/components/ui/button'
import { Menu, CircleUserRound, ShoppingCart, LogOut } from 'lucide-react'
import HeaderLinks from './HeaderLinks'

export default function MobileNav () {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="link" className="h-6 w-6 [&_svg]:size-6">
            <Menu size={24} />
          </Button>
        </SheetTrigger>

        <SheetContent className="bg-white flex flex-col border-l-0">
        {/* <SheetHeader>
          <SheetTitle>Sheet title jer ga moram dodati</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </SheetDescription>
        </SheetHeader> */}

          <HeaderLinks className="flex-1" />

          <SheetFooter className="flex-col! gap-4">
            <a href="/page-1" className="flex items-center gap-1 lg:gap-2.5">
              <CircleUserRound size={24} />
              <span className="text-base leading-4">Moj profil</span>
            </a>

            <a href="/page-1" className="flex items-center gap-1 lg:gap-2.5">
              <ShoppingCart size={24} />
              <span className="text-base leading-4">Korpa</span>
            </a>

            <a href="/page-2" className="flex items-center gap-1 lg:gap-2.5">
              <LogOut size={24} />
              <span className="text-base leading-4">Odjava</span>
            </a>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
