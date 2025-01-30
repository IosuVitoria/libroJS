let grafico;

const startSimulation = () => {
    let wA = parseFloat(document.getElementById('fitnessA').value);
    let wa = parseFloat(document.getElementById('fitnessa').value);
    let N = parseInt(document.getElementById('populationSize').value);
    let p = parseFloat(document.getElementById('initialFreq').value);
    
    let generaciones = 100;
    let datos = [];
    let etiquetas = [];
    let q = 1 - p;
    
    for (let gen = 0; gen < generaciones; gen++) {
        let p_siguiente = (p * wA) / (p * wA + q * wa);
        
        let deriva = (Math.random() - 0.5) * 0.05;
        p = Math.max(0, Math.min(1, p_siguiente + deriva));
        q = 1 - p;
        
        datos.push(p);
        etiquetas.push(`Generación ${gen}`);
    }
    
    renderizarGrafico(etiquetas, datos);
    renderizarPoblacion(p, N);
}

const renderizarGrafico = (etiquetas, datos) => {
    let ctx = document.getElementById('grafico').getContext('2d');
    if (grafico) grafico.destroy();
    grafico = new Chart(ctx, {
        type: 'line',
        data: {
            labels: etiquetas,
            datasets: [{
                label: 'Frecuencia del alelo A',
                data: datos,
                borderColor: 'yellow',
                fill: false,
                pointRadius: 2,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: { 
                y: { beginAtZero: true, max: 1, title: { display: true, text: 'Frecuencia del alelo A' } },
                x: { title: { display: true, text: 'Generaciones' } }
            }
        }
    });
}

const renderizarPoblacion = (p, N) => {
    let popDiv = document.getElementById('vistaPoblacion');
    popDiv.innerHTML = '';
    for (let i = 0; i < N; i++) {
        let div = document.createElement('div');
        div.className = 'individuo';
        div.style.backgroundColor = Math.random() < p ? 'red' : 'blue';
        popDiv.appendChild(div);
    }
}