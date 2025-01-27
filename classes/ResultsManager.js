class ResultsManager {
    constructor() {
      this.speechSynthesis = window.speechSynthesis;
    }
  
    displayResults(predictions) {
      const bestPrediction = this.getBestPrediction(predictions);
      this.updatePredictionText(bestPrediction);
      this.speak(bestPrediction.className);
      this.updateBarChart(predictions);
      this.drawRecognizedShape(bestPrediction.className);
    }
  
    getBestPrediction(predictions) {
      return predictions.reduce((prev, current) => 
        prev.probability > current.probability ? prev : current
      );
    }
  
    updatePredictionText(prediction) {
      document.getElementById('prediction').textContent = 
        `${prediction.className} (${(prediction.probability * 100).toFixed(2)}%)`;
    }
  
    speak(text) {
      const utterance = new SpeechSynthesisUtterance(text);
      this.speechSynthesis.speak(utterance);
    }
  
    updateBarChart(predictions) {
      const chartContainer = document.getElementById('barChart');
      chartContainer.innerHTML = '';
      predictions.forEach(pred => {
        chartContainer.appendChild(this.createBarChartItem(pred));
      });
    }
  
    createBarChartItem(prediction) {
      const barItem = document.createElement('div');
      barItem.className = 'bar-item';
      
      const label = document.createElement('div');
      label.className = 'bar-label';
      label.textContent = prediction.className;
      
      const barOuter = document.createElement('div');
      barOuter.className = 'bar-outer';
      
      const barInner = document.createElement('div');
      barInner.className = 'bar-inner';
      barInner.style.width = `${prediction.probability * 100}%`;
      
      const value = document.createElement('div');
      value.className = 'bar-value';
      value.textContent = `${(prediction.probability * 100).toFixed(1)}%`;
      
      barOuter.appendChild(barInner);
      barItem.appendChild(label);
      barItem.appendChild(barOuter);
      barItem.appendChild(value);
      
      return barItem;
    }
  
    drawRecognizedShape(shape) {
      const shapeCanvas = this.getShapeCanvas();
      const shapeCtx = shapeCanvas.getContext('2d');
      const centerX = shapeCanvas.width / 2;
      const size = 50;
  
      shapeCtx.clearRect(0, 0, shapeCanvas.width, shapeCanvas.height);
      Object.assign(shapeCtx, {
        strokeStyle: 'black',
        lineWidth: 2,
        fillStyle: '#f0f0f0'
      });
  
      const shapes = {
        circle: () => {
          shapeCtx.beginPath();
          shapeCtx.arc(centerX, 75, size, 0, Math.PI * 2);
        },
        square: () => {
          shapeCtx.beginPath();
          shapeCtx.rect(centerX - size, 25, size * 2, size * 2);
        },
        triangle: () => {
          shapeCtx.beginPath();
          shapeCtx.moveTo(centerX, 25);
          shapeCtx.lineTo(centerX - size, 25 + size * 1.7);
          shapeCtx.lineTo(centerX + size, 25 + size * 1.7);
          shapeCtx.closePath();
        }
      };
  
      const drawShape = shapes[shape.toLowerCase()];
      if (drawShape) {
        drawShape();
        shapeCtx.fill();
        shapeCtx.stroke();
      }
    }
  
    getShapeCanvas() {
      let shapeCanvas = document.querySelector('#recognizedShape');
      if (!shapeCanvas) {
        shapeCanvas = document.createElement('canvas');
        Object.assign(shapeCanvas, {
          id: 'recognizedShape',
          width: CONFIG.canvas.width,
          height: 150,
          style: 'border: 1px solid #ddd; border-radius: 4px; margin-top: 10px;'
        });
        document.querySelector('.drawing-section').appendChild(shapeCanvas);
      }
      return shapeCanvas;
    }
}

window.ResultsManager = ResultsManager;