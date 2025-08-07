# Change Log

## [Unreleased]

- No changes.

## 0.0.6 (2025-08-07)

- Disable `Open Here: Parent Folder New Window` and `Open Here: Parent Folder Same Window` from the context menu by default. Closes #6. These commands were typically not useful to see in the context menu. To open the parent folder, you can use the command palette commands instead: `> Open Here: Open Workspace Parent Folder New Window` or `> Open Here: Open Workspace Parent Folder Same Window`

```json
{
    "right-click-open-here.contextMenu.parentFolder.showParentFolderNewWindow": false,
    "right-click-open-here.contextMenu.parentFolder.showParentFolderSameWindow": false
}
```

## 0.0.5 (2024-10-10)

- Added settings to configure when commands to show in the context menu. This allows you to hide commands that you don't use from the context menu. Closes #5.

## O.0.4 (2024-08-18)

- Added an icon.
- Remove pre-release tag.

## O.0.3 (pre-release) (2024-08-02)

- Fix image links in the README.
- Add support for older versions of VS Code (1.87.0). Closes #3.

## 0.0.2 (pre-release) (2024-07-21)

Support for Open VSX and code server.

## 0.0.1 (pre-release) (2024-07-21)

Another pre-release for testing.

## 0.0.0 (pre-release) (2024-07-21)

Initial experimental release of Right Click Open Here.
