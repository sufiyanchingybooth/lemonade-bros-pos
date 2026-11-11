import React, { useState, useEffect, useMemo } from 'react';
import {
  ShoppingBag,
  Lock,
  Unlock,
  Plus,
  Minus,
  CheckCircle2,
  Trash2,
  DollarSign,
  TrendingUp,
  Users,
  ClipboardList,
  Download,
  RotateCcw,
  Volume2,
  VolumeX,
  FileSpreadsheet,
  AlertCircle,
  Tag,
  Receipt,
  UserCheck,
  Undo2,
  Share2,
  Check,
  Smartphone,
  Tablet,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Globe,
  HelpCircle,
  Copy,
  ExternalLink,
  Upload
} from 'lucide-react';

// ============================================================================
// CONSTANTS & INITIAL DATA FOR ULDUZ PVT LTD / THE LEMONADE BROS
// Event: Dhiraagu Maldives Road Race 2026 (20 Nov 2026 @ Hulhumalé Central Park)
// ============================================================================

const DEFAULT_PIN = "1234";
const TARGET_CUPS = 2000;
const EXPENSE_CAP = 5000;

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
    desc: 'Fresh Dhivehi lime juice, light cane syrup & chilled ice'
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
  { id: 'tm-1', name: 'Soofi', role: 'Owner & Lead', shirtSize: 'L', shirtStatus: 'Ready', phone: '', notes: 'Owner - Ulduz Pvt Ltd & The Lemonade Bros' },
  { id: 'tm-choice', name: 'Choice', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-aju', name: 'Aju', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-2', name: 'Nikku', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-3', name: 'Muhanti', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-4', name: 'Nabaa', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-5', name: 'Chehche', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-6', name: 'Tara', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-7', name: 'Chubby', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-8', name: 'Aril', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-9', name: 'Ufu', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-10', name: 'Noddy', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-11', name: 'Xee', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-12', name: 'Rushdan', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-13', name: 'Kiah', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-14', name: 'Amna', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
  { id: 'tm-15', name: 'Faya', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' },
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

export default function App() {
  const [activeMode, setActiveMode] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get('portal') === 'admin' ? 'admin' : 'till';
    } catch {
      return 'till';
    }
  });

  const [adminSubTab, setAdminSubTab] = useState('overview');
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [pinError, setPinError] = useState(false);

  const [activeCashier, setActiveCashier] = useState('Soofi');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);
  const [showDeployModal, setShowDeployModal] = useState(false);

  const [cart, setCart] = useState({
    limeade: 0,
    lemonade: 0,
    strawberry: 0
  });

  const [sales, setSales] = useState(() => {
    try {
      const saved = localStorage.getItem('tlb_sales_v2');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [team, setTeam] = useState(() => {
    try {
      const saved = localStorage.getItem('tlb_team_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        const migrated = parsed.map(m => m.name === 'Sufiyan' ? { ...m, name: 'Soofi' } : m);
        const names = migrated.map(m => m.name.toLowerCase());
        let updated = [...migrated];
        if (!names.includes('choice')) {
          updated.splice(1, 0, { id: 'tm-choice', name: 'Choice', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' });
        }
        if (!names.includes('aju')) {
          updated.splice(2, 0, { id: 'tm-aju', name: 'Aju', role: 'Till, Pouring & Vibe', shirtSize: 'Pending', shirtStatus: 'Pending', phone: '', notes: 'All-rounder crew' });
        }
        return updated;
      }
      return INITIAL_TEAM;
    } catch {
      return INITIAL_TEAM;
    }
  });

  const [expenses, setExpenses] = useState(() => {
    try {
      const saved = localStorage.getItem('tlb_expenses_v2');
      return saved ? JSON.parse(saved) : INITIAL_EXPENSES;
    } catch {
      return INITIAL_EXPENSES;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('tlb_sales_v2', JSON.stringify(sales));
    } catch (e) {
      console.error(e);
    }
  }, [sales]);

  useEffect(() => {
    try {
      localStorage.setItem('tlb_team_v2', JSON.stringify(team));
    } catch (e) {
      console.error(e);
    }
  }, [team]);

  useEffect(() => {
    try {
      localStorage.setItem('tlb_expenses_v2', JSON.stringify(expenses));
    } catch (e) {
      console.error(e);
    }
  }, [expenses]);

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
    } catch (e) {
      // AudioContext fallback
    }
  };

  const notify = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

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

  const metrics = useMemo(() => {
    let grossRevenue = 0;
    let totalCupsSold = 0;
    let cashRevenue = 0;
    let transferRevenue = 0;
    const flavorCounts = { limeade: 0, lemonade: 0, strawberry: 0 };
    const cashierTally = {};

    sales.forEach((s) => {
      grossRevenue += s.grossTotal;
      totalCupsSold += s.cupsTotal;
      if (s.paymentMethod === 'Cash') cashRevenue += s.grossTotal;
      else transferRevenue += s.grossTotal;

      if (s.items) {
        s.items.forEach((it) => {
          if (flavorCounts[it.id] !== undefined) {
            flavorCounts[it.id] += it.qty;
          }
        });
      }

      if (s.cashier) {
        cashierTally[s.cashier] = (cashierTally[s.cashier] || 0) + s.cupsTotal;
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

  const handleCheckout = (paymentMethod) => {
    if (cartSummary.totalCups === 0) {
      notify("Please tap at least 1 cup first!");
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

    setSales([newSale, ...sales]);
    clearCart();
    playSound(880, 0.12);
    notify(`Order #${newSale.orderNumber} Logged! (${paymentMethod})`);
  };

  const handleUndoLastSale = () => {
    if (sales.length === 0) return;
    const lastSale = sales[0];
    const confirmed = window.confirm(`Undo Order #${lastSale.orderNumber} (MVR ${lastSale.grossTotal})?`);
    if (confirmed) {
      setSales(sales.slice(1));
      notify(`Reverted Order #${lastSale.orderNumber}`);
      playSound(320, 0.1);
    }
  };

  const handlePinUnlock = (e) => {
    e.preventDefault();
    if (enteredPin === DEFAULT_PIN) {
      setIsAdminUnlocked(true);
      setShowPinModal(false);
      setActiveMode('admin');
      setEnteredPin('');
      setPinError(false);
      playSound(780, 0.1);
    } else {
      setPinError(true);
      playSound(250, 0.15);
    }
  };

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
      `"${s.items.map(i => `${i.qty}x ${i.name}`).join('; ')}"`
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

  const shirtSummary = useMemo(() => {
    const counts = {};
    team.forEach(m => {
      const sz = m.shirtSize || 'Pending';
      counts[sz] = (counts[sz] || 0) + 1;
    });
    return counts;
  }, [team]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-yellow-400 selection:text-slate-950">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-yellow-400 text-slate-950 px-4 py-2 rounded-2xl font-black text-sm shadow-2xl flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Universal Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-40 px-3 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Brand Info */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-yellow-400 to-amber-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-yellow-400/20 shrink-0">
              🍋
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-black text-base sm:text-lg tracking-tight text-white leading-tight">
                  The Lemonade Bros
                </h1>
                <span className="hidden sm:inline px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-yellow-400/10 text-yellow-300 border border-yellow-400/30">
                  Ulduz Pvt Ltd
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium truncate max-w-[200px] sm:max-w-none">
                Dhiraagu Road Race 2026 • Hulhumalé Central Park
              </p>
            </div>
          </div>

          {/* Action Bar & Mode Switcher */}
          <div className="flex items-center gap-2">
            {/* Deploy / Open Anywhere Button */}
            <button
              onClick={() => setShowDeployModal(true)}
              className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors touch-manipulation"
              title="How to open this on any phone or iPad"
            >
              <Globe className="w-3.5 h-3.5 text-yellow-400" />
              <span className="hidden sm:inline">Open on Phone/iPad</span>
              <span className="sm:hidden">Share</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              title={soundEnabled ? "Mute audio" : "Enable clicks"}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-yellow-400" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Till Mode Switch */}
            <button
              onClick={() => setActiveMode('till')}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-1.5 transition-all touch-manipulation ${
                activeMode === 'till'
                  ? 'bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-400/25'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Sales Till</span>
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
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-1.5 transition-all touch-manipulation ${
                activeMode === 'admin'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {isAdminUnlocked ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4 text-amber-400" />}
              <span className="hidden sm:inline">Backend</span>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================
          MODE 1: SALES TILL (PHONE & IPAD ADAPTED, ZERO FINANCIAL PROFIT DISPLAY)
         ======================================================================== */}
      {activeMode === 'till' ? (
        <main className="flex-1 max-w-7xl w-full mx-auto p-2.5 sm:p-4 md:p-6 flex flex-col gap-3.5 sm:gap-4">
          {/* Top Crew Bar: Dropdown for Till Member & Live Sales Counter */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-2.5 sm:p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0 flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5 text-yellow-400" />
                On Till:
              </span>
              <div className="relative">
                <select
                  value={activeCashier}
                  onChange={(e) => {
                    setActiveCashier(e.target.value);
                    playSound(520, 0.04);
                  }}
                  className="bg-slate-950 text-yellow-300 font-extrabold text-xs sm:text-sm border border-slate-700/80 rounded-xl px-3 py-1.5 focus:outline-none focus:border-yellow-400 cursor-pointer appearance-none pr-8 shadow-inner"
                >
                  {team.map((member) => (
                    <option key={member.id} value={member.name} className="bg-slate-900 text-white">
                      {member.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-yellow-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-2.5 border-t sm:border-t-0 border-slate-800 pt-2 sm:pt-0 shrink-0">
              {/* Total Amount of Sales Live Counter */}
              <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500/15 to-yellow-500/10 px-3 py-1.5 rounded-xl border border-yellow-400/30 shadow-sm">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-300">
                  Total Sales:
                </span>
                <span className="text-xs sm:text-sm font-black text-yellow-400 font-mono tracking-tight">
                  MVR {metrics.grossRevenue.toLocaleString()}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  ({metrics.totalCupsSold} cups)
                </span>
              </div>

              {sales.length > 0 && (
                <button
                  onClick={handleUndoLastSale}
                  className="px-2.5 py-1 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 text-xs font-bold flex items-center gap-1 transition-colors touch-manipulation"
                  title="Undo the most recent transaction"
                >
                  <Undo2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Undo Last</span>
                  <span className="sm:hidden">Undo</span>
                </button>
              )}
            </div>
          </div>

          {/* Main Till Grid: Mobile stacked, Tablet/iPad 2-column layout */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4 md:gap-5">
            {/* Left Column: Drinks & Tap Cards */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-3.5">
              {/* Discount Banner Toggle */}
              <div className={`p-3 sm:p-3.5 rounded-2xl border flex items-center justify-between gap-2 transition-all ${
                discountApplied
                  ? 'bg-rose-500/15 border-rose-500/50 text-rose-200'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300'
              }`}>
                <div className="flex items-center gap-2">
                  <Tag className={`w-4 h-4 shrink-0 ${discountApplied ? 'text-rose-400' : 'text-yellow-400'}`} />
                  <span className="text-xs sm:text-sm font-bold leading-tight">
                    {discountApplied
                      ? 'DISCOUNT ON: Drinks are MVR 50 & MVR 60 (-10/cup)'
                      : 'Standard: Classic MVR 60 • Strawberry MVR 70'}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setDiscountApplied(!discountApplied);
                    playSound(480, 0.06);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black shrink-0 touch-manipulation transition-all ${
                    discountApplied
                      ? 'bg-rose-500 text-white shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  {discountApplied ? 'Discount Active (-10)' : 'Apply -10'}
                </button>
              </div>

              {/* 3 Drink Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 flex-1">
                {PRODUCTS.map((prod) => {
                  const qty = cart[prod.id] || 0;
                  const activeUnitPrice = discountApplied ? prod.discountedPrice : prod.basePrice;

                  return (
                    <div
                      key={prod.id}
                      className={`relative flex flex-col justify-between rounded-3xl p-3.5 sm:p-4 md:p-5 border transition-all shadow-xl ${
                        qty > 0
                          ? `${prod.border} bg-slate-900 ring-2 ring-yellow-400/30`
                          : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-3xl sm:text-4xl p-2 sm:p-2.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner">
                            {prod.emoji}
                          </span>
                          <div className="text-right">
                            {discountApplied && (
                              <span className="block text-[10px] sm:text-[11px] text-rose-400 line-through font-mono">
                                MVR {prod.basePrice}
                              </span>
                            )}
                            <span className={`inline-block px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-black font-mono border ${
                              discountApplied
                                ? 'bg-rose-500 text-white border-rose-400'
                                : 'bg-slate-950 text-yellow-300 border-slate-800'
                            }`}>
                              MVR {activeUnitPrice}
                            </span>
                          </div>
                        </div>

                        <h3 className="mt-2.5 sm:mt-3 text-base sm:text-lg md:text-xl font-black text-white leading-snug">
                          {prod.name}
                        </h3>
                        <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-slate-400">
                          {prod.desc}
                        </p>
                      </div>

                      {/* Clean Giant '+' Button & Controls */}
                      <div className="mt-4 sm:mt-5 space-y-2">
                        <button
                          onClick={() => updateCartCup(prod.id, 1)}
                          className={`w-full py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r ${prod.accent} text-slate-950 font-black text-3xl sm:text-4xl shadow-lg active:scale-95 touch-manipulation transition-transform flex items-center justify-center`}
                          aria-label={`Add 1 ${prod.name}`}
                        >
                          <Plus className="w-8 h-8 stroke-[3.5]" />
                        </button>

                        {/* Quick Controls */}
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => updateCartCup(prod.id, 2)}
                              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold active:scale-95 touch-manipulation"
                            >
                              +2
                            </button>
                            {qty > 0 && (
                              <button
                                onClick={() => updateCartCup(prod.id, -1)}
                                className="p-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 active:scale-95 touch-manipulation"
                                title="Remove 1 cup"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5">
                            <span className="text-[11px] text-slate-400 font-semibold">Qty:</span>
                            <span className={`min-w-[32px] text-center px-2 py-0.5 rounded-lg font-black text-base font-mono ${
                              qty > 0 ? 'bg-yellow-400 text-slate-950' : 'bg-slate-950 text-slate-500'
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
              <div className="bg-slate-900/50 rounded-2xl p-3 border border-slate-800/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Receipt className="w-3.5 h-3.5 text-yellow-400" />
                    Last Orders at Stall
                  </span>
                  <span className="text-[10px] text-slate-500">Ulduz Payment Collection</span>
                </div>
                {sales.length === 0 ? (
                  <p className="text-xs text-slate-500 italic py-1">No sales logged yet. Ready for runners!</p>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {sales.slice(0, 4).map((s) => (
                      <div key={s.id} className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl flex flex-col justify-between">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="font-mono font-bold text-slate-400">#{s.orderNumber} • {s.cashier}</span>
                          <span className="px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 font-semibold">
                            {s.paymentMethod === 'Cash' ? '💵 Cash' : '🏦 Transfer'}
                          </span>
                        </div>
                        <div className="mt-1.5 flex items-baseline justify-between">
                          <span className="text-xs font-semibold text-slate-300">
                            {s.cupsTotal} cup{s.cupsTotal > 1 ? 's' : ''}
                          </span>
                          <span className="text-sm font-black text-yellow-400 font-mono">MVR {s.grossTotal}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Checkout & Tender Drawer */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col">
              <div className="bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-800 shadow-2xl flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-yellow-400" />
                      <h2 className="font-black text-lg text-white">Current Order</h2>
                    </div>
                    {cartSummary.totalCups > 0 && (
                      <button
                        onClick={clearCart}
                        className="text-xs font-bold text-rose-400 hover:text-rose-300 px-2 py-1 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 transition-colors"
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  {/* Cart Items List */}
                  <div className="mt-3.5 space-y-2.5 max-h-56 overflow-y-auto pr-1">
                    {cartSummary.totalCups === 0 ? (
                      <div className="text-center py-8 text-slate-500">
                        <div className="text-3xl mb-1">🥤</div>
                        <p className="text-sm font-semibold">No cups selected yet</p>
                        <p className="text-xs text-slate-600">Tap any drink card to count cups</p>
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
                          <div className="flex items-center gap-3">
                            <span className="font-mono font-black text-sm text-yellow-400">
                              MVR {item.lineTotal}
                            </span>
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => updateCartCup(item.id, -1)}
                                className="w-6 h-6 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center text-xs font-bold"
                              >
                                -
                              </button>
                              <button
                                onClick={() => updateCartCup(item.id, 1)}
                                className="w-6 h-6 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center text-xs font-bold"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Bottom Total & Tender Action Buttons */}
                <div className="mt-4 pt-4 border-t border-slate-800 space-y-3">
                  <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block font-bold">TOTAL PAYABLE</span>
                      <span className="text-xs text-yellow-400 font-semibold font-mono">
                        {cartSummary.totalCups} Cup{cartSummary.totalCups !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-black font-mono text-yellow-400">
                        MVR {cartSummary.totalAmount}
                      </span>
                    </div>
                  </div>

                  {/* 1-Tap Tender Buttons */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => handleCheckout('Cash')}
                      disabled={cartSummary.totalCups === 0}
                      className="py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:hover:bg-emerald-500 text-slate-950 font-black text-sm sm:text-base shadow-lg shadow-emerald-500/20 active:scale-95 touch-manipulation transition-all flex flex-col items-center justify-center"
                    >
                      <span className="text-lg">💵</span>
                      <span>COLLECT CASH</span>
                    </button>

                    <button
                      onClick={() => handleCheckout('Transfer')}
                      disabled={cartSummary.totalCups === 0}
                      className="py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 disabled:opacity-30 disabled:hover:bg-blue-500 text-white font-black text-sm sm:text-base shadow-lg shadow-blue-500/20 active:scale-95 touch-manipulation transition-all flex flex-col items-center justify-center"
                    >
                      <span className="text-lg">🏦</span>
                      <span>BANK TRANSFER</span>
                    </button>
                  </div>
                  <p className="text-[10px] text-center text-slate-500">
                    Collected on behalf of Ulduz Private Limited
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : (
        /* ========================================================================
            MODE 2: ADMIN BACKEND (PASSWORD 1234, PROFIT, ROSTER & EXPENSES)
           ======================================================================== */
        <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-5 md:p-6 flex flex-col gap-5">
          {/* Sub Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 p-2 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setAdminSubTab('overview')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  adminSubTab === 'overview' ? 'bg-yellow-400 text-slate-950' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                Financial Overview
              </button>
              <button
                onClick={() => setAdminSubTab('expenses')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  adminSubTab === 'expenses' ? 'bg-yellow-400 text-slate-950' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                Expenses Sheet (Max 5K)
              </button>
              <button
                onClick={() => setAdminSubTab('team')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  adminSubTab === 'team' ? 'bg-yellow-400 text-slate-950' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                Team & Shirts ({team.length})
              </button>
              <button
                onClick={() => setAdminSubTab('sales')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  adminSubTab === 'sales' ? 'bg-yellow-400 text-slate-950' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                Transactions Log
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={exportSalesCSV}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 border border-slate-700 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-yellow-400" />
                <span>Export CSV</span>
              </button>
              <button
                onClick={() => {
                  setIsAdminUnlocked(false);
                  setActiveMode('till');
                }}
                className="px-3 py-1.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 text-xs font-bold border border-rose-500/30 transition-colors"
              >
                Lock Backend
              </button>
            </div>
          </div>

          {/* TAB 1: FINANCIAL OVERVIEW */}
          {adminSubTab === 'overview' && (
            <div className="space-y-5">
              {/* Top Key Metrics Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Gross Revenue</span>
                  <p className="mt-1 text-2xl sm:text-3xl font-black font-mono text-emerald-400">
                    MVR {metrics.grossRevenue.toLocaleString()}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Cash: MVR {metrics.cashRevenue} • Transfer: MVR {metrics.transferRevenue}
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Logged Expenses</span>
                  <p className="mt-1 text-2xl sm:text-3xl font-black font-mono text-rose-400">
                    MVR {metrics.totalExpenses.toLocaleString()}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Budget Cap: MVR {EXPENSE_CAP.toLocaleString()}
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Net Profit</span>
                  <p className={`mt-1 text-2xl sm:text-3xl font-black font-mono ${metrics.netProfit >= 0 ? 'text-yellow-400' : 'text-rose-400'}`}>
                    MVR {metrics.netProfit.toLocaleString()}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Margin: {metrics.profitMargin}%
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">2,000 Cup Goal</span>
                  <p className="mt-1 text-2xl sm:text-3xl font-black font-mono text-white">
                    {metrics.totalCupsSold} <span className="text-sm font-normal text-slate-400">/ 2,000</span>
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
                <div className="bg-slate-900 border border-slate-800 p-4 sm:p-5 rounded-3xl">
                  <h3 className="font-bold text-sm text-white mb-3">Cups Sold By Signature Flavor</h3>
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

                <div className="bg-slate-900 border border-slate-800 p-4 sm:p-5 rounded-3xl">
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
                    Total expenses strictly capped under MVR 5,000 (Stall is free via Dhiraagu)
                  </p>
                </div>
                <button
                  onClick={() => {
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
                  className="px-3 py-1.5 rounded-xl bg-yellow-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Expense</span>
                </button>
              </div>

              {/* Editable Expenses Table */}
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
                              const val = e.target.value;
                              setExpenses(expenses.map(i => i.id === exp.id ? { ...i, title: val } : i));
                            }}
                            className="bg-transparent border-b border-transparent focus:border-yellow-400 font-semibold text-white w-full outline-none"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <input
                            type="text"
                            value={exp.category}
                            onChange={(e) => {
                              const val = e.target.value;
                              setExpenses(expenses.map(i => i.id === exp.id ? { ...i, category: val } : i));
                            }}
                            className="bg-transparent text-slate-400 w-full outline-none"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <input
                            type="text"
                            placeholder="Supplier"
                            value={exp.vendor}
                            onChange={(e) => {
                              const val = e.target.value;
                              setExpenses(expenses.map(i => i.id === exp.id ? { ...i, vendor: val } : i));
                            }}
                            className="bg-transparent text-slate-400 w-full outline-none"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <input
                            type="text"
                            value={exp.qty}
                            onChange={(e) => {
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
                              const val = Number(e.target.value) || 0;
                              setExpenses(expenses.map(i => i.id === exp.id ? { ...i, amount: val } : i));
                            }}
                            className="bg-slate-950 px-2 py-1 rounded border border-slate-800 font-mono font-bold text-yellow-400 w-24 outline-none"
                          />
                        </td>
                        <td className="py-2 px-2 text-right">
                          <button
                            onClick={() => setExpenses(expenses.filter(i => i.id !== exp.id))}
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

              {/* Total Expenses Footer */}
              <div className="flex justify-between items-center p-3 rounded-2xl bg-slate-950 border border-slate-800">
                <span className="font-bold text-xs text-slate-400">Total Logged Operational Costs:</span>
                <span className={`font-mono font-black text-sm ${metrics.totalExpenses > EXPENSE_CAP ? 'text-rose-400' : 'text-emerald-400'}`}>
                  MVR {metrics.totalExpenses.toLocaleString()} / MVR {EXPENSE_CAP.toLocaleString()}
                </span>
              </div>
            </div>
          )}

          {/* TAB 3: TEAM & T-SHIRTS (17 MEMBERS) */}
          {adminSubTab === 'team' && (
            <div className="space-y-4">
              {/* T-Shirt Tally Cards */}
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl">
                <h3 className="font-bold text-sm text-white mb-2">T-Shirt Printing Order Summary</h3>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(shirtSummary).map(([size, count]) => (
                    <div key={size} className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                      <span className="text-slate-400 mr-1.5">{size}:</span>
                      <span className="font-mono font-black text-yellow-400">{count} pcs</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Table */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-5 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-mono">
                      <th className="py-2.5 px-2">Name</th>
                      <th className="py-2.5 px-2">Role & Station</th>
                      <th className="py-2.5 px-2">Shirt Size</th>
                      <th className="py-2.5 px-2">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {team.map((member) => (
                      <tr key={member.id} className="hover:bg-slate-800/30">
                        <td className="py-2.5 px-2 font-bold text-white whitespace-nowrap">
                          {member.name}
                        </td>
                        <td className="py-2.5 px-2 text-slate-400">
                          {member.role}
                        </td>
                        <td className="py-2.5 px-2">
                          <select
                            value={member.shirtSize || 'Pending'}
                            onChange={(e) => {
                              const val = e.target.value;
                              setTeam(team.map(m => m.id === member.id ? { ...m, shirtSize: val } : m));
                            }}
                            className="bg-slate-950 text-yellow-400 font-bold border border-slate-800 rounded px-2 py-1 outline-none"
                          >
                            <option value="Pending">Pending</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="2XL">2XL</option>
                            <option value="3XL">3XL</option>
                          </select>
                        </td>
                        <td className="py-2.5 px-2">
                          <input
                            type="text"
                            placeholder="Add notes..."
                            value={member.notes || ''}
                            onChange={(e) => {
                              const val = e.target.value;
                              setTeam(team.map(m => m.id === member.id ? { ...m, notes: val } : m));
                            }}
                            className="bg-transparent text-slate-400 w-full outline-none"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: ALL TRANSACTIONS LOG */}
          {adminSubTab === 'sales' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <h3 className="font-bold text-sm text-white">Full Event Sales Log ({sales.length} transactions)</h3>
                <span className="text-xs font-mono text-slate-400">Total: MVR {metrics.grossRevenue.toLocaleString()}</span>
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
                        <th className="py-2 px-2 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {sales.map((s) => (
                        <tr key={s.id} className="hover:bg-slate-800/30">
                          <td className="py-2 px-2 font-mono font-bold text-slate-300">#{s.orderNumber}</td>
                          <td className="py-2 px-2 text-slate-400">{s.timestamp}</td>
                          <td className="py-2 px-2 font-semibold text-white">{s.cashier}</td>
                          <td className="py-2 px-2">
                            <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300">
                              {s.paymentMethod}
                            </span>
                          </td>
                          <td className="py-2 px-2 font-mono">{s.cupsTotal}</td>
                          <td className="py-2 px-2 font-mono font-black text-yellow-400">MVR {s.grossTotal}</td>
                          <td className="py-2 px-2 text-right">
                            <button
                              onClick={() => {
                                if (window.confirm(`Delete Order #${s.orderNumber}?`)) {
                                  setSales(sales.filter(i => i.id !== s.id));
                                }
                              }}
                              className="text-slate-500 hover:text-rose-400"
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

      {/* Password Modal (PIN: 1234) */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-xs w-full shadow-2xl text-center">
            <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mx-auto text-yellow-400 mb-3">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-black text-lg text-white">Owner Access</h3>
            <p className="text-xs text-slate-400 mt-1">
              Enter Owner PIN to unlock backend financials and expenses
            </p>

            <form onSubmit={handlePinUnlock} className="mt-4 space-y-3">
              <input
                type="password"
                inputMode="numeric"
                autoFocus
                placeholder="••••"
                value={enteredPin}
                onChange={(e) => {
                  setEnteredPin(e.target.value);
                  setPinError(false);
                }}
                className={`w-full py-3 text-center text-2xl font-mono tracking-widest bg-slate-950 rounded-2xl border text-white focus:outline-none ${
                  pinError ? 'border-rose-500' : 'border-slate-800 focus:border-yellow-400'
                }`}
              />
              {pinError && <p className="text-xs text-rose-400 font-bold">Incorrect PIN (PIN is 1234)</p>}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowPinModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-yellow-400 text-slate-950 text-xs font-black"
                >
                  Unlock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Deploy & Open Anywhere Modal */}
      {showDeployModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 max-w-lg w-full shadow-2xl text-left flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-base sm:text-lg text-white">How to Open on Any Device</h3>
                  <p className="text-xs text-slate-400">For iPad, iPhone or another browser on race day</p>
                </div>
              </div>
              <button
                onClick={() => setShowDeployModal(false)}
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-4 overflow-y-auto pr-1 text-xs sm:text-sm text-slate-300">
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200">
                <p className="font-bold mb-1 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                  Why the copied link failed in a new browser:
                </p>
                <p className="text-xs text-amber-200/80 leading-relaxed">
                  The in-chat preview runs inside a temporary, isolated sandbox. Its URL cannot be opened outside this session without hosting it.
                </p>
              </div>

              {/* Option 1: 1-Click Vercel / Netlify Deployment */}
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] uppercase font-black tracking-wider text-yellow-400 block">
                  Method 1 (Recommended — 2 Mins): Deploy to Vercel
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  This gives you a permanent, ultra-fast link (e.g. <span className="font-mono text-white">the-lemonade-bros.vercel.app</span>) that any team member can open directly on their phone:
                </p>
                <ol className="list-decimal list-inside text-xs space-y-1.5 text-slate-300 font-medium">
                  <li>In this window, click the <strong className="text-white">Download Code</strong> or copy the full <strong className="text-white">App.jsx</strong> file.</li>
                  <li>Go to <span className="text-yellow-400 font-mono">v0.dev</span> or push to a quick GitHub repo and import to <span className="text-yellow-400 font-mono">Vercel.com</span> (Free).</li>
                  <li>Click <strong className="text-white">Deploy</strong>. You will get a live public HTTPS URL immediately for your iPad/phone!</li>
                </ol>
              </div>

              {/* Option 2: Instant Fullscreen on Current Device */}
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] uppercase font-black tracking-wider text-emerald-400 block">
                  Method 2: Open in New Tab Right Now
                </span>
                <p className="text-xs text-slate-400">
                  In your interface right above this canvas, click the <strong className="text-white">"Open in New Window / Pop-out"</strong> icon (arrow pointing out of a square). That will expand the till into a full, clean browser tab.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setShowDeployModal(false)}
                className="px-4 py-2 rounded-xl bg-yellow-400 text-slate-950 font-black text-xs"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
