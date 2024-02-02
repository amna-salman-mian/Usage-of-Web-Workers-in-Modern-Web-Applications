# Usage-of-Web-Workers-in-Modern-Web-Applications
a) Brief Description of Project:
The project is a simple web application that demonstrates the use of Web Workers for heavy data processing. The application includes an HTML file (index.html), a main JavaScript file (main.js), and a Web Worker JavaScript file (worker.js).
1) HTML file(index.html):
   -provides structure of webpage.
   -Includes a title, a heading, a "Start Processing" button, and a result section.
2) Main JavaScript File (main.js):
   -Contains the main logic for the application.
   -Initiates data processing when the "Start Processing" button is clicked.
   -Checks if Web Workers are supported and uses them for processing if available.
   -If Web Workers are not supported, falls back to processing in the main thread.
   -Simulates heavy data processing by sorting a large array of random numbers.
   -Displays the processing result and time taken on the web page.
3) Web Worker JavaScript File (worker.js):
   -Represents the Web Worker script for offloading heavy data processing.
   -Listens for a "start" message from the main thread.
   -Performs heavy data processing (sorting a large array of random numbers).
   -Sends the processed result back to the main thread.
   
b) Instructions on how to run project locally:
   -Open the index.html file in a web browser.
   -Click the "Start Processing" button to initiate data processing.
   -The application will display the processing result.
   -Or Open the index.html file in Visual Studio Code and run the file using "Live Server" in VS code.

c) Summary of findings regarding performance improvements or benefits provided by using web workers:
   -Web Workers enable the execution of heavy computations in the background, separate from the main thread.
   -During data processing, the main thread remains responsive, preventing the user interface from freezing.
   -The user can interact with the interface even during the processing, leading to a smoother and more responsive experience.
   -If Web Workers are not supported, the application gracefully falls back to processing in the main thread, ensuring functionality on 
    all browsers.
   -When Web Workers are supported, the application utilizes them to perform sorting of a large array asynchronously. 
d) Challenges faced in project and Overcoming it:
   -Splitting code between the main thread and Web Workers lead to challenges in code organization and maintenance.
   -There was an issue of running it on browser at first because it was not displaying resluts even after waiting for some time.
   -To overcome that problem, I had to install an extension in VS code known as "Live Server". I opened the index.html using that server 
    and it ran successfully.
