const vscode = require("vscode");

const fileConfiguration = vscode.workspace.getConfiguration('files');
const associations = fileConfiguration.get('associations');

/* associations['*.app'] = "auraComponent";
associations['*.cmp'] = "auraComponent"; */

// fileConfiguration.update('associations', associations, vscode.ConfigurationTarget.Global)
//     .then(() => {

//     });