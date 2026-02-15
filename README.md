Pet Kennel ReadMe

1. Repository Setup
Fork this repository to your own GitHub account.

Clone your forked repository to your local machine.

Open your terminal in the root project folder.

2. Installing Dependencies
Run the following command to install the necessary packages:
npm install

3. Adding Assets (Important)
Before running the application, you must ensure the visual assets are in the correct location so the components can render them.

Navigate to the src/assets directory.

Add your image files (e.g., .jpg, .png, or .svg) into this folder.

Ensure the filenames in your data.js or state match the filenames you've added to this directory.

Why Vite?
We are using Vite instead of the deprecated Create React App for several key reasons:

Files: Components use the .jsx extension for better tooling support and clarity.

Speed: The development server starts almost instantly thanks to native ESM-based HMR (Hot Module Replacement).

Modern Standards: Vite provides a leaner, faster build process that aligns with modern web standards.

How to Run
Local Development
To start the Vite development server, run:
npm run dev
Note: Vite defaults to port 5173. Check your terminal output for the local URL (usually http://localhost:5173) to view your application in the browser.