# Contributing

For more information on developing VS Code extensions, see the [official documentation](https://code.visualstudio.com/api).

## Quick start

Clone the repo:

```bash
git clone https://github.com/SamEdwardes/vscode-extension-right-click-open-here.git
```

Install the dependencies:

```bash
npm install
```

Open the debugger, and click the `Run Extension` button. Verify that the extension works.

Lint:

```bash
npm run lint
```

Build the package:

```bash
vsce package
```

## Semantic Versioning

<https://code.visualstudio.com/api/working-with-extensions/publishing-extension#prerelease-extensions>

> VS Code will automatically update extensions to the highest version available, so even if a user opted-into a pre-release version and there is an extension release with a higher version, the user will be updated to the released version. So, we recommend that extensions use major.EVEN_NUMBER.patch for release versions and major.ODD_NUMBER.patch for pre-release versions. For example: 0.2.* for release and 0.3.* for pre-release.

## Releasing

If the release is a pre-release, use the `--pre-release` flag for all commands.

1. Update the version in `package.json`.
2. Add release notes in `CHANGELOG.md`.
3. Verify that the extension builds.

```bash
vsce package
```

4. Create a new release in GitHub.

```bash
gh release create
```

5. Publish to Open VSX:

```bash
npx ovsx publish -p $OPENVSX_MARKETPLACE_TOKEN
```

6. Publish to VS Code Marketplace:

```bash
vsce publish
```