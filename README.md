# Internshala Clone

A React-based clone of the Internshala internship search platform with search and filtering capabilities.

## What's Inside

- Search internships by company, profile, or location
- Filter by profile type, location, duration, and work type
- Responsive design that matches Internshala's UI
- Mock data with 6 sample internships

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Features

- **Search**: Find internships by typing in the search bar
- **Filters**: Use sidebar filters to narrow down results
- **Responsive Cards**: Each internship shows company info, duration, stipend, and application details
- **Work Types**: Filter for work-from-home and part-time options

## Tech Stack

- React 19
- Lucide React (for icons)
- Custom CSS (no external UI libraries)
- Tailwind CSS for utilities

## Project Structure

```
src/
├── App.js          # Main component with all functionality
├── index.js        # Entry point
└── index.css       # Tailwind imports
```

## Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests

## Mock Data

The app uses hardcoded internship data including companies like:
- Tech Solutions Pvt Ltd
- Content Hub Media
- Design Masters Studio
- Growth Labs Pvt Ltd
- Data Insights Solutions
- App Innovations Tech

## Customization

To add more internships, edit the `mockInternships` array in `App.js`. Each internship object should include:
- Basic info (title, company, location)
- Details (duration, stipend, start date)
- Metadata (posted date, applicants, tags)

That's it! The app should work out of the box with `npm start`.
