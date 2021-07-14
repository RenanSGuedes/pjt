$(document).ready(function(){
  console.log("ready")
  MqttHandler.getInstance();
});

let airTemperatureData = [];
let airHumidityData = [];
let soilTemperature1Data = [];
let airHumidity1Data = [];
let flow1Data = [];
let level1Data = [];
let soilTemperature2Data = [];
let airHumidity2Data = [];
let flow2Data = [];
let level2Data = [];
let airHumidity3Data = [];
let flow3Data = [];
let level3Data = [];

const optionsAirTemperature = {
  series: {
      lines: { 
        show: true,
      },
      points: { 
        show: true
      }
  },  

  yaxes: [{ 
    position: 'left', 
    axisLabel: 'Temperatura do ar (ºC)' 
  }]
};

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
  }]
};

const optionsSoilTemperature1 = {
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
    axisLabel: 'Temperatura do solo 1 (°C)' 
  }]
};

const optionsAirHumidity1 = {
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
    axisLabel: 'Umidade Volumétrica 1 (%)' 
  }]
};

const optionsFlow1 = {
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
    axisLabel: 'Vazão 1 (L/h)' 
  }]
};

const optionsLevel1 = {
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
    axisLabel: 'Level 1 (%)' 
  }]
};

const optionsSoilTemperature2 = {
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
    axisLabel: 'Temperatura do solo 2 (°C)' 
  }]
};

const optionsAirHumidity2 = {
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
    axisLabel: 'Umidade Volumétrica 2 (%)' 
  }]
};

const optionsFlow2 = {
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
    axisLabel: 'Vazão 2 (L/h)' 
  }]
};

const optionsLevel2 = {
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
    axisLabel: 'Level 2 (%)' 
  }]
};

const optionsAirHumidity3 = {
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
    axisLabel: 'Umidade Volumétrica 3 (%)' 
  }]
};

const optionsFlow3 = {
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
    axisLabel: 'Vazão 3 (L/h)' 
  }]
};

const optionsLevel3 = {
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
    axisLabel: 'Level 3 (%)' 
  }]
};

const views = {
  
updateAirTemperature: function (value){
  let dt = new Date().toLocaleString();
  let nMax = document.querySelector(".form-control").value; //número máximo de valores mostrado no gráfico -- isso pode ser configurável
  if (airTemperatureData.length > nMax){
    let newArr = [];
    for (let i=0;i<nMax;i++){
      newArr.push([i,airTemperatureData[i+1][1]])
    }
    newArr.push([nMax,Number(value)]);
    airTemperatureData = []; //clean array
    airTemperatureData = newArr.slice(); //copy array values
  } else {
    airTemperatureData.push([airTemperatureData.length+1,Number(value)]);
  }

  var total = 0;
  for(var i = 0; i < airTemperatureData.length; i++) {
      total += airTemperatureData[i][1];
  }
  var avg = total / airTemperatureData.length;
  
  $.plot("#chartAirTemperature", [airTemperatureData, [[0,avg], [airTemperatureData.length, avg]]], optionsAirTemperature);
  
  let rowCount = $('#tableAirTemperature').find('tr').length;
  if (rowCount > 5){
    $('#tableAirTemperature tbody > tr:last').remove();
  }
  
  $("<tr><td>"+dt+"</td><td>"+value+"</td></tr>").insertBefore("#tableAirTemperature > tbody > tr:first");
},

updateAirHumidity: function(value){
  let dt = new Date().toLocaleString();
  let nMax = document.querySelector(".form-control").value; //número máximo de valores mostrado no gráfico -- isso pode ser configurável
  if (airHumidityData.length > nMax){
    let newArr = [];
    for (let i=0;i<nMax;i++){
      newArr.push([i,airHumidityData[i+1][1]])
    }
    newArr.push([nMax,Number(value)]);
    airHumidityData = []; //clean array
    airHumidityData = newArr.slice(); //copy array values
  } else {
    airHumidityData.push([airHumidityData.length+1,Number(value)]);
  }

  var total = 0;
  for(var i = 0; i < airHumidityData.length; i++) {
      total += airHumidityData[i][1];
  }
  var avg = total / airHumidityData.length;

  $.plot("#chartAirHumidity", [airHumidityData, [[0,avg], [airHumidityData.length, avg]]], optionsAirHumidity);

  let rowCount = $('#tableAirHumidity').find('tr').length;
  if (rowCount > 5 ){
    $('#tableAirHumidity tbody > tr:last').remove();
  }

  $("<tr><td>"+dt+"</td><td>"+value+"</td></tr>").insertBefore("#tableAirHumidity > tbody > tr:first");
},

updateSoilTemperature1: function(value){
  let dt = new Date().toLocaleString();
  let nMax = document.querySelector(".form-control").value; //número máximo de valores mostrado no gráfico -- isso pode ser configurável
  if (soilTemperature1Data.length > nMax){
    let newArr = [];
    for (let i=0;i<nMax;i++){
      newArr.push([i,soilTemperature1Data[i+1][1]])
    }
    newArr.push([nMax,Number(value)]);
    soilTemperature1Data = []; //clean array
    soilTemperature1Data = newArr.slice(); //copy array values
  } else {
    soilTemperature1Data.push([soilTemperature1Data.length+1,Number(value)]);
  }

  var total = 0;
  for(var i = 0; i < soilTemperature1Data.length; i++) {
      total += soilTemperature1Data[i][1];
  }
  var avg = total / soilTemperature1Data.length;

  $.plot("#chartSoilTemperature1", [soilTemperature1Data, [[0,avg], [soilTemperature1Data.length, avg]]], optionsSoilTemperature1);

  let rowCount = $('#tableSoilTemperature1').find('tr').length;
  if (rowCount > 5 ){
    $('#tableSoilTemperature1 tbody > tr:last').remove();
  }

  $("<tr><td>"+dt+"</td><td>"+value+"</td></tr>").insertBefore("#tableSoilTemperature1 > tbody > tr:first");
},

updateAirHumidity1: function(value){
  let dt = new Date().toLocaleString();
  let nMax = document.querySelector(".form-control").value; //número máximo de valores mostrado no gráfico -- isso pode ser configurável
  if (airHumidity1Data.length > nMax){
    let newArr = [];
    for (let i=0;i<nMax;i++){
      newArr.push([i,airHumidity1Data[i+1][1]])
    }
    newArr.push([nMax,Number(value)]);
    airHumidity1Data = []; //clean array
    airHumidity1Data = newArr.slice(); //copy array values
  } else {
    airHumidity1Data.push([airHumidity1Data.length+1,Number(value)]);
  }

  var total = 0;
  for(var i = 0; i < airHumidity1Data.length; i++) {
      total += airHumidity1Data[i][1];
  }
  var avg = total / airHumidity1Data.length;

  $.plot("#chartAirHumidity1", [airHumidity1Data, [[0,avg], [airHumidity1Data.length, avg]]], optionsAirHumidity1);

  let rowCount = $('#tableAirHumidity1').find('tr').length;
  if (rowCount > 5 ){
    $('#tableAirHumidity1 tbody > tr:last').remove();
  }

  $("<tr><td>"+dt+"</td><td>"+value+"</td></tr>").insertBefore("#tableAirHumidity1 > tbody > tr:first");
},

updateFlow1: function(value){
  let dt = new Date().toLocaleString();
  let nMax = document.querySelector(".form-control").value; //número máximo de valores mostrado no gráfico -- isso pode ser configurável
  if (flow1Data.length > nMax){
    let newArr = [];
    for (let i=0;i<nMax;i++){
      newArr.push([i,flow1Data[i+1][1]])
    }
    newArr.push([nMax,Number(value)]);
    flow1Data = []; //clean array
    flow1Data = newArr.slice(); //copy array values
  } else {
    flow1Data.push([flow1Data.length+1,Number(value)]);
  }

  var total = 0;
  for(var i = 0; i < flow1Data.length; i++) {
      total += flow1Data[i][1];
  }
  var avg = total / flow1Data.length;

  $.plot("#chartFlow1", [flow1Data, [[0,avg], [flow1Data.length, avg]]], optionsFlow1);

  let rowCount = $('#tableFlow1').find('tr').length;
  if (rowCount > 5 ){
    $('#tableFlow1 tbody > tr:last').remove();
  }

  $("<tr><td>"+dt+"</td><td>"+value+"</td></tr>").insertBefore("#tableFlow1 > tbody > tr:first");
},

updateLevel1: function(value){
  let dt = new Date().toLocaleString();
  let nMax = document.querySelector(".form-control").value; //número máximo de valores mostrado no gráfico -- isso pode ser configurável
  if (level1Data.length > nMax){
    let newArr = [];
    for (let i=0;i<nMax;i++){
      newArr.push([i,level1Data[i+1][1]])
    }
    newArr.push([nMax,Number(value)]);
    level1Data = []; //clean array
    level1Data = newArr.slice(); //copy array values
  } else {
    level1Data.push([level1Data.length+1,Number(value)]);
  }

  var total = 0;
  for(var i = 0; i < level1Data.length; i++) {
      total += level1Data[i][1];
  }
  var avg = total / level1Data.length;

  $.plot("#chartLevel1", [level1Data, [[0,avg], [level1Data.length, avg]]], optionsLevel1);

  let rowCount = $('#tableLevel1').find('tr').length;
  if (rowCount > 5 ){
    $('#tableLevel1 tbody > tr:last').remove();
  }

  $("<tr><td>"+dt+"</td><td>"+value+"</td></tr>").insertBefore("#tableLevel1 > tbody > tr:first");
},

updateSoilTemperature2: function(value){
  let dt = new Date().toLocaleString();
  let nMax = document.querySelector(".form-control").value; //número máximo de valores mostrado no gráfico -- isso pode ser configurável
  if (soilTemperature2Data.length > nMax){
    let newArr = [];
    for (let i=0;i<nMax;i++){
      newArr.push([i,soilTemperature2Data[i+1][1]])
    }
    newArr.push([nMax,Number(value)]);
    soilTemperature2Data = []; //clean array
    soilTemperature2Data = newArr.slice(); //copy array values
  } else {
    soilTemperature2Data.push([soilTemperature2Data.length+1,Number(value)]);
  }

  var total = 0;
  for(var i = 0; i < soilTemperature2Data.length; i++) {
      total += soilTemperature2Data[i][1];
  }
  var avg = total / soilTemperature2Data.length;

  $.plot("#chartSoilTemperature2", [soilTemperature2Data, [[0,avg], [soilTemperature2Data.length, avg]]], optionsSoilTemperature2);

  let rowCount = $('#tableSoilTemperature2').find('tr').length;
  if (rowCount > 5 ){
    $('#tableSoilTemperature2 tbody > tr:last').remove();
  }

  $("<tr><td>"+dt+"</td><td>"+value+"</td></tr>").insertBefore("#tableSoilTemperature2 > tbody > tr:first");
},

updateAirHumidity2: function(value){
  let dt = new Date().toLocaleString();
  let nMax = document.querySelector(".form-control").value; //número máximo de valores mostrado no gráfico -- isso pode ser configurável
  if (airHumidity2Data.length > nMax){
    let newArr = [];
    for (let i=0;i<nMax;i++){
      newArr.push([i,airHumidity2Data[i+1][1]])
    }
    newArr.push([nMax,Number(value)]);
    airHumidity2Data = []; //clean array
    airHumidity2Data = newArr.slice(); //copy array values
  } else {
    airHumidity2Data.push([airHumidity2Data.length+1,Number(value)]);
  }

  var total = 0;
  for(var i = 0; i < airHumidity2Data.length; i++) {
      total += airHumidity2Data[i][1];
  }
  var avg = total / airHumidity2Data.length;

  $.plot("#chartAirHumidity2", [airHumidity2Data, [[0,avg], [airHumidity2Data.length, avg]]], optionsAirHumidity2);

  let rowCount = $('#tableAirHumidity2').find('tr').length;
  if (rowCount > 5 ){
    $('#tableAirHumidity2 tbody > tr:last').remove();
  }

  $("<tr><td>"+dt+"</td><td>"+value+"</td></tr>").insertBefore("#tableAirHumidity2 > tbody > tr:first");
},

updateFlow2: function(value){
  let dt = new Date().toLocaleString();
  let nMax = document.querySelector(".form-control").value; //número máximo de valores mostrado no gráfico -- isso pode ser configurável
  if (flow2Data.length > nMax){
    let newArr = [];
    for (let i=0;i<nMax;i++){
      newArr.push([i,flow2Data[i+1][1]])
    }
    newArr.push([nMax,Number(value)]);
    flow2Data = []; //clean array
    flow2Data = newArr.slice(); //copy array values
  } else {
    flow2Data.push([flow2Data.length+1,Number(value)]);
  }

  var total = 0;
  for(var i = 0; i < flow2Data.length; i++) {
      total += flow2Data[i][1];
  }
  var avg = total / flow2Data.length;

  $.plot("#chartFlow2", [flow2Data, [[0,avg], [flow2Data.length, avg]]], optionsFlow2);

  let rowCount = $('#tableFlow2').find('tr').length;
  if (rowCount > 5 ){
    $('#tableFlow2 tbody > tr:last').remove();
  }

  $("<tr><td>"+dt+"</td><td>"+value+"</td></tr>").insertBefore("#tableFlow2 > tbody > tr:first");
},

updateLevel2: function(value){
  let dt = new Date().toLocaleString();
  let nMax = document.querySelector(".form-control").value; //número máximo de valores mostrado no gráfico -- isso pode ser configurável
  if (level2Data.length > nMax){
    let newArr = [];
    for (let i=0;i<nMax;i++){
      newArr.push([i,level2Data[i+1][1]])
    }
    newArr.push([nMax,Number(value)]);
    level2Data = []; //clean array
    level2Data = newArr.slice(); //copy array values
  } else {
    level2Data.push([level2Data.length+1,Number(value)]);
  }

  var total = 0;
  for(var i = 0; i < level2Data.length; i++) {
      total += level2Data[i][1];
  }
  var avg = total / level2Data.length;

  $.plot("#chartLevel2", [level2Data, [[0,avg], [level2Data.length, avg]]], optionsLevel2);

  let rowCount = $('#tableLevel2').find('tr').length;
  if (rowCount > 5 ){
    $('#tableLevel2 tbody > tr:last').remove();
  }

  $("<tr><td>"+dt+"</td><td>"+value+"</td></tr>").insertBefore("#tableLevel2 > tbody > tr:first");
},

updateAirHumidity3: function(value){
  let dt = new Date().toLocaleString();
  let nMax = document.querySelector(".form-control").value; //número máximo de valores mostrado no gráfico -- isso pode ser configurável
  if (airHumidity3Data.length > nMax){
    let newArr = [];
    for (let i=0;i<nMax;i++){
      newArr.push([i,airHumidity3Data[i+1][1]])
    }
    newArr.push([nMax,Number(value)]);
    airHumidity3Data = []; //clean array
    airHumidity3Data = newArr.slice(); //copy array values
  } else {
    airHumidity3Data.push([airHumidity3Data.length+1,Number(value)]);
  }

  var total = 0;
  for(var i = 0; i < airHumidity3Data.length; i++) {
      total += airHumidity3Data[i][1];
  }
  var avg = total / airHumidity3Data.length;

  $.plot("#chartAirHumidity3", [airHumidity3Data, [[0,avg], [airHumidity3Data.length, avg]]], optionsAirHumidity3);

  let rowCount = $('#tableAirHumidity3').find('tr').length;
  if (rowCount > 5 ){
    $('#tableAirHumidity3 tbody > tr:last').remove();
  }

  $("<tr><td>"+dt+"</td><td>"+value+"</td></tr>").insertBefore("#tableAirHumidity3 > tbody > tr:first");
},

updateFlow3: function(value){
  let dt = new Date().toLocaleString();
  let nMax = document.querySelector(".form-control").value; //número máximo de valores mostrado no gráfico -- isso pode ser configurável
  if (flow3Data.length > nMax){
    let newArr = [];
    for (let i=0;i<nMax;i++){
      newArr.push([i,flow3Data[i+1][1]])
    }
    newArr.push([nMax,Number(value)]);
    flow3Data = []; //clean array
    flow3Data = newArr.slice(); //copy array values
  } else {
    flow3Data.push([flow3Data.length+1,Number(value)]);
  }

  var total = 0;
  for(var i = 0; i < flow3Data.length; i++) {
      total += flow3Data[i][1];
  }
  var avg = total / flow3Data.length;

  $.plot("#chartFlow3", [flow3Data, [[0,avg], [flow3Data.length, avg]]], optionsFlow3);

  let rowCount = $('#tableFlow3').find('tr').length;
  if (rowCount > 5 ){
    $('#tableFlow3 tbody > tr:last').remove();
  }

  $("<tr><td>"+dt+"</td><td>"+value+"</td></tr>").insertBefore("#tableFlow3 > tbody > tr:first");
},

updateLevel3: function(value){
  let dt = new Date().toLocaleString();
  let nMax = document.querySelector(".form-control").value; //número máximo de valores mostrado no gráfico -- isso pode ser configurável
  if (level3Data.length > nMax){
    let newArr = [];
    for (let i=0;i<nMax;i++){
      newArr.push([i,level3Data[i+1][1]])
    }
    newArr.push([nMax,Number(value)]);
    level3Data = []; //clean array
    level3Data = newArr.slice(); //copy array values
  } else {
    level3Data.push([level3Data.length+1,Number(value)]);
  }

  var total = 0;
  for(var i = 0; i < level3Data.length; i++) {
      total += level3Data[i][1];
  }
  var avg = total / level3Data.length;

  $.plot("#chartLevel3", [level3Data, [[0,avg], [level3Data.length, avg]]], optionsLevel3);

  let rowCount = $('#tableLevel3').find('tr').length;
  if (rowCount > 5 ){
    $('#tableLevel3 tbody > tr:last').remove();
  }

  $("<tr><td>"+dt+"</td><td>"+value+"</td></tr>").insertBefore("#tableLevel3 > tbody > tr:first");
},

}

const MqttHandler = (function (){ //self-invoking function -- Singleton
let hostname = 'localhost';
let port = '1884';
let clientId = "webClient"+Math.floor(Math.random() * 1000);
let client = new Paho.MQTT.Client(hostname, Number(port), clientId);

let instance;    

function init(){
    console.log("mqtt handler init...")
    // set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    // connect the client
    client.connect({onSuccess:onConnect});
}

// called when the client connects
function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Connected to MQTT...");
    
    //Subscribe to the topics
    client.subscribe("tomate/temperaturadoar");
    client.subscribe("tomate/umidadedoar");
    client.subscribe("tomate/temperaturadosolo1")
    client.subscribe("tomate/umidadedoar1")
    client.subscribe("tomate/vazao1")
    client.subscribe("tomate/nivel1")
    client.subscribe("tomate/temperaturadosolo2")
    client.subscribe("tomate/umidadedoar2")
    client.subscribe("tomate/vazao2")
    client.subscribe("tomate/nivel2")
    client.subscribe("tomate/umidadedoar3")
    client.subscribe("tomate/vazao3")
    client.subscribe("tomate/nivel3")
 
    // 
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
    }
}

// called when a message arrives
function onMessageArrived(message) {
    switch (message.destinationName) {
        case "tomate/temperaturadoar":
            views.updateAirTemperature(message.payloadString)
            break;
        case "tomate/umidadedoar":
            views.updateAirHumidity(message.payloadString)
            break;
        case "tomate/temperaturadosolo1":
            views.updateSoilTemperature1(message.payloadString)
            break;
        case "tomate/umidadedoar1":
            views.updateAirHumidity1(message.payloadString)
            break;
        case "tomate/vazao1":
            views.updateFlow1(message.payloadString)
            break;
        case "tomate/nivel1":
            views.updateLevel1(message.payloadString)
            break;
        case "tomate/temperaturadosolo2":
            views.updateSoilTemperature2(message.payloadString)
            break;
        case "tomate/umidadedoar2":
            views.updateAirHumidity2(message.payloadString)
            break;
        case "tomate/vazao2":
            views.updateFlow2(message.payloadString)
            break;
        case "tomate/nivel2":
            views.updateLevel2(message.payloadString)
            break;
        case "tomate/umidadedoar3":
            views.updateAirHumidity3(message.payloadString)
            break;
        case "tomate/vazao3":
            views.updateFlow3(message.payloadString)
            break;
        case "tomate/nivel3":
            views.updateLevel3(message.payloadString)
            break;
        default:
            break;
    }
}

return { 
    //public interface

    sendMessage: function (topic, msg){
        message = new Paho.MQTT.Message(msg);
        message.destinationName = topic;
        client.send(message);
    }, 

    getInstance: function () {
        if (!instance) {
            instance = init();
        }
        return instance;
    }
}
})();