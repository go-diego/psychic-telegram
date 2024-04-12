export function UserQuery() {
  return (
    <div className="flex items-center py-8 container gap-4 ">
      <img
        src="/avatar.jpg"
        alt="User Avatar"
        className="w-[40px] h-[40px] rounded-full object-cover"
      />
      <p className="font-semibold text-slate-900">List my top 10 accounts</p>
    </div>
  )
}
