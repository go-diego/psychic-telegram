import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Table } from '@/components/table'

export function QueryResponse() {
  return (
    <div className="flex-1 bg-slate-100">
      <div className="container py-5 flex flex-col gap-4">
        <div className="flex items-center">
          <Button
            variant="outline"
            className="text-[#DC2626] hover:text-[#DC2626] rounded-r-none hover:bg-slate-100 border-slate-300"
          >
            <Icon name="info" className="h-[20px] w-[20px] mr-[6px]" />
            Not Confident
          </Button>
          <Button
            variant="outline"
            className="text-[#DC2626] hover:text-[#DC2626] rounded-l-none hover:bg-slate-100 border-slate-300"
          >
            Human Help
            <Icon name="arrow-right" className="h-[20px] w-[20px] ml-[6px]" />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="w-[40px] h-[40px]" />
          <p className="text-slate-900">
            To find out how many accounts you have, you can use the following
            query:
          </p>
        </div>
        <Table />
      </div>
    </div>
  )
}
