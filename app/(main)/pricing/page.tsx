 "use client";

import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Crown,
  CreditCard,
  Gift,
  Rocket,
  ShieldCheck,
  Sparkles,
  Ticket,
  Wallet,
  X,
} from "lucide-react";
import { useState } from "react";
import { paymentMethods, subscriptionPlans } from "@/lib/site-content";

function paymentIcon(id: string) {
  switch (id) {
    case "paypal":
      return Wallet;
    case "visa":
      return CreditCard;
    case "redotpay":
      return ShieldCheck;
    default:
      return Ticket;
  }
}

const planIcons = {
  free: Gift,
  starter: Rocket,
  "pro-monthly": Sparkles,
  "pro-yearly": Sparkles,
  business: Crown,
  "business-yearly": Crown,
};

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<(typeof subscriptionPlans)[number] | null>(null);

  return (
    <div className="min-h-screen overflow-hidden bg-[#070a12] text-white">
      <Header />

      <main>
        <section className="relative isolate border-b border-white/10 px-4 pb-14 pt-14 sm:pt-20">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,.25),transparent_45%),radial-gradient(circle_at_85%_40%,rgba(124,58,237,.16),transparent_30%)]" />
          <div className="mx-auto max-w-6xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-200">
              <Sparkles className="h-4 w-4" />
              Simple pricing. Serious building.
            </div>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
              Choose a plan that keeps your ideas moving.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Start free, upgrade when you need more generation power, and keep
              your projects in one professional AI workspace.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-400" /> No setup fee</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-blue-400" /> Secure checkout</span>
              <span className="inline-flex items-center gap-2"><Gift className="h-4 w-4 text-violet-400" /> Free plan available</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {subscriptionPlans.map((plan) => {
              const Icon = planIcons[plan.id as keyof typeof planIcons] ?? Sparkles;
              const featured = plan.id === "pro-monthly";
              return (
                <article
                  key={plan.id}
                  className={`group relative flex flex-col overflow-hidden rounded-[28px] border p-6 shadow-2xl transition duration-300 hover:-translate-y-1 ${
                    featured
                      ? "border-blue-400/50 bg-gradient-to-b from-blue-500/15 to-white/[0.04] shadow-blue-950/40"
                      : "border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.055]"
                  }`}
                >
                  {featured && (
                    <div className="absolute right-5 top-5 rounded-full bg-blue-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                      Most popular
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${featured ? "bg-blue-500 text-white" : "bg-white/10 text-blue-300"}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{plan.name}</h2>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">{plan.cadence}</p>
                    </div>
                  </div>

                  <div className="mt-7 flex items-end gap-2">
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                    <span className="pb-1 text-sm text-slate-500">{plan.cadence === "Forever" ? "forever" : plan.cadence === "Monthly" ? "/ month" : "/ year"}</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-blue-300">{plan.points}</p>
                  <p className="mt-4 min-h-[48px] text-sm leading-6 text-slate-400">{plan.description}</p>

                  <button
                    type="button"
                    onClick={() => setSelectedPlan(plan)}
                    className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-sm font-bold transition ${
                      featured
                        ? "bg-blue-500 text-white shadow-lg shadow-blue-900/30 hover:bg-blue-400"
                        : "bg-white text-slate-950 hover:bg-slate-200"
                    }`}
                  >
                    {plan.id === "free" ? "Start for free" : `Subscribe to ${plan.name}`}
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <div className="my-6 h-px bg-white/10" />
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">What&apos;s included</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-slate-300">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16">
          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-r from-white/[0.06] to-white/[0.025] p-7 sm:p-9">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Checkout</p>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Flexible payment options</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Pick the method that works best for you. The subscription button above opens the secure checkout selection.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {paymentMethods.map((method) => {
                  const Icon = paymentIcon(method.id);
                  return (
                    <div key={method.id} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-semibold">{method.name}</p>
                          <p className="mt-1 text-xs text-slate-500">{method.summary}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      {selectedPlan && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center">
          <div className="w-full max-w-lg rounded-[30px] border border-white/10 bg-[#0d111c] p-6 shadow-2xl sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Selected plan</p>
                <h2 className="mt-2 text-2xl font-bold">{selectedPlan.name} · {selectedPlan.cadence}</h2>
                <p className="mt-1 text-slate-400">{selectedPlan.price} · {selectedPlan.points}</p>
              </div>
              <button aria-label="Close" onClick={() => setSelectedPlan(null)} className="rounded-full bg-white/5 p-2 text-slate-400 hover:bg-white/10 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4 text-sm leading-6 text-blue-100">
              Choose a payment method below to continue. Connect your real payment gateway here when deploying to production.
            </div>

            <div className="mt-5 grid gap-3">
              {paymentMethods.map((method) => {
                const Icon = paymentIcon(method.id);
                return (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => alert(`${method.name} checkout selected for ${selectedPlan.name}.`)}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-left transition hover:border-blue-400/40 hover:bg-white/[0.07]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-300"><Icon className="h-5 w-5" /></span>
                    <span className="flex-1">
                      <span className="block font-semibold">{method.name}</span>
                      <span className="block text-xs text-slate-500">{method.summary}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-500" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
