
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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from '@/components/ui/button'
import { HeartIcon, SpinnerIcon } from '@/components/icons/index';

import './App.css'
import Header from './components/Header'
import { Eye } from 'lucide-react'
import { useState, useEffect, useMemo } from 'react';


function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalTime = 20;

    const timer = setInterval(() => {
      setProgress((p) => {
        if (p + 1 >= 100) {
          clearInterval(timer);
          return 100;
        }
        return p + 1;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
      <div
        className="bg-blue-500 h-2 transition-[width] duration-2000 ease-linear"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

function MortageCalculator () {
  const [mortageData, setMortageData] = useState({
    'loan-amount': '',
    'loan-term': '',
    'interest-rate': '',
  });

  const [monthlyMortgagePayment, setMonthlyMortgagePayment] = useState(0);

  const updateMortageData = (e) => {
    setMortageData({
      ...mortageData,
      [e.target.name]: Number(e.target.value)
    })
  }

  const totalPayment = useMemo(() => {
    return (monthlyMortgagePayment * Number(mortageData['loan-term']) * 12);
  }, [monthlyMortgagePayment, mortageData])

  const handleFormSubmit = () => {
    if (Object.values(mortageData).every((data) => !!data)) {
      const i = (Number(mortageData?.['interest-rate']) / 100 ) / 12;
      const n = (Number(mortageData?.['loan-term']) * 12);
      const P = Number(mortageData?.['loan-amount']);
      const M = P * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
      setMonthlyMortgagePayment(M);
    }
  }

  return (
    <div>
      <form className="flex flex-col gap-3 mb-6" action={handleFormSubmit}>
        <div>
          <label htmlFor="loan-amount">Loan Amount: </label>
          <input
            type="number"
            id="loan-amount"
            name="loan-amount"
            className="border border-black"
            value={mortageData['loan-amount']}
            required
            min={0}
            onInput={updateMortageData}
          />
        </div>

        <div>
          <label htmlFor="loan-term">Loan Terms(years): </label>
          <input
            type="number"
            id="loan-term"
            name="loan-term"
            className="border border-black"
            min={0}
            required
            value={mortageData['loan-term']}
            onInput={updateMortageData}
          />
        </div>

        <div>
          <label htmlFor="interest-rate">Interest rate(%): </label>
          <input
            type="number"
            id="interest-rate"
            name="interest-rate"
            className="border border-black"
            min={0}
            required
            value={mortageData['interest-rate']}
            onInput={updateMortageData}
          />
        </div>
        <Button type="submit" className="max-w-fit">Calculate</Button>
      </form>

      <div className="">
        <p>Monthly Payment Amount: { !!monthlyMortgagePayment && <strong>${monthlyMortgagePayment.toFixed(2)}</strong> }</p>
        <p>Total Payment Amount: { !!monthlyMortgagePayment && <strong>${totalPayment.toFixed(2)}</strong> }</p>
        <p>Total Interest Paid: { !!monthlyMortgagePayment && <strong>${(totalPayment - Number(mortageData['loan-amount'])).toFixed(2)}</strong> }</p>
      </div>
    </div>
  )
}

const people = [
  { id: 1, name: "Emily Chen", age: 28, occupation: "Software Engineer" },
  { id: 2, name: "Ryan Thompson", age: 32, occupation: "Marketing Manager" },
  { id: 3, name: "Sophia Patel", age: 25, occupation: "Data Analyst" },
  { id: 4, name: "Michael Lee", age: 41, occupation: "CEO" },
  { id: 5, name: "Olivia Brown", age: 29, occupation: "Graphic Designer" },
  { id: 6, name: "Alexander Hall", age: 38, occupation: "Sales Representative" },
  { id: 7, name: "Isabella Davis", age: 26, occupation: "Teacher" },
  { id: 8, name: "Ethan White", age: 35, occupation: "Lawyer" },
  { id: 9, name: "Lily Tran", age: 30, occupation: "Nurse" },
  { id: 10, name: "Julian Sanchez", age: 39, occupation: "Engineer" },
  { id: 11, name: "Ava Martin", age: 27, occupation: "Journalist" },
  { id: 12, name: "Benjamin Walker", age: 42, occupation: "Doctor" },
  { id: 13, name: "Charlotte Brooks", age: 31, occupation: "HR Manager" },
  { id: 14, name: "Gabriel Harris", age: 36, occupation: "IT Consultant" },
  { id: 15, name: "Hannah Taylor", age: 24, occupation: "Student" },
  { id: 16, name: "Jackson Brown", age: 40, occupation: "Business Owner" },
  { id: 17, name: "Kayla Lewis", age: 33, occupation: "Event Planner" },
  { id: 18, name: "Logan Mitchell", age: 37, occupation: "Architect" },
  { id: 19, name: "Mia Garcia", age: 29, occupation: "Artist" },
  { id: 20, name: "Natalie Hall", age: 34, occupation: "Teacher" },
  { id: 21, name: "Oliver Patel", age: 38, occupation: "Software Developer" },
  { id: 22, name: "Penelope Martin", age: 26, occupation: "Writer" },
  { id: 23, name: "Quinn Lee", age: 35, occupation: "Entrepreneur" },
  { id: 24, name: "Rachel Kim", age: 30, occupation: "Dentist" },
  { id: 25, name: "Samuel Jackson", age: 42, occupation: "Lawyer" },
  { id: 26, name: "Tessa Hall", age: 28, occupation: "Graphic Designer" },
  { id: 27, name: "Uma Patel", age: 39, occupation: "Marketing Manager" },
  { id: 28, name: "Vincent Brooks", age: 36, occupation: "IT Consultant" },
  { id: 29, name: "Walter White", age: 41, occupation: "Engineer" },
  { id: 30, name: "Xavier Sanchez", age: 33, occupation: "Sales Representative" },
  { id: 31, name: "Yvonne Martin", age: 29, occupation: "Teacher" },
  { id: 32, name: "Zoe Lee", age: 27, occupation: "Data Analyst" },
  { id: 33, name: "Abigail Brown", age: 34, occupation: "Nurse" },
  { id: 34, name: "Caleb Harris", age: 38, occupation: "Business Owner" },
  { id: 35, name: "Diana Taylor", age: 31, occupation: "Event Planner" },
  { id: 36, name: "Eleanor Walker", age: 40, occupation: "CEO" }
];

function UserTable () {
  const [numberForDisplay, setNumberForDisplay] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useMemo(() => {
    return Math.ceil(people.length / numberForDisplay);
  }, [numberForDisplay]);

  const peopleForDisplay = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * numberForDisplay;
    const lastPageIndex = firstPageIndex + numberForDisplay;
    return people.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, numberForDisplay]);

  const updateNumberForDisplay = (e) => {
    setCurrentPage(1);
    setNumberForDisplay(Number(e.target.value))
  }

  return (
    <div>
      <table className="mb-5">
        <thead>
          <tr className="border-b border-gray-400 text-left">
            <th className="px-1">
              ID
            </th>
            <th className="px-1">
              Name
            </th>
            <th className="px-1">
              Age
            </th>
            <th className="px-1">
              Occupation
            </th>
          </tr>
        </thead>

        <tbody className="text-left">
          {
            peopleForDisplay.map(person =>
              <tr key={person.id} className="border-b border-gray-400 last:border-0">
                  <td>{ person.id }</td>
                  <td>{ person.name }</td>
                  <td>{ person.age }</td>
                  <td>{ person.occupation }</td>
              </tr>
            )
          }
        </tbody>
      </table>

      <div className="pt-5 border-t border-gray-600 flex gap-5">
          <select
            className="border border-black rounded-sm"
            value={numberForDisplay}
            onChange={updateNumberForDisplay}
          >
            <option value={5}>
              Show 5
            </option>

            <option value={10}>
              Show 10
            </option>

            <option value={20}>
              Show 20
            </option>
          </select>

          <div className="flex gap-5 items-center">
            <Button disabled={currentPage === 1} onClick={() => setCurrentPage(page => page - 1)}>Prev</Button>
              Page { currentPage } of { totalPages }
            <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(page => page + 1)}>Next</Button>
          </div>
      </div>
    </div>
  )
}

function LikeButton () {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async () => {
    console.log('form submitted')
    try {
      setIsLoading(true);
      const response = await fetch('https://questions.greatfrontend.com/api/questions/like-button', { method: "POST", headers: { 'Content-Type': 'json' }})
      console.log(response, 'response');
      setIsLiked(true);
    } catch(error) {
      console.error(error)
      setIsLiked(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form action={handleFormSubmit}>
      <button 
        type="submit"
        className={
          `
            inline-flex items-center gap-4 p-3 my-5 rounded-3xl ring-3 transition-all duration-300 cursor-pointer hover:ring-red-700 hover:text-red-700
            ${isLiked ? 'ring-gray-700 text-white' : 'ring-gray-600 text-gray-600'}
          `
        }
      >
        {
          isLoading ? <SpinnerIcon className="h-5 w-5" /> : <HeartIcon className="h-5 w-5" />
        }
        Like
      </button>
    </form>
  )
}

// utils
function formatDate(timestamp: number) {
  const millisecondsTimestamp = timestamp * 1000;
  const date = new Date(millisecondsTimestamp);
   // Get date components and pad with leading zeros if necessary
   const day = String(date.getDate()).padStart(2, '0');
   const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
   const year = date.getFullYear();
 
   // Get time components and pad with leading zeros if necessary
   const hours = String(date.getHours()).padStart(2, '0');
   const minutes = String(date.getMinutes()).padStart(2, '0');
   const seconds = String(date.getSeconds()).padStart(2, '0');
 
   // Construct the formatted string
   return `${day}. ${month}. ${year}. ${hours}:${minutes}:${seconds}`;
}

function JobBoard () {
  const [numberForDisplay, setNumberForDisplay] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  const jobBoards = useMemo(() => {
    return jobs.slice(0, numberForDisplay);
  }, [jobs, numberForDisplay]);

  useEffect(() => {
    async function fetchJobs () {
      try {
        setIsLoading(true);
        const response = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json');
        const result = await response.json();
        const jobs = await Promise.all(
          result.map((r) => fetch(`https://hacker-news.firebaseio.com/v0/item/${r}.json`).then((res) => res.json()))
        )
        setJobs(jobs);
      } catch(error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchJobs();
  }, [])

  return (
    <div>
      <h1 className="text-orange-400 font-bold mb-6 text-5xl">Hacker News jobs board</h1>
      { isLoading ? <h2>...Loading</h2> : (
        <ul className="flex flex-col gap-5">
          {
            jobBoards.map(job => 
              <li key={job.id} className="flex flex-col gap-3 border border-gray-400 rounded-xl p-3">
                <a href={job.url} className={`font-bold text-2xl ${job.url && 'hover:underline'}`}>{ job.title }</a>
                <span className="text-gray-400">
                  By {job.by} * { formatDate(job.time)}
                </span>
              </li>
            )
          }
        </ul>
      )}

      {
        jobBoards.length < jobs.length && (
          <Button 
            onClick={() => setNumberForDisplay((currentNumber) => currentNumber + 6)}
            className="mt-7"
          > 
            Load more...
          </Button>
        )
      }
    </div>
  )
}


function Timer({ time, handlePauseResume}) {
  const hours = Math.floor((time / 3600000) % 24); // 1 hour = 3600000 ms
  const minutes = Math.floor((time / 60000) % 60);
  const seconds = Math.floor((time / 1000) % 60);
  const milliseconds = Math.floor(time % 1000); // remainder after removing full seconds

  const pad2 = (n) => String(n).padStart(2, "0");
  const pad3 = (n) => String(n).padStart(3, "0");

  return (
    <button type="button" onClick={handlePauseResume} className="">
      <span>{pad2(hours)}:</span>
      <span>{pad2(minutes)}:</span>
      <span>{pad2(seconds)}:</span>
      <span>{pad3(milliseconds)}</span>
    </button>
  );
}

function StopWatch () {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
          setTime((time) => time + 10);
      }, 10);
    } else {
        clearInterval(interval);
    }
    return () => {
        clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handlePauseResume = () => {
    setIsActive(active => !active);
    setIsPaused((paused) => !paused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div>
      <Timer time={time} handlePauseResume={handlePauseResume} />
      <div className="flex gap-4">
        <Button onClick={handlePauseResume}>Start</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  )
}

function App() {
  const [progressBars, setProgressBars] = useState<string[]>([]);
  const progressBarsCount = progressBars.length;

  const addNewProgressbar = (newItem: string) => {
    setProgressBars((prev) => [...prev, newItem])
  }

  return (
    <div className="">
     <Header />

     <div className="flex flex-col gap-6 mb-10">
      {
        progressBars.map(progressBar =>
          <ProgressBar key={progressBar} />
        )
      }
     </div>

     <MortageCalculator />

     <UserTable />

     <LikeButton />

     <JobBoard />

     <StopWatch />

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
                  relative overflow-x-auto max-w-full pr-12 mb-10
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

              <Accordion type="single" collapsible className="mb-5">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Shipping Details</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We offer worldwide shipping through trusted courier partners.
                      Standard delivery takes 3-5 business days, while express shipping
                      ensures delivery within 1-2 business days.
                    </p>
                    <p>
                      All orders are carefully packaged and fully insured. Track your
                      shipment in real-time through our dedicated tracking portal.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>


              <Button onClick={() => addNewProgressbar(`progress-${progressBarsCount}`)}>Add progress</Button>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

export default App
