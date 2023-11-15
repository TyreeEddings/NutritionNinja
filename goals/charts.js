const cal = document.getElementById("calchart");

new Chart(cal, {
    type: "bar",
    data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        datasets: [{
            label: "Caloric Intake",
            data: [2000, 2456, 2301, 1011, 1567],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const dist = document.getElementById("nutridist")

new Chart(dist, {
    type: "pie",
    data: {
        labels: ["Carbs", "Fats", "Protiens", "Vitamins/Minerals", "Other"],
        datasets: [{
            label: "Nutrient Distribution",
            title: "Nutrient Distribution",
            data: [20, 40, 10, 15, 15],
        }]
    },
});
