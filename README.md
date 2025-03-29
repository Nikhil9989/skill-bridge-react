# SKILL BRIDGE React

A React.js implementation of the SKILL BRIDGE research portal, focused on addressing the skill gap in Indian education through an innovative hybrid learning model.

## Project Overview

SKILL BRIDGE aims to create an accessible, personalized, and industry-aligned learning ecosystem that transforms students and professionals in tier-2/3 cities into industry-ready talent. This React.js-based web application serves as the research portal and information hub for the initiative.

## Features

- **Clean, Component-Based Architecture**: Organized React components for maintainability and reusability
- **React Router Navigation**: Smooth client-side routing with React Router
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Interactive UI Elements**: Forms, charts, and interactive elements for user engagement
- **CSS Modularity**: Well-structured CSS for each component and page

## Pages

- **Home**: Landing page with project overview and links to key sections
- **About**: Information about the SKILL BRIDGE initiative and team
- **Research Methods**: Details on the research approach and methodologies
- **Surveys**: Access to various research surveys for different stakeholder groups
- **Interviews**: Information about and registration for research interviews
- **Dashboard**: Interactive data visualization of research findings
- **Contact**: Contact information and form for inquiries

## Technology Stack

- **React.js**: Front-end library for building the user interface
- **React Router**: For handling client-side routing
- **Chart.js**: For data visualization in the dashboard
- **CSS3**: For styling components
- **React Icons**: For icon integration

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Nikhil9989/skill-bridge-react.git
   ```

2. Navigate to the project directory:
   ```
   cd skill-bridge-react
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or if you use yarn:
   ```
   yarn install
   ```

4. Start the development server:
   ```
   npm start
   ```
   or with yarn:
   ```
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
skill-bridge-react/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── images/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── sections/
│   │       ├── AboutSection.jsx
│   │       ├── ResearchMethods.jsx
│   │       ├── SurveysSection.jsx
│   │       ├── InterviewsSection.jsx
│   │       ├── DashboardSection.jsx
│   │       └── ContactSection.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ResearchPage.jsx
│   │   ├── SurveysPage.jsx
│   │   ├── InterviewsPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── SurveyDetailPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries about the project, please contact [research@skillbridge.edu](mailto:research@skillbridge.edu).
