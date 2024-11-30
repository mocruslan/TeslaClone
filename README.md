# Tesla Homepage Clone

This project is an educational clone of the Tesla.com homepage, built with Angular. It serves as a practical exercise in implementing modern web development practices and understanding complex UI patterns used by leading tech companies.

## About

This application is a faithful recreation of Tesla's homepage, demonstrating the use of Angular's powerful features to build responsive, dynamic web interfaces. The project focuses on educational purposes and showcases frontend development best practices.

## Tech Stack

- **Frontend Framework:** Angular
- **Language:** TypeScript
- **Styling:** CSS/SCSS
- **Build Tool:** Angular CLI
- **Deployment:** GitHub Pages

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   ```

2. Navigate to the project directory:
   ```bash
   cd [project-directory]
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Available Scripts

The following npm scripts are available for development, testing, and deployment:

- `npm run ng` - Run Angular CLI commands
- `npm run start:prod` - Start the development server in production mode
- `npm run start:dev` - Start the development server in development mode
- `npm run build:prod` - Build the application for production
- `npm run watch` - Build and watch for changes in development mode
- `npm run test` - Execute unit tests via Karma

## Development

To start developing, run:

```bash
npm run start:dev
```

This will start a development server at `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Building for Production

To build the application for production, run:

```bash
npm run build:prod
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow is configured in `.github/workflows/main.yml`.

Every push to the main branch triggers the deployment pipeline, which builds and deploys the application to GitHub Pages.

You can access the live version of the application at: [your-github-pages-url]

## Contributing

Although this is a personal project, contributions are welcome. If you would like to contribute, follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is for educational purposes only. All Tesla branding and assets belong to Tesla, Inc.

## Acknowledgments

- Tesla, Inc. for the original design inspiration
- Angular team for the amazing framework
- The open-source community for various tools and libraries used in this project
