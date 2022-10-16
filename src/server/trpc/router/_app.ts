// src/server/trpc/router/_app.ts
import { router } from "../trpc"
import { exampleRouter } from "./example"
import { authRouter } from "./auth"
import { tasksRouter } from "./tasks"

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  tasks: tasksRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
