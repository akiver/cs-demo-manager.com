# cs-demo-manager.com

Source code of [https://cs-demo-manager.com](https://cs-demo-manager.com), the website of the application [CSGO Demo Manager](https://github.com/akiver/csgo-demos-manager).

## Translation

### Starting a new translation

If you would like to start a new translation, submit a PR adding a new language code ans its native name in the `LOCALES` variable in `locales.ts`.
Languages code are available [here](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

For example adding Español language (`es` language code):

```
  en: 'English', // Already defined
  es: 'Español', // <- New language, replace it with your language code and native name
```

### Editing translation

Most of translations are in markdown files, the rest are in JSON files.

Markdown files are [in this markdown folder](https://github.com/akiver/cs-demo-manager.com/blob/main/src/markdown) and JSON files in the [translations folder](https://github.com/akiver/cs-demo-manager.com/blob/main/src/translations).

#### Markdown

Each markdown filenames are suffixed by the language code, for example `export.fr.md` is the French translation.
You have to edit the files corresponding to your language and if it doesn't exist, you have to create it using the `.en.md` file as reference.

#### JSON

JSON filenames correpond to the language code, for example `fr.json` is fo the French translation.
You have to edit the file corresponding to your language and if it doesn't exist, you have to create it using the `en.json` file as reference.

## Development

1. `yarn`
2. `yarn dev`

## License

[MIT](https://github.com/akiver/cs-demo-manager.com/blob/main/LICENSE)
