---
title: 'Building'
sidebar_position: 4
---

## Packaging the application

:::danger
You probably want to [build the application](/docs/development/scripts#build) before creating executables.
:::

To package the application and create an installer:

`npm run package`

To package the application without creating an installer:

`npm run package:dir`

:::tip
If you want to package the application on macOS and skip code signing / notarization, run:
`CSC_IDENTITY_AUTO_DISCOVERY=false npm run package:dir`
:::

## macOS Code signing / notarization

### Code signing

To sign the application on macOS, you need to have a valid **"Developer ID Application"** and **"Developer ID Installer"** certificates.  
You can create these certificates from your [Apple Developer account](https://developer.apple.com/account/resources/certificates/list).

Once you have the certificates, you need to install them on your machine by double-clicking on the `.cer` file of each.

:::caution
You can sign the application using a development certificate but you won't be able to notarize it!
:::

### Notarization

The notarization step occurs after the application has been packaged and signed.  
You need to generate a new app-specific password from your [Apple ID account](https://appleid.apple.com/account/manage).

The following env variables are required for notarization:

- `APPLE_APP_SPECIFIC_PASSWORD`: The app-specific password generated from your [Apple ID account](https://appleid.apple.com/account/manage).
- `APPLE_ID`: your Apple ID (email)
- `APPLE_TEAM_ID`: your Apple Team ID

:::danger
If the above environment variables are not set, the notarization step will be skipped.
:::

### Linux

To create an RMP installer on macOS you need to install `rpm`.  
Unfortunatelly, the last version on Homewbrew is not macOS compatible, you have to install the version **4.18.1**.

`curl -o /tmp/rpm.rb https://raw.githubusercontent.com/Homebrew/homebrew-core/eab263e9ec06acc79573d901f06ed695efbb7f80/Formula/rpm.rb`
`brew install --formula /tmp/rpm.rb`
