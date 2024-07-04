import { Search } from 'lucide-react'

export function SearchInput() {
  return (
    <form className="flex w-full max-w-[400px] items-center gap-2 rounded-md border-2 border-zinc-100 bg-zinc-50 px-4 py-3 focus-within:border-zinc-900">
      <input
        type="text"
        autoComplete="off"
        placeholder="Buscar por produtos..."
        className="w-full bg-transparent font-medium text-zinc-700 outline-none placeholder:text-zinc-400"
      />
      <button type="submit">
        <Search className="text-zinc-400" />
      </button>
    </form>
  )
}
