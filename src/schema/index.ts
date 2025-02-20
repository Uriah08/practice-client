import { z } from "zod"

export const createUserSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(6).max(50),
  })

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(50),
})