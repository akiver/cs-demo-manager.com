---
title: 'Translations'
---

The project uses the library [Lingui](https://lingui.dev/introduction) to translate the application and [Crowdin](https://crowdin.com/project/cs-demo-manager) to allow anybody to help translating the application.

## Messages format

Messages in the Electron renderer process (UI/React) use the [Gettext format](https://www.gnu.org/software/gettext/manual/html_node/PO-Files.html) (`.po` files) while messages in the Electron main process use a JSON format with explicit IDs.

While it would be better to use the Gettext format everywhere, we use a JSON format for the main electron process for the following reasons:

1. Dynamic import of JS modules on Windows doesn't work when the file is located inside an Electron ASAR archive (at least when I tried it)
2. We would have to do the compile step manually (`.po` to `.js` files)
3. There are a few translations in the main process (tray icon, file menu...)

## Crowdin synchronization

To keep in sync the repository with Crowdin translations, we use the [Crowdin GitHub action](https://github.com/crowdin/github-action).  
It allows us to [create a PR per language](https://github.com/akiver/cs-demo-manager/blob/main/.github/workflows/download_translations.yml) with latest translations done by translators and [upload new translations](https://github.com/akiver/cs-demo-manager/blob/main/.github/workflows/upload_translations.yml) to Crowdin based on the application source code.

- Translations are uploaded when something is pushed to the `main` branch.
- Translations are downloaded from Crowdin every 12 hours.

:::info
Workflows can also be triggered manually from GitHub but it's possible only from maintainers.
:::

### Crowdin post-export processor

The Crowdin project has the application [Crowdin post-export processor](https://store.crowdin.com/custom-post-export-processor) enabled and has the following script:

```js
let newContent = content.split('\n');
newContent = newContent.map((line) => {
  return line.startsWith('"PO-Revision-Date:') ? '"PO-Revision-Date: \\n"' : line;
});

while (newContent[newContent.length - 1] === '') {
  newContent.pop();
}

const lastLine = newContent[newContent.length - 1];
if (lastLine !== '') {
  newContent.push('');
}
content = newContent.join('\n');
```

It does 2 things:

- Ensure there is only 1 blank line at the end of each file
- Ensure the `PO-Revision-Date` line is always the same

The reason we ensure only 1 line at the end of the file is because when we extract messages with the **Lingui CLI**
there is only 1 blank line but when we download translations from **Crowdin** there are 2 blank lines.  
The `PO-Revision-Date` field is updated by Crowdin even if the messages of the language didn't change.

This script avoids unnecessary changes in the `.po` files and so unnecessary PRs.

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
3. Add the code in the [GitHub action matrix](https://github.com/akiver/cs-demo-manager/blob/main/.github/workflows/download_translations.yml)
4. Add the code in the [UI select options](https://github.com/akiver/cs-demo-manager/blob/main/src/ui/settings/ui/language-select.tsx)
5. Add support for the language in the function `getFnsLocale` of the [date picker component](https://github.com/akiver/cs-demo-manager/blob/main/src/ui/components/date-picker.tsx)
6. If the locale is composed of the language + region (example: `zh-CN`) add a mapping in the [Crowdin conf](https://github.com/akiver/cs-demo-manager/blob/main/crowdin.yml)
7. Create a PR

### Maintainer steps

:::caution
The following steps can be done only by a project maintainer.
:::

1. Go on [Crowdin](https://crowdin.com/project/cs-demo-manager)
2. Add the new language from the dashboard
3. Trigger a new [Download translations job](https://github.com/akiver/cs-demo-manager/actions/workflows/download_translations.yml)
4. A new PR with new language files should have been created, review it and merge it
