# Right Click Open Here

Open VS Code in a specific folder from the context menu.

## Links

- GitHub Repo: <https://github.com/SamEdwardes/vscode-extension-right-click-open-here>
- VS Code Marketplace: <https://marketplace.visualstudio.com/items?itemName=SamEdwardes.right-click-open-here>
- Open VSX Marketplace: <https://open-vsx.org/extension/SamEdwardes/right-click-open-here>

## Features

Adds custom commands to the explorer context menu and command palette to open/reopen VS Code in specific directories.

![Screenshot of context menu](https://github.com/SamEdwardes/vscode-extension-right-click-open-here/blob/main/images/screenshot-context-menu.png?raw=true)

![Screenshot of command palette](https://github.com/SamEdwardes/vscode-extension-right-click-open-here/blob/main/images/screenshot-command-pallette.png?raw=true)

The follow commands are added to the explorer context menu:

- `Open Here: New Window`
- `Open Here: Same Window`
- `Open Here: Parent Folder New Window`
- `Open Here: Parent Folder Same Window`

Two commands are also added to the Command Palette:

- `> Open Here: Open Workspace Parent Folder New Window`
- `> Open Here: Open Workspace Parent Folder Same Window`

## Requirements

None

## Extension Settings

```json
{
    "right-click-open-here.contextMenu.openFolder.showNewWindow": true,
    "right-click-open-here.contextMenu.openFolder.showSameWindow": true,
    "right-click-open-here.contextMenu.parentFolder.showParentFolderNewWindow": true,
    "right-click-open-here.contextMenu.parentFolder.showParentFolderSameWindow": true
}
```

## Known Issues

None

## Release Notes

See <https://github.com/SamEdwardes/vscode-extension-right-click-open-here/blob/main/CHANGELOG.md>.

## Contributing

See <https://github.com/SamEdwardes/vscode-extension-right-click-open-here/blob/main/CONTRIBUTING.md>.

## Attributions

- Motivated by this great extension: <https://github.com/chrisdias/vscode-opennewinstance>
- [Open folder icons created by kmg design - Flaticon](https://www.flaticon.com/free-icons/open-folder)