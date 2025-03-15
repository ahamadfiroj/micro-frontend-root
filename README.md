# Micro Frontend Architecture

## Project Structure
```
micro-frontend-root/
├── container/             # Container application
├── main-content/          # Project 1: Home & About pages
└── secondary-content/     # Project 2: Contact & Privacy pages
```

## Applications
1. `main-content`: Home page and About page
2. `secondary-content`: Contact details and Privacy policy pages 
3. `container`: Shell application that integrates both micro frontends

# Micro Frontend Development & Deployment Guide

## Local Development

### Initial Setup
1. Clone the repository and install dependencies:
```bash
git clone <your-repo-url>
cd micro-frontend-root
cd main-content && npm install
cd ../secondary-content && npm install
cd ../container && npm install
```

### Running Locally
You have two options for local development:

#### Option 1: Run each application separately
Terminal 1:
```bash
cd main-content
npm run build
npm run preview
```

Terminal 2:
```bash
cd secondary-content
npm run build
npm run preview
```

Terminal 3:
```bash
cd container
npm run dev
```

#### Option 2: Use the start:all script (recommended)
From the container directory:
```bash
npm run start:all
```

This will:
1. Build and serve the main-content app on port 5001
2. Build and serve the secondary-content app on port 5002
3. Start the container app in development mode on port 5000

Access the application at: http://localhost:5000

## Vercel Deployment

### Prerequisites
1. Create a Vercel account at https://vercel.com
2. Install the Vercel CLI: `npm install -g vercel`
3. Login to Vercel: `vercel login`

### Deployment Steps

#### Step 1: Deploy the micro frontend applications first
Deploy main-content:
```bash
cd main-content
vercel
```

Deploy secondary-content:
```bash
cd secondary-content
vercel
```

#### Step 2: Update the production configuration
1. Get the deployment URLs from Vercel for both apps
2. Update the URLs in `container/vite.config.prod.js`:

```javascript
const MAIN_CONTENT_URL = 'https://your-main-content-app.vercel.app';
const SECONDARY_CONTENT_URL = 'https://your-secondary-content-app.vercel.app';
```

#### Step 3: Deploy the container application
```bash
cd container
vercel --build-env VITE_CONFIG_PATH=vite.config.prod.js
```

### Troubleshooting
- If you encounter CORS issues, ensure that your Vercel deployments have CORS configured properly
- Verify that the remote entry paths in vite.config.prod.js match the actual path of the deployed remoteEntry.js files

## CI/CD Setup (Optional)
For automated deployments, you can configure GitHub Actions or Vercel's Git integration to automatically deploy changes.

### Sample GitHub Action workflow
```yaml
name: Deploy Micro Frontend

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Deploy Main Content
        run: |
          cd main-content
          npm install
          npm run build
          npx vercel --token ${{ secrets.VERCEL_TOKEN }} --prod
      
      - name: Deploy Secondary Content
        run: |
          cd secondary-content
          npm install
          npm run build
          npx vercel --token ${{ secrets.VERCEL_TOKEN }} --prod
          
      - name: Update and Deploy Container
        run: |
          cd container
          npm install
          # Update URLs programmatically or use environment variables
          npm run build:prod
          npx vercel --token ${{ secrets.VERCEL_TOKEN }} --prod
```
