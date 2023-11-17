const cal = new Chart(document.getElementById("daycalchart"), {    
    type: "bar",
    data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        datasets: [{
            label: "Caloric Intake",
            data: [0, 0, 0, 0, 0],
            borderWidth: 1,
            backgroundColor: "#36ff40",
        }]
    },
    options: {
        responsive: false,
        colors: {
            forceOverride: true
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
});

const dist = new Chart(document.getElementById("nutridistchart"), {
    type: "pie",
    data: {
        labels: ["Carbs", "Proteins", "Fats"],
        datasets: [{
            label: "Nutrient Distribution",
            title: "Nutrient Distribution",
            data: [0, 0, 0],
            backgroundColor: [
                "#ffb026",
                "#ff3030",
                "#abff3d"
            ]
        }]
    },
    options: {
        responsive: false
    }
});

const avgdist = new Chart(document.getElementById("avgdistchart"), {
    type: "pie",
    data: {
        labels: ["Carbs", "Proteins", "Fats"],
        datasets: [{
            label: "Average Nutrient Distribution",
            data: [55, 25, 20],
            backgroundColor: [
                "#ffb026",
                "#ff3030",
                "#abff3d"
            ]
        }]
    },
    options: {
        responsive: false
    }
});

function formChange() {
    const newCalData = [
        parseFloat(document.getElementById("d1").value),
        parseFloat(document.getElementById("d2").value),
        parseFloat(document.getElementById("d3").value),
        parseFloat(document.getElementById("d4").value),
        parseFloat(document.getElementById("d5").value)
    ];

    const newDistData = [
        parseFloat(document.getElementById("carbsdata").value),
        parseFloat(document.getElementById("proteinsdata").value),
        parseFloat(document.getElementById("fatsdata").value)
    ];

    cal.data.datasets[0].data = newCalData;
    dist.data.datasets[0].data = newDistData;

    cal.update();
    dist.update();
}

function upData(event) {
    if (event) {
        event.preventDefault();
    }

    const newCalData = [
        parseFloat(document.getElementById("d1").value),
        parseFloat(document.getElementById("d2").value),
        parseFloat(document.getElementById("d3").value),
        parseFloat(document.getElementById("d4").value),
        parseFloat(document.getElementById("d5").value)
    ];

    const newDistData = [
        parseFloat(document.getElementById("carbsdata").value),
        parseFloat(document.getElementById("proteinsdata").value),
        parseFloat(document.getElementById("fatsdata").value)
    ];

    cal.data.datasets[0].data = newCalData;
    dist.data.datasets[0].data = newDistData;

    cal.update();
    dist.update();
}

document.getElementById('chartsbtn').addEventListener('click', upData);

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

function submitForm() {
    formChange();
    closeForm();
}
