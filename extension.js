const fileConfiguration = vscode.workspace.getConfiguration('files');
const associations = fileConfiguration.get('associations');

associations['*.app'] = "auraComponent";

fileConfiguration.update('associations', associations, vscode.ConfigurationTarget.Global)
    .then(() => {

    });