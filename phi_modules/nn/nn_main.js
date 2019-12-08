/*
NOTE: on use of tensorflow

*/
//const tf = require('@tensorflow/tfjs-node')

class NeuralNetwork {
    constructor() {
        this.inputSize = 6;
        // this.hiddenLayers1 = 6;
        // this.hiddenLayers2 = 4;
        // this.hiddenLayers2 = 5;
        // this.outputSize = 2;

        // this.weights = [0.3, 0.6, 0.2, 0.7, 0.3, 0.3, 0.234, 0.2345]
        
        this.weights = [];
        for (var i = 0; i<this.inputSize; i++){
            // this.weights.push(0.3)
            this.weights.push(0.08 * Math.random())

        }
    }
  
    
    activate(inputs) {
        // console.log('activate', inputs)
        // var activation = this.weights
        var activation = 0
        for (var i in inputs) {
            // console.log(this.weights[i])
            activation += this.weights[i] *inputs[i]
        }
        // console.log('activation', activation, '\n')
        return activation
    }
    
    transfer(activation) {
        // console.log('transfer', activation)
        //sigmoid function//
        // Math.E: Eulers number

        return 1.0 / (1.0 + (Math.pow(Math.E, (-activation))))
    }

    forward_prop(network) {
    // forward_prop(network, row) {
        // var inputs = row
        var inputs = [];
        for (var layer in network.audio_features) {
            var new_inputs = [];
            var activation = this.activate(network.audio_features[layer], inputs)
            // console.log(activation)
            network.output.push(this.transfer(activation))
            new_inputs.push(network.output)
            inputs = new_inputs
        }
        // console.log(network.output)
        // console.log(inputs)
        return inputs
    }
    
    transfer_derivative(output) {
        return output * (1.0 - output)
    }
    
    back_prop(network, expected/*? do we have an expected value... ?*/) {
        for (var i in network.reverse) {
            var layer = network[i]
            var errors = []
            if (i != (network.length - 1)) {
                for (var j in network[i + 1]) {
                    var error = 0.0
                    for (var neuron in network[i + 1]) {
                        error += (neuron.weights[j] * neuron.delta)
                    }
                    errors.append(error)
                }
            } else {
                for (var j = 0; j < layer.length; j++) {
                    neuron = layer[j]
                    neuron.delta = errors[j] * transfer_derivative(neuron.output)
                }
            }
        }
    } //end back_prop
    
    
    /*
    NOTE: 
        load() and train() are note being called atm

    TODO:
    The plan is to allow user feedback to train the neural network.
    We could save the weights in an external file and load them each time the 
    app is run.
    This would allow the neural net to actually learn and train on user feedback,
    hopefully becoming better at generating playlists.
    */
    /*async load(){
        const fs = require('fs');
        const readline = require('readline');
    
        let promise = new Promise((res, rej) => {
            setTimeout(() => {
                const readWeights = readline.createInterface({
                    // input: fs.createReadStream('artists'),
                    // input: fs.createReadStream('./phi_modules/nn/.weights.dat'),
                    input: fs.createReadStream('./phi_modules/nn/weights.txt'),
                    // output
                    console: false
                });
        
                let weights = []
                readWeights.on('line', function(line){
                    console.log()
                    console.log(line)
                    weights.push(Number(line));
                });
                
                console.log(weights)
                return weights;
            }, 1000)
    
            let result = await promise;
            console.log('r', result)
            return result;
        });
    }*/

   train(epochs){
       
    }

}

exports.main = (data) => {
// exports.main = (audio_features, weights) => {
    console.log('in nn main')
    
    var nn = new NeuralNetwork()
    // var row = [0.7, 0, null]
    
    var output = nn.forward_prop(data)
    console.log('leaving nn main')
    // console.log('o', output)
    return output[0] //output is a 2d array for some reason... 
}