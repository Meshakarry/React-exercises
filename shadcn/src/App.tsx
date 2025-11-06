
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Input } from "@/components/ui/input"

import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


import { Button } from '@/components/ui/button'
import './App.css'
import Header from './components/Header'
import { Eye } from 'lucide-react'


function App() {
  return (
    <div className="">
     <Header />

      <main className="container py-16 sm:py-32">
        <div className="p-12 px-6 rounded-lg shadow-sm sm:px-12">
          <h1 className="text-5xl font-bold leading-normal">Pozdrav, Username</h1>
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>

            <TabsContent value="account">
              <form className="py-10">
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
                      required
                      className="py-4 h-14"
                    />
                  </Field>

                  <Field orientation="horizontal">
                    <Button type="submit" variant="outline" className="cursor-pointer h-12">Uredjivanje profila</Button>
                  </Field>
                </FieldGroup>
              </form>
            </TabsContent>

            <TabsContent value="password">
              <div
                className="
                  relative overflow-x-auto max-w-full pr-12
                  [mask-image:linear-gradient(to_left,transparent,white_3rem)]
                "
              >
                <Table className="w-full text-left text-sm rtl:text-right border-b border-amber-500/40">
                  <TableHeader>
                    <TableRow className="text-xl font-bold text-blue-300">
                      <TableHead className="px-6 py-3 whitespace-nowrap">Invoice</TableHead>
                      <TableHead className="px-6 py-3 whitespace-nowrap">Status</TableHead>
                      <TableHead className="px-6 py-3 whitespace-nowrap">Method</TableHead>
                      <TableHead className="px-6 py-3 whitespace-nowrap">Nesto</TableHead>
                      <TableHead className="px-6 py-3 whitespace-nowrap">nesto nesto</TableHead>
                      <TableHead className="px-6 py-3 whitespace-nowrap">nesto nesto</TableHead>
                      <TableHead className="px-6 py-3 text-center">Akcije</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    <TableRow className="border-b border-slate-400/40 text-base text-gray-800" >
                      <TableCell className="py-4 px-6">
                        <p className="my-auto text-xl font-medium">
                          #1
                        </p>
                      </TableCell>

                      <TableCell className="py-4 px-6">
                        <p className="my-auto text-base">
                          datum
                        </p>
                      </TableCell>

                      <TableCell className="py-4 px-6">
                        <p className="my-auto text-base whitespace-nowrap">
                          John Doe(WIP)
                        </p>
                      </TableCell>

                      <TableCell className="py-4 px-6">
                        <p className="my-auto text-base whitespace-nowrap">
                          Haris Begic
                        </p>
                      </TableCell>

                      <TableCell className="py-4 px-6">
                        <p className="my-auto text-base whitespace-nowrap">
                          124.00
                        </p>
                      </TableCell>

                      <TableCell className="py-4 px-6">
                        <p className="my-auto text-base whitespace-nowrap">
                          Stavi badge komponentu ovdje
                        </p>
                      </TableCell>

                      <TableCell className="flex items-center justify-center gap-4 py-4 px-6">
                        <a href="/" className="bg-[#4677b4] flex justify-center items-center w-7 h-7 hover:bg-[#4677b4]/70 rounded-full">
                          <Eye />
                        </a>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

export default App
