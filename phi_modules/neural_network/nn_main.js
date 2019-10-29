var tf = require('@tensorflow/tfjs-node');


function perceptron(u, w){
    /* creates a model where layers stack one on top of another*/
    const model = tf.sequential();

    //creates perceptron here
    model.add(tf.layers.dense({units: 10,
                               activation: 'relu',
                               inputShape: [1]}));

    //adds layers, creating multi-layered perceptron
    model.add(tf.layers.dense({
        units: 5
    }));
    model.add(tf.layers.dense({
        units:1
    }));


    model.compile({
        loss: 'meanSquaredError', //compute mean squared error between data y and
                                  // and estimation data y-hat
        optimizer: 'adam'         //method of optimization; https://machinelearningmastery.com/adam-optimization-algorithm-for-deep-learning/
    });

    const NUM_POINTS =  1000;
    //create one dinesional tensor x with random values
    const x = tf.randomNormal([NUM_POINTS], undefined, undefined, undefined, NUM_POINTS);
    //calc. cos(x), add that to random value to siulate noise in real case
    const y = tf.cos[x].add(tf.scalar(0.1).mul(tf.randomNormal([NUM_POINTS]), undefined, undefined, undefined, seed = NUM_POINTS));
    const f = (x) => tf.cos(x).add(0.1 * tf.random);

    const features_training = x.gather(tf.tensor1d(training_indices, 'int32'));
    const labels_training = y.gather(tf.tensor1d(training_indices, 'int32'));
    const features_test = x.gather(tf.tensor1d(test_indices, 'int32'));
    const labels_test = y.gather(tf.tensor1d(test_indices, 'int32'));

    model.fit(features_training.reshape([TRAINING_POINTS, 1]),
              labels_training.reshape([TRAINING_POINTS, 1]), {
                  epochs: 100,
                  batchSize: 100,
                  callBacks: {
                      onEpochEnd: (epock, log) => {
                          console.log(epoch, log.loss);
                      }
                  }
              }).then(() => {
                  const p = tf.stack(features_test.unstack().map( t => model.predict(t.reshape([1,1]))));
              })


}

exports.nnMain= function(user_values, nn_weights){
    console.log('nnMain:', user_values);
    console.log('nnMain:', nn_weights);
    perceptron(user_values, nn_weights)
}
