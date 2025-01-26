const CONFIG = {
  canvas: {
    width: 400,
    height: 300,
    styles: {
      fill: 'white',
      stroke: 'black',
      lineWidth: 3,
      lineCap: 'round'
    }
  },
  video: {
    width: 400,
    height: 300,
    mirror: true
  },
  modelPath: {
    model: 'tm-my-image-model/model.json',
    metadata: 'tm-my-image-model/metadata.json'
  }
};

window.CONFIG = CONFIG;