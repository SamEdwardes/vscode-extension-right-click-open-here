# Contributing

## Quick start


Clone the repo:

```bash
git clone https://github.com/SamEdwardes/vscode-extension-right-click-open-here.git
```

Install the dependencies:

```bash
npm install
```

Lint:

```bash
npm run lint
```

Build the package:

```bash
vsce package
```

Publish the package:

```bash
vsce publish
```

## Semantic Versioning

https://code.visualstudio.com/api/working-with-extensions/publishing-extension#prerelease-extensions

> VS Code will automatically update extensions to the highest version available, so even if a user opted-into a pre-release version and there is an extension release with a higher version, the user will be updated to the released version. So, we recommend that extensions use major.EVEN_NUMBER.patch for release versions and major.ODD_NUMBER.patch for pre-release versions. For example: 0.2.* for release and 0.3.* for pre-release.