"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Icons } from "@/components/icons"

import { Button } from "@/components/ui/button-newyork"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function OptionsMenu() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
        {/* 
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        */}
        <Icons.vert/>

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Language
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Terms of Service
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          Privacy
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}