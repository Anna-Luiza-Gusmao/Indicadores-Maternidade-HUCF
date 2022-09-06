google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Profissional', 'Quantidade de Partos', { role: 'style' }],
        ['ALFREU RONEM DE OLIVEIRA', 10, '#A65D70'],
        ['MARIA FERNANDA DIAS BASILIO', 12, '#A65D70'],
        ['SAMARA SILVEIRA MARQUES MENDES', 32, '#A65D70'],
        ['HUBERT CALDEIRA', 45, '#A65D70'],
        ['ELISAMA OLIVEIRA SOUZA GONCALVES', 03, '#A65D70'],
        ['ALFREU RONEM DE OLIVEIRA', 10, '#A65D70'],
        ['MARIA FERNANDA DIAS BASILIO', 12, '#A65D70'],
        ['SAMARA SILVEIRA MARQUES MENDES', 32, '#A65D70'],
        ['HUBERT CALDEIRA', 45, '#A65D70'],
        ['ELISAMA OLIVEIRA SOUZA GONCALVES', 03, '#A65D70'],
        ['ALFREU RONEM DE OLIVEIRA', 10, '#A65D70'],
        ['MARIA FERNANDA DIAS BASILIO', 12, '#A65D70'],
        ['SAMARA SILVEIRA MARQUES MENDES', 32, '#A65D70'],
        ['HUBERT CALDEIRA', 45, '#A65D70'],
        ['ELISAMA OLIVEIRA SOUZA GONCALVES', 03, '#A65D70']
    ]);

    var options = {
        'width': 1000,
        'height': 800,
        backgroundColor: '#F5C9CE',
        legend:{position: 'bottom'},
        colors: ['#A65D70'],
        chartArea: {width: '50%', height: '85%'},
        vAxis: {minValue:0}
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
  }