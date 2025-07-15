
let currentGroup = 1;
const totalGroups = 2;

function showGroup(index) {
    for (let i = 1; i <= totalGroups; i++) {
        document.getElementById(`group${i}`).classList.add("hidden");
    }
    document.getElementById(`group${index}`).classList.remove("hidden");
}

function nextGroup() {
    if (currentGroup < totalGroups) {
        currentGroup++;
        showGroup(currentGroup);
    }
}

function prevGroup() {
    if (currentGroup > 1) {
        currentGroup--;
        showGroup(currentGroup);
    }
}

// Iniciar con el grupo 1 visible
document.addEventListener("DOMContentLoaded", () => {
    showGroup(currentGroup);
});