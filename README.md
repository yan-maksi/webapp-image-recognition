# webapp-image-recognition
WebApp for Image Recognition (draw - upload - realtime camera)

# Shape Drawing & Recognition App

Draw shapes, take pictures, or upload images - and let AI tell you what shape it sees!

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

## What can it do?

- Draw shapes with your mouse
- Use your webcam to capture shapes
- Upload shape images from your computer
- Hear the shape name spoken out loud
- See how confident the AI is about what it sees
- Get visual feedback with charts and shape previews

## How it works

The app is split into simple parts that work together:

- **Drawing Board**: Like a digital whiteboard where you can draw shapes
- **Camera Tool**: Uses your webcam to take pictures of shapes
- **Results Display**: Shows what the AI thinks it sees, with confidence scores and visual guides

## Tech under the hood

The app uses:
- AI model for shape recognition
- Your browser's camera
- Voice synthesis to speak results
- Interactive charts to show results

## Getting Started

1. Open the app in your browser
2. Try drawing a shape, using your camera, or uploading an image
3. Watch the AI recognize your shape!

## Ways to use it

1. **Drawing**: Use your mouse to draw any shape
2. **Camera**: Point your camera at a shape and click capture
3. **Upload**: Have a shape image? Just upload it!

The app will tell you what shape it sees and how sure it is about its guess. It even speaks the shape name out loud!
