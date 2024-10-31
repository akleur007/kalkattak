# Project Overview

- Act as a professional senior frontend developer
- Use this guide to generate the code
- Application name: kalkattak
- Purpose:
  - The web app should present the portfolio of the team "kalkattak".
  - It should have 3 pages: Home, Projects and About

# Tech stack

- Next.js version: 15
- React version: 19
- TypeScript
- Package manager: npm
- Import aliases: @/_ points to app/_

# Frontend Requirements

- CSS library for styling: Tailwind CSS
- Responsive design: the app should be responsive, desktop, tablet and mobile-friendly
- Accessibility: the app should be accessible
- State management solution: use context API if needed

# Project Structure

```
┌ app
├── fonts
├── favicon.ico
├── globals.css
├── layout.tsx
├── page.tsx
├── node_modules
├── public
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tailwind.config.ts
```

The main application code is in the app directory, following Next.js 13+ app router convention.

# Component Requirements

- Describe each major component's:

  - Purpose
  - Props interface
  - State requirements
  - Key functionalities
  - Error states
  - Loading states

  # Rules

- All new components should go in /components and be named like ExampleComponent.tsx unless otherwise specified.
- All new pages go in /app.

# API Integration

<!-- ### Backend Requirements

- API routes structure
- Database requirements (if any)
- Authentication/Authorization system
- Rate limiting implementation
- Environment variables needed -->

<!-- - Endpoint specifications
- Request/Response formats
- Error handling expectations
- Rate limiting requirements
- Timeout handling

# AI Feature Implementation Guidelines

1. User Input Handling
   - Input validation requirements
   - Input sanitization rules
   - Maximum input lengths
   - Rate limiting per user
2. AI Processing
   - Model parameters
   - Temperature settings
   - Maximum token limits
   - Response formatting
   - Stream vs. complete response handling
3. Response Handling
   - Error scenarios
   - Fallback behaviors
   - Response parsing
   - Response validation
   - Caching strategy

# Testing Requirements

- Unit test coverage expectations
- Integration test scenarios
- E2E test requirements
- Performance testing thresholds
- AI response mocking strategy

# Deployment Considerations

- Environment setup
- Environment variables
- Build process
- CI/CD requirements
- Monitoring requirements

# Security Requirements

- API key management
- User data handling
- Input validation
- Output sanitization
- Rate limiting
- CORS policy

# Performance Requirements

- Loading time targets
- Response time expectations
- Optimization requirements
- Caching strategy
- Bundle size limits

# Error Handling

- Error types to handle
- Error response format
- Logging requirements
- User feedback mechanism
- Recovery strategies

# Documentation Requirements

- API documentation
- Component documentation
- Setup instructions
- Environment configuration
- Troubleshooting guide

# Additional Considerations

- Internationalization requirements
- Accessibility compliance
- Browser compatibility
- Mobile responsiveness
- SEO requirements
 -->
