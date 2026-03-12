"use client";

import { useState } from "react";
import { Package, Users, MessageSquare, ClipboardList, Eye, EyeOff } from "lucide-react";

const stats = [
  { label: "Total Equipment", value: "15", icon: Package, change: "+2 this month" },
  { label: "Active Leads", value: "8", icon: Users, change: "+3 this week" },
  { label: "Monthly Inquiries", value: "23", icon: MessageSquare, change: "+12% vs last month" },
  { label: "Pending Submissions", value: "2", icon: ClipboardList, change: "Review needed" },
];

const recentLeads = [
  { name: "Mike Thompson", company: "Thompson Aggregates", type: "Quote Request", date: "Mar 11, 2026", status: "New" },
  { name: "Sarah Davis", company: "Davis Mining Co.", type: "Screen Media", date: "Mar 10, 2026", status: "Contacted" },
  { name: "James Wilson", company: "Wilson Quarries", type: "Equipment", date: "Mar 9, 2026", status: "New" },
  { name: "Robert Garcia", company: "Southeast Sand & Gravel", type: "Crusher Parts", date: "Mar 8, 2026", status: "Quoted" },
  { name: "Emily Chen", company: "Chen Construction", type: "Belting", date: "Mar 7, 2026", status: "Contacted" },
];

const statusColors: Record<string, string> = {
  New: "bg-green-500/20 text-green-400",
  Contacted: "bg-blue-500/20 text-blue-400",
  Quoted: "bg-purple/20 text-purple-accent",
};

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] px-4 pt-20">
        <div className="w-full max-w-md">
          <div className="bg-brand-gray-dark rounded-xl border border-purple/20 p-8">
            <div className="text-center mb-8">
              <h1 className="font-heading font-bold text-2xl uppercase text-white mb-2">
                Admin Login
              </h1>
              <p className="text-sm text-brand-gray">
                Southern Edge Management Dashboard
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setLoggedIn(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-brand-black-light border border-[#333] text-white placeholder:text-brand-gray focus:outline-none focus:border-purple transition-colors"
                  placeholder="admin@southernedgescreens.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-brand-black-light border border-[#333] text-white placeholder:text-brand-gray focus:outline-none focus:border-purple transition-colors pr-12"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-gray hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-4 font-heading font-bold uppercase tracking-wide text-white rounded-lg bg-gradient-to-r from-purple to-purple-dark hover:from-purple-light hover:to-purple hover:shadow-[0_0_20px_rgba(123,45,142,0.3)] transition-all"
              >
                Sign In
              </button>
            </form>
            <p className="text-xs text-brand-gray text-center mt-6">
              Demo mode — click Sign In to view the dashboard
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading font-bold text-3xl uppercase text-white">
              Dashboard
            </h1>
            <p className="text-sm text-brand-gray mt-1">
              Welcome back, Admin
            </p>
          </div>
          <button
            onClick={() => setLoggedIn(false)}
            className="px-4 py-2 text-sm font-sans font-medium text-brand-gray border border-brand-gray/30 rounded-lg hover:border-purple-accent hover:text-purple-accent transition-colors"
          >
            Sign Out
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-brand-gray-dark rounded-xl border border-purple/20 p-6 hover:border-purple/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple/20 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-purple-accent" />
                </div>
              </div>
              <div className="font-heading font-bold text-3xl text-white">
                {stat.value}
              </div>
              <div className="text-sm text-brand-gray mt-1">{stat.label}</div>
              <div className="text-xs text-purple-accent mt-2">{stat.change}</div>
            </div>
          ))}
        </div>

        {/* Recent Leads Table */}
        <div className="bg-brand-gray-dark rounded-xl border border-purple/20 overflow-hidden">
          <div className="px-6 py-4 border-b border-purple/10">
            <h2 className="font-heading font-bold text-lg uppercase text-white">
              Recent Leads
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-purple/10">
                  <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide text-brand-gray">Name</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide text-brand-gray">Company</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide text-brand-gray">Type</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide text-brand-gray">Date</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide text-brand-gray">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead, i) => (
                  <tr key={i} className="border-b border-purple/5 hover:bg-purple/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-white">{lead.name}</td>
                    <td className="px-6 py-4 text-sm text-brand-gray-light">{lead.company}</td>
                    <td className="px-6 py-4 text-sm text-brand-gray-light">{lead.type}</td>
                    <td className="px-6 py-4 text-sm text-brand-gray">{lead.date}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${statusColors[lead.status]}`}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-xs text-brand-gray text-center mt-8">
          This is a demo dashboard. Full admin functionality coming soon.
        </p>
      </div>
    </div>
  );
}
