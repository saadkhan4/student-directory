function renderTable(id, data) {
  const body = document.getElementById(id);
  const table = document.createElement("table");

  body.appendChild(table);

  // created table head
  const thead = document.createElement("thead");
  table.appendChild(thead);

  const th_row = document.createElement("tr");
  thead.appendChild(th_row);

  // created table body
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  // created for-in loop to accessing the keys from JSON file.
  for (const key in data[0]) {
    const t_heading = document.createElement("th");
    t_heading.innerText = key;
    th_row.appendChild(t_heading);
  }

  // created for-each loop to make multiple rows.
  data.forEach((element) => {
    const tb_row = document.createElement("tr");
    tbody.appendChild(tb_row);

    // inserting data in table body.
    for (const key in element) {
      const t_data = document.createElement("td");
      t_data.innerText = element[key];
      tb_row.appendChild(t_data);
    }
  });
}

// converting data into js object.
async function fetchData() {
  const response = await fetch("data.json");
  const data = await response.json();
  return data;
}

// rendering table inside the element of ID.
fetchData().then((data) => {
  renderTable("demo", data);
});
