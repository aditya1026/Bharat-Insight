"use client"

import { Command } from "cmdk"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export default function CommandPalette() {

  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {

    const down = (e: any) => {

      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen((open) => !open)
      }

    }

    document.addEventListener("keydown", down)

    return () => document.removeEventListener("keydown", down)

  }, [])

  return (

    <Command.Dialog
open={open}
onOpenChange={setOpen}
className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
>

<div className="bg-gray-900 w-[500px] rounded-lg p-4 border border-gray-700">

<h2 className="sr-only">Command Menu</h2>

<Command.Input
placeholder="Search pages..."
className="w-full p-3 bg-gray-800 rounded text-white outline-none"
/>

<Command.List className="mt-3">

<Command.Item
onSelect={() => router.push("/")}
className="p-2 cursor-pointer hover:bg-gray-800 rounded"
>
Home
</Command.Item>

<Command.Item
onSelect={() => router.push("/dashboard")}
className="p-2 cursor-pointer hover:bg-gray-800 rounded"
>
Dashboard
</Command.Item>

</Command.List>

</div>

</Command.Dialog>

  )
}