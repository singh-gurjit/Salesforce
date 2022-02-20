const fileConfiguration = vscode.workspace.getConfiguration('files');
const associations = fileConfiguration.get('associations');

associations['*.app'] = "auraComponent-markup";
associations['*.cmp'] = "auraComponent-markup";

fileConfiguration.update('associations', associations, vscode.ConfigurationTarget.Global)
    .then(() => {

    });