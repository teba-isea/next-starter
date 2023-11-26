import { env } from "../../env.mjs"

export default function Home() {
  const appName = env.NEXT_PUBLIC_APP_NAME
  const helloFromServer = env.TEST_SERVERSIDE_VAR
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{appName}</h1>
      <h1>{helloFromServer}</h1>
    </main>
  )
}
