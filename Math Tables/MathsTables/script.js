function mathsTable() {

    // Select the container
    const table = document.getElementById('table');
    const container = document.getElementById("table-container");
    
    
    // Create a <p> element
    const paragraph = document.createElement("p");
    
    // Append multiplication table lines to the <p> using the DOM
    for (let i = 1; i <= 10; i++) {
      const line = document.createElement("span"); // Create a span for each line
      line.textContent = `2 * ${i} = ${2 * i}`;
      paragraph.appendChild(line);
      paragraph.appendChild(document.createElement("br")); // Add a line break
    }

    
    paragraph.appendChild(document.createElement("br"));
    for (let i = 1; i <= 10; i++) {
        const line = document.createElement("span"); // Create a span for each line
        line.textContent = `3 * ${i} = ${3 * i}`;
        paragraph.appendChild(line);
        paragraph.appendChild(document.createElement("br")); // Add a line break
    };
    
    // Append the <p> to the container
    container.appendChild(paragraph);
};
mathsTable();






