$(document).ready(function(){
    console.log("ready")
    MqttHandler.getInstance();
});


const views = {
    
    updateAirTemperature: function (value){
        $(".content .info-box-number[name=airTemperature]")[0].innerHTML = value;
    },

    updateAirHumidity: function(value){
        $(".content .info-box-number[name=airHumidity]")[0].innerHTML = value;
    },
    updateSoilTemperature1: function(value){
        $(".content .info-box-number[name=soilTemperature1]")[0].innerHTML = value;
    },
    updateAirHumidity1: function(value){
        $(".content .info-box-number[name=airHumidity1]")[0].innerHTML = value;
    },
    updateFlow1: function(value){
        $(".content .info-box-number[name=flow1]")[0].innerHTML = value;
    },
    updateVolume1: function(value){
        $(".content .info-box-number[name=volume1]")[0].innerHTML = value;
    },
    updateLevel1: function(value){
        $(".content .info-box-number[name=level1]")[0].innerHTML = value;
    },
    updateSoilTemperature2: function(value){
        $(".content .info-box-number[name=soilTemperature2]")[0].innerHTML = value;
    },
    updateAirHumidity2: function(value){
        $(".content .info-box-number[name=airHumidity2]")[0].innerHTML = value;
    },
    updateFlow2: function(value){
        $(".content .info-box-number[name=flow2]")[0].innerHTML = value;
    },
    updateVolume2: function(value){
        $(".content .info-box-number[name=volume2]")[0].innerHTML = value;
    },
    updateLevel2: function(value){
        $(".content .info-box-number[name=level2]")[0].innerHTML = value;
    },
    updateAirHumidity3: function(value){
        $(".content .info-box-number[name=airHumidity3]")[0].innerHTML = value;
    },
    updateFlow3: function(value){
        $(".content .info-box-number[name=flow3]")[0].innerHTML = value;
    },
    updateVolume3: function(value){
        $(".content .info-box-number[name=volume3]")[0].innerHTML = value;
    },
    updateLevel3: function(value){
        $(".content .info-box-number[name=level3]")[0].innerHTML = value;
    },
    updateConductivity3: function(value){
        $(".content .info-box-number[name=conductivity3]")[0].innerHTML = value;
    },
    updatePh3: function(value){
        $(".content .info-box-number[name=ph3]")[0].innerHTML = value;
    }
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
        client.subscribe("tomate/volume1")
        client.subscribe("tomate/nivel1")
        client.subscribe("tomate/temperaturadosolo2")
        client.subscribe("tomate/umidadedoar2")
        client.subscribe("tomate/vazao2")
        client.subscribe("tomate/volume2")
        client.subscribe("tomate/nivel2")
        client.subscribe("tomate/umidadedoar3")
        client.subscribe("tomate/vazao3")
        client.subscribe("tomate/volume3")
        client.subscribe("tomate/nivel3")
        client.subscribe("tomate/condutividade3")
        client.subscribe("tomate/ph3")
        
        //...
        
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
            case "tomate/volume1":
                views.updateVolume1(message.payloadString)
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
            case "tomate/volume2":
                views.updateVolume2(message.payloadString)
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
            case "tomate/volume3":
                views.updateVolume3(message.payloadString)
                break;
            case "tomate/nivel3":
                views.updateLevel3(message.payloadString)
                break;
            case "tomate/condutividade3":
                views.updateConductivity3(message.payloadString)
                break;
            case "tomate/ph3":
                views.updatePh3(message.payloadString)
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

