var ctx= document.getElementById('myChart').getContext('2d');
var myChart= new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['BREAFING', 'ANÁLISIS', 'CONCEPTUALIZACIÓN', 'CREACIÓN', 'TESTAJE', 'CORRECCIONES'],
        datasets: [{
            label: 'Fases de cración de un proyecto',
            data: [5, 10, 20, 50, 10, 5],
            backgroundColor: [
                'rgb(199, 163, 54)',
                'rgb(192, 199, 54)',
                'rgb(149, 191, 92)',
                'rgb(104, 227, 196)',
                'rgb(38, 145, 120)',
                'rgb(24, 113, 92)'
            ]
        }] 
    },
    options: {
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})