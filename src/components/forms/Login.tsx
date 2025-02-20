"use client"

import React from 'react'
import { 
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { createUserSchema } from '@/schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const Login = () => {

    const form = useForm<z.infer<typeof createUserSchema>>({
        resolver: zodResolver(createUserSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
      })

    function onSubmit(values: z.infer<typeof createUserSchema>) {

        alert(JSON.stringify(values, null, 2))
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-[400px] w-full mt-10 flex flex-col justify-center">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs text-[#696969]">Username</FormLabel>
              <FormControl>
                <Input {...field} className="rounded-none text-xs" placeholder='Username...'/>
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-3">
              <FormLabel className="text-xs text-[#696969]">Email</FormLabel>
              <FormControl>
                <Input {...field} className="rounded-none text-xs" placeholder='Email...'/>
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-3">
              <FormLabel className="text-xs text-[#696969]">Password</FormLabel>
              <FormControl>
                <Input {...field} type='password' className="rounded-none text-xs" placeholder='Password...'/>
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="place-self-center max-w-[280px] w-full rounded-none bg-[#4B4B4B] mt-10">Login</Button>
        </form>
    </Form>
  )
}

export default Login