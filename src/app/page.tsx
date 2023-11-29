import { buttonVariants } from "@/components/button"
import { ParallaxHero } from "@/components/parallax-title"
import GithubIcon from "@/assets/icons/github.svg"
import Image from "next/image"

export default function Home() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col items-center px-2">
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <ParallaxHero>
          <div className="flex w-full flex-col justify-center space-y-3 md:flex-row md:space-y-0">
            <a
              className={buttonVariants({ variant: "primary" })}
              href="https://vercel.com/new/clone?demo-description=An adaptable, gently opinionated starter template for Next.js 14&demo-title=Next Starter&project-name=My Next Starter Boilerplate&repository-name=next-starter&repository-url=https://github.com/teba-isea/next-starter"
              rel="noopener noreferrer"
              target="_blank"
            >
              Deploy on <span className="text-xl">▲</span>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/teba-isea/next-starter/blob/main/README.md"
              className={buttonVariants({ variant: "ghost" })}
            >
              Github
              <span className="ml-1 text-xl">
                <Image
                  className="inline w-4"
                  src={GithubIcon}
                  alt="Github Icon"
                />
              </span>
            </a>
          </div>
        </ParallaxHero>
      </div>

      <div className="relative top-[-20vh] mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
        <div className="grid gap-2">
          <div className="flex flex-col rounded border-2 border-dashed border-gray-700 p-3">
            <h3 className="mb-2 text-lg font-bold">
              🐶{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://typicode.github.io/husky/"
              >
                Husky
              </a>{" "}
              and 📝{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://commitlint.js.org/"
              >
                Commitlint
              </a>
            </h3>
            <p>They ensure an efficient and consistent commit process.</p>
            <p>
              These are especially <b>useful in CI/CD</b> environments, as{" "}
              <b>Husky&apos;s hooks</b> ensure that only commits and pushes of
              code that meet predefined rules are made.
            </p>
          </div>
          <div className="flex flex-col rounded border-2 border-dashed border-gray-700 p-3">
            <h3 className="mb-2 text-lg font-bold">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.npmjs.com/package/@next/bundle-analyzer"
              >
                📦 @next/bundle-analyzer
              </a>
            </h3>
            <p>
              Facilitates <b>package analysis</b> to optimize your imports and
              bundle sizes.
            </p>
          </div>
          <div className="flex flex-col  rounded border-2 border-dashed border-gray-700 p-3">
            <h3 className="mb-2 text-lg font-bold">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://storybook.js.org/"
              >
                🎨 Storybook
              </a>
            </h3>
            <p>
              Ideal for <b>visual development</b>, testing, and showcasing your
              components.
            </p>
          </div>
          <div className="flex flex-col  rounded border-2 border-dashed border-gray-700 p-3">
            <h3 className="mb-2 text-lg font-bold">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://vitest.dev/"
              >
                ✅ Vitest
              </a>
            </h3>
            <p>
              A tool for <b>Unit tests</b> that ensure individual
              functionalities of your application work correctly.
            </p>
          </div>
          <div />
        </div>

        <div className="grid gap-2">
          <div className="flex flex-col  rounded border-2 border-dashed border-gray-700 p-3">
            <h3 className="mb-2 text-lg font-bold">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://eslint.org/"
              >
                💅 ESlint
              </a>{" "}
              and{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://prettier.io/"
              >
                ✨ Prettier
              </a>
            </h3>
            <p>
              They keep your code clean and well-formatted. 🔄{" "}
              <b>Linting and formatting</b> during commits too, it help to{" "}
              <b>maintain the quality</b> and consistency of the code.
            </p>
          </div>

          <div className="flex flex-col  rounded border-2 border-dashed border-gray-700 p-3">
            <h3 className="mb-2 text-lg font-bold">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://env.t3.gg/"
              >
                🔐 @t3-oss/env-core
              </a>
            </h3>
            <p>
              Provides secure and efficient management of{" "}
              <b>environment variables</b>.
            </p>
          </div>
          <div className="flex flex-col  rounded border-2 border-dashed border-gray-700 p-3">
            <h3 className="mb-2 text-lg font-bold">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://playwright.dev/"
              >
                🎭 Playwright
              </a>
            </h3>
            <p>
              <b>End-to-End tests</b> to ensure that the vitals features works
              as expected.
            </p>
          </div>

          <div className="flex flex-col  rounded border-2 border-dashed border-cyan-400 p-3">
            <h3 className="mb-2 text-lg font-bold">🤩 Want more?</h3>
            <p>
              Don&apos;t hold back! This project could use{" "}
              <b>your unique insights</b>. Dare to be one of the first
              contributors by submitting a pull request. <b>Your involvement</b>{" "}
              is eagerly awaited!
            </p>
          </div>
          <div />
        </div>
      </div>
      <footer className="relative mb-3 md:w-[70%]">
        <div className="mb-2 mt-3 border-b-2 border-dashed border-gray-600 py-2 ">
          <h2 className="text-center ">
            A small contribution from the{" "}
            <span className="font-semibold text-cyan-400">Community</span> for
            the <span className="font-semibold text-cyan-400">Community</span>{" "}
            to the community. let&apos;s make software,{" "}
            <span className="font-bold">
              let&apos;s make the world better 🚀
            </span>
            .
          </h2>
        </div>
        <h2 className="w-full text-center font-bold ">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/teba-isea"
          >
            Teba Isea - Y2K23
          </a>
        </h2>
      </footer>
    </main>
  )
}
