import { Fragment } from 'react'

interface TableProps<T> {
  ths: string[];
  tds: T[];
  renderRow: (entity: T, index: number) => React.ReactNode;
}

export default function Table<T> ({ ths, tds, renderRow }: TableProps<T>) {
  return (
    <div className="relative my-10 overflow-hidden pt-3 px-6 shadow sm:rounded-lg">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b-2 border-gray-600 border-opacity-20">
            <tr>
              {
                ths.map(th => 
                  <th key={th} scope="col" className="px-4 py-6 font-medium">
                    { th }
                  </th>
                )
              }
            </tr>
          </thead>

          <tbody>
            {tds.map((entity, index) => (
              <Fragment key={index}>{renderRow(entity, index)}</Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
