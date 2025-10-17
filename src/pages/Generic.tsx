import { useState } from 'react';
import Tabs from '../components/Generic/Tabs';
import InputDropdown from '../components/Generic/InputDropdown';
import Table from '../components/Generic/Table';
import InputCounter from '../components/Generic/InputCounter';
import DoubleRangeSlider from '../components/Generic/DoubleRangeSlider';

export const PER_PAGE_OPTIONS = [
  { label: '8', value: 8 },
  { label: '12', value: 12 },
  { label: '24', value: 24 },
  { label: '36', value: 36 },
]

export default function GenericPage () {
  const [page, setPage] = useState('dropdown-generic');
  const [perPage, setPerPage] = useState(8);
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ];

  const handlePerPageOptionsChange = (per_page: number) => {
    setPerPage(per_page);
  }

  const showPage = () => {
    switch (page) {
      case 'dropdown-generic':
      return (
        <div>
          <InputDropdown
            id="per_page"
            label="Prikazi: "
            default-option={PER_PAGE_OPTIONS.find(page => page.value === perPage)}
            options={PER_PAGE_OPTIONS}
            onChange={handlePerPageOptionsChange}
          />

          <h2>{ perPage }</h2>
        </div>
      )
      case 'table':
        return (
          <Table
            ths={["ID", "Name", "Email"]}
            tds={users}
            renderRow={(user) => (
              <tr className="border-b border-slate-200">
                <td className="px-4 py-3">{user.id}</td>
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
              </tr>
            )}
          />
        )
      case 'input-counter':
        return (
          <InputCounter />
        )
      case 'range-slider':
        return (
          <DoubleRangeSlider range={{min: 0, max: 6000}} updateRange={() => console.log('RANGE UPDATE!!!')} />
        )
      default:
        return (
          <h1>Dodat cu page!!!</h1>
        )
    }
  }

  return (
    <div>
      <h1>Generic page</h1>
      <div className="mb-10 flex justify-center border-b-2 border-gray-600 md:mb-16">
        <Tabs 
          options={[
            {
              label: 'Dropdown',
              value: 'dropdown-generic',
            },
            {
              label: 'Tabelica',
              value: 'table',
            },
            {
              label: 'Input counter',
              value: 'input-counter',
            },
            {
              label: 'Double range slider',
              value: 'range-slider',
            }
          ]}
          name="tab-test"
          onChange={(tab: string) => setPage(tab)}
        />
      </div>
      <div className="container">
        {
          showPage()
        }
      </div>
    </div>
  )
}
