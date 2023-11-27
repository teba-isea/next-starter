[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/teba-isea/next-starter/blob/main/README.md)
[![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/teba-isea/next-starter/blob/master/README.es.md)

# 🚀 Welcome to Next-Starter

Next-Starter is an adaptable, gently opinionated starter template for Next.js 14, providing a basic foundation for your new projects.

This template makes it easy to quickly deploy a Next.js project with a solid configuration and a minimalist design, all to provide you with a seamless development experience in real-world Next applications.

"gently opinated" means that, while I believe in your freedom to select your own tools, I have made informed decisions to simplify your development process. The template includes sensible default configurations for:

## 🌟 Features

- 🐶 **[Husky](https://typicode.github.io/husky/#/)** and 📝 **[commitlint](https://commitlint.js.org/#/)**: They ensure an efficient and consistent commit process. These are especially useful in CI/CD environments, as Husky's hooks ensure that only commits and pushes of code that meet predefined rules are made.
- 💅 **[ESlint](https://eslint.org/)** and ✨ **[Prettier](https://prettier.io/)**: They keep your code clean and well-formatted.
- 🔄 Linting and formatting during commits: They help to maintain the quality and consistency of the code.
- 📦 **[@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)**: Facilitates package analysis to optimize your imports and bundle sizes.
- 🔐 **[@t3-oss/env-core](https://env.t3.gg/)**: Provides secure and efficient management of environment variables.
- 🎨 **[Storybook](https://storybook.js.org/)**: Ideal for visual development, testing, and showcasing your components.
- 🎭 **[Playwright](https://playwright.dev/)**: Provides end-to-end tests to ensure that your application works as expected.
- ✅ **[Vitest](https://vitest.dev/)**: A tool for unit tests that ensure individual functionalities of your application work correctly.

## **🔄 Don't agree with our choices?**

Don't worry! The template is designed to be easily customizable. Feel free to adjust it to your liking.

## 🎯 How to Use

To start using this project, follow these steps to clone the repository and install the necessary dependencies:

```bash
$ git clone <https://github.com/teba-isea/next-starter.git> my-next-starter
$ cd my-next-start
$ npm i # or pnpm i

```

Next, you'll need to define the necessary environment variables using the `.env` file, which you can create from the example `.env.example` file:

```bash
$ cp .env.example > .env

```

These environment variables serve as an example of how to manage environment variables in your project.

Now you can start using the project. But before you do, I'd like to help you understand how you can make the most of the additional features this template offers:

### Environment Variables

As its official website indicates, [@t3-oss/env-core](https://env.t3.gg/) provides a simple way to define environment variable validation for your application. This helps you avoid missing environment variables during the build process, which can often be a nuisance and difficult to debug.

In addition, we'll benefit from TypeScript's autocomplete when accessing these variables. And if any of the environment variables defined in the schema are missing, an error will be thrown, alerting us to the issue. This could be because we didn't define it or because it doesn't meet the type, length, or any other rule we've defined in our schema with `zod` - yes, it uses `zod` under the hood.

So, how do we define these environment variables? The schema is located in the `env.mjs` file at the root of our project. I decided to keep the documentation comments because I believe they provide good support when adding new environment variables, even if you haven't used T3 env before. While I strongly recommend taking a look at the documentation on their [official site](https://env.t3.gg/docs/introduction), the following rules should be enough to ensure everything works as expected:

- In the `server:{}` property: Include all variables that should not be visible to the client and are only relevant to the backend of our application.
- In the `client:{}` property: Include properties that, while also accessible from the backend, can be sent to the frontend as they do not contain sensitive application information, such as the project name or the production API URL.
- The `runtimeEnv` property: Here we need to redefine all our previously declared environment variables. This is related to how Next.js handles environment variables. There's a way to avoid it, but I'll leave that up to your [choice](https://env.t3.gg/docs/nextjs).
- After declaring the schema, it's highly advisable to create a sketch of how the `.env` file should be created with the environment variables your project needs. That's the function that `.env.example` serves, which we recently used to easily create the `.env` structure and then fill it in. Take ownership of it and update it in parallel with your `env.mjs` schema.

### **Husky & Git Hooks**

One of the most powerful features of this project is the use of **[Husky](https://typicode.github.io/husky/getting-started.html)** to automate tasks related to your commits. This ensures that only commits and pushes of code that meet predefined rules are made, which is especially useful in CI/CD environments.

You can view the commands defined in Husky's hooks in the **`.husky/`** folder at the root of the project.

### Conventional Commits

By default, next-starter uses [commitlint](https://commitlint.js.org/#/), which helps standardize your project's commit messages according to the consensus of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). This results in a coherent and easy-to-read Git history.

In addition to this, the behavior of [commitlint](https://commitlint.js.org/#/) has been extended in the `commitlint.config.js` file with a couple of extra rules that usually work well in most projects. However, as mentioned before, you are free to configure it according to your project's needs.

### Lint Staged

Another useful feature is [lint-staged](https://github.com/lint-staged/lint-staged), which performs linting and formatting on files that are in "Staged" before adding them to your commit. This helps maintain clean and formatted code in your branch. You can modify the behavior of lint-staged in the `lint-staged.config.js` file in the root directory of the project.

### Storybook

This project comes with [Storybook](https://storybook.js.org/) preinstalled and configured. Storybook allows you to develop and test your components in an isolated environment, which facilitates acceptance testing and collaboration with the design team.

In addition, with the integration of [test-storybook](https://github.com/storybookjs/test-runner), you'll have smoke tests to validate the rendering of your components. Just launch Storybook with `npm run storybook` and run `npm run storybook:test` to check if each component renders correctly.

### Testing

While the only check Next-Starter performs when doing a `git push` is that `npm build` executes successfully, it's designed this way to let you decide the criteria to meet when proceeding to push to your remote branch.

The project already has configured npm scripts that will run different types of tests:

- `storybook:test`: This can only be executed when `storybook` is open. This command will verify that each of the stories renders correctly. In summary, this is a smoke test that ensures all these components at least render without complications. Moreover, if we set up a [play function](https://storybook.js.org/docs/react/writing-stories/play-function#page-top), they will also be considered as part of the tests, in the form of interaction tests.
- `e2e:headless` and `e2e:ui`: These will be End to End tests written using [Playwright](https://playwright.dev/) that will ensure our application, or at least its vital functionalities, continue working.
    
    The difference between the two is that while `e2e:headless` will return the test results directly in the console (which is very convenient if we want to add it to the pre-push hook of husky), `e2e:ui` will open our default browser with a friendly interface to audit each of the tests and see them run.
    
    To create new end-to-end tests in our project, we simply need to create a new `name.spec.ts` file in the `e2e/` folder, which is in the root folder of the project.
    
- `test`, `test:ui`, `test:watch`, and `test:coverage` are different ways to execute [Vitest](https://vitest.dev/), which will be our designated framework for unit testing, each of them more or less appropriate depending on the context in which they are run.
    
    While `test:ui` and `test:watch` will serve us when developing to ensure that the components we are developing pass the tests, `test:coverage` will instead indicate the percentage of code that is being tested by our tests. On the other hand, `test` will perform the tests, print them on the terminal, and then finish. This would be the perfect candidate if we want to add it to any of our hooks.
    
    Additionally, it already has everything necessary to test react components such as `@testing-library/react` and `@testing-library/user-event`, both already configured in the `./src/tests/testing-library` folder along with a [Custom Render](https://testing-library.com/docs/react-testing-library/setup/#custom-render) function that will make the testing process more enjoyable.
    
    In my attempt to keep the template as unopinionated as possible and let you make the important decisions, I simply limited myself to placing example unit tests right next to it. Again, feel free to adapt the template to the needs of your project.
    

### **BulletProof CI/CD**

To ensure that nothing goes wrong when interacting with our repository, be it making a commit or pushing changes to the remote branch, it would be very beneficial to add certain criteria in the **`pre-push`** hook of Husky. Even including the **`pre-commit`** hook can help us early detect any potential issues.

I don't want to condition you or give an "objectively correct" opinion on how to proceed, as it largely depends on the needs of the project you plan to develop and the consensus you reach with your team. So instead, I'll provide you with two snippets so that, once you've decided, you can add commands to your hooks:

```bash
$ npx husky add .husky/pre-push "your-prepush-command"
$ npx husky add .husky/pre-commit "your-precommit-command"
```

## **👥 Contributions**

Any contribution is welcome! Fork this repository, make your changes, and submit a pull request. I will review and merge your contributions as soon as possible.

## **📜 License**

This project is licensed under the MIT License - see the **LICENSE.md** file for more details.
