export const addCriteria = () => {
  const input = document.getElementById("newCriteria");
  const criteria = input.value.trim();
  if (criteria) {
    const container = document.getElementById("criteriaContainer");
    const pill = document.createElement("span");
    pill.className = "criteria-pill";
    pill.innerHTML = `${criteria}<span class="close" onclick="this.parentElement.remove()">&times;</span>`;
    container.appendChild(pill);
    input.value = "";
  }
};
