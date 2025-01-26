# AI Shape Drawing & Recognition App

WebApp for Image Recognition - Draw shapes, take pictures, or upload images.

<img width="1245" alt="Screenshot 2025-01-26 at 9 12 53 PM" src="https://github.com/user-attachments/assets/d5fb22fe-c08b-4e36-8690-2fbf373bdc3a" />

## What can it do?

- Draw shapes with your mouse
- Use your webcam to capture shapes
- Upload shape images from your computer
- Hear the shape name spoken out loud
- See how confident the AI is about what it sees
- Get visual feedback with charts and shape previews

## Project Structure

```
├── config.js
├── classes/
│   ├── App.js         
│   ├── CanvasManager.js    
│   ├── CameraManager.js   
│   └── ResultsManager.js  
├── tm-my-image-model/
│   └── metadata.json
│   └── model.json
│   └── weights.bin
└── index.html
```
## Components

## Technologies
- TensorFlow.js - Canvas API - WebRTC - Speech Synthesis API

### CanvasManager class
- Handles drawing functionality - Manages canvas state - Processes user input

### CameraManager class
- Controls webcam access - Manages video stream - Handles image capture

### ResultsManager class
- Displays recognition results - Generates bar charts - Provides voice feedback - Renders recognized shapes

### App class
- Initializes components - Coordinates interactions - Manages ML model

## Setup

1. Install dependencies
2. Configure model paths in `config.js`
3. Run on a web server

## Dataset
https://www.kaggle.com/datasets/dineshpiyasamara/geometric-shapes-dataset/data
<img width="719" alt="Screenshot 2025-01-26 at 9 18 46 PM" src="https://github.com/user-attachments/assets/a0d15124-b65c-41a9-872d-e9352a58a2fd" />

