---
title: 'Translations'
sidebar_position: 7
---

The project uses the library [Lingui](https://lingui.dev/introduction) to translate the application and [Crowdin](https://crowdin.com/project/cs-demo-manager) to allow anybody to help translating the application.

Only the **English** source catalogs are versioned in the repository (`src/ui/translations/en` and `src/electron-main/translations/en`).  
The other languages are managed on Crowdin and downloaded at build time — they are gitignored and never committed.

## Messages format

Messages in the Electron renderer process (UI/React) use the [Gettext format](https://www.gnu.org/software/gettext/manual/html_node/PO-Files.html) (`.po` files) while messages in the Electron main process use a JSON format with explicit IDs.

While it would be better to use the Gettext format everywhere, we use a JSON format for the main electron process for the following reasons:

1. Dynamic import of JS modules on Windows doesn't work when the file is located inside an Electron ASAR archive (at least when I tried it)
2. We would have to do the compile step manually (`.po` to `.js` files)
3. There are a few translations in the main process (tray icon, file menu...)

## Crowdin synchronization

### Uploading source strings

When English source catalogs change on the `main` branch, the [upload translations workflow](https://github.com/akiver/cs-demo-manager/blob/main/.github/workflows/upload_translations.yml) uploads them to Crowdin using the [Crowdin GitHub action](https://github.com/crowdin/github-action) so translators can translate the new strings.

:::info
The workflow can also be triggered manually from GitHub but it's possible only from maintainers.
:::

### Downloading translations

Translations are downloaded from Crowdin at build time using the [Crowdin CLI](https://crowdin.github.io/crowdin-cli/) — see the `downloadTranslations` function in the [build script](https://github.com/akiver/cs-demo-manager/blob/main/scripts/build.mjs).

The download requires the environment variable `CROWDIN_PERSONAL_TOKEN` to be set:

1. Create a [Crowdin](https://crowdin.com) account
2. Request to join the [project](https://crowdin.com/project/cs-demo-manager) on Crowdin and wait to be granted access
3. Generate a [personal access token](https://crowdin.com/settings#api-key)
4. Set the `CROWDIN_PERSONAL_TOKEN` environment variable to your token

If the variable is not set, the download is skipped and the build will only include English — that's fine for local development.

## Adding a new language

### Developer or maintainer steps

1. The first step is to find the locale code.  
   A locale code usually contains the _language_ and optionally a _region_ (_country_) separated by an underscore or dash character (example: `en-US` for English spoken in the United States).  
   Languages may have multiple regions (`en-US`, `en-GB`, `en-CA`...).  
   In most cases the differences are mainly in spelling or vocabulary that doesn't prevent people from different regions to understand each other.  
   Because of that, we usually use the _language_ code without the region when possible.  
   You can find all locale codes [here](https://developer.crowdin.com/language-codes).  
   If the local code contains **only** a language, you can use it as is.  
   If the locale code contains the langage **and** the region, you have to decide if using only the language code is enough.  
   For example, there are many regions for English (`en-US`, `en-GB`, `en-CA`...) but the application only support one English language `en` because the differences are not significant enough to justify multiple languages.  
   At the opposite, the locales `zh-CN` and `zh-TW` are very different and we support both of them.
2. Add the code in the [UI Lingui config](https://github.com/akiver/cs-demo-manager/blob/main/lingui.config.ts) and [main process Lingui config](https://github.com/akiver/cs-demo-manager/blob/main/src/electron-main/lingui.config.ts)
3. Add the code in the [UI select options](https://github.com/akiver/cs-demo-manager/blob/main/src/ui/settings/ui/language-select.tsx)
4. Add support for the language in the function `getLocaleObject` of the [date picker component](https://github.com/akiver/cs-demo-manager/blob/main/src/ui/components/date-picker.tsx)
5. If the Crowdin locale code differs from the application locale code (example: Crowdin uses `es-ES` but the application uses `es`) add a mapping in the [Crowdin conf](https://github.com/akiver/cs-demo-manager/blob/main/crowdin.yml)
6. Create a PR

### Maintainer steps

:::caution
The following steps can be done only by a project maintainer.
:::

1. Go on [Crowdin](https://crowdin.com/project/cs-demo-manager)
2. Add the new language from the dashboard

The new language will be included automatically in the next release since translations are downloaded at build time.
