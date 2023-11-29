[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/teba-isea/next-starter/blob/main/README.md)
[![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/teba-isea/next-starter/blob/main/README.es.md)

# 🚀 Bienvenido a Next-Starter

Next-Starter es una plantilla de inicio adaptable y ligeramente preconfigurada para [Next.js 14](https://nextjs.org/), diseñada para proporcionar una base robusta para tus nuevos proyectos.

Esta plantilla facilita el rápido despliegue de un proyecto Next.js con una configuración sólida y un diseño minimalista, todo para proporcionarte una experiencia de desarrollo sin fisuras en aplicaciones Next del mundo real.

"Ligeramente preconfigurada" significa que, a pesar de que creemos en tu libertad para seleccionar tus propias herramientas, hemos tomado decisiones informadas para simplificar tu proceso de desarrollo. La plantilla incluye configuraciones predeterminadas razonables para:

## 🌟 Características

- 🐶 [Husky](https://typicode.github.io/husky/#/) y 📝 [commitlint](https://commitlint.js.org/#/): Aseguran un proceso de commits eficiente y coherente. Estos son especialmente útiles en entornos de CI/CD, ya que los hooks de Husky garantizan que sólo se realicen commits y push de código que satisfaga las reglas predefinidas.
- 💅 [ESlint](https://eslint.org/) y ✨ [Prettier](https://prettier.io/): Mantienen tu código limpio y bien formateado.
- 🔄 Linting y formateo durante los commits: Ayudan a mantener la calidad y la consistencia del código.
- 📦 [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer): Facilita el análisis de paquetes para optimizar tus importaciones y tamaño de los bundles.
- 🔐 [@t3-oss/env-core](https://env.t3.gg/): Proporciona una gestión segura y eficiente de las variables de entorno.
- 🎨 [Storybook](https://storybook.js.org/): Ideal para el desarrollo visual, pruebas y presentación de tus componentes.
- 🎭 [Playwright](https://playwright.dev/): Proporciona pruebas de extremo a extremo para garantizar que tu aplicación funcione como se espera.
- ✅ [Vitest](https://vitest.dev/): Herramienta para pruebas unitarias que garantizan que las funcionalidades individuales de tu aplicación funcionen correctamente.

## 🔄 ¿No estás de acuerdo con nuestras elecciones?

¡No te preocupes! La plantilla está diseñada para ser fácilmente personalizable. Puedes cambiarla tu gusto.

## 🎯 Cómo utilizar

Para empezar a utilizar este proyecto, sigue estos pasos para clonar el repositorio e instalar las dependencias necesarias:

```bash
$ git clone https://github.com/teba-isea/next-starter.git my-next-starter
$ cd my-next-start
$ npm i # or pnpm i
```

A continuación, necesitarás definir las variables de entorno necesarias mediante el archivo **`.env`**, que puedes crear a partir del archivo de ejemplo **`.env.example`**:

```bash
$ cat .env.example > .env
```

Estas variables de entorno sirven como un ejemplo de cómo manejar las variables de entorno en tu proyecto.

Ahora ya puedes empezar a utilizar el proyecto. Pero antes de hacerlo, me gustaría ayudarte a entender cómo puedes aprovechar al máximo las características adicionales que ofrece esta plantilla:

### Variables de Entorno

Como su sitio web oficial indica [@t3-oss/env-core](https://env.t3.gg/) :

- Olvidar las variables de entorno durante el building puede ser una molestia y suele resultar difícil de depurar cuando un error es causado por una variable de entorno faltante. Este paquete proporciona una forma sencilla de definir la validación de variables de entorno para su aplicación.

Ademas de ello, contaremos con autocompletado por parte de typecript al momento de acceder a ellas y en caso de que llegase a faltar alguna de las variables de entorno definidas en el esquema, saltaria un error advirtiendonos de ello, bien sea por que no la definimos o no cumple con el tipo, la longitud o cualquier otra regla que hayamos definido en nuestro esquema con `zod`, por que si, usa `zod` under the hood.

Bien, ahora como definiriamos dichas variables de entorno? el esquema se encuetra en el archivo `env.mjs` ubicado en la raiz de nuestro proyecto. decidi dejar los comentarios de la documentacion por que los considere como un buen apoyo al momento de anadir nuevas variables de entorno aun si no has utilizado T3 env antes. Ahora si bien te recomiendo encarecidamente echarle un ojo a la documentacion en su [sitio oficial](https://env.t3.gg/docs/introduction), basta con tomar en cuenta las siguientes reglas para que todo funcione como esperamos:

- En la propiedad `server:{}` : iran todas las variables que de ninguna manera pueden ser visibles del lado del cliente y que solo le competen al backend de nuestra aplicacion.
- En la propiedad `client:{}` : Iran todas aquellas propiedades que, si bien tambien pueden ser accedidas desde el backend, pueden perfectamente ser enviadas al frontend ya que no contienen informacion sensible de la aplicacion, como el nombre del proyecto o el url de la api en produccion
- La propiedad `runtimeEnv` : aqui tendremos que redefinir las todas nuestras variables de entorno anteriormente declaradas. Esta asociado a como Next.js maneja las variables de entorno. Hay una forma de evitarlo pero lo dejo a tu [eleccion](https://env.t3.gg/docs/nextjs).
- Luego de declarar el esquema, es muy aconsejable crear un boceto de como se deberia crear dicho archivo `.env` con las variables de entorno que necesita tu proyecto. Y esa es la funcion que cumple `.env.example` que utilizamos recientemente para crear la estructura `.env` facilmente y luego rellenarlo. Apropiate de el y actualizalo a la par de tu esquema `env.mjs`

### Husky & Git Hooks

Una de las características más potentes de este proyecto es el uso de **[husky](https://typicode.github.io/husky/getting-started.html)** para automatizar tareas relacionadas con tus commits. Esto asegura que sólo se realicen commits y push de código que cumpla con las reglas predefinidas, lo que es especialmente útil en entornos de CI/CD.

Puedes ver los comandos definidos en los hooks de Husky en la carpeta **`.husky/`** de la carpeta raíz del proyecto.

### Conventional Commits

Por defecto, next-starter usa **[commitlint](https://commitlint.js.org/#/)**, que ayuda a estandarizar los mensajes de commit de tu proyecto siguiendo el consenso de **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)**. Esto resulta en un historial de git coherente y fácil de leer.

Ademas de ello, se extendio el comportamiento de **[commitlint](https://commitlint.js.org/#/)** en el archivo `commitlint.config.js` con un par de reglas extras que suelen ir muy bien en la mayoria proyectos, pero como te mencione antes, eres libre de configurarlo de acuerdo a las necesidades de tu proyecto.

### Lint Staged

Otra característica útil es **[lint-staged](https://github.com/lint-staged/lint-staged)**, que realiza linting y formateo en los archivos que están en "Staged" antes de añadirlos a tu commit. Esto ayuda a mantener un código limpio y formateado en tu branch. Puedes modificar el comportamiento de lint-staged en el archivo **`lint-staged.config.js`** en la carpeta raíz del proyecto.

### Storybook

Este proyecto viene con **[Storybook](https://storybook.js.org/)** preinstalado y configurado. Storybook te permite desarrollar y probar tus componentes en un entorno aislado, lo que facilita las pruebas de aceptación y la colaboración con el equipo de diseño.

Además, con la integración de **[test-storybook](https://github.com/storybookjs/test-runner)**, tendrás pruebas de humo para validar la renderización de tus componentes. Solo tendrás que lanzar Storybook con **`npm run storybook`** y ejecutar **`npm run storybook:test`** para comprobar si cada componente se renderiza correctamente.

### Testing

Si bien la única comprobación que realiza Next-Starter al hacer un `git push` es que se ejecute `npm build` de manera satisfactoria, lo hice de esa manera para que seas tú quien decida los criterios a cumplir al momento de proceder a a hacer un push a tu rama remota.

El proyecto cuenta ya con scripts de npm configurados que ejecutaran diferentes tipos de pruebas

- `storybook:test` solo puede ejecutarse cuando `storybook` está abierto. Este comando verificará si cada uno de los stories se renderiza correctamente. En resumen, se trata de una prueba de humo que garantiza que todos estos componentes al menos se rendericen sin complicaciones. Además, si configuramos una [play function](https://storybook.js.org/docs/react/writing-stories/play-function#page-top), también se considerarán como parte de las pruebas, en forma de pruebas de interacción.
- `e2e:headless` y `e2e:ui` : estas seran pruebas End to End escritas usando [Playwright](https://playwright.dev/) que nos aseguraran que nuestra aplicacion, o al menos y sus funcionalidades vitales sigan en funcionamiento.

La diferencia entre uno y otro es que mientras `e2e:headless` nos devolverá en consola directamente los resultados de las pruebas (lo cual es muy conveniente si deseamos añadirlo al hook de pre-push de husky), `e2e:ui` abrirá nuestro navegador predeterminado con una interfaz amigable para auditar cada una de las pruebas y verlas correr.

Para crear nuevas pruebas end to end en nuestro proyecto, simplemente debemos crear un nuevo archivo `name.spec.ts` en la carpeta `e2e/`, que se encuentra en la carpeta raíz del proyecto.

- `test`, `test:ui`, `test:watch` y `test:coverage` son diferentes formas de ejecutar [Vitest](https://vitest.dev/), que sera nuestro framework desigando para hacer unit testing, cada una de ellas más o menos apropiada dependiendo del contexto en el que se ejecuten.
  Mientras `test:ui` y `test:watch` nos servirán al momento de desarrollar para asegurarnos de que los componentes que estemos desarrollando pasen las pruebas, `test:coverage` en cambio nos indicará el porcentaje de código que está siendo probado por nuestros tests. Por otro lado, `test` efectuará las pruebas, las imprimirá en la terminal y luego finalizará. Este sería el candidato perfecto si deseamos añadirlo a alguno de nuestros hooks.
  Ademas de ello, ya cuenta con todo lo necesario para hacer pruebas a componentes de react como `[@testing-library/react](https://testing-library.com/docs/react-testing-library/setup/)` y `[@testing-library/user-event](https://github.com/testing-library/user-event)` ambos ya cofigurados en la carpeta `./src/tests/testing-library` junto a una funcion [Custom Render](https://testing-library.com/docs/react-testing-library/setup/#custom-render) que nos hara mucho mas ameno el proceso de testing.
  En mi intento por mantener el template lo menos opinated posible y que seas tu quien tome las decisiones importantes, por lo tanto simplemente me limite a colocar tests unitarios de ejemplo justo al lado. Nuevamente, sientete libre de adaptar el template a las necesidades de tu proyecto

### BulletProof CI/CD

Si deseamos asegurarnos que no ocurra nada malo al momento de interactuar con nuestro repositorio bien sea para hacer un commit o hacer push de nuestros cambios a la rama remota, seria muy conveniente anadir ciertos criterios en el hook de `pre-push` de husky, incluse tambien en el `pre-commit` hook para asi darnos cuenta de forma temprana de cualquier posible inconveniente.

No quiero condicionarte o darte una opinion “objetivamente correcta” de como proceder, puesto a que como dije antes, dependera en gran medida de las necesidades del proyecto que planeas desarrollar y ademas en consenso al que llegues con tu equipo. asi que en vez de eso te dare dos snippets para que, luego de decidirlo puedas anadir comandos a tu hooks

```bash
$ npx husky add .husky/pre-push "your-prepush-command"
$ npx husky add .husky/pre-commit "your-precommit-command"
```

## 👥 Contribuciones

¡Cualquier contribucion es bienvenida! Haz un fork de este repositorio, realiza tus cambios y envía una solicitud de pull. Revisare y fusionare tus aportes lo más pronto posible.

## 📜 Licencia

Este proyecto se encuentra bajo la Licencia MIT - consulta el archivo [LICENSE.md](notion://www.notion.so/tebaisea/LICENSE.md) para más información.
