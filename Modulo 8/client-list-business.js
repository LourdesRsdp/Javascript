import * as client_business from "./client-business";
import * as data_business from "./data-business";

function printClientsAccounts() {
    const clients = data_business.getClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
      const element = client_business.getClientElement(client);
      console.log(element);
      ul.appendChild(element);
    }
    console.log(ul);
    document.getElementById("root").appendChild(ul);
}
export { printClientsAccounts };