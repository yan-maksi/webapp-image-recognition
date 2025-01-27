class CameraManager {
    constructor() {
      this.mediaStream = null;
      this.webcam = null;
      this.videoElement = document.getElementById('webcam');
    }
  
    async start() {
      try {
        this.mediaStream = await navigator.mediaDevices.getUserMedia({
          video: CONFIG.video
        });
        this.videoElement.srcObject = this.mediaStream;
        this.videoElement.style.transform = CONFIG.video.mirror ? 'scaleX(-1)' : 'none';
        this.webcam = new tmImage.Webcam(CONFIG.video.width, CONFIG.video.height, CONFIG.video.mirror);
        await this.webcam.setup();
      } catch (error) {
        console.error('Camera error:', error);
      }
    }
  
    stop() {
      if (this.mediaStream) {
        this.mediaStream.getTracks().forEach(track => track.stop());
        this.videoElement.srcObject = null;
        this.mediaStream = null;
      }
    }
}

window.CameraManager = CameraManager;