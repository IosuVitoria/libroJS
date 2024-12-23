const goalForm = document.getElementById('goalForm');
const goalsList = document.getElementById('goalsList');
const detailedPlan = document.getElementById('detailedPlan');

let goals = [];

document.getElementById('addGoalButton').addEventListener('click', () => {
  if (goals.length >= 10) {
    alert('Solo puedes añadir hasta 10 objetivos.');
    return;
  }

  const name = document.getElementById('goalName').value;
  const quantity = parseInt(document.getElementById('goalQuantity').value, 10);
  const unit = document.getElementById('goalUnit').value;
  const deadline = parseInt(document.getElementById('goalDeadline').value, 10);

  if (!name || !quantity || !unit || !deadline) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  goals.push({ name, quantity, unit, deadline });
  renderGoals();
  goalForm.reset();
});

document.getElementById('generatePlanButton').addEventListener('click', () => {
  detailedPlan.textContent = generatePlan(goals);
});

document.getElementById('exportPlanButton').addEventListener('click', () => {
  const plan = generatePlan(goals);
  const blob = new Blob([plan], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'plan_detallado.txt';
  link.click();
});

function renderGoals() {
  goalsList.innerHTML = goals.map(
    (goal, index) =>
      `<p>${index + 1}. ${goal.name} (${goal.quantity} ${goal.unit} en ${goal.deadline} meses)</p>`
  ).join('');
}

function generatePlan(goals) {
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  let plan = '';
  for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
    const monthName = months[monthIndex];
    const monthGoals = goals.filter(goal => monthIndex < goal.deadline);

    if (monthGoals.length > 0) {
      plan += `${monthName}:\n`;
      monthGoals.forEach((goal, goalIndex) => {
        const perMonth = Math.ceil(goal.quantity / goal.deadline);
        plan += `  [ ] ${goalIndex + 1}. ${goal.name} (${perMonth} ${goal.unit}/mes). Total: ${goal.quantity}.\n`;
      });
    }
  }

  return plan || 'No hay objetivos en el plan.';
}
