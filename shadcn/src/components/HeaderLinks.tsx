
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

interface HeaderLinksProps {
  className?: string
}

export default function HeaderLinks ({ className } : HeaderLinksProps) {
  return (
    <NavigationMenu className={`w-full flex-1 pt-[72px] pb-4 max-w-[unset] [&>div]:w-full [&>div]:h-full md:border-t md:border-gray-400 md:pt-4 ${className ?? ''}`}>
      <NavigationMenuList className="flex-col gap-4 justify-center px-4 space-x-0 items-start md:flex-row md:items-center md:gap-9">
        <NavigationMenuItem className="truncate">
          <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()}`}>
            <a href="/proizvodi" className="p-0! inline!">Svi proizvodi</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="truncate">
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="/baterije" className="p-0! inline!">Led baterije, punjaci i rasvjeta</a>
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="truncate">
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="/docs" className="p-0! inline!">Kucne potrepstine</a>
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="truncate">
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="/docs" className="p-0! inline!">Strikovi</a>
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="truncate">
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="/docs" className="p-0! inline!">Lijepila i silikoni</a>
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="truncate">
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="/docs" className="p-0! inline!">Elektro materijal</a>
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="truncate">
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="/docs" className="p-0! inline!">Prehrana</a>
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="truncate">
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="/docs" className="p-0! inline!">Oprema za ljubimce</a>
            </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
  </NavigationMenu>
  )
}
