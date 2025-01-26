# AI Shape Drawing & Recognition App

WebApp for Image Recognition - Draw shapes, take pictures, or upload images.

## What can it do?

- Draw shapes with your mouse
- Use your webcam to capture shapes
- Upload shape images from your computer
- Hear the shape name spoken out loud
- See how confident the AI is about what it sees
- Get visual feedback with charts and shape previews

## Project Structure

```
├── config.js           # Application configuration
├── classes/
│   ├── App.js         # Main application class
│   ├── CanvasManager.js    # Canvas handling and drawing
│   ├── CameraManager.js    # Webcam functionality
│   └── ResultsManager.js   # Results display and visualization
├── models/
│   └── tm-my-image-model/  # TensorFlow model files
└── index.html         # Main HTML file
```
## Components

### CanvasManager
- Handles drawing functionality - Manages canvas state - Processes user input

### CameraManager
- Controls webcam access - Manages video stream - Handles image capture

### ResultsManager
- Displays recognition results - Generates bar charts - Provides voice feedback - Renders recognized shapes

### App
- Initializes components - Coordinates interactions - Manages ML model

## Technologies
- TensorFlow.js - Canvas API - WebRTC - Speech Synthesis API

## Setup

1. Install dependencies
2. Configure model paths in `config.js`
3. Run on a web server

<img width="1245" alt="Screenshot 2025-01-26 at 9 12 53 PM" src="https://github.com/user-attachments/assets/d5fb22fe-c08b-4e36-8690-2fbf373bdc3a" />

