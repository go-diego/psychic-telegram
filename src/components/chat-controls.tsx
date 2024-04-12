import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'

const suggestionsButtons = [
  'Suggest question 1',
  'Suggest question 2',
  'Suggest question 3',
]

export function ChatControls() {
  return (
    <div className="container py-5 flex flex-col gap-4">
      <div className="flex gap-4">
        {suggestionsButtons.map((suggestion) => (
          <Button
            variant="outline"
            className="bg-white text-slate-900 border-slate-300"
            key={suggestion}
          >
            {suggestion}
          </Button>
        ))}
      </div>
      <div className="flex items-center h-10 gap-4">
        <div className="flex-1 flex h-full">
          <Button
            variant="outline"
            className="bg-white text-slate-900 border-slate-300 rounded-r-none  rounded-l-[6px] border-r-0 text-md flex gap-2"
          >
            <Icon name="message-circle" className="h-[24px] w-[24px]" />
            Chat
            <Icon
              name="chevrons-up-down"
              className="h-[16px] w-[16px] text-slate-400"
            />
          </Button>
          <div className="relative flex items-center w-full h-full">
            <input
              type="text"
              className="h-full pl-[12px] pr-3 rounded-r-[6px] w-full border-slate-300 border-[1px]"
              placeholder="Start a new chat"
            />
            <span className="right-[1rem] absolute inset-y-0 flex items-center">
              <Icon name="send" className="h-[24px] w-[24px] text-slate-400" />
            </span>
          </div>
        </div>
        <Button
          variant="outline"
          className="text-[#DC2626] border-[#DC2626] hover:text-[#DC2626]"
        >
          End Chat
        </Button>
      </div>
    </div>
  )
}
