import React, { useState, useEffect, useMemo, useRef } from 'react';

// ============================================================================
// SELF-CONTAINED SVG ICONS
// ============================================================================
const IconWrapper = ({ children, className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const ShoppingBag = ({ className }) => (
  <IconWrapper className={className}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </IconWrapper>
);

const Lock = ({ className }) => (
  <IconWrapper className={className}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </IconWrapper>
);

const Unlock = ({ className }) => (
  <IconWrapper className={className}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
  </IconWrapper>
);

const Plus = ({ className }) => (
  <IconWrapper className={className}>
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </IconWrapper>
);

const Minus = ({ className }) => (
  <IconWrapper className={className}>
    <path d="M5 12h14" />
  </IconWrapper>
);

const Trash2 = ({ className }) => (
  <IconWrapper className={className}>
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" x2="10" y1="11" y2="17" />
    <line x1="14" x2="14" y1="11" y2="17" />
  </IconWrapper>
);

const Download = ({ className }) => (
  <IconWrapper className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </IconWrapper>
);

const Volume2 = ({ className }) => (
  <IconWrapper className={className}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </IconWrapper>
);

const VolumeX = ({ className }) => (
  <IconWrapper className={className}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="22" x2="16" y1="9" y2="15" />
    <line x1="16" x2="22" y1="9" y2="15" />
  </IconWrapper>
);

const Tag = ({ className }) => (
  <IconWrapper className={className}>
    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
  </IconWrapper>
);

const Receipt = ({ className }) => (
  <IconWrapper className={className}>
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
    <path d="M12 17.5v-11" />
  </IconWrapper>
);

const UserCheck = ({ className }) => (
  <IconWrapper className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </IconWrapper>
);

const Undo2 = ({ className }) => (
  <IconWrapper className={className}>
    <path d="M9 14 4 9l5-5" />
    <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
  </IconWrapper>
);

const Check = ({ className }) => (
  <IconWrapper className={className}>
    <path d="M20 6 9 17l-5-5" />
  </IconWrapper>
);

const Sparkles = ({ className }) => (
  <IconWrapper className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </IconWrapper>
);

const Cloud = ({ className }) => (
  <IconWrapper className={className}>
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </IconWrapper>
);

const RefreshCw = ({ className }) => (
  <IconWrapper className={className}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </IconWrapper>
);

const AlertTriangle = ({ className }) => (
  <IconWrapper className={className}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </IconWrapper>
);

// ============================================================================
// CONSTANTS & INITIAL DATA FOR ULDUZ PVT LTD / THE LEMONADE BROS
// Event: Dhiraagu Maldives Road Race 2026 (20 Nov 2026 @ Hulhumalé Central Park)
// ============================================================================

const DEFAULT_PIN = "1234";
const TARGET_CUPS = 2000;
const EXPENSE_CAP = 5000;

// Shared Cloud Key for Ulduz / The Lemonade Bros so all devices sync
const CLOUD_SYNC_ENDPOINT = "https://kvdb.io/A6Xy9kLp2mQv8zR4wN1tB7/ulduz_lemonade_bros_2026_v1";

// 3 Signature Drinks: Base 60/60/70 -> Discounted 50/50/60 (-10 MVR per cup)
const PRODUCTS = [
  {
    id: 'limeade',
    name: 'Classic Limeade',
    emoji: '🍈',
    basePrice: 60,
    discountedPrice: 50,
    accent: 'from-emerald-400 to-lime-500',
    border: 'border-emerald-500/50',
    desc: 'Fresh Dhivehi lime juice, light cane syrup & ice'
  },
  {
    id: 'lemonade',
    name: 'Classic Lemonade',
    emoji: '🍋',
    basePrice: 60,
    discountedPrice: 50,
    accent: 'from-amber-300 to-yellow-500',
    border: 'border-yellow-400/50',
    desc: 'Zesty lemon blend, perfectly balanced sweetness'
  },
  {
    id: 'strawberry',
    name: 'Strawberry Lemonade',
    emoji: '🍓',
    basePrice: 70,
    discountedPrice: 60,
    accent: 'from-rose-400 to-pink-600',
    border: 'border-rose-400/50',
    desc: 'Real strawberry infusion with zesty citrus punch'
  }
];

// All 17 Team Members (including Choice & Aju)
const INITIAL_TEAM = [
  { id: 'tm-1', name: 'Soofi', category: 'Men', role: 'Owner & Lead', shirtSize: 'L', shirtStatus: 'Ready', phone: '', notes: 'Owner - Ulduz Pvt Ltd & The Lemonade Bros' },
  { id: 'tm-choice', name: 'Choice', category: 'Men', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-aju', name: 'Aju', category: 'Men', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-2', name: 'Nikku', category: 'Men', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-3', name: 'Muhanti', category: 'Men', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-4', name: 'Nabaa', category: 'Women', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-5', name: 'Chehche', category: 'Women', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-6', name: 'Tara', category: 'Women', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-7', name: 'Chubby', category: 'Men', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-8', name: 'Aril', category: 'Men', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-9', name: 'Ufu', category: 'Men', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-10', name: 'Noddy', category: 'Men', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-11', name: 'Xee', category: 'Men', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-12', name: 'Rushdan', category: 'Men', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-13', name: 'Kiah', category: 'Women', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-14', name: 'Amna', category: 'Women', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-15', name: 'Faya', category: 'Men', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
];

// Pre-Prepared Expense Sheet (Capped under MVR 5,000)
const INITIAL_EXPENSES = [
  { id: 'exp-1', title: 'T-Shirt Printing (17 Crew Shirts)', category: 'Branding & Apparel', vendor: '', qty: '17 pcs', amount: 0, status: 'Pending', notes: 'Sizes via roster' },
  { id: 'exp-2', title: 'Stall Banners & Signage', category: 'Branding & Stall', vendor: '', qty: '1 set', amount: 0, status: 'Pending', notes: 'Dhiraagu booth setup' },
  { id: 'exp-3', title: '2,000+ Cups, Lids & Jumbo Straws', category: 'Packaging', vendor: '', qty: '2,200 sets', amount: 0, status: 'Pending', notes: 'Target 2000+ cups' },
  { id: 'exp-4', title: 'Fresh Lemons (Wholesale)', category: 'Ingredients', vendor: '', qty: 'Bulk crate', amount: 0, status: 'Pending', notes: 'Classic Lemonade base' },
  { id: 'exp-5', title: 'Fresh Limes (Wholesale)', category: 'Ingredients', vendor: '', qty: 'Bulk crate', amount: 0, status: 'Pending', notes: 'Classic Limeade base' },
  { id: 'exp-6', title: 'Strawberry Puree & Pure Fruit Syrup', category: 'Ingredients', vendor: '', qty: 'Bulk tubs', amount: 0, status: 'Pending', notes: 'Strawberry Lemonade' },
  { id: 'exp-7', title: 'Sugar / Simple Syrup Ingredients', category: 'Ingredients', vendor: '', qty: 'Bulk sacks', amount: 0, status: 'Pending', notes: 'Sweetener' },
  { id: 'exp-8', title: 'Ice Delivery & Drinking Water', category: 'Consumables', vendor: '', qty: 'Multiple sacks/cans', amount: 0, status: 'Pending', notes: 'Race day cold storage' },
  { id: 'exp-9', title: 'Transport to Central Park, Hulhumalé', category: 'Logistics', vendor: '', qty: 'Vehicle trips', amount: 0, status: 'Pending', notes: 'Stall gear & inventory' }
];

const ADULT_SIZES = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];
const KIDS_SIZES = ['Kids 4', 'Kids 6', 'Kids 8', 'Kids 10', 'Kids 12', 'Kids 14'];

export default function App() {
  const [activeMode, setActiveMode] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get('portal') === 'admin' ? 'admin' : 'till';
    } catch {
      return 'till';
    }
  });

  // Backend Sub-tabs: 'overview' | 'expenses' | 'team' | 'sales'
  const [adminSubTab, setAdminSubTab] = useState('overview');

  // Security PIN states
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [pinError, setPinError] = useState(false);

  // Cloud Sync Status
  const [syncStatus, setSyncStatus] = useState('synced'); // 'syncing' | 'synced' | 'offline'
  const lastUpdatedRef = useRef(0);
  const isDirtyRef = useRef(false);

  // Custom Delete / Void Confirmation Modal State
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    isOpen: false,
    order: null,
    isUndoLast: false
  });

  // Cashier Till active selections
  const [activeCashier, setActiveCashier] = useState('Soofi');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);

  // Current In-Progress Cart
  const [cart, setCart] = useState({
    limeade: 0,
    lemonade: 0,
    strawberry: 0
  });

  // Sales Transactions History
  const [sales, setSales] = useState(() => {
    try {
      const saved = localStorage.getItem('tlb_sales_v3');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Team Roster State
  const [team, setTeam] = useState(() => {
    try {
      const saved = localStorage.getItem('tlb_team_v3');
      if (saved) return JSON.parse(saved);
      return INITIAL_TEAM;
    } catch {
      return INITIAL_TEAM;
    }
  });

  // Expenses Sheet State
  const [expenses, setExpenses] = useState(() => {
    try {
      const saved = localStorage.getItem('tlb_expenses_v3');
      return saved ? JSON.parse(saved) : INITIAL_EXPENSES;
    } catch {
      return INITIAL_EXPENSES;
    }
  });

  // ==========================================================================
  // MULTI-DEVICE CLOUD SYNC (Fixes data resetting or not showing across links)
  // ==========================================================================
  const pushToCloud = async (nextSales, nextTeam, nextExpenses) => {
    const now = Date.now();
    lastUpdatedRef.current = now;
    isDirtyRef.current = false;

    const payload = {
      updatedAt: now,
      sales: nextSales,
      team: nextTeam,
      expenses: nextExpenses
    };

    // Save locally immediately so refresh is instant
    try {
      localStorage.setItem('tlb_sales_v3', JSON.stringify(nextSales));
      localStorage.setItem('tlb_team_v3', JSON.stringify(nextTeam));
      localStorage.setItem('tlb_expenses_v3', JSON.stringify(nextExpenses));
      localStorage.setItem('tlb_updated_at_v3', String(now));
    } catch (e) {
      console.error(e);
    }

    // Push to shared Cloud Store so all devices & Vercel URLs see it live
    setSyncStatus('syncing');
    try {
      const res = await fetch(CLOUD_SYNC_ENDPOINT, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setSyncStatus('synced');
      } else {
        setSyncStatus('offline');
      }
    } catch {
      setSyncStatus('offline');
    }
  };

  const pullFromCloud = async (showNotification = false) => {
    // Don't overwrite if user is actively typing unsaved changes in backend
    if (isDirtyRef.current) return;
    try {
      const res = await fetch(CLOUD_SYNC_ENDPOINT, { method: 'GET', cache: 'no-store' });
      if (!res.ok) return;
      const cloudData = await res.json();
      if (cloudData && cloudData.updatedAt) {
        const localUpdated = Number(localStorage.getItem('tlb_updated_at_v3') || 0);
        if (cloudData.updatedAt > localUpdated) {
          lastUpdatedRef.current = cloudData.updatedAt;
          if (Array.isArray(cloudData.sales)) {
            setSales(cloudData.sales);
            localStorage.setItem('tlb_sales_v3', JSON.stringify(cloudData.sales));
          }
          if (Array.isArray(cloudData.team)) {
            setTeam(cloudData.team);
            localStorage.setItem('tlb_team_v3', JSON.stringify(cloudData.team));
          }
          if (Array.isArray(cloudData.expenses)) {
            setExpenses(cloudData.expenses);
            localStorage.setItem('tlb_expenses_v3', JSON.stringify(cloudData.expenses));
          }
          localStorage.setItem('tlb_updated_at_v3', String(cloudData.updatedAt));
        }
        setSyncStatus('synced');
        if (showNotification) notify("Synced latest data from cloud!");
      }
    } catch {
      // If cloud hasn't been initialized yet, initialize it with local state
    }
  };

  // Initial pull + 5-second live polling across devices
  useEffect(() => {
    pullFromCloud(false);
    const interval = setInterval(() => {
      pullFromCloud(false);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Audio Click Feedback
  const playSound = (freq = 600, duration = 0.05) => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch {
      // Ignore audio errors
    }
  };

  const notify = (msg) => {
    setToastMessage(String(msg));
    setTimeout(() => setToastMessage(null), 2400);
  };

  // Cart Quantities & Totals Calculation
  const cartSummary = useMemo(() => {
    let totalCups = 0;
    let totalAmount = 0;
    const items = [];

    PRODUCTS.forEach((prod) => {
      const qty = cart[prod.id] || 0;
      if (qty > 0) {
        const unitPrice = discountApplied ? prod.discountedPrice : prod.basePrice;
        const lineTotal = qty * unitPrice;
        totalCups += qty;
        totalAmount += lineTotal;
        items.push({
          id: prod.id,
          name: prod.name,
          emoji: prod.emoji,
          qty,
          unitPrice,
          basePrice: prod.basePrice,
          lineTotal
        });
      }
    });

    return { totalCups, totalAmount, items };
  }, [cart, discountApplied]);

  // Comprehensive Backend Metrics
  const metrics = useMemo(() => {
    let grossRevenue = 0;
    let totalCupsSold = 0;
    let cashRevenue = 0;
    let transferRevenue = 0;
    const flavorCounts = { limeade: 0, lemonade: 0, strawberry: 0 };
    const cashierTally = {};

    sales.forEach((s) => {
      grossRevenue += Number(s.grossTotal) || 0;
      totalCupsSold += Number(s.cupsTotal) || 0;
      if (s.paymentMethod === 'Cash') cashRevenue += Number(s.grossTotal) || 0;
      else transferRevenue += Number(s.grossTotal) || 0;

      if (Array.isArray(s.items)) {
        s.items.forEach((it) => {
          if (flavorCounts[it.id] !== undefined) {
            flavorCounts[it.id] += Number(it.qty) || 0;
          }
        });
      }

      if (s.cashier) {
        cashierTally[s.cashier] = (cashierTally[s.cashier] || 0) + (Number(s.cupsTotal) || 0);
      }
    });

    const totalExpenses = expenses.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
    const netProfit = grossRevenue - totalExpenses;
    const profitMargin = grossRevenue > 0 ? ((netProfit / grossRevenue) * 100).toFixed(1) : '0.0';
    const progressPct = Math.min(100, ((totalCupsSold / TARGET_CUPS) * 100)).toFixed(1);

    return {
      grossRevenue,
      totalCupsSold,
      cashRevenue,
      transferRevenue,
      totalExpenses,
      netProfit,
      profitMargin,
      progressPct,
      flavorCounts,
      cashierTally
    };
  }, [sales, expenses]);

  // Cart Increment/Decrement
  const updateCartCup = (productId, delta) => {
    setCart((prev) => {
      const nextVal = Math.max(0, (prev[productId] || 0) + delta);
      return { ...prev, [productId]: nextVal };
    });
    playSound(delta > 0 ? 640 : 420, 0.05);
  };

  const clearCart = () => {
    setCart({ limeade: 0, lemonade: 0, strawberry: 0 });
    playSound(350, 0.08);
  };

  // Complete Order & Sync to Cloud immediately
  const handleCheckout = (paymentMethod) => {
    if (cartSummary.totalCups === 0) {
      notify("Tap + on a drink first!");
      return;
    }

    const newSale = {
      id: 'tx-' + Date.now(),
      orderNumber: sales.length + 1,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      isoDate: new Date().toISOString(),
      cashier: activeCashier,
      paymentMethod,
      discountApplied,
      cupsTotal: cartSummary.totalCups,
      grossTotal: cartSummary.totalAmount,
      items: cartSummary.items
    };

    const nextSales = [newSale, ...sales];
    setSales(nextSales);
    clearCart();
    playSound(880, 0.12);
    notify(`Order #${newSale.orderNumber} • MVR ${newSale.grossTotal} (${paymentMethod})`);
    pushToCloud(nextSales, team, expenses);
  };

  // Open confirmation modal for Undoing Last Sale
  const handlePromptUndoLast = () => {
    if (sales.length === 0) return;
    setDeleteConfirmation({
      isOpen: true,
      order: sales[0],
      isUndoLast: true
    });
  };

  // Open confirmation modal for Deleting specific sale in Backend
  const handlePromptDeleteOrder = (order) => {
    setDeleteConfirmation({
      isOpen: true,
      order,
      isUndoLast: false
    });
  };

  // Execute confirmed order deletion & sync to cloud
  const executeDeleteOrder = () => {
    if (!deleteConfirmation.order) return;
    const targetOrder = deleteConfirmation.order;
    const nextSales = sales.filter(s => s.id !== targetOrder.id);
    setSales(nextSales);
    notify(`Voided Order #${targetOrder.orderNumber}`);
    playSound(320, 0.1);
    setDeleteConfirmation({ isOpen: false, order: null, isUndoLast: false });
    pushToCloud(nextSales, team, expenses);
  };

  // Auto-Unlock on 4-digit PIN Entry
  const handlePinInput = (value) => {
    const sanitized = value.replace(/\D/g, '').slice(0, 4);
    setEnteredPin(sanitized);
    setPinError(false);

    if (sanitized.length === 4) {
      if (sanitized === DEFAULT_PIN) {
        setIsAdminUnlocked(true);
        setShowPinModal(false);
        setActiveMode('admin');
        setEnteredPin('');
        setPinError(false);
        playSound(780, 0.1);
        notify("Backend Unlocked!");
      } else {
        setPinError(true);
        playSound(250, 0.15);
        setTimeout(() => setEnteredPin(''), 600);
      }
    }
  };

  // Export Sales to CSV
  const exportSalesCSV = () => {
    if (sales.length === 0) {
      notify("No sales recorded yet.");
      return;
    }
    const headers = ["Order #", "Time", "Cashier", "Payment Method", "Discount Applied", "Total Cups", "Gross Amount MVR", "Breakdown"];
    const rows = sales.map(s => [
      s.orderNumber,
      `"${s.timestamp}"`,
      `"${s.cashier}"`,
      s.paymentMethod,
      s.discountApplied ? "YES (-10/cup)" : "NO",
      s.cupsTotal,
      s.grossTotal,
      `"${(s.items || []).map(i => `${i.qty}x ${i.name}`).join('; ')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `TheLemonadeBros_Sales_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    notify("Sales exported to CSV!");
  };

  // T-Shirt Size summary calculator categorized by Men, Women & Kids
  const shirtSummary = useMemo(() => {
    const overall = {};
    const byCategory = { Men: {}, Women: {}, Kids: {} };
    team.forEach(m => {
      const sz = String(m.shirtSize || 'Pending');
      const cat = String(m.category || 'Men');
      overall[sz] = (overall[sz] || 0) + 1;
      if (!byCategory[cat]) byCategory[cat] = {};
      byCategory[cat][sz] = (byCategory[cat][sz] || 0) + 1;
    });
    return { overall, byCategory };
  }, [team]);

  const menTally = Object.entries(shirtSummary.byCategory.Men || {});
  const womenTally = Object.entries(shirtSummary.byCategory.Women || {});
  const kidsTally = Object.entries(shirtSummary.byCategory.Kids || {});

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-yellow-400 selection:text-slate-950 pb-28 md:pb-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 bg-yellow-400 text-slate-950 px-3.5 py-2 rounded-2xl font-black text-xs sm:text-sm shadow-2xl flex items-center gap-2 whitespace-nowrap">
          <Sparkles className="w-4 h-4 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ======================================================================
          MOBILE-OPTIMIZED HEADER (Fits 100% on iPhone without cutoff)
         ====================================================================== */}
      <header className="border-b border-slate-800/90 bg-slate-900/95 backdrop-blur-md sticky top-0 z-40 px-2.5 sm:px-5 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-yellow-400 to-amber-500 flex items-center justify-center text-slate-950 font-black text-base sm:text-xl shadow-md shrink-0">
              🍋
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h1 className="font-black text-sm sm:text-lg tracking-tight text-white truncate">
                  The Lemonade Bros
                </h1>
                {/* Live Cloud Status Pill */}
                <button
                  onClick={() => pullFromCloud(true)}
                  className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold flex items-center gap-1 border shrink-0 ${
                    syncStatus === 'synced'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : syncStatus === 'syncing'
                      ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                  title="Tap to force sync across devices"
                >
                  <Cloud className="w-2.5 h-2.5" />
                  <span className="hidden xs:inline">{syncStatus === 'syncing' ? 'Syncing' : 'Live'}</span>
                </button>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium truncate">
                Dhiraagu Road Race 2026 • Hulhumalé
              </p>
            </div>
          </div>

          {/* Right Controls: Compact on Mobile so nothing clips off-screen */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Sound Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              title="Toggle Sound"
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-yellow-400" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Till Mode Switch */}
            <button
              onClick={() => setActiveMode('till')}
              className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-extrabold flex items-center gap-1 transition-all touch-manipulation ${
                activeMode === 'till'
                  ? 'bg-yellow-400 text-slate-950 shadow-md shadow-yellow-400/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700/80'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
              <span>Till</span>
            </button>

            {/* Backend Mode Switch */}
            <button
              onClick={() => {
                if (isAdminUnlocked) {
                  setActiveMode('admin');
                } else {
                  setShowPinModal(true);
                }
              }}
              className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-extrabold flex items-center gap-1 transition-all touch-manipulation ${
                activeMode === 'admin'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700/80'
              }`}
            >
              {isAdminUnlocked ? <Unlock className="w-3.5 h-3.5 shrink-0" /> : <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
              <span>Admin</span>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================
          MODE 1: SALES TILL (SLEEK MOBILE & IPAD ADAPTIVE VIEW)
         ======================================================================== */}
      {activeMode === 'till' ? (
        <main className="flex-1 max-w-7xl w-full mx-auto px-2.5 sm:px-4 md:px-6 pt-2.5 sm:pt-4 flex flex-col gap-2.5 sm:gap-4">
          {/* Single-Row Top Status Bar on Mobile: On Till Dropdown + Total Sales Counter */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-2 sm:p-3 flex items-center justify-between gap-2">
            {/* Cashier Dropdown */}
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0 flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5 text-yellow-400 hidden xs:inline" />
                Till:
              </span>
              <div className="relative">
                <select
                  value={activeCashier}
                  onChange={(e) => {
                    setActiveCashier(e.target.value);
                    playSound(520, 0.04);
                  }}
                  className="bg-slate-950 text-yellow-300 font-extrabold text-xs sm:text-sm border border-slate-700 rounded-xl pl-2.5 pr-6 py-1 sm:py-1.5 focus:outline-none focus:border-yellow-400 cursor-pointer appearance-none"
                >
                  {team.map((member) => (
                    <option key={member.id} value={member.name} className="bg-slate-900 text-white">
                      {member.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 text-yellow-400">
                  <svg className="fill-current h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Live Total Sales Counter + Undo */}
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500/15 to-yellow-500/10 px-2.5 py-1 sm:py-1.5 rounded-xl border border-yellow-400/30">
                <span className="text-[10px] font-bold uppercase text-slate-300 hidden sm:inline">
                  Total Sales:
                </span>
                <span className="text-xs sm:text-sm font-black text-yellow-400 font-mono">
                  MVR {metrics.grossRevenue.toLocaleString()}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  ({metrics.totalCupsSold}c)
                </span>
              </div>

              {sales.length > 0 && (
                <button
                  onClick={handlePromptUndoLast}
                  className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 text-xs font-bold flex items-center gap-1 touch-manipulation"
                  title="Undo Last Order"
                >
                  <Undo2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Undo</span>
                </button>
              )}
            </div>
          </div>

          {/* Main Till Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-2.5 sm:gap-4">
            {/* Left Column: Discount Bar + 3 Drink Cards */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-2.5 sm:gap-3.5">
              {/* Compact Discount Bar */}
              <div className={`px-3 py-2 sm:p-3 rounded-2xl border flex items-center justify-between gap-2 transition-all ${
                discountApplied
                  ? 'bg-rose-500/15 border-rose-500/50 text-rose-200'
                  : 'bg-slate-900/70 border-slate-800 text-slate-300'
              }`}>
                <div className="flex items-center gap-2 min-w-0">
                  <Tag className={`w-3.5 h-3.5 shrink-0 ${discountApplied ? 'text-rose-400' : 'text-yellow-400'}`} />
                  <span className="text-[11px] sm:text-sm font-bold truncate">
                    {discountApplied
                      ? 'DISCOUNT ON: MVR 50 & MVR 60 (-10/cup)'
                      : 'Standard: Classic 60 • Strawberry 70'}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setDiscountApplied(!discountApplied);
                    playSound(480, 0.06);
                  }}
                  className={`px-2.5 py-1 rounded-xl text-[11px] sm:text-xs font-black shrink-0 touch-manipulation transition-all ${
                    discountApplied
                      ? 'bg-rose-500 text-white shadow-md'
                      : 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  {discountApplied ? '-10 ON' : 'Apply -10'}
                </button>
              </div>

              {/* 3 Drink Cards: Ergonomic Horizontal Layout on Mobile, 3-Column Cards on iPad/Desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
                {PRODUCTS.map((prod) => {
                  const qty = cart[prod.id] || 0;
                  const activeUnitPrice = discountApplied ? prod.discountedPrice : prod.basePrice;

                  return (
                    <div
                      key={prod.id}
                      className={`relative rounded-2xl sm:rounded-3xl p-3 sm:p-4 border transition-all shadow-lg flex flex-col justify-between ${
                        qty > 0
                          ? `${prod.border} bg-slate-900 ring-2 ring-yellow-400/30`
                          : 'border-slate-800 bg-slate-900/60'
                      }`}
                    >
                      {/* Top Info Row */}
                      <div className="flex items-center sm:items-start justify-between gap-2.5">
                        <div className="flex items-center sm:block gap-2.5 min-w-0">
                          <span className="text-2xl sm:text-4xl p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-slate-950 border border-slate-800 shadow-inner shrink-0 inline-block">
                            {prod.emoji}
                          </span>
                          <div className="min-w-0 sm:mt-2.5">
                            <h3 className="text-sm sm:text-lg font-black text-white leading-tight truncate">
                              {prod.name}
                            </h3>
                            <p className="text-[11px] text-slate-400 line-clamp-1 sm:line-clamp-2 mt-0.5">
                              {prod.desc}
                            </p>
                          </div>
                        </div>

                        {/* Price Badge */}
                        <div className="text-right shrink-0">
                          {discountApplied && (
                            <span className="block text-[10px] text-rose-400 line-through font-mono">
                              MVR {prod.basePrice}
                            </span>
                          )}
                          <span className={`inline-block px-2.5 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-black font-mono border ${
                            discountApplied
                              ? 'bg-rose-500 text-white border-rose-400'
                              : 'bg-slate-950 text-yellow-300 border-slate-800'
                          }`}>
                            MVR {activeUnitPrice}
                          </span>
                        </div>
                      </div>

                      {/* Controls Row: Compact & Fast on Phone, Tall on Tablet */}
                      <div className="mt-2.5 sm:mt-4 flex sm:flex-col items-center gap-2">
                        {/* Giant '+' Tap Button */}
                        <button
                          onClick={() => updateCartCup(prod.id, 1)}
                          className={`flex-1 sm:w-full py-2.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${prod.accent} text-slate-950 font-black text-2xl sm:text-3xl shadow-md active:scale-95 touch-manipulation transition-transform flex items-center justify-center`}
                          aria-label={`Add 1 ${prod.name}`}
                        >
                          <Plus className="w-6 h-6 sm:w-8 sm:h-8" />
                        </button>

                        {/* Secondary Controls (+2, -, Qty badge) */}
                        <div className="flex items-center justify-between sm:w-full gap-1.5 shrink-0">
                          <button
                            onClick={() => updateCartCup(prod.id, 2)}
                            className="px-2.5 py-2 sm:py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-extrabold active:scale-95 touch-manipulation"
                          >
                            +2
                          </button>

                          {qty > 0 && (
                            <button
                              onClick={() => updateCartCup(prod.id, -1)}
                              className="p-2 sm:p-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 active:scale-95 touch-manipulation"
                              title="Remove 1 cup"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                          )}

                          <div className="flex items-center gap-1 pl-1">
                            <span className="text-[10px] text-slate-400 font-semibold hidden sm:inline">Qty:</span>
                            <span className={`min-w-[30px] text-center px-2 py-1 sm:py-0.5 rounded-lg font-black text-sm font-mono ${
                              qty > 0 ? 'bg-yellow-400 text-slate-950' : 'bg-slate-950 text-slate-500 border border-slate-800'
                            }`}>
                              {qty}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Recent Orders Feed */}
              <div className="bg-slate-900/50 rounded-2xl p-2.5 sm:p-3 border border-slate-800/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Receipt className="w-3.5 h-3.5 text-yellow-400" />
                    Recent Stall Orders
                  </span>
                  <span className="text-[10px] text-slate-500">Live Sync Active</span>
                </div>
                {sales.length === 0 ? (
                  <p className="text-xs text-slate-500 italic py-1">No sales logged yet. Ready for race day!</p>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {sales.slice(0, 4).map((s) => (
                      <div key={s.id} className="bg-slate-950 border border-slate-800 p-2 rounded-xl flex flex-col justify-between">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="font-mono font-bold text-slate-400 truncate">#{s.orderNumber} • {s.cashier}</span>
                          <span className="px-1 py-0.5 rounded bg-slate-900 text-slate-300 font-semibold shrink-0">
                            {s.paymentMethod === 'Cash' ? '💵' : '🏦'}
                          </span>
                        </div>
                        <div className="mt-1 flex items-baseline justify-between">
                          <span className="text-[11px] font-semibold text-slate-300">
                            {s.cupsTotal} cup{s.cupsTotal > 1 ? 's' : ''}
                          </span>
                          <span className="text-xs sm:text-sm font-black text-yellow-400 font-mono">MVR {s.grossTotal}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column (iPad / Desktop): Full Order & Tender Drawer */}
            <div className="hidden md:flex md:col-span-5 lg:col-span-4 flex-col">
              <div className="bg-slate-900 rounded-3xl p-5 border border-slate-800 shadow-2xl flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-yellow-400" />
                      <h2 className="font-black text-lg text-white">Current Order</h2>
                    </div>
                    {cartSummary.totalCups > 0 && (
                      <button
                        onClick={clearCart}
                        className="text-xs font-bold text-rose-400 hover:text-rose-300 px-2 py-1 rounded-lg bg-rose-500/10"
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  <div className="mt-3.5 space-y-2.5 max-h-56 overflow-y-auto pr-1">
                    {cartSummary.totalCups === 0 ? (
                      <div className="text-center py-8 text-slate-500">
                        <div className="text-3xl mb-1">🥤</div>
                        <p className="text-sm font-semibold">No cups selected yet</p>
                        <p className="text-xs text-slate-600">Tap + on any drink card</p>
                      </div>
                    ) : (
                      cartSummary.items.map((item) => (
                        <div key={item.id} className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800/80 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className="text-xl">{item.emoji}</span>
                            <div>
                              <p className="font-bold text-sm text-white">{item.name}</p>
                              <p className="text-[11px] text-slate-400 font-mono">
                                {item.qty} × MVR {item.unitPrice}
                              </p>
                            </div>
                          </div>
                          <span className="font-mono font-black text-sm text-yellow-400">
                            MVR {item.lineTotal}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 space-y-3">
                  <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block font-bold">TOTAL PAYABLE</span>
                      <span className="text-xs text-yellow-400 font-semibold font-mono">
                        {cartSummary.totalCups} Cup{cartSummary.totalCups !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <span className="text-3xl font-black font-mono text-yellow-400">
                      MVR {cartSummary.totalAmount}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => handleCheckout('Cash')}
                      disabled={cartSummary.totalCups === 0}
                      className="py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 text-slate-950 font-black text-base shadow-lg active:scale-95 transition-all flex flex-col items-center justify-center"
                    >
                      <span className="text-lg">💵</span>
                      <span>COLLECT CASH</span>
                    </button>

                    <button
                      onClick={() => handleCheckout('Transfer')}
                      disabled={cartSummary.totalCups === 0}
                      className="py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 disabled:opacity-30 text-white font-black text-base shadow-lg active:scale-95 transition-all flex flex-col items-center justify-center"
                    >
                      <span className="text-lg">🏦</span>
                      <span>BANK TRANSFER</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================================
              STICKY MOBILE BOTTOM CHECKOUT BAR (Always reachable with thumb!)
             ==================================================================== */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 px-3 py-2.5 shadow-2xl">
            <div className="flex items-center justify-between gap-2 max-w-lg mx-auto">
              {/* Order Summary & Clear */}
              <div className="min-w-[95px]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold uppercase text-slate-400">
                    {cartSummary.totalCups} Cup{cartSummary.totalCups !== 1 ? 's' : ''}
                  </span>
                  {cartSummary.totalCups > 0 && (
                    <button
                      onClick={clearCart}
                      className="text-[10px] font-bold text-rose-400 underline"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="text-lg font-black font-mono text-yellow-400 leading-tight">
                  MVR {cartSummary.totalAmount}
                </div>
              </div>

              {/* 1-Tap Cash & Transfer Buttons */}
              <div className="flex-1 grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleCheckout('Cash')}
                  disabled={cartSummary.totalCups === 0}
                  className="py-3 rounded-xl bg-emerald-500 active:bg-emerald-400 disabled:opacity-30 text-slate-950 font-black text-xs shadow-md active:scale-95 touch-manipulation flex items-center justify-center gap-1.5"
                >
                  <span>💵</span>
                  <span>CASH</span>
                </button>

                <button
                  onClick={() => handleCheckout('Transfer')}
                  disabled={cartSummary.totalCups === 0}
                  className="py-3 rounded-xl bg-blue-500 active:bg-blue-400 disabled:opacity-30 text-white font-black text-xs shadow-md active:scale-95 touch-manipulation flex items-center justify-center gap-1.5"
                >
                  <span>🏦</span>
                  <span>TRANSFER</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      ) : (
        /* ========================================================================
            MODE 2: ADMIN BACKEND (PASSWORD 1234, CLOUD SYNCED)
           ======================================================================== */
        <main className="flex-1 max-w-7xl w-full mx-auto p-2.5 sm:p-5 md:p-6 flex flex-col gap-4 sm:gap-5">
          {/* Sub Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900 p-2 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setAdminSubTab('overview')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  adminSubTab === 'overview' ? 'bg-yellow-400 text-slate-950' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setAdminSubTab('expenses')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  adminSubTab === 'expenses' ? 'bg-yellow-400 text-slate-950' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                Expenses (Max 5K)
              </button>
              <button
                onClick={() => setAdminSubTab('team')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  adminSubTab === 'team' ? 'bg-yellow-400 text-slate-950' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                Team & Shirts ({team.length})
              </button>
              <button
                onClick={() => setAdminSubTab('sales')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  adminSubTab === 'sales' ? 'bg-yellow-400 text-slate-950' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                Sales Log
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => pullFromCloud(true)}
                className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1 border border-slate-700"
                title="Refresh from Cloud"
              >
                <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">Sync</span>
              </button>
              <button
                onClick={exportSalesCSV}
                className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1 border border-slate-700"
              >
                <Download className="w-3.5 h-3.5 text-yellow-400" />
                <span className="hidden sm:inline">CSV</span>
              </button>
              <button
                onClick={() => {
                  setIsAdminUnlocked(false);
                  setActiveMode('till');
                }}
                className="px-2.5 py-1.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 text-xs font-bold border border-rose-500/30"
              >
                Lock
              </button>
            </div>
          </div>

          {/* TAB 1: FINANCIAL OVERVIEW */}
          {adminSubTab === 'overview' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
                <div className="bg-slate-900 border border-slate-800 p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl">
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase block">Gross Revenue</span>
                  <p className="mt-1 text-xl sm:text-3xl font-black font-mono text-emerald-400">
                    MVR {metrics.grossRevenue.toLocaleString()}
                  </p>
                  <p className="mt-1 text-[10px] sm:text-[11px] text-slate-500">
                    Cash: {metrics.cashRevenue} • Bank: {metrics.transferRevenue}
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl">
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase block">Logged Expenses</span>
                  <p className="mt-1 text-xl sm:text-3xl font-black font-mono text-rose-400">
                    MVR {metrics.totalExpenses.toLocaleString()}
                  </p>
                  <p className="mt-1 text-[10px] sm:text-[11px] text-slate-500">
                    Cap: MVR {EXPENSE_CAP.toLocaleString()}
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl">
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase block">Net Profit</span>
                  <p className={`mt-1 text-xl sm:text-3xl font-black font-mono ${metrics.netProfit >= 0 ? 'text-yellow-400' : 'text-rose-400'}`}>
                    MVR {metrics.netProfit.toLocaleString()}
                  </p>
                  <p className="mt-1 text-[10px] sm:text-[11px] text-slate-500">
                    Margin: {metrics.profitMargin}%
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl">
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase block">2,000 Cup Goal</span>
                  <p className="mt-1 text-xl sm:text-3xl font-black font-mono text-white">
                    {metrics.totalCupsSold} <span className="text-xs font-normal text-slate-400">/ 2,000</span>
                  </p>
                  <div className="mt-2 w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-yellow-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, Number(metrics.progressPct))}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Flavor Breakdown & Cashier Tally */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl">
                  <h3 className="font-bold text-sm text-white mb-3">Cups Sold By Flavor</h3>
                  <div className="space-y-3">
                    {PRODUCTS.map(p => {
                      const count = metrics.flavorCounts[p.id] || 0;
                      const pct = metrics.totalCupsSold > 0 ? ((count / metrics.totalCupsSold) * 100).toFixed(0) : 0;
                      return (
                        <div key={p.id}>
                          <div className="flex justify-between text-xs font-bold mb-1">
                            <span className="flex items-center gap-1.5">{p.emoji} {p.name}</span>
                            <span className="font-mono">{count} cups ({pct}%)</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                            <div className="bg-yellow-400 h-full rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl">
                  <h3 className="font-bold text-sm text-white mb-3">Cups Logged By Cashier</h3>
                  <div className="max-h-44 overflow-y-auto space-y-2 pr-1">
                    {Object.keys(metrics.cashierTally).length === 0 ? (
                      <p className="text-xs text-slate-500 italic">No sales recorded yet.</p>
                    ) : (
                      Object.entries(metrics.cashierTally).map(([name, count]) => (
                        <div key={name} className="flex items-center justify-between p-2 rounded-xl bg-slate-950 border border-slate-800/80 text-xs">
                          <span className="font-bold text-slate-200">{name}</span>
                          <span className="font-mono font-bold text-yellow-400">{count} cups</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: EXPENSES SHEET (CAPPED AT 5,000 MVR) */}
          {adminSubTab === 'expenses' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <h3 className="font-bold text-base text-white">Event Budget & Cost Sheet</h3>
                  <p className="text-xs text-slate-400">
                    Changes sync across all devices when you tap Save Changes
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <button
                    onClick={() => {
                      pushToCloud(sales, team, expenses);
                      notify("Expenses Saved & Synced to Cloud!");
                      playSound(720, 0.08);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition-colors"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Save Changes</span>
                  </button>
                  <button
                    onClick={() => {
                      isDirtyRef.current = true;
                      const newExp = {
                        id: 'exp-' + Date.now(),
                        title: 'New Expense Item',
                        category: 'General',
                        vendor: '',
                        qty: '1',
                        amount: 0,
                        status: 'Pending',
                        notes: ''
                      };
                      setExpenses([...expenses, newExp]);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-yellow-400 text-slate-950 text-xs font-bold flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Expense</span>
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-mono">
                      <th className="py-2.5 px-2">Item / Cost Description</th>
                      <th className="py-2.5 px-2">Category</th>
                      <th className="py-2.5 px-2">Vendor</th>
                      <th className="py-2.5 px-2">Qty</th>
                      <th className="py-2.5 px-2">Amount (MVR)</th>
                      <th className="py-2.5 px-2 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {expenses.map((exp) => (
                      <tr key={exp.id} className="hover:bg-slate-800/30">
                        <td className="py-2 px-2">
                          <input
                            type="text"
                            value={exp.title}
                            onChange={(e) => {
                              isDirtyRef.current = true;
                              const val = e.target.value;
                              setExpenses(expenses.map(i => i.id === exp.id ? { ...i, title: val } : i));
                            }}
                            className="bg-transparent border-b border-transparent focus:border-yellow-400 font-semibold text-white w-full min-w-[140px] outline-none"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <input
                            type="text"
                            value={exp.category}
                            onChange={(e) => {
                              isDirtyRef.current = true;
                              const val = e.target.value;
                              setExpenses(expenses.map(i => i.id === exp.id ? { ...i, category: val } : i));
                            }}
                            className="bg-transparent text-slate-400 w-full min-w-[90px] outline-none"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <input
                            type="text"
                            placeholder="Supplier"
                            value={exp.vendor}
                            onChange={(e) => {
                              isDirtyRef.current = true;
                              const val = e.target.value;
                              setExpenses(expenses.map(i => i.id === exp.id ? { ...i, vendor: val } : i));
                            }}
                            className="bg-transparent text-slate-400 w-full min-w-[80px] outline-none"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <input
                            type="text"
                            value={exp.qty}
                            onChange={(e) => {
                              isDirtyRef.current = true;
                              const val = e.target.value;
                              setExpenses(expenses.map(i => i.id === exp.id ? { ...i, qty: val } : i));
                            }}
                            className="bg-transparent text-slate-400 w-16 outline-none"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <input
                            type="number"
                            value={exp.amount}
                            onChange={(e) => {
                              isDirtyRef.current = true;
                              const val = Number(e.target.value) || 0;
                              setExpenses(expenses.map(i => i.id === exp.id ? { ...i, amount: val } : i));
                            }}
                            className="bg-slate-950 px-2 py-1 rounded border border-slate-800 font-mono font-bold text-yellow-400 w-24 outline-none"
                          />
                        </td>
                        <td className="py-2 px-2 text-right">
                          <button
                            onClick={() => {
                              const nextExp = expenses.filter(i => i.id !== exp.id);
                              setExpenses(nextExp);
                              pushToCloud(sales, team, nextExp);
                            }}
                            className="p-1 text-slate-500 hover:text-rose-400"
                            title="Delete Row"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 p-3 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-slate-400">Total Logged Operational Costs:</span>
                  <span className={`font-mono font-black text-sm ${metrics.totalExpenses > EXPENSE_CAP ? 'text-rose-400' : 'text-emerald-400'}`}>
                    MVR {metrics.totalExpenses.toLocaleString()} / MVR {EXPENSE_CAP.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => {
                    pushToCloud(sales, team, expenses);
                    notify("Budget & Costs Synced to Cloud!");
                    playSound(720, 0.08);
                  }}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-emerald-500/20"
                >
                  <Check className="w-4 h-4" />
                  <span>Save All Expense Changes</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: TEAM & T-SHIRTS (17 MEMBERS - MEN / WOMEN / KIDS) */}
          {adminSubTab === 'team' && (
            <div className="space-y-4">
              {/* Category-wise Breakdown Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-white">👨 Men Shirts</span>
                    <span className="text-xs font-mono font-bold text-yellow-400">
                      {team.filter(m => (m.category || 'Men') === 'Men').length} pcs
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {menTally.map(([sz, cnt]) => (
                      <span key={`men-${sz}`} className="px-2 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300">
                        {String(sz)}: <strong className="text-yellow-400">{Number(cnt)}</strong>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-white">👩 Women Shirts</span>
                    <span className="text-xs font-mono font-bold text-yellow-400">
                      {team.filter(m => m.category === 'Women').length} pcs
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {womenTally.map(([sz, cnt]) => (
                      <span key={`women-${sz}`} className="px-2 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300">
                        {String(sz)}: <strong className="text-yellow-400">{Number(cnt)}</strong>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-white">🧒 Kids Shirts</span>
                    <span className="text-xs font-mono font-bold text-yellow-400">
                      {team.filter(m => m.category === 'Kids').length} pcs
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {kidsTally.length === 0 ? (
                      <span className="text-[11px] text-slate-500 italic">None selected</span>
                    ) : (
                      kidsTally.map(([sz, cnt]) => (
                        <span key={`kids-${sz}`} className="px-2 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300">
                          {String(sz)}: <strong className="text-yellow-400">{Number(cnt)}</strong>
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Team Table */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-5 overflow-x-auto space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="font-bold text-sm text-white">Team Roster & T-Shirt Sizes</h3>
                    <p className="text-xs text-slate-400">Changes auto-sync across all links and devices</p>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                      onClick={() => {
                        isDirtyRef.current = true;
                        const newMember = {
                          id: 'tm-' + Date.now(),
                          name: 'New Crew',
                          category: 'Men',
                          role: 'Till, Pouring & Vibe',
                          shirtSize: 'Pending',
                          shirtStatus: 'Pending',
                          phone: '',
                          notes: ''
                        };
                        const nextTeam = [...team, newMember];
                        setTeam(nextTeam);
                        pushToCloud(sales, nextTeam, expenses);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-yellow-400 text-slate-950 text-xs font-bold flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Member</span>
                    </button>
                    <button
                      onClick={() => {
                        pushToCloud(sales, team, expenses);
                        notify("Team Roster & Sizes Synced to Cloud!");
                        playSound(720, 0.08);
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition-colors shadow-lg shadow-emerald-500/20"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </div>

                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-mono">
                      <th className="py-2.5 px-2">Name</th>
                      <th className="py-2.5 px-2">Section</th>
                      <th className="py-2.5 px-2">Shirt Size</th>
                      <th className="py-2.5 px-2">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {team.map((member) => {
                      const isKids = member.category === 'Kids';
                      const sizeOptions = isKids ? KIDS_SIZES : ADULT_SIZES;

                      return (
                        <tr key={member.id} className="hover:bg-slate-800/30">
                          <td className="py-2.5 px-2 font-bold text-white whitespace-nowrap">
                            <input
                              type="text"
                              value={member.name}
                              onChange={(e) => {
                                isDirtyRef.current = true;
                                const val = e.target.value;
                                setTeam(team.map(m => m.id === member.id ? { ...m, name: val } : m));
                              }}
                              className="bg-transparent border-b border-transparent focus:border-yellow-400 font-bold text-white w-28 outline-none"
                            />
                          </td>
                          <td className="py-2.5 px-2">
                            <select
                              value={member.category || 'Men'}
                              onChange={(e) => {
                                const newCat = e.target.value;
                                const nextTeam = team.map(m => {
                                  if (m.id !== member.id) return m;
                                  return { ...m, category: newCat, shirtSize: 'Pending' };
                                });
                                setTeam(nextTeam);
                                pushToCloud(sales, nextTeam, expenses);
                              }}
                              className="bg-slate-950 text-yellow-400 font-bold border border-slate-800 rounded px-2 py-1 outline-none"
                            >
                              <option value="Men">👨 Men</option>
                              <option value="Women">👩 Women</option>
                              <option value="Kids">🧒 Kids</option>
                            </select>
                          </td>
                          <td className="py-2.5 px-2">
                            <select
                              value={member.shirtSize || 'Pending'}
                              onChange={(e) => {
                                const val = e.target.value;
                                const nextTeam = team.map(m => m.id === member.id ? { ...m, shirtSize: val } : m);
                                setTeam(nextTeam);
                                pushToCloud(sales, nextTeam, expenses);
                              }}
                              className="bg-slate-950 text-yellow-400 font-bold border border-slate-800 rounded px-2 py-1 outline-none"
                            >
                              <option value="Pending">Pending</option>
                              {sizeOptions.map(size => (
                                <option key={`${member.id}-${size}`} value={size}>
                                  {size}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="py-2.5 px-2">
                            <input
                              type="text"
                              placeholder="Add notes..."
                              value={member.notes || ''}
                              onChange={(e) => {
                                isDirtyRef.current = true;
                                const val = e.target.value;
                                setTeam(team.map(m => m.id === member.id ? { ...m, notes: val } : m));
                              }}
                              className="bg-transparent text-slate-400 w-full min-w-[120px] outline-none"
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => {
                      pushToCloud(sales, team, expenses);
                      notify("Team & Shirts Saved & Synced!");
                      playSound(720, 0.08);
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
                  >
                    <Check className="w-4 h-4" />
                    <span>Save Team & Shirt Changes</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ALL TRANSACTIONS LOG */}
          {adminSubTab === 'sales' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <h3 className="font-bold text-sm text-white">Event Sales Log ({sales.length})</h3>
                <span className="text-xs font-mono text-yellow-400 font-bold">Total: MVR {metrics.grossRevenue.toLocaleString()}</span>
              </div>

              {sales.length === 0 ? (
                <p className="text-xs text-slate-500 py-8 text-center">No sales logged yet.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 uppercase font-mono">
                        <th className="py-2 px-2">Order</th>
                        <th className="py-2 px-2">Time</th>
                        <th className="py-2 px-2">Cashier</th>
                        <th className="py-2 px-2">Tender</th>
                        <th className="py-2 px-2">Cups</th>
                        <th className="py-2 px-2">Total</th>
                        <th className="py-2 px-2 text-right">Void</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {sales.map((s) => (
                        <tr key={s.id} className="hover:bg-slate-800/30">
                          <td className="py-2 px-2 font-mono font-bold text-slate-300">#{s.orderNumber}</td>
                          <td className="py-2 px-2 text-slate-400 whitespace-nowrap">{s.timestamp}</td>
                          <td className="py-2 px-2 font-semibold text-white">{s.cashier}</td>
                          <td className="py-2 px-2">
                            <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300">
                              {s.paymentMethod}
                            </span>
                          </td>
                          <td className="py-2 px-2 font-mono">{s.cupsTotal}</td>
                          <td className="py-2 px-2 font-mono font-black text-yellow-400 whitespace-nowrap">MVR {s.grossTotal}</td>
                          <td className="py-2 px-2 text-right">
                            <button
                              onClick={() => handlePromptDeleteOrder(s)}
                              className="text-slate-500 hover:text-rose-400 p-1"
                              title="Delete Transaction"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </main>
      )}

      {/* Password Modal (PIN: 1234 - Auto Unlocks on 4th digit) */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-xs w-full shadow-2xl text-center">
            <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mx-auto text-yellow-400 mb-3">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-black text-lg text-white">Owner Access</h3>
            <p className="text-xs text-slate-400 mt-1">
              Enter 4-digit PIN to open backend
            </p>

            <div className="mt-5 space-y-3">
              <input
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                autoFocus
                maxLength={4}
                placeholder="••••"
                value={enteredPin}
                onChange={(e) => handlePinInput(e.target.value)}
                className={`w-full py-3 text-center text-3xl font-mono tracking-widest bg-slate-950 rounded-2xl border text-yellow-400 focus:outline-none transition-all shadow-inner ${
                  pinError ? 'border-rose-500 ring-2 ring-rose-500/20' : 'border-slate-800 focus:border-yellow-400'
                }`}
              />
              {pinError && (
                <p className="text-xs text-rose-400 font-bold animate-pulse">
                  Incorrect PIN. Try again.
                </p>
              )}

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowPinModal(false);
                    setEnteredPin('');
                    setPinError(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Themed Custom Order Delete / Void Confirmation Modal */}
      {deleteConfirmation.isOpen && deleteConfirmation.order && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 max-w-sm w-full shadow-2xl text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-base text-white">
                  {deleteConfirmation.isUndoLast ? 'Undo Last Order?' : 'Delete Order Record?'}
                </h3>
                <p className="text-[11px] text-slate-400">This action will void the transaction</p>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800/90 rounded-2xl p-3.5 my-3 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-yellow-400">Order #{deleteConfirmation.order.orderNumber}</span>
                <span className="text-slate-400 font-mono">{deleteConfirmation.order.timestamp}</span>
              </div>
              <div className="flex items-baseline justify-between pt-1 border-t border-slate-800">
                <span className="text-xs text-slate-300">
                  {deleteConfirmation.order.cupsTotal} Cup{deleteConfirmation.order.cupsTotal > 1 ? 's' : ''} ({deleteConfirmation.order.paymentMethod})
                </span>
                <span className="text-base font-black font-mono text-yellow-400">
                  MVR {deleteConfirmation.order.grossTotal}
                </span>
              </div>
              {deleteConfirmation.order.cashier && (
                <p className="text-[10px] text-slate-500">
                  Cashier: <strong className="text-slate-400">{deleteConfirmation.order.cashier}</strong>
                </p>
              )}
            </div>

            <div className="flex gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => setDeleteConfirmation({ isOpen: false, order: null, isUndoLast: false })}
                className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors"
              >
                Keep Order
              </button>
              <button
                type="button"
                onClick={executeDeleteOrder}
                className="flex-1 py-3 rounded-xl bg-rose-500 hover:bg-rose-400 text-white text-xs font-black shadow-lg shadow-rose-500/20 transition-colors flex items-center justify-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Confirm Void</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
