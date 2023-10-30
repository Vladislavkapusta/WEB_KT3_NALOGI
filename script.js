const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const addExpenseButton = document.getElementById('add-expense');
const expenseList = document.getElementById('expense-list');
const totalExpenses = document.getElementById('total-expenses');

let expenses = [];

function renderExpenses() {
  expenseList.innerHTML = '';
  expenses.forEach((expense, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'expense-item';
    listItem.innerText = `${expense.name}: $${expense.amount}`;
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Удалить';
    deleteButton.addEventListener('click', () => {
      deleteExpense(index);
    });
    listItem.appendChild(deleteButton);
    expenseList.appendChild(listItem);
  });

  const sum = expenses.reduce((total, expense) => total + expense.amount, 0);
  totalExpenses.innerText = sum;
}

function addExpense() {
  const name = expenseNameInput.value;
  const amount = parseFloat(expenseAmountInput.value);
  if (name.trim() !== '' && !isNaN(amount)) {
    expenses.push({ name, amount });
    renderExpenses();
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
  }
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  renderExpenses();
}

addExpenseButton.addEventListener('click', addExpense);