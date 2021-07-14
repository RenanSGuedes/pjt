
$(document).ready(function(){
    console.log("ready")
    
    //Necessario para o funcionamento do daterangepicker
    $('#searchInterval').daterangepicker({
      timePicker: true,
      timePickerIncrement: 30,
      locale: {
        format: 'YYYY-MM-DD HH:mm:ss'
      }
    });

    //Busca e atualiza grafico de temperatura
    $('#getFromRecords').click(updateChartAirTemperature);
    //Busca e atualiza grafico de temperatura
    $('#getFromRecords').click(updateChartAirHumidity);

});

//Config do grafico de temperatura do ar
const optionsAirTemperature = {
    series: {
        lines: { 
            show: true 
        },
        points: { 
            show: true 
        }
    },  

    yaxes: [{ 
        position: 'left', 
        axisLabel: 'Temperatura do ar (ºC)' 
    }],

    xaxis: {
        mode: "time",
        timeBase: "milliseconds",
        timeformat: "%d/%m/%Y"
    }
};

//Atualiza grafico de temperatura do ar
const updateChartAirTemperature = function(){
    let interval = ($('#searchInterval').val()).split(" - ");  //quebra em array com 2 posicoes
    let start = "'"+interval[0]+"'";
    let end = "'"+interval[1]+"'";

    $.ajax({
        url: "http://localhost:3001/getRecords",
        type: "GET",
        dataType: "json",
        data: {
            sensorId: 1, //temperatura do ar: sensorId = 1 
            startDt: start,
            endDt:end
        },
        success: function (result) {
            let arr = [];
            for (let i=0; i<result.length; i++){
                let ts = new Date(result[i].dt);
                arr.push([ts.getTime(),result[i].value])
            }
            $.plot("#chartAirTemperature", [arr], optionsAirTemperature);
        },
        error: function () {
            console.log("error");
        }
    });
}

//Config do grafico de Umidade do ar
const optionsAirHumidity = {
    series: {
        lines: { 
            show: true 
        },
        points: { 
            show: true 
        }
    },  

    yaxes: [{ 
        position: 'left', 
        axisLabel: 'UR do ar (%)' 
    }],

    xaxis: {
        mode: "time",
        timeBase: "milliseconds",
        timeformat: "%d/%m/%Y"
    }
};

//Atualiza grafico de umidade do ar
const updateChartAirHumidity = function(){
    let interval = ($('#searchInterval').val()).split(" - ");  //quebra em array com 2 posicoes
    let start = "'"+interval[0]+"'";
    let end = "'"+interval[1]+"'";

    $.ajax({
        url: "http://localhost:3001/getRecords",
        type: "GET",
        dataType: "json",
        data: {
            sensorId: 2, //UR do ar: sensorId = 2
            startDt: start,
            endDt:end
        },
        success: function (result) {
            let arr = [];
            for (let i=0; i<result.length; i++){
                let ts = new Date(result[i].dt);
                arr.push([ts.getTime(),result[i].value])
            }
            $.plot("#chartAirHumidity", [arr], optionsAirHumidity);
        },
        error: function () {
            console.log("error");
        }
    });
}
