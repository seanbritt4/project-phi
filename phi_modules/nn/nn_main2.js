// const tf = require('@tensorflow/tfjs-node')

class NeuralNetwork{
constructor(){

    }
}

async function run(data){
    const model = tf.sequential()
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));

    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6,1])
    const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6,1])

    // var weights = tf.tensor2d([data.weights, data.weights]);
    // var tensor;
    // for (var i in data.song_ids){
    //     tensor = tf.tensor2d([data.audio_features[i], data.weights]);
    // }

    // tensor.print();

    await module.fit(tensor, weights, {epochs:250});

    model.predict(tf.tensor2d([20], [1, 1])).dataSync();
}

exports.main = (data) => {
    // run(data);
    return 1;
}

// run()