const mqtt = require("mqtt");
var client  = mqtt.connect('mqtt://localhost')

client.on('connect', function () {
    console.log("mqtt connected...");
})


setInterval(updateMqttValues, 1000);
function updateMqttValues(){
  console.log("publishing new values...")
  client.publish('tomate/temperaturadoar', getRandom(15,45));
  client.publish('tomate/umidadedoar', getRandom(10,90));
  client.publish('tomate/temperaturadosolo1', getRandom(15, 45))
  client.publish('tomate/umidadedoar1', getRandom(10, 90))
  client.publish('tomate/vazao1', getRandom(20,60))
  client.publish('tomate/volume1', getRandom(20,60))
  client.publish('tomate/nivel1', getRandom(40, 50))
  client.publish('tomate/temperaturadosolo2', getRandom(15, 45))
  client.publish('tomate/umidadedoar2', getRandom(10, 90))
  client.publish('tomate/vazao2', getRandom(20,60))
  client.publish('tomate/volume2', getRandom(20,60))
  client.publish('tomate/nivel2', getRandom(40, 50))
  client.publish('tomate/umidadedoar3', getRandom(10, 90))
  client.publish('tomate/vazao3', getRandom(20,60))
  client.publish('tomate/volume3', getRandom(20,60))
  client.publish('tomate/nivel3', getRandom(40, 50))
  client.publish('tomate/condutividade3', getRandom(1,5))
  client.publish('tomate/ph3', getRandom(5,6.5))
}

function getRandom(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1);
}