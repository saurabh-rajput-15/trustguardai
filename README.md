# TrustGuardAI

> Fighting Misinformation in the Domestic Help Ecosystem with Agentic AI

TrustGuardAI is an advanced Next.js 15 application that combats misinformation in the domestic help industry by leveraging AI-powered verification agents to detect fake profiles, forged documents, and manipulated reviews — empowering truth between households and workers.

## 🌟 Project Overview

TrustGuardAI addresses the **hidden misinformation crisis in domestic help hiring** where fake IDs, doctored photos, and manipulated reviews create mistrust between millions of families and domestic workers. The platform provides:

- **AI-powered verification** through specialized agents
- **Trust score system** for transparent credibility assessment
- **Dual-user platform** serving both workers and employers
- **Comprehensive verification pipeline** for documents, media, and reviews

### User Types

1. **Workers**: Domestic help providers building verified profiles and trust scores
2. **Employers**: Households searching for and hiring verified domestic help

## 🤖 AI-Powered Features

### Verification Agents

- **Document Verification Agent**: Detects fake or tampered IDs with OCR and watermark checks
- **Reputation Agent**: Flags review manipulation using NLP analysis
- **Media Forensics Agent**: Detects deepfakes and doctored photos/videos
- **Trust Score Generator**: Creates explainable trust scores for transparency

### Worker Dashboard Features
- Real-time trust score calculation and display
- Document verification center with status tracking
- Profile management and verification workflow
- Earnings tracking and analytics
- Work history management
- Settings and account management

### Employer Dashboard Features
- Advanced worker search with trust score filtering
- Hiring management system
- My Hires tracking and management
- Worker review submission system
- Insights and analytics dashboard
- Trust score verification tools

## 💻 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15.2.4 (App Router) |
| **Language** | TypeScript 5 |
| **UI Library** | React 19 |
| **UI Components** | Shadcn UI with Radix UI primitives |
| **Styling** | Tailwind CSS 4.1.9 |
| **Forms** | React Hook Form + Zod validation |
| **Charts** | Recharts |
| **Fonts** | Geist (Sans & Mono), Lucide Icons |
| **Authentication** | Custom hook with localStorage (mock) |
| **Analytics** | Vercel Analytics |
| **Package Manager** | pnpm |

## 🏗️ Project Structure

```
trustguardai/
├── app/                           # Next.js 15 App Router pages
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout with fonts & analytics
│   ├── page.tsx                   # Landing page
│   ├── about/                     # About page
│   ├── admin/                     # Admin dashboard
│   ├── contact/                   # Contact page
│   ├── dashboard/                 # Protected dashboards
│   │   ├── page.tsx               # Dashboard router
│   │   ├── employer/              # Employer dashboard
│   │   │   ├── layout.tsx         # Employer layout with sidebar
│   │   │   ├── page.tsx           # Employer overview
│   │   │   ├── insights/          # Analytics & insights
│   │   │   ├── my-hires/          # Hired workers management
│   │   │   ├── reviews/           # Review management
│   │   │   ├── search-workers/    # Worker search & filtering
│   │   │   └── settings/          # Account settings
│   │   └── worker/                # Worker dashboard
│   │       ├── layout.tsx         # Worker layout with sidebar
│   │       ├── page.tsx           # Worker overview
│   │       ├── earnings/          # Earnings tracking
│   │       ├── my-profile/        # Profile management
│   │       ├── settings/          # Account settings
│   │       ├── trust-score/       # Trust score details
│   │       └── verification-center/ # Document verification
│   ├── employers/                 # Employers landing
│   ├── login/                     # Authentication page
│   │   ├── page.tsx               # Login/Register forms
│   │   └── loading.tsx            # Loading state
│   ├── privacy/                   # Privacy policy
│   ├── terms/                     # Terms of service
│   └── workers/                   # Workers landing
│
├── components/                    # React components
│   ├── theme-provider.tsx         # Dark/light theme provider
│   ├── dashboard/                 # Dashboard-specific components
│   │   └── layout.tsx             # Dashboard layout wrapper
│   ├── site/                      # Marketing site components
│   │   ├── benefits.tsx           # Benefits section
│   │   ├── callouts.tsx           # Feature callouts
│   │   ├── faq.tsx                # FAQ section
│   │   ├── final-cta.tsx          # Final call-to-action
│   │   ├── footer.tsx             # Site footer
│   │   ├── hero.tsx               # Hero section
│   │   ├── how-it-works.tsx       # How it works flow
│   │   ├── impact.tsx             # Impact statistics
│   │   ├── navbar.tsx             # Navigation bar
│   │   ├── privacy-testimonials.tsx # Testimonials
│   │   ├── problem.tsx            # Problem statement
│   │   ├── redirect-if-authed.tsx # Auth redirect guard
│   │   ├── social-impact.tsx      # Social impact section
│   │   └── solution.tsx           # Solution with AI agents
│   ├── ui/                        # Shadcn UI components (40+ components)
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── table.tsx
│   │   └── ... (30+ more components)
│   └── worker/
│       └── worker-card.tsx        # Worker profile card
│
├── hooks/                         # Custom React hooks
│   ├── use-auth.ts                # Authentication hook (localStorage)
│   ├── use-mobile.ts              # Mobile detection hook
│   └── use-toast.ts               # Toast notification hook
│
├── lib/                           # Utility functions
│   └── utils.ts                   # Tailwind class merge utilities
│
├── public/                        # Static assets
│   └── [images & assets]
│
├── styles/                        # Additional styles
│   └── globals.css
│
├── components.json                # Shadcn UI configuration
├── next.config.mjs                # Next.js configuration
├── package.json                   # Dependencies
├── pnpm-lock.yaml                 # Lock file
├── postcss.config.mjs             # PostCSS config
├── tailwind.config.ts             # Tailwind configuration
└── tsconfig.json                  # TypeScript configuration
```

## 🔄 User Flows

### Worker Journey
1. **Onboarding**: Register/Login as a Worker
2. **Profile Setup**: Complete profile with personal information
3. **Verification**: Submit documents (ID, photos) for AI verification
4. **Trust Score**: Receive trust score based on:
   - Document authenticity
   - Media forensics analysis
   - Review credibility
5. **Job Search**: Browse and apply for jobs
6. **Work Management**: Track earnings, manage profile, view trust score details

### Employer Journey
1. **Onboarding**: Register/Login as an Employer
2. **Search**: Search for verified workers with trust score filters
3. **Review Profiles**: View detailed worker profiles with:
   - Trust score breakdown
   - Verification status
   - Work history
   - Reviews
4. **Hire**: Select and hire workers
5. **Management**: Track hires, provide reviews after service completion
6. **Insights**: View analytics and hiring patterns

### Landing Page Sections
- **Hero**: Main value proposition with CTA
- **Problem**: Misinformation crisis in domestic help hiring
- **Solution**: AI agent showcase (Document, Reputation, Media, Trust Score)
- **How It Works**: Step-by-step verification process
- **Impact**: Statistics and social impact
- **Benefits**: Platform advantages for users
- **Social Impact**: Community and trust building
- **Testimonials**: User feedback and privacy focus
- **FAQ**: Common questions answered
- **Final CTA**: Conversion prompt

## 💪 Social Impact Goals

TrustGuardAI aims to create meaningful social change:

- ✅ **Safer Households**: Verified domestic help reduces safety risks
- ✅ **Worker Empowerment**: Honest workers gain access to fair opportunities
- ✅ **Time Efficiency**: Automated verification eliminates manual checks
- ✅ **Trust Building**: Transparent trust scores create ecosystem confidence
- ✅ **Economic Fairness**: Reduces wage theft and exploitation through verified identities
- ✅ **Privacy Protection**: AI-powered verification respects user privacy

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ or later
- pnpm (recommended), npm, or yarn

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/saurabh-rajput-15/trustguardai.git
cd trustguardai
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. **Run the development server**
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application

### Available Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

### Environment Setup

The application currently uses mock authentication via localStorage. For production deployment:

1. Set up environment variables (`.env.local`):
```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your-api-url
```

2. Configure authentication backend
3. Integrate AI verification services

## 🔧 Configuration

### Next.js Configuration (`next.config.mjs`)
- ESLint: Ignored during builds (development mode)
- TypeScript: Build errors ignored (development mode)
- Images: Unoptimized for faster builds

### Tailwind CSS
- Version: 4.1.9
- Custom configuration in `tailwind.config.ts`
- Animation utilities via `tailwindcss-animate`

### TypeScript
- Strict mode enabled
- Path aliases configured (`@/*` → project root)

## 🎨 UI Components

The project uses **Shadcn UI** with 40+ pre-built components:

- Forms: Input, Textarea, Select, Checkbox, Radio Group
- Feedback: Alert, Toast, Dialog, Popover
- Data Display: Table, Card, Avatar, Badge, Skeleton
- Navigation: Tabs, Breadcrumb, Navigation Menu, Pagination
- Layout: Separator, Scroll Area, Resizable Panels
- And many more...

All components are built on **Radix UI** primitives with **Tailwind CSS** styling.

## 🚧 Current Status

**Development Phase**: Frontend Implementation Complete ✅

### Implemented Features
- ✅ Complete UI/UX for landing page with 9 sections
- ✅ Worker dashboard with 7 pages
- ✅ Employer dashboard with 6 pages
- ✅ Authentication flow (mock implementation)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ 40+ reusable UI components
- ✅ Dark/light theme support
- ✅ Navigation and routing
- ✅ Trust score visualization
- ✅ Profile management interfaces

### Pending Development
- ⏳ Backend API integration
- ⏳ Real authentication system
- ⏳ AI verification agents implementation
- ⏳ Database integration
- ⏳ File upload and processing
- ⏳ Payment integration (for earnings)
- ⏳ Real-time notifications

## 🔮 Future Roadmap

### Phase 1: Backend Integration (Q1 2025)
- [ ] Set up authentication (OAuth, JWT)
- [ ] Database schema design (PostgreSQL/MongoDB)
- [ ] RESTful API development
- [ ] File storage solution (AWS S3/Cloudinary)

### Phase 2: AI Agents Implementation (Q2 2025)
- [ ] Document Verification Agent
  - OCR integration (Tesseract/Google Vision)
  - Watermark detection algorithms
  - Document authenticity checks
- [ ] Reputation Agent
  - NLP model for review analysis
  - Manipulation pattern detection
  - Sentiment analysis
- [ ] Media Forensics Agent
  - Deepfake detection models
  - Image manipulation detection
  - Metadata verification
- [ ] Trust Score Generator
  - Multi-factor scoring algorithm
  - Explainability features
  - Real-time score updates

### Phase 3: Advanced Features (Q3 2025)
- [ ] Mobile application (React Native/Flutter)
- [ ] Multi-language support (Hindi, English, regional languages)
- [ ] Government database integration (Aadhaar verification)
- [ ] Background verification services
- [ ] Reference check automation
- [ ] In-app messaging system
- [ ] Video interview capabilities

### Phase 4: Scaling & Partnerships (Q4 2025)
- [ ] Third-party API for integrations
- [ ] White-label solutions for placement agencies
- [ ] Partnership with government bodies
- [ ] Blockchain-based credential verification
- [ ] Advanced analytics and insights
- [ ] Community features and forums

## 🔒 Security & Privacy

- **Data Encryption**: All sensitive data encrypted at rest and in transit
- **Privacy First**: User data ownership and control
- **GDPR Compliance**: Data protection and user rights
- **Secure Authentication**: Industry-standard auth practices
- **Regular Audits**: Security assessments and penetration testing

## 📊 Key Metrics & Impact (Projected)

- **Trust Score Accuracy**: 95%+ verification accuracy
- **Time Saved**: 80% reduction in manual verification time
- **User Safety**: 90% reduction in fraudulent profiles
- **Fair Opportunities**: 70% increase in genuine worker hires
- **Ecosystem Growth**: Target 100K+ verified users in Year 1

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain component modularity
- Write meaningful commit messages
- Test responsive design on multiple devices
- Document complex logic

## � License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributors

- [**Saurabh Rajput**](https://github.com/saurabh-rajput-15) - Project Lead & Full Stack Development
- [**Himanshu Chaudhari**](https://github.com/himansh2232) - AI Integration & Backend
- [**Riddhi Gindodiya**](https://github.com/Riddhi-dotcom) - Frontend Development & UI/UX
- [**Bhumika Sonawane**](https://github.com/Bhumika006) - Testing & Documentation

## 🏆 Acknowledgments

- Built for the **Mumbai AI Hackathon 2025**
- Powered by **Next.js** and **Vercel**
- UI components by **Shadcn UI**
- Icons by **Lucide React**

## 📞 Contact & Support

- **Repository**: [github.com/saurabh-rajput-15/trustguardai](https://github.com/saurabh-rajput-15/trustguardai)
- **Issues**: [Report a bug](https://github.com/saurabh-rajput-15/trustguardai/issues)
- **Discussions**: [Join the conversation](https://github.com/saurabh-rajput-15/trustguardai/discussions)

## 🌐 Links

- [Live Demo](https://trustguardai.vercel.app) *(if deployed)*
- [Documentation](https://github.com/saurabh-rajput-15/trustguardai/wiki)
- [API Reference](https://github.com/saurabh-rajput-15/trustguardai/blob/main/docs/API.md)

---

<div align="center">

**Built with ❤️ for a safer, more trustworthy domestic help ecosystem**

© 2025 TrustGuardAI | Mumbai AI Hackathon

*Empowering truth through technology*

</div>