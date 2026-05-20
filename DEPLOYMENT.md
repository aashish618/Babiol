# Deployment Guide for Babiol

This guide covers deploying Babiol to various platforms.

## Vercel (Recommended)

Vercel is the recommended platform for deploying Next.js applications.

### Prerequisites
- Vercel account (free at https://vercel.com)
- Git repository (GitHub, GitLab, or Bitbucket)

### Steps

1. **Connect Repository**
   - Go to https://vercel.com/new
   - Select your Git provider
   - Choose the Babiol repository

2. **Configure Project**
   - Framework: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Environment Variables**
   - Add environment variables from `.env.example`
   - Set production values if needed

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete

5. **Custom Domain (Optional)**
   - Go to Project Settings
   - Navigate to Domains
   - Add your custom domain

### Auto-Deployments
- Every push to `main` branch triggers automatic deployment
- Pull request previews available for review

---

## Docker Deployment

### Prerequisites
- Docker installed
- Docker Hub account (optional)

### Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
```

### Build and Run

```bash
# Build image
docker build -t babiol:latest .

# Run container
docker run -p 3000:3000 babiol:latest

# Push to Docker Hub
docker tag babiol:latest your-username/babiol:latest
docker push your-username/babiol:latest
```

---

## AWS Deployment

### Using AWS Amplify

1. Connect GitHub repository
2. Select Next.js framework
3. Configure build settings
4. Deploy

### Using EC2

1. Launch EC2 instance (Node.js compatible)
2. SSH into instance
3. Clone repository
4. Install dependencies: `npm install`
5. Build: `npm run build`
6. Start: `npm run start`
7. Configure reverse proxy (Nginx)

---

## Google Cloud Run

```bash
# Build
npm run build

# Create app.yaml
cat > app.yaml << EOF
runtime: nodejs18
entrypoint: npm run start
env: standard
EOF

# Deploy
gcloud app deploy
```

---

## DigitalOcean App Platform

1. Connect GitHub repository
2. Configure build command: `npm run build`
3. Configure run command: `npm run start`
4. Set environment variables
5. Deploy

---

## Environment Variables for Production

```
NEXT_PUBLIC_APP_NAME=Babiol
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_WAITLIST_ENABLED=true
NEXT_PUBLIC_DEMO_MODE=false
```

---

## Post-Deployment Checklist

- [ ] Website loads without errors
- [ ] All sections render correctly
- [ ] Responsive design works on mobile
- [ ] Waitlist form functions
- [ ] Links are not broken
- [ ] Images load properly
- [ ] Performance is acceptable
- [ ] SSL certificate is valid

---

## Troubleshooting

### Build Fails
- Check Node.js version compatibility
- Verify all dependencies installed
- Review build logs

### Application Crashes
- Check environment variables
- Review error logs
- Verify port accessibility

### Performance Issues
- Enable Vercel Analytics
- Check database queries
- Optimize images

---

For more help, visit the Next.js deployment documentation: https://nextjs.org/docs/deployment
