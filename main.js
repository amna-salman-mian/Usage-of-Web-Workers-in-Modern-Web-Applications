let resultElement = document.getElementById('result');

function startProcessing() {
  resultElement.innerHTML = 'Processing...';

  if (typeof Worker !== 'undefined') {
    // Create a new Web Worker
    const worker = new Worker('worker.js');

    // Listen for messages from the Web Worker
    worker.onmessage = function(event) {
      resultElement.innerHTML = 'Processing completed: ' + event.data;
    };

    // Start the processing in the Web Worker
    worker.postMessage('start');
  } else {
    // Fallback to processing in the main thread if Web Workers are not supported
    resultElement.innerHTML = 'Web Workers are not supported. Processing in the main thread...';
    processWithoutWebWorker();
  }
}

function processWithoutWebWorker() {
  // Simulate heavy processing without Web Workers
  const startTime = performance.now();

  // Perform heavy data processing (e.g., sorting large arrays)
  const array = generateRandomArray(1000000);
  const result = performHeavyProcessing(array);

  const endTime = performance.now();
  const processingTime = endTime - startTime;

  resultElement.innerHTML = `Processing completed: ${result.length} elements sorted (Without Web Workers - Time: ${processingTime}ms)`;
}

// Function to simulate heavy processing (replace this with your actual processing logic)
function performHeavyProcessing(data) {
  return data.sort((a, b) => a - b);
}

// Helper function to generate a random array
function generateRandomArray(size) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 1000000));
}
