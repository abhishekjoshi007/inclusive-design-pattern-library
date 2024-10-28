# **GeekDesign**

**A React Component Library based on Tailwind CSS**

[![Version: Beta](https://img.shields.io/badge/version-beta-yellow.svg)](https://geekdesign-link)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://geekdesign-link)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## **Overview**
**GeekDesign** is a React component library that leverages **Tailwind CSS** to provide developers with a collection of reusable, accessible UI components. Designed for flexibility and ease of use, it offers a variety of components, each with full customization capabilities while maintaining adherence to accessibility standards.

### **Beta Version**
This library is currently in the **beta** phase. While all the core components are functional, you may encounter bugs or missing features. We welcome feedback and contributions to improve the library.

## **Features**
- Pre-built, customizable components
- Tailwind CSS-based styling
- Accessible design adhering to **WCAG 2.1** and **ARIA** standards
- Real-time customization options
- Modular and scalable architecture

## **Tech Stack**
The **GeekDesign** library is built using the following technologies:
- **React 18**: For building the component architecture.
- **Tailwind CSS**: For styling components with a utility-first approach.
- **TypeScript**: For type safety and better code maintainability.
- **Storybook**: For developing, showcasing, and documenting components.
- **PostCSS**: For processing CSS and enabling custom configurations.
- **Webpack/Rollup**: For bundling and optimizing the library for distribution.
- **Jest** (planned): For unit testing of components.
- **axe-core** and **Lighthouse** (for future releases): For accessibility testing integration.

## **Installation**
Install through the package manager of your choice. If you encounter dependency conflicts, use the following command to force installation:

```bash
npm install geekdesign-design-react --force
```

To run the project in **Storybook** (for development and testing), use:

```bash
npm run storybook
```

Ensure you have **React 18** or higher installed in your project to avoid potential compatibility issues.

## **Setup**

### **1. Compile Classes**
Add the following to your **`tailwind.config.js`** file to compile the CSS of the components correctly and avoid duplicate classes:

```javascript
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/geekdesign-design-react/src/**/*.tsx',
  ],
};
```

### **2. Import Custom Styles**
To load custom styles for components like **AvatarGroup** and **Sidebar**, import the main stylesheet into your project's entry point (e.g., **index.js** or **App.js**):

```javascript
import "geekdesign-design-react/dist/geekdesign.css";
```

### **3. Install the Form Plugin**
To ensure proper styling of form elements (e.g., **input**, **select**, and **checkbox**), install the **@tailwindcss/forms** plugin:

```bash
npm install -D @tailwindcss/forms
```

Add the plugin to your **`tailwind.config.js`**:

```javascript
module.exports = {
  plugins: [require("@tailwindcss/forms")],
};
```

### **4. Start Using the Components**
Import and use the components in your React application:

```javascript
import { Button, Avatar } from "geekdesign-design-react";

const App = () => (
  <div>
    <Button>Open Mailbox</Button>
    <Avatar src="https://example.com/avatar.png" size="lg" />
  </div>
);

export default App;
```

### **5. Development Notes**
- The library is still in **Beta**, so some components may have incomplete functionality.
- Regular updates will be made to improve the components, fix bugs, and add new features.
- We recommend testing the components in a staging environment before deploying them to production.

## **Accessibility Compliance**

**GeekDesign** adheres to accessibility standards to ensure all components are usable by people with disabilities, providing an inclusive experience. Specifically, we follow:

### **1. Web Content Accessibility Guidelines (WCAG) 2.1**
   - The library complies with **WCAG 2.1** standards, which focus on making web content perceivable, operable, understandable, and robust.
   - Examples include sufficient color contrast, clear focus indicators, and semantic HTML elements to improve screen reader compatibility.

### **2. Accessible Rich Internet Applications (ARIA) 1.2**
   - We use **ARIA** attributes to enhance interaction for users relying on assistive technologies.
   - Components such as modals, alerts, sliders, and dropdowns include ARIA roles like **`aria-live`**, **`aria-expanded`**, and **`aria-controls`**.

### **3. Section 508 (U.S. Federal Standard)**
   - The library aligns with **Section 508** compliance, ensuring electronic information is accessible to people with disabilities.

### **4. Keyboard Navigation & Focus Management**
   - All components are tested for seamless keyboard navigation, logical focus management, and clear focus indicators.

### **5. Color Contrast**
   - We ensure that components meet **WCAG 2.1 AA** color contrast requirements, improving visibility for users with low vision.

### **6. Future Accessibility Enhancements**
   - We conduct regular audits using tools like **axe-core** and **Lighthouse**, combined with manual screen reader testing.
   - Accessibility testing tools will be built into the library to help developers identify and fix accessibility issues during development.

## **Available Components**
- **Buttons**: Fully customizable buttons with variants (primary, secondary, etc.)
- **Avatars**: Profile picture components with different sizes and shapes.
- **Forms**: Pre-styled input, select, and checkbox components.
- **Sidebar**: A collapsible navigation sidebar.
- **Modal**: A flexible modal with various customization options.
- **Dropdowns**: Dropdown menus with nested items.
- **Progress Bar**: Linear progress indicators with dynamic values.

## **Future Development**
Here are the future development plans for specific components and general improvements:

### **1. Alert**
   - **Current Status**: Basic alerts with message and close functionality.
   - **Future Enhancements**:
     - Add alert types (e.g., Success, Warning, Error).
     - Implement ARIA live regions for real-time announcement.
     - Add dismissible functionality with accessible close buttons.

### **2. Tables**
   - **Current Status**: Basic table structure for displaying data.
   - **Future Enhancements**:
     - Add pagination, sorting, and filtering.
     - Enhance keyboard navigation and semantic roles.
     - Add ARIA attributes like `aria-colindex`, `aria-rowcount`.

### **3. Slider**
   - **Current Status**: Basic horizontal slider.
   - **Future Enhancements**:
     - Add vertical and range slider options.
     - Implement ARIA roles (`role="slider"`) and properties for better screen reader support.

### **4. Sidebar**
   - **Current Status**: Collapsible sidebar.
   - **Future Enhancements**:
     - Add multi-level navigation and persistent state.
     - Implement ARIA attributes like `aria-expanded` and focus management.

### **5. Dropdowns**
   - **Current Status**: Simple dropdowns.
   - **Future Enhancements**:
     - Add multi-level dropdowns, keyboard navigation, and ARIA attributes.

### **6. General Accessibility Improvements**
   - Conduct accessibility audits with **axe-core**, **Lighthouse**, and screen readers.
   - Add detailed documentation and usage examples focusing on accessibility.
   - Build-in testing tools to identify accessibility issues during development.

## **Contributing**
We welcome contributions to improve **GeekDesign**! If you’d like to contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-component`).
3. Commit your changes (`git commit -m 'Add new component'`).
4. Push to the branch (`git push origin feature/new-component`).
5. Open a pull request.

## **Feedback & Support**
For issues, suggestions, or support, please open an issue in the repository or contact the maintainers.


