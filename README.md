geekdesign Design
A React component library based on Tailwind CSS

Beta

View components here →

Installation
Install through the package manager of your choice. If you encounter dependency conflicts, use the following command to force installation:

sh
Copy code
npm install geekdesign-design-react --force
Setup
Compile Classes
Add the following to your tailwind.config.js to ensure that the CSS of the components is compiled correctly. This helps prevent duplicate classes in your project.

javascript
Copy code
content: [
  ...,
  "./node_modules/geekdesign-react/src/**/*.tsx",
]
Custom Styles
Since we have custom classes for components like the AvatarGroup and Sidebar, you need to import this stylesheet in the root of your project.

javascript
Copy code
import "geekdesign-react/dist/geekdesign.css";
Form Plugin
To get the proper styles for the components (e.g., input, select, and checkbox), install the @tailwindcss/forms plugin:

sh
Copy code
npm install -D @tailwindcss/forms
Include the plugin in your tailwind.config.js file as follows:

javascript
Copy code
plugins: [require("@tailwindcss/forms")];
Start Using the Components
Import the components from the library and start using them in your React application:

javascript
Copy code
import { Button } from "geekdesign-react";

...

<Button>Open Mailbox</Button>
Notes
The library is in Beta; you might encounter bugs or missing features.
Please ensure that your project has React 18 or higher installed to prevent potential conflicts.