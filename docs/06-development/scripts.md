---
title: 'Scripts'
sidebar_position: 3
---

Scripts must be run using the `vp run` command.

- [build](/docs/development/scripts#build)
- [compile](/docs/development/scripts#compile)
- [deadcode](/docs/development/scripts#deadcode)
- [dev](/docs/development/scripts#dev)
- [dev:cli](/docs/development/scripts#devcli)
- [format](/docs/development/scripts#format)
- [i18n:extract](/docs/development/scripts#i18nextract)
- [lint](/docs/development/scripts#lint)
- [package](/docs/development/scripts#package)
- [package:dir](/docs/development/scripts#packagedir)
- [test](/docs/development/scripts#test)
- [test:watch](/docs/development/scripts#testwatch)

## build

It generates the assets (JS, CSS…) for the production environment.  
Files are generated in the `out` folder.

```bash
vp run build
```

## compile

It runs the TypeScript compiler.  
This script is executed by the CI system when a pull request is opened.

```bash
vp run compile
```

## deadcode

It runs [Knip](https://github.com/webpro/knip) to find dead code.  
This script is executed by the CI system when a pull request is opened.

```bash
vp run deadcode
```

## dev

Starts the application in development mode.  
It automatically restarts the application when a file used by the **main process** or **preload** script is modified and
HMR is enabled for the **renderer process**.

```bash
vp run dev
```

## dev\:cli

It builds and watches the CLI source code.  
You can then use the bash script for you OS in the `scripts` to run the CLI.

```bash
vp run dev:cli
```

## format

It formats the code using [Prettier](https://prettier.io).  
This script is executed by the CI system when a pull request is opened.

```bash
vp run format
```

## i18n\:extract

It extracts the strings to translate from the source code and generates the `.po`/`.json` files.  
This script is executed by the CI system when a pull request is opened.

```bash
vp run i18n:extract
```

## lint

It runs [ESLint](https://eslint.org) to find linting errors.  
This script is executed by the CI system when a pull request is opened.

```bash
vp run lint
```

## package

It packages the application into an executable file for the current platform and generates the installer.  
You should run the `build` script before running this script.

```bash
vp run package
```

## package\:dir

It packages the application into an executable file for the current platform.  
You should run the `build` script before running this script.

```bash
vp run package:dir
```

## test

It runs the tests.

```bash
vp run test
```

## test\:watch

It runs the tests in watch mode.

```bash
vp run test:watch
```
