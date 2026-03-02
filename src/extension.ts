import * as vscode from 'vscode';
import * as path from 'path';

const CUSTOM_UI_EXT_ID = 'subframe7536.custom-ui-style';
const CSS_FILENAME = 'jazari.css';
const STATE_CSS_ENABLED = 'cssEnabled';
const STATE_LAST_VERSION = 'lastVersion';

export function activate(context: vscode.ExtensionContext) {
    const customUiExt = vscode.extensions.getExtension(CUSTOM_UI_EXT_ID);

    if (!customUiExt) {
        promptInstallCustomUi();
    } else {
        const currentVersion: string = context.extension.packageJSON.version;
        const lastVersion = context.globalState.get<string>(STATE_LAST_VERSION);
        const cssEnabled = context.globalState.get<boolean>(STATE_CSS_ENABLED);

        if (cssEnabled === false) {
            if (currentVersion !== lastVersion) {
                vscode.window.showInformationMessage(
                    `Jazari updated to v${currentVersion}. Re-enable CSS customizations?`,
                    'Yes', 'No'
                ).then(choice => {
                    if (choice === 'Yes') {
                        ensureCssImport(context);
                        context.globalState.update(STATE_CSS_ENABLED, true);
                    }
                    context.globalState.update(STATE_LAST_VERSION, currentVersion);
                });
            }
        } else {
            ensureCssImport(context);
            context.globalState.update(STATE_CSS_ENABLED, true);
            context.globalState.update(STATE_LAST_VERSION, currentVersion);
        }
    }

    context.subscriptions.push(
        vscode.commands.registerCommand('jazari.removeCssImport', () => {
            removeCssImport(context);
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

    const alreadyImported = imports.some(imp => typeof imp === 'string' && imp === cssUri);

    if (!alreadyImported) {
        const cleaned = imports.filter(imp => typeof imp === 'string' ? !imp.includes(CSS_FILENAME) : true);
        const updated = [...cleaned, cssUri];
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

function removeCssImport(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration('custom-ui-style');
    const imports: (string | object)[] = config.get('external.imports', []);

    const filtered = imports.filter(imp => typeof imp === 'string' ? !imp.includes(CSS_FILENAME) : true);

    config.update('external.imports', filtered, vscode.ConfigurationTarget.Global)
        .then(() => {
            context.globalState.update(STATE_CSS_ENABLED, false);
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
