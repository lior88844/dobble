#!/bin/bash

# Dobble Multiplayer Game Deployment Script
# This script helps build and prepare the application for deployment

set -e

echo "🎯 Dobble Multiplayer Game - Deployment Script"
echo "=============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js v16 or higher."
        exit 1
    fi
    
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 16 ]; then
        print_error "Node.js version 16 or higher is required. Current version: $(node -v)"
        exit 1
    fi
    
    print_success "Node.js version: $(node -v)"
}

# Install dependencies
install_dependencies() {
    print_status "Installing dependencies..."
    
    # Install root dependencies
    npm install
    
    # Install backend dependencies
    cd backend
    npm install
    cd ..
    
    # Install frontend dependencies
    cd frontend
    npm install
    cd ..
    
    print_success "All dependencies installed successfully!"
}

# Build frontend
build_frontend() {
    print_status "Building frontend..."
    
    cd frontend
    
    # Check if .env file exists, create from example if not
    if [ ! -f .env ]; then
        if [ -f env.example ]; then
            cp env.example .env
            print_warning "Created .env file from env.example. Please update VITE_BACKEND_URL for production."
        else
            print_warning "No .env file found. Please create one with VITE_BACKEND_URL set."
        fi
    fi
    
    npm run build
    
    cd ..
    
    print_success "Frontend built successfully!"
}

# Test the application
test_application() {
    print_status "Testing application..."
    
    # Test backend
    cd backend
    if [ -f .env ]; then
        print_status "Testing backend health endpoint..."
        # Start backend in background
        npm start &
        BACKEND_PID=$!
        
        # Wait for backend to start
        sleep 3
        
        # Test health endpoint
        if curl -f http://localhost:3001/health > /dev/null 2>&1; then
            print_success "Backend is running and healthy!"
        else
            print_error "Backend health check failed!"
        fi
        
        # Stop backend
        kill $BACKEND_PID 2>/dev/null || true
    else
        print_warning "No .env file in backend. Skipping backend test."
    fi
    
    cd ..
    
    print_success "Application tests completed!"
}

# Create deployment package
create_deployment_package() {
    print_status "Creating deployment package..."
    
    # Create dist directory
    mkdir -p dist
    
    # Copy backend
    cp -r backend dist/
    rm -rf dist/backend/node_modules
    
    # Copy frontend build
    cp -r frontend/dist dist/frontend-build
    
    # Copy configuration files
    cp README.md dist/
    cp package.json dist/
    cp .gitignore dist/
    
    # Create deployment instructions
    cat > dist/DEPLOYMENT.md << EOF
# Deployment Instructions

## Backend Deployment (Render/Railway/Heroku)

1. Upload the \`backend\` folder to your hosting platform
2. Set environment variables:
   - PORT=3001
   - FRONTEND_URL=https://your-frontend-url.com
3. Set build command: \`npm install\`
4. Set start command: \`npm start\`

## Frontend Deployment (Vercel/Netlify)

1. Upload the \`frontend-build\` folder contents to your hosting platform
2. Set environment variable:
   - VITE_BACKEND_URL=https://your-backend-url.com

## Local Development

1. Run \`npm run install:all\` to install dependencies
2. Run \`npm run dev\` to start both servers
3. Backend: http://localhost:3001
4. Frontend: http://localhost:5173
EOF
    
    print_success "Deployment package created in dist/ directory!"
}

# Main deployment function
deploy() {
    echo ""
    print_status "Starting deployment process..."
    
    check_node
    install_dependencies
    build_frontend
    test_application
    create_deployment_package
    
    echo ""
    print_success "Deployment preparation completed!"
    echo ""
    echo "Next steps:"
    echo "1. Review the dist/ directory for deployment files"
    echo "2. Update environment variables for production"
    echo "3. Deploy backend to your preferred hosting platform"
    echo "4. Deploy frontend to your preferred hosting platform"
    echo ""
    echo "For detailed instructions, see dist/DEPLOYMENT.md"
}

# Development setup function
dev_setup() {
    echo ""
    print_status "Setting up development environment..."
    
    check_node
    install_dependencies
    
    # Create .env files if they don't exist
    if [ ! -f backend/.env ] && [ -f backend/env.example ]; then
        cp backend/env.example backend/.env
        print_success "Created backend .env file"
    fi
    
    if [ ! -f frontend/.env ] && [ -f frontend/env.example ]; then
        cp frontend/env.example frontend/.env
        print_success "Created frontend .env file"
    fi
    
    print_success "Development environment setup completed!"
    echo ""
    echo "To start development servers:"
    echo "  npm run dev"
    echo ""
    echo "Or start servers separately:"
    echo "  Backend:  cd backend && npm run dev"
    echo "  Frontend: cd frontend && npm run dev"
}

# Show usage
usage() {
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  deploy     - Prepare application for deployment"
    echo "  dev        - Setup development environment"
    echo "  help       - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 deploy  - Build and prepare for deployment"
    echo "  $0 dev     - Setup development environment"
}

# Main script logic
case "${1:-help}" in
    deploy)
        deploy
        ;;
    dev)
        dev_setup
        ;;
    help|--help|-h)
        usage
        ;;
    *)
        print_error "Unknown command: $1"
        usage
        exit 1
        ;;
esac 