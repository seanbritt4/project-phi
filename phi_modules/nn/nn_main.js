//test3.js
//https://machinelearningmastery.com/implement-backpropagation-algorithm-scratch-python/

// const tf = require('@tensorflow/tfjs-node')

class NeuralNetwork {
    constructor() {
        this.inputSize = 12;
        this.hiddenLayers1 = 6;
        this.hiddenLayers2 = 4;
        this.hiddenLayers2 = 5;
        this.outputSize = 2;

        this.weights = [];
        for (var i = 0; i < 12; i++) {
            this.weights.push(Math.random(-1, 1))
        }
        //initializing to 0.5, for 

        for (var i = 0; i < 12; i++) {
            this.weights.push(Math.random(-1, 1))
        }
    }

    activate(inputs) {
        // console.log('activate', inputs)
        var activation = 0; // = this.weights
        for (var i in inputs) {
            activation += this.weights[i] + inputs[i]
        }
        // console.log('activation', activation, '\n')
        return activation
    }
    
    transfer(activation) {
        // console.log('transfer', activation)
        /*sigmoid function*/
        //Math.E: Eulers number
        return 1.0 / (1.0 + (Math.pow(Math.E, (-activation))))
    }

    forward_prop(network, row) {
        // console.log('network:', network, row)
        var inputs = row

        for (var layer in network.weights) {
            // console.log('in foor loop', network.weights[layer])
            var new_inputs = [];
            var activation = this.activate(network.weights[layer], inputs)
            network.output.push(this.transfer(activation))
            // console.log('output', network.output)
            new_inputs.push(network.output)
            inputs = new_inputs
            // console.log('i:', inputs)
        }
        // console.log('here')
        // console.log('forward_prop:', inputs)
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

}

exports.main = (song_weights) => {
    console.log('in nn main')
    var nn = new NeuralNetwork()
    // console.log('nn', nn)
    var row = [1, 0, null]

    var network = {}
    network.weights = song_weights,
    network.delta = 0.0001
    network.output = []
    
    // console.log('nn network', network)
    var output = nn.forward_prop(network, row)
    // console.log('here', output[0])
    // console.log('main:', output)
    return output[0]
}