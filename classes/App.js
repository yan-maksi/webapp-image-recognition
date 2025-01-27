class App {
    constructor() {
        this.model = null;
        this.canvasManager = new CanvasManager('canvas');
        this.cameraManager = new CameraManager();
        this.resultsManager = new ResultsManager();
        this.init();
    }

    async init() {
        try {
        this.model = await tmImage.load(
            CONFIG.modelPath.model,
            CONFIG.modelPath.metadata
        );
        this.setupEventListeners();
        } catch (error) {
        console.error('Initialization error:', error);
        }
    }

    setupEventListeners() {
        document.getElementById('startCamera').addEventListener('click', () => this.cameraManager.start());
        document.getElementById('stopCamera').addEventListener('click', () => this.cameraManager.stop());
        document.getElementById('capture').addEventListener('click', () => this.captureImage());
        document.getElementById('clear').addEventListener('click', () => this.canvasManager.clear());
        document.getElementById('recognize').addEventListener('click', () => this.recognizeShape());
        document.getElementById('fileUpload').addEventListener('change', (e) => this.handleFileUpload(e));
    }

    async captureImage() {
        if (!this.cameraManager.webcam) return;
        this.canvasManager.drawImage(this.cameraManager.videoElement);
        const prediction = await this.model.predict(this.canvasManager.canvas);
        this.resultsManager.displayResults(prediction);
    }

    async recognizeShape() {
        try {
        const prediction = await this.model.predict(this.canvasManager.canvas);
        this.resultsManager.displayResults(prediction);
        } catch (error) {
        console.error('Recognition error:', error);
        }
    }

    handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        const img = new Image();
        img.onload = async () => {
        this.canvasManager.drawImage(img);
        try {
            const prediction = await this.model.predict(this.canvasManager.canvas);
            this.resultsManager.displayResults(prediction);
        } catch (error) {
            console.error('File processing error:', error);
        }
        };
        img.src = URL.createObjectURL(file);
    }
}

// Initialize app
window.addEventListener('load', () => new App());