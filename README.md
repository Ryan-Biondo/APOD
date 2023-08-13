# AstroPix Gallery

The AstroPix Gallery is a React application that fetches astronomy pictures sourced from NASA's Astronomy Picture of the Day (APOD) API. The user can enjoy and learn about astonomy.

## Project Overview

AstroPix Gallery leverages the power of React to present an immersive gallery of astronomy pictures. NASA updates the data everyday at midnight (UTC). Users can seamlessly navigate through the collection, exploring pictures from different dates. The date picker allows specific date selection, while navigation buttons help nearby browsing. The gallery is responsive, providing sufficient viewing on various devices.

## Demo

![AstroPix Gallery Demo](/src/assets/demo.gif)

## Technologies Used

- React.js
- TypeScript
- Chakra UI
- react-datepicker
- React Router

## Features

- Dynamic display of astronomy pictures from NASA APOD API
- Smooth navigation through pictures by date
- Responsive design for optimal viewing on various devices
- User-friendly date picker for specific day selection
- Light and Dark color themes
- Loading spinner for seamless UX
- Back to Top and Home buttons for easy navigation

## Project Structure

```
NASA-API
├── .eslintrc.cjs
├── .gitignore
├── .vscode
│   └── settings.json
├── android-chrome-144x144.png
├── apple-touch-icon.png
├── browserconfig.xml
├── dist
│   ├── assets
│   │   ├── apple-touch-icon-79664a5c.png
│   │   ├── index-55e7a682.css
│   │   ├── index-fa37da59.js
│   │   └── safari-pinned-tab-dbca1fe7.svg
│   └── index.html
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── index.html
├── mstile-150x150.png
├── node_modules
│   ├── ...
├── package-lock.json
├── package.json
├── public
├── README.md
├── safari-pinned-tab.svg
├── site.webmanifest
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── demo.gif
│   ├── components
│   │   ├── ApodHeading.tsx
│   │   ├── BackToTop.tsx
│   │   ├── Calendar.tsx
│   │   ├── DetailsPage.tsx
│   │   ├── Footer.tsx
│   │   ├── HomeButton.tsx
│   │   ├── LandingCard.tsx
│   │   ├── LandingPage.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── NavBar.tsx
│   │   ├── PictureCard.tsx
│   │   ├── StarryNight.tsx
│   │   └── ThemeToggleButton.tsx
│   ├── hooks
│   │   ├── useApod.ts
│   │   ├── useApodForDate.ts
│   │   ├── useData.ts
│   │   └── useDateNavigation.ts
│   ├── main.tsx
│   ├── services
│   │   └── api-client.ts
│   └── theme.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Development Process

Building AstroPix Gallery involved leveraging React's capabilities to fetch and display APOD images. Challenges included handling date navigation, creating a user-friendly calendar, and implementing responsive design for optimal performance across devices. The process included thorough testing, debugging, and incorporating user-friendly features.

## Future Enhancements

- Improve error handling for invalid dates
- Integration of social media sharing for individual pictures
- Addition of a search bar for keywords

## Getting Started

To run this project locally, ensure you have Node.js and npm installed. Follow these steps:

1. Clone this repository: `git clone https://github.com/username/repo.git`
2. Navigate to the project folder: `cd astro-pix-gallery`
3. Install dependencies: `npm install`
4. Start the app: `npm start`

## Usage

Explore the AstroPix Gallery. Visit the live version [here](https://apod.ryanbiondo.com).

## Contributing

While contributions are not currently accepted for this project, your feedback is invaluable for future improvements.

## License

This project is licensed under the MIT License.

## Acknowledgments

- NASA's Astronomy Picture of the Day API
- Chakra UI for providing user-friendly UI components
- OpenAI for assistance during the development process

Created by Ryan Biondo
