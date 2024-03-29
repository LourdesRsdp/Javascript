import * as account_business from "./account-business";
import * as data_business from "./data-business";

function getClientElement(client) {
    const allAccounts = data_business.getAccounts();
    const clientAccounts = [];
    for (let account of allAccounts) {
        if (account.clientId === client.id) {
            clientAccounts.push(account);
        }
    }

    const node = getClientNode(client);
    const ul = account_business.getClientAccountsElement(clientAccounts);

    node.appendChild(ul);

    return node;
}

function getClientNode(client) {
    const li = document.createElement("li");
    li.append(getFullName(client));

    return li;
}

function getFullName(client) {
    return client.first_name + " " + client.last_name;
}

export { getClientNode, getFullName, getClientElement };