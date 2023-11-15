const cal = document.getElementById("daycalchart");

new Chart(cal, {
    type: "bar",
    data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        datasets: [{
            label: "Caloric Intake",
            data: [2501, 2234, 1256, 1633, 2289],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                responsive: false
            }
        }
    }
});

const dist = document.getElementById("nutridistchart")

new Chart(dist, {
    type: "pie",
    data: {
        labels: ["Carbs", "Proteins", "Fats"],
        datasets: [{
            label: "Nutrient Distribution",
            title: "Nutrient Distribution",
            data: [30, 50, 20],
        }]
    },
    options: {
        responsive: false
    }
});

const avgdist = document.getElementById("avgdistchart")

new Chart(avgdist, {
    type: "pie",
    data: {
        labels: ["Carbs", "Proteins", "Fats"],
        datasets: [{
            label: "Average Nutrient Distribution",
            data: [55, 25, 20]
        }]
    },
    options: {
        responsive: false
    }
});
