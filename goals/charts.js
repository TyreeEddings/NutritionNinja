function formChange() {
    var d1 = document.getElementById("d1").value
    var d2 = document.getElementById("d2").value
    var d3 = document.getElementById("d3").value
    var d4 = document.getElementById("d4").value
    var d5 = document.getElementById("d5").value

    const cal = document.getElementById("daycalchart");

    new Chart(cal, {    
        type: "bar",
        data: {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
            datasets: [{
                label: "Caloric Intake",
                data: [d1, d2, d3, d4, d5],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    });

    const dist = document.getElementById("nutridistchart")

    var carbs = document.getElementById("carbsdata").value
    var proteins = document.getElementById("proteinsdata").value
    var fats = document.getElementById("fatsdata").value
    
    new Chart(dist, {
        type: "pie",
        data: {
            labels: ["Carbs", "Proteins", "Fats"],
            datasets: [{
                label: "Nutrient Distribution",
                title: "Nutrient Distribution",
                data: [carbs, proteins, fats],
            }]
        },
        options: {
            responsive: false
        }
    });
}

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
