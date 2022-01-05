// Language: javascript
// Path: client\script.js
// CLIENT_API = "https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba";

const CLIENT_API = "https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba";

// fatch api data from server    
fetch(CLIENT_API).then((data) => {
    console.log(data);
    return data.json();

}).then((getAll) => {
    let cl = "";
    // get all data and print one by one
    getAll.clients.map((client) => {
        cl += `<tbody class="list" id="list">
        <tr>
         <th scope="row">
        <div class="media align-items-center">
          <div class="media-body">
            <span class="name mb-0 text-sm" id="name">${client.name}</span>
          </div>
        </div>
      </th>
      <td class="budget" id="company">
        ${client.company}
      </td>
      </tbody>`;
    });
    document.getElementById('list').innerHTML = cl;

}).catch((error) => {
    console.log(error);
});


