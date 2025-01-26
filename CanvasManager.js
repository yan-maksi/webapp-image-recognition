class CanvasManager {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas.getContext('2d');
      this.isDrawing = false;
      this.initializeCanvas();
      this.setupEventListeners();
    }
  
    initializeCanvas() {
      this.canvas.width = CONFIG.canvas.width;
      this.canvas.height = CONFIG.canvas.height;
      this.ctx = this.canvas.getContext('2d');
      this.ctx.strokeStyle = CONFIG.canvas.styles.stroke;
      this.ctx.fillStyle = CONFIG.canvas.styles.fill;
      this.ctx.lineWidth = CONFIG.canvas.styles.lineWidth;
      this.ctx.lineCap = CONFIG.canvas.styles.lineCap;
      this.clear();
    }
  
    setupEventListeners() {
      this.canvas.addEventListener('mousedown', this.startDrawing.bind(this));
      this.canvas.addEventListener('mousemove', this.draw.bind(this));
      this.canvas.addEventListener('mouseup', this.stopDrawing.bind(this));
      this.canvas.addEventListener('mouseout', this.stopDrawing.bind(this));
    }
  
    startDrawing(e) {
      this.isDrawing = true;
      const { x, y } = this.getCoordinates(e);
      this.ctx.beginPath();
      this.ctx.strokeStyle = CONFIG.canvas.styles.stroke;
      this.ctx.lineWidth = CONFIG.canvas.styles.lineWidth;
      this.ctx.lineCap = CONFIG.canvas.styles.lineCap;
      this.ctx.moveTo(x, y);
    }
  
    draw(e) {
      if (!this.isDrawing) return;
      const { x, y } = this.getCoordinates(e);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    }
  
    stopDrawing() {
      this.isDrawing = false;
      this.ctx.beginPath();
    }
  
    getCoordinates(e) {
      const rect = this.canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  
    clear() {
      this.ctx.fillStyle = CONFIG.canvas.styles.fill;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = CONFIG.canvas.styles.stroke;
    }
  
    drawImage(image) {
      this.clear();
      this.ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
    }
}

window.CameraManager = CameraManager;