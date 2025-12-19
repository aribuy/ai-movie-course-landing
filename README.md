# AI Movie Maker Course - Landing Page System

## 🎬 Project Overview

High-converting landing page system untuk "AI Movie Maker Course" - kelas online pembuatan film pendek menggunakan AI tools. Dibangun dengan teknologi modern untuk maksimal conversion rate.

## 🚀 Tech Stack

### Frontend
- **React.js** dengan TypeScript
- **Tailwind CSS** + Custom CSS
- **Vite** untuk build tool
- **React Hook Form** untuk form handling

### Backend  
- **Node.js** + Express
- **MongoDB/PostgreSQL** untuk database
- **Stripe** + Local Payment Gateways
- **JWT** untuk authentication

### Analytics & Tracking
- **Google Analytics 4**
- **Facebook Pixel**
- **Conversion tracking**

## 📁 Project Structure

```
ai-movie-course-landing/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── sections/        # Page sections
│   │   ├── hooks/          # Custom hooks
│   │   ├── utils/          # Utilities
│   │   └── assets/         # Static assets
├── backend/                 # Node.js API
│   ├── routes/             # API routes
│   ├── models/             # Database models
│   ├── middleware/         # Custom middleware
│   ├── config/             # Configuration
│   └── services/           # Business logic
├── admin/                  # Admin dashboard
└── docs/                   # Documentation
```

## 🎨 Design Features

### Visual Design
- **Cinematic theme** dengan dark backgrounds
- **Modern typography** (Clash Display + Inter)
- **Orange/red accent colors** untuk CTAs
- **Smooth animations** dan micro-interactions
- **Mobile-first responsive** design

### Conversion Optimization
- **Urgency indicators** (countdown timer, slot terbatas)
- **Social proof** (testimonials, student count)
- **Value stacking** (bonus calculation)
- **Risk reversal** (money-back guarantee)
- **Progressive disclosure** (step-by-step form)

## 🔧 Key Components

### 1. Hero Section (`Hero.tsx`)
- Full-screen cinematic background
- Typewriter effect headline
- Social proof indicators
- Animated CTA button
- Video preview integration

### 2. Problem-Solution (`ProblemSolution.tsx`)
- Pain points identification
- Course benefits showcase
- Smooth scroll animations
- Emotional engagement

### 3. Pricing Section (`Pricing.tsx`)
- Dynamic countdown timer
- Price comparison display
- Urgency messaging
- Value calculation
- Multiple payment options

### 4. Order Form (`OrderForm.tsx`)
- Multi-step form validation
- 8 payment gateway options
- Real-time error handling
- Conversion tracking
- Mobile-optimized UX

## 💳 Payment Integration

### Supported Methods
- **Bank Transfer**: BSI, Mandiri, BRI, BNI, Permata
- **Virtual Account** untuk semua bank
- **QRIS** untuk mobile payments
- **GoPay** integration
- **International options** (future expansion)

### Security Features
- Input validation & sanitization
- SQL injection prevention
- Payment data encryption
- Rate limiting
- CORS configuration

## 📊 Analytics & Tracking

### Conversion Events
- Page views dan scroll depth
- Form interactions
- Payment method selection
- Purchase completion
- Abandoned cart recovery

### A/B Testing
- Headline variations
- CTA button colors
- Pricing display options
- Form field optimization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm atau yarn
- MongoDB/PostgreSQL

### Installation

1. **Clone repository**
```bash
git clone <repository-url>
cd ai-movie-course-landing
```

2. **Install dependencies**
```bash
# Frontend
cd frontend
npm install

# Backend  
cd ../backend
npm install

# Admin
cd ../admin
npm install
```

3. **Environment setup**
```bash
# Backend
cp .env.example .env
# Edit .env dengan konfigurasi database dan API keys
```

4. **Run development servers**
```bash
# Frontend (port 3000)
cd frontend && npm run dev

# Backend (port 5000)
cd backend && npm run dev

# Admin (port 3001)
cd admin && npm run dev
```

## 🔧 Configuration

### Environment Variables
```env
# Database
DATABASE_URL=mongodb://localhost:27017/ai-movie-course
# atau PostgreSQL: postgresql://user:pass@localhost:5432/ai-movie-course

# Payment Gateways
STRIPE_SECRET_KEY=sk_test_...
MIDTRANS_SERVER_KEY=...
XENDIT_SECRET_KEY=...

# Email Service
SENDGRID_API_KEY=...
SMTP_HOST=...
SMTP_USER=...
SMTP_PASS=...

# Analytics
GA_TRACKING_ID=G-...
FB_PIXEL_ID=...

# WhatsApp API
WHATSAPP_TOKEN=...
WHATSAPP_PHONE_ID=...
```

## 📈 Performance Optimization

### Frontend
- **Code splitting** dengan React.lazy
- **Image optimization** dengan lazy loading
- **Bundle size optimization**
- **CDN integration** untuk assets
- **Service Worker** untuk caching

### Backend
- **Database indexing**
- **API response caching**
- **Rate limiting**
- **Compression middleware**
- **Error monitoring**

## 🧪 Testing

### Frontend Testing
```bash
cd frontend
npm run test        # Unit tests
npm run test:e2e    # End-to-end tests
npm run lighthouse  # Performance audit
```

### Backend Testing
```bash
cd backend
npm run test        # API tests
npm run test:load   # Load testing
```

## 🚀 Deployment

### Production Build
```bash
# Frontend
cd frontend && npm run build

# Backend
cd backend && npm run build
```

### Docker Deployment
```bash
docker-compose up -d
```

### Environment Setup
- **Frontend**: Vercel/Netlify
- **Backend**: Railway/Heroku/DigitalOcean
- **Database**: MongoDB Atlas/Supabase
- **CDN**: Cloudflare/AWS CloudFront

## 📊 Monitoring & Analytics

### Key Metrics
- **Conversion Rate** (visitor to customer)
- **Average Order Value**
- **Customer Acquisition Cost**
- **Page Load Speed**
- **Form Completion Rate**

### Tools Integration
- Google Analytics 4
- Facebook Pixel
- Hotjar/FullStory
- Sentry error monitoring
- Uptime monitoring

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 📞 Support

Untuk pertanyaan teknis atau support:
- Email: support@aimoviecourse.com
- WhatsApp: +62-xxx-xxxx-xxxx
- Documentation: /docs

---

**Built with ❤️ for Indonesian creators**