"use client";

import * as React from "react";
import { useRouter } from 'next/navigation'
import { Languages, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanuagessToggle() {
    const router =  useRouter()
  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Languages className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Languages className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => router.push('/')} style={{cursor: 'pointer'}}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push('/pt')} style={{cursor: 'pointer'}}>
          Portugues
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
