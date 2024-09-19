function calculateBudget() {
  let income = parseFloat(document.getElementById("income").value) || 0;
  let rent = parseFloat(document.getElementById("rent").value) || 0;
  let utilities = parseFloat(document.getElementById("utilities").value) || 0;
  let groceries = parseFloat(document.getElementById("groceries").value) || 0;
  let entertainment =
    parseFloat(document.getElementById("entertainment").value) || 0;

  let totalExpenses = rent + utilities + groceries + entertainment;
  let remainingBalance = income - totalExpenses;

  document.getElementById("total-expenses").value = totalExpenses.toFixed(2);
  document.getElementById("remaining-balance").value =
    remainingBalance.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn").addEventListener("click", calculateBudget);
});
