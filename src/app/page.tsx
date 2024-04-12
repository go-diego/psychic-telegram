import { UserQuery } from '@/components/user-query'
import { ChatControls } from '@/components/chat-controls'
import { QueryResponse } from '@/components/query-response'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <UserQuery />
      <QueryResponse />
      <ChatControls />
    </main>
  )
}
