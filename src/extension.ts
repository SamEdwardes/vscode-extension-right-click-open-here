import * as vscode from 'vscode';

// ------------------------------------------------------------------------------
// Define helper functions
// ------------------------------------------------------------------------------

async function openParentFolder(uri: vscode.Uri, forceNewWindow: boolean = false) {
	const parentPath = uri.path.split('/').slice(0, -1).join('/');
	vscode.commands.executeCommand(
		'vscode.openFolder',
		vscode.Uri.parse(parentPath),
		{ forceNewWindow: forceNewWindow }
	);
}


async function openWorkspaceParentFolder(forceNewWindow: boolean = false) {
	// Check that worspaceFolders is not undefined
	if (!vscode.workspace.workspaceFolders) { return; }

	const workspaceRoot = vscode.workspace.workspaceFolders[0].uri.path;
	const parentPath = workspaceRoot.split('/').slice(0, -1).join('/');

	vscode.commands.executeCommand(
		'vscode.openFolder',
		vscode.Uri.parse(parentPath),
		{ forceNewWindow: forceNewWindow }
	);
}

// ------------------------------------------------------------------------------
// Define commands
// ------------------------------------------------------------------------------

export function activate(context: vscode.ExtensionContext) {

	// ---------------------------------------------------------------------------
	// Open folder commands
	// ---------------------------------------------------------------------------

	const openNewWindowHere = vscode.commands.registerCommand(
		'right-click-open-here.openNewWindowHere',
		(uri: vscode.Uri) => {
			vscode.commands.executeCommand('vscode.openFolder', uri, { forceNewWindow: true });
		}
	);

	context.subscriptions.push(openNewWindowHere);

	const reopenWindowHere = vscode.commands.registerCommand(
		'right-click-open-here.reopenWindowHere',
		(uri: vscode.Uri) => {
			vscode.commands.executeCommand('vscode.openFolder', uri, { forceNewWindow: false });
		}
	);

	context.subscriptions.push(reopenWindowHere);

	// ---------------------------------------------------------------------------
	// Open parent folder commands
	// ---------------------------------------------------------------------------

	const openParentFolderNewWindowHere = vscode.commands.registerCommand(
		'right-click-open-here.openParentFolderNewWindowHere',
		(uri: vscode.Uri) => {
			openParentFolder(uri, true);
		}
	);

	context.subscriptions.push(openParentFolderNewWindowHere);

	const openParentFolderSameWindowHere = vscode.commands.registerCommand(
		'right-click-open-here.openParentFolderSameWindowHere',
		(uri: vscode.Uri) => {
			openParentFolder(uri, false);
		}
	);

	context.subscriptions.push(openParentFolderSameWindowHere);

	// ---------------------------------------------------------------------------
	// Open workspace parent folder commands
	// ---------------------------------------------------------------------------

	const openWorkspaceParentFolderNewWindowHere = vscode.commands.registerCommand(
		'right-click-open-here.openWorkspaceParentFolderNewWindowHere',
		async function () {
			await openWorkspaceParentFolder(true);
		}
	);

	context.subscriptions.push(openWorkspaceParentFolderNewWindowHere);

	const openWorkspaceParentFolderSameWindowHere = vscode.commands.registerCommand(
		'right-click-open-here.openWorkspaceParentFolderSameWindowHere',
		async function () {
			await openWorkspaceParentFolder(false);
		}
	);

	context.subscriptions.push(openWorkspaceParentFolderSameWindowHere);

}

export function deactivate() { }
