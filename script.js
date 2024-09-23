document.getElementById('restock-btn').addEventListener('click', () => {
    const soda = document.getElementById('soda').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    
    if (quantity < 2) {
        alert('Cantidad insuficiente. Debe pedir al menos 2 docenas.');
        return;
    }

    const costPerBottle = 6;
    const bottlesPerDozen = 12;
    const totalCost = costPerBottle * bottlesPerDozen * quantity;
    const date = new Date().toLocaleDateString();
    const batchNumber = Math.floor(Math.random() * 10000);

    addOrderToTable(date, batchNumber, quantity, totalCost);
});

function addOrderToTable(date, batch, quantity, totalCost) {
    const tableBody = document.querySelector('#orders-table tbody');
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${date}</td>
        <td>${batch}</td>
        <td>${quantity} docenas</td>
        <td>${totalCost} Bs</td>
    `;

    tableBody.appendChild(newRow);
}
