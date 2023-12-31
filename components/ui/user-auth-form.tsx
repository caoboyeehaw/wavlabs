"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button-default"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-5", className)} {...props}>

      <Button variant="outline" type="button" disabled={isLoading} className="relative flex items-center justify-center">
        {isLoading ? (
          <Icons.spinner className="absolute left-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.googlecolored className="absolute left-3 h-4 w-4" />
        )}
        <span>Continue with Google</span>
      </Button>

      <Button variant="outline" type="button" disabled={isLoading} className="relative flex items-center justify-center">
        {isLoading ? (
          <Icons.spinner className="absolute left-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.soundcloudcolored className="absolute left-3 h-4 w-4" />
        )}
        <span>Continue with Soundcloud</span>
      </Button>


      <div className="relative mt-3 mb-3">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            OR
          </span>
          
        </div>
        
      </div>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-1 mb-2">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email address"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Continue with Email
          </Button>
        </div>
      </form>

    </div>
  )
}