import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'

const tableRow = {
  id: 477,
  name: 'Abbot-Pacocha',
  industry: 'IT',
  city: 'Colo...',
  state: 'CO',
  segment: 'Ente...',
  ownerId: 7,
}

const tableData = Array.from({ length: 5 }, () => ({
  ...tableRow,
}))

const tableHeaders = [
  'Name',
  'Industry',
  'City',
  'State',
  'Segment',
  'Owner ID',
]

export function Table() {
  return (
    <div className="overflow-hidden rounded-lg shadow-sm bg-white">
      <table className="min-w-full leading-normal">
        <thead>
          <tr className="border border-slate-300">
            <th className="px-5 py-3  text-left text-xs font-semibold text-slate-400">
              <Icon
                name="chevrons-up-down"
                className="h-[16px] w-[16px] text-slate-400"
                text-slate-400
              />
            </th>
            {tableHeaders.map((header) => (
              <th
                key={header}
                className="px-5 py-3  text-left font-semibold text-slate-400 text-md"
              >
                <span className="flex gap-1 items-center">
                  {header}
                  <Icon
                    name="chevrons-up-down"
                    className="h-[16px] w-[16px] text-slate-400"
                  />
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="border border-slate-300">
              <td className="px-5 py-2 bg-white text-slate-900 text-md">
                {row.id}
              </td>
              <td className="px-5 py-2 bg-white text-slate-900 text-md">
                {row.name}
              </td>
              <td className="px-5 py-2 bg-white text-slate-900 text-md">
                {row.industry}
              </td>
              <td className="px-5 py-2 bg-white text-slate-900 text-md">
                {row.city}
              </td>
              <td className="px-5 py-2 bg-white text-slate-900 text-md">
                {row.state}
              </td>
              <td className="px-5 py-2 bg-white text-slate-900 text-md">
                {row.segment}
              </td>
              <td className="px-5 py-2  bg-white text-slate-900 text-md">
                {row.ownerId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-5 py-2 bg-slate-100  border-b border-r border-l border-slate-300 font-bold text-slate-700 flex gap-2 items-center">
        <Icon name="info" className="h-[20px] w-[20px]" />
        Only {tableData.length} rows are shown. View full list for more
      </div>
      <div className="flex gap-4 p-5">
        <Button
          variant="outline"
          className="text-slate-900 border-slate-300 hover:text-slate-900"
        >
          View full list
        </Button>
        <Button
          variant="outline"
          className="text-slate-900 border-slate-300 hover:text-slate-900"
        >
          Show Query
        </Button>
        <Button
          variant="outline"
          className="text-slate-900 border-slate-300 hover:text-slate-900"
        >
          Show Chart
        </Button>
        <Button
          variant="outline"
          className="text-slate-900 border-slate-300 hover:text-slate-900"
        >
          Pin to Dashboard
        </Button>
      </div>
    </div>
  )
}
