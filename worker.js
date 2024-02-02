// Web Worker script for heavy data processing
onmessage = function(event) {
    if (event.data === 'start') {
      // Perform heavy data processing (e.g., sorting large arrays)
      const array = generateRandomArray(1000000);
      const result = performHeavyProcessing(array);
  
      // Send the result back to the main thread
      postMessage(result);
    }
  };
  
  // Function to simulate heavy processing (replace this with your actual processing logic)
  function performHeavyProcessing(data) {
    return data.sort((a, b) => a - b);
  }
  
  // Helper function to generate a random array
  function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 1000000));
  }
  