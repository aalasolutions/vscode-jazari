import * as vscode from 'vscode';
import * as path from 'path';

const CUSTOM_UI_EXT_ID = 'subframe7536.custom-ui-style';
const CSS_FILENAME = 'jazari.css';

export function activate(context: vscode.ExtensionContext) {
    const customUiExt = vscode.extensions.getExtension(CUSTOM_UI_EXT_ID);

    if (!customUiExt) {
        promptInstallCustomUi();
    } else {
        ensureCssImport(context);
    }

    context.subscriptions.push(
        vscode.commands.registerCommand('jazari.removeCssImport', () => {
            removeCssImport();
        })
    );
}

function promptInstallCustomUi() {
    vscode.window.showInformationMessage(
        'Jazari: Install "Custom UI Style" for the full theme experience (unified panels, rounded widgets).',
        'Install',
        'Skip'
    ).then(choice => {
        if (choice === 'Install') {
            vscode.commands.executeCommand(
                'workbench.extensions.installExtension',
                CUSTOM_UI_EXT_ID
            );
        }
    });
}

function ensureCssImport(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration('custom-ui-style');
    const imports: (string | object)[] = config.get('external.imports', []);

    const cssPath = path.join(context.extensionPath, 'css', CSS_FILENAME);
    const cssUri = `file://${cssPath}`;

    const alreadyImported = imports.some(imp => {
        if (typeof imp === 'string') {
            return imp.includes(CSS_FILENAME);
        }
        return false;
    });

    if (!alreadyImported) {
        const updated = [...imports, cssUri];
        config.update('external.imports', updated, vscode.ConfigurationTarget.Global)
            .then(() => {
                vscode.window.showInformationMessage(
                    'Jazari CSS applied. Reload window to see changes.',
                    'Reload'
                ).then(choice => {
                    if (choice === 'Reload') {
                        vscode.commands.executeCommand('workbench.action.reloadWindow');
                    }
                });
            });
    }
}

function removeCssImport() {
    const config = vscode.workspace.getConfiguration('custom-ui-style');
    const imports: (string | object)[] = config.get('external.imports', []);

    const filtered = imports.filter(imp => {
        if (typeof imp === 'string') {
            return !imp.includes(CSS_FILENAME);
        }
        return true;
    });

    config.update('external.imports', filtered, vscode.ConfigurationTarget.Global)
        .then(() => {
            vscode.window.showInformationMessage(
                'Jazari CSS removed. Reload window to apply.',
                'Reload'
            ).then(choice => {
                if (choice === 'Reload') {
                    vscode.commands.executeCommand('workbench.action.reloadWindow');
                }
            });
        });
}

export function deactivate() {}
