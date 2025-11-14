import { Fragment, useState } from 'react'
import { Eye, Check, ChevronsUpDown  } from 'lucide-react'
import { cn } from "@/lib/utils"

import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Calendar } from "@/components/ui/calendar"

import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

function App () {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(frameworks[0].value);
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="container">
      <h1 className="text-primary/50">Hello this is gonna be my design system</h1>
      <h2 className="font-poppins">Hello this is gonna be my design system</h2>
      <h3 className="font-poppins">Hello this is gonna be my design system</h3>
      <h4 className="font-poppins">Hello this is gonna be my design system</h4>
      <div className="flex flex-wrap gap-5">
        <Button>Button 1</Button>
        <Button>
          <Eye />
          Button 1 w icon
        </Button>

        <Button variant="outline">Button 2</Button>

        <Button variant="outline">
          <Eye />
          Button 2 w icon
        </Button>

        <Button variant="ghost">Button 3</Button>
        <Button variant="ghost">
          <Eye />
          Button 3 w icon
        </Button>

        <Button variant="link">Button 4</Button>
        <Button variant="link">
          <Eye />
          Button 4 w icon
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <h2 className="flex-1">Button sizes: </h2>
        <Button size="default">Button tekst</Button>
        <Button size="sm">Button tekst</Button>
        <Button size="lg">Button tekst</Button>
        <Button size="icon"><Eye /></Button>
        <Button size="default">
          <Eye />
          Button tekst w icon
        </Button>
        <Button size="sm">
          <Eye />
          Button tekst w icon
        </Button>
        <Button size="lg">
          <Eye />
          Button tekst w icon
        </Button>
        <Button size="icon">
          <Eye />
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <h2 className="flex-1">Shadows: </h2>
        <div className="w-50 h-50 shadow-xs"></div>
        <div className="w-50 h-50 shadow-sm"></div>
        <div className="w-50 h-50 shadow-md"></div>
        <div className="w-50 h-50 shadow-lg"></div>
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <h2 className="flex-1">Cimprts: </h2>
        <FieldGroup className="grid grid-cols-2 gap-6">
        <Field>
          <FieldLabel htmlFor="name">
            Ime i prezime
          </FieldLabel>
          <Input
            id="name"
            placeholder="Ime i prezime"
            required
            className="py-4 h-14"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">
            Email
          </FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="Email address"
            required
            disabled
            className="py-4 h-14"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="address">
            Adresa
          </FieldLabel>
          <Input
            id="address"
            placeholder="Your address"
            required
            className="py-4 h-14"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="phone">
            Mobilni telefon
          </FieldLabel>
          <Input
            id="phone"
            type="tel"
            placeholder="Mobile phone"
            required
            className="py-4 h-14"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="city">
            Grad
          </FieldLabel>
          <Input
            id="city"
            placeholder="Grad"
            required
            className="py-4 h-14"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="postal-code">
            Postanski broj
          </FieldLabel>
          <Input
            id="postal-code"
            placeholder="Grad"
            type="number"
            required
            className="py-4 h-14"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="note">
            Postanski broj
          </FieldLabel>

          <Textarea 
            id='note'
            placeholder="Textarea"
            required
          />
        </Field>

        <Field orientation="horizontal">
          <Button type="submit" variant="outline" className="cursor-pointer h-12">Uredjivanje profila</Button>
        </Field>
      </FieldGroup>

      <div className="mb-5">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent position='popper'>
            <SelectGroup>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? frameworks.find((framework) => framework.value === value)?.label
                : "Select framework..."}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command className="border-none">
              <CommandInput placeholder="Search framework..." className="h-9" />
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}
                    >
                      {framework.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === framework.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Command value={value} onValueChange={() => console.log('value change')}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {
              frameworks.map(framework =>
                <Fragment key={framework.label}>
                  <CommandItem value={framework.value}>
                    <span>{framework.label}</span>
                  </CommandItem>
                  <CommandSeparator />
                </Fragment>
              )
            }
          </CommandList>
        </Command>

        <Checkbox />

        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>

        <div className="flex items-center gap-3">
          <Checkbox id="terms" disabled />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>

        <div className="flex items-center gap-3">
          <Checkbox id="terms" disabled checked />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>

        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="luxury" id="r4" disabled />
            <Label htmlFor="r4">Luxury</Label>
          </div>

          <div className="flex items-center gap-3">
            <RadioGroupItem value="super-luxury" id="r5" disabled checked />
            <Label htmlFor="r5">Super luxury</Label>
          </div>
        </RadioGroup>

        <Switch />
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" disabled />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
        />

      </div>

      <div>
        <ul className="list-disc">
          <li>Ide gas sto sta fali</li>
          <li>Ide gas sto sta fali</li>
          <li>Ide gas sto sta fali</li>
          <li>Ide gas sto sta fali</li>
          <li>Ide gas sto sta fali</li>
        </ul>
      </div>
    </div>
  )
}

export default App;
