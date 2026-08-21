export const FREE_DAILY_POINTS = 100;
export const LOW_QUALITY_COST = 10;
export const HIGH_QUALITY_COST = 20;

export const subscriptionPlans = [
  {
    id: "free",
    name: "Free",
    cadence: "Forever",
    price: "$0",
    monthlyPrice: "$0",
    badge: "Start free",
    points: "100 points / day",
    description: "Explore the studio, test ideas, and build without a card.",
    features: [
      "100 free points every day",
      "Project names + image attachments",
      "Prompt history and code downloads",
      "Standard generation queue",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    cadence: "Monthly",
    price: "$9",
    monthlyPrice: "$9",
    badge: "New",
    points: "2,000 points / month",
    description: "A focused plan for creators who build regularly and want more room.",
    features: [
      "2,000 points every month",
      "Priority generation queue",
      "Advanced prompt presets",
      "Longer chat history",
    ],
  },
  {
    id: "pro-monthly",
    name: "Pro",
    cadence: "Monthly",
    price: "$19",
    monthlyPrice: "$19",
    badge: "Most popular",
    points: "5,000 points / month",
    description: "The best balance for makers shipping products every week.",
    features: [
      "5,000 points every month",
      "High-priority generation",
      "Premium model mix",
      "Advanced export options",
    ],
  },
  {
    id: "pro-yearly",
    name: "Pro",
    cadence: "Yearly",
    price: "$190",
    monthlyPrice: "$15.83",
    badge: "Save 17%",
    points: "60,000 points / year",
    description: "Everything in Pro with two months effectively included.",
    features: [
      "60,000 points every year",
      "All Pro monthly features",
      "Usage trend overview",
      "Priority support",
    ],
  },
  {
    id: "business",
    name: "Business",
    cadence: "Monthly",
    price: "$49",
    monthlyPrice: "$49",
    badge: "For teams",
    points: "15,000 points / month",
    description: "More capacity and control for agencies and product teams.",
    features: [
      "15,000 points every month",
      "Highest priority queue",
      "Premium models + asset workflow",
      "Team-ready developer tools",
    ],
  },
  {
    id: "business-yearly",
    name: "Business",
    cadence: "Yearly",
    price: "$490",
    monthlyPrice: "$40.83",
    badge: "Best value",
    points: "180,000 points / year",
    description: "Scale your team with predictable yearly pricing and savings.",
    features: [
      "180,000 points every year",
      "All Business monthly features",
      "Launch support",
      "Advanced code package management",
    ],
  },
] as const;

export const paymentMethods = [
  {
    id: "paypal",
    name: "PayPal",
    summary: "Fast checkout for international payments and subscriptions.",
  },
  {
    id: "visa",
    name: "Visa / Mastercard",
    summary: "Secure card checkout for monthly or yearly plans.",
  },
  {
    id: "redotpay",
    name: "RedotPay",
    summary: "Alternative digital-card checkout for supported users.",
  },
  {
    id: "code",
    name: "Access code",
    summary: "Redeem a prepaid subscription or balance code.",
  },
] as const;

export const platformHighlights = [
  {
    title: "Complete project parameters",
    description:
      "Users can add a project name and clearly see uploaded assets before generation.",
  },
  {
    title: "Free daily points",
    description:
      "The homepage tracks a daily free balance with automatic reset for guest usage.",
  },
  {
    title: "Subscriptions and payments",
    description:
      "Dedicated pricing and payment sections support Free, Starter, Pro, and Business plans.",
  },
  {
    title: "Developer access",
    description:
      "A dedicated developer area exposes advanced management and access-code workflows.",
  },
] as const;

export const developerAccounts = [
  {
    name: "Dev Alpha",
    email: "dev.alpha@warhex.dev",
    role: "Lead Developer",
    tempPassword: "Warhex!Alpha01",
    accessCode: "WH-ALPHA-001",
    canCreateCodes: true,
  },
  {
    name: "Dev Beta",
    email: "dev.beta@warhex.dev",
    role: "Platform Engineer",
    tempPassword: "Warhex!Beta02",
    accessCode: "WH-BETA-002",
    canCreateCodes: true,
  },
  {
    name: "Dev Gamma",
    email: "dev.gamma@warhex.dev",
    role: "Product Engineer",
    tempPassword: "Warhex!Gamma03",
    accessCode: "WH-GAMMA-003",
    canCreateCodes: true,
  },
  {
    name: "Dev Delta",
    email: "dev.delta@warhex.dev",
    role: "Growth Engineer",
    tempPassword: "Warhex!Delta04",
    accessCode: "WH-DELTA-004",
    canCreateCodes: true,
  },
  {
    name: "Dev Epsilon",
    email: "dev.epsilon@warhex.dev",
    role: "Payments Engineer",
    tempPassword: "Warhex!Epsilon05",
    accessCode: "WH-EPSILON-005",
    canCreateCodes: true,
  },
  {
    name: "Dev Zeta",
    email: "dev.zeta@warhex.dev",
    role: "Infrastructure Engineer",
    tempPassword: "Warhex!Zeta06",
    accessCode: "WH-ZETA-006",
    canCreateCodes: true,
  },
  {
    name: "Dev Eta",
    email: "dev.eta@warhex.dev",
    role: "AI Integration Engineer",
    tempPassword: "Warhex!Eta07",
    accessCode: "WH-ETA-007",
    canCreateCodes: true,
  },
  {
    name: "Dev Theta",
    email: "dev.theta@warhex.dev",
    role: "Code Marketplace Manager",
    tempPassword: "Warhex!Theta08",
    accessCode: "WH-THETA-008",
    canCreateCodes: true,
  },
  {
    name: "Dev Iota",
    email: "dev.iota@warhex.dev",
    role: "Security Engineer",
    tempPassword: "Warhex!Iota09",
    accessCode: "WH-IOTA-009",
    canCreateCodes: true,
  },
  {
    name: "Dev Kappa",
    email: "dev.kappa@warhex.dev",
    role: "Release Engineer",
    tempPassword: "Warhex!Kappa10",
    accessCode: "WH-KAPPA-010",
    canCreateCodes: true,
  },
] as const;

export const contactLinks = {
  whatsapp: "https://wa.me/213779109990",
  instagram: "https://www.instagram.com/wh.s.8",
  facebook: "https://www.facebook.com/profile.php?id=61570663858487",
  email: "mailto:Warhexwh@gmail.com",
  emailLabel: "Warhexwh@gmail.com",
} as const;
