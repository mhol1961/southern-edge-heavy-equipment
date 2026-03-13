"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { SlidersHorizontal, LayoutGrid, List } from "lucide-react";
import PageHero from "@/components/PageHero";
import EquipmentCard from "@/components/EquipmentCard";
import { equipment } from "@/data/equipment";

const allCategories = Array.from(new Set(equipment.map((e) => e.category)));
const allManufacturers = Array.from(new Set(equipment.map((e) => e.manufacturer)));
const allStatuses = ["in-stock", "available", "sold", "coming-soon"] as const;

const statusLabels: Record<string, string> = {
  "in-stock": "In Stock",
  available: "Available",
  sold: "Sold",
  "coming-soon": "Coming Soon",
};

type SortOption = "newest" | "price-low" | "price-high" | "name";

export default function EquipmentPage() {
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");
  const [manufacturer, setManufacturer] = useState("all");
  const [sort, setSort] = useState<SortOption>("newest");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let items = [...equipment];

    if (category !== "all") items = items.filter((e) => e.category === category);
    if (status !== "all") items = items.filter((e) => e.status === status);
    if (manufacturer !== "all") items = items.filter((e) => e.manufacturer === manufacturer);

    switch (sort) {
      case "name":
        items.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "price-low":
        items.sort((a, b) => {
          const aNum = parseFloat(a.price.replace(/[^0-9.]/g, "")) || Infinity;
          const bNum = parseFloat(b.price.replace(/[^0-9.]/g, "")) || Infinity;
          return aNum - bNum;
        });
        break;
      case "price-high":
        items.sort((a, b) => {
          const aNum = parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0;
          const bNum = parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0;
          return bNum - aNum;
        });
        break;
      default:
        items.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    }

    return items;
  }, [category, status, manufacturer, sort]);

  // Track filter changes to trigger card enter/exit transitions
  const [animatingIn, setAnimatingIn] = useState(true);
  const prevFilteredRef = useRef<string[] | null>(null);

  useEffect(() => {
    const currentIds = filtered.map((e) => e.id);
    const prevIds = prevFilteredRef.current;

    // Skip animation on initial mount
    if (prevIds === null) {
      prevFilteredRef.current = currentIds;
      return;
    }

    // If the filtered set changed, trigger transition
    if (
      currentIds.length !== prevIds.length ||
      currentIds.some((id, i) => id !== prevIds[i])
    ) {
      setAnimatingIn(false);

      const raf = requestAnimationFrame(() => {
        setAnimatingIn(true);
      });

      prevFilteredRef.current = currentIds;
      return () => cancelAnimationFrame(raf);
    }
  }, [filtered]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    equipment.forEach((e) => {
      counts[e.category] = (counts[e.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <>
      <PageHero
        image="/images/southernedgeheavyequipment3.JPG"
        imageAlt="Heavy equipment at Southern Edge — crushers, screens, and processing machines"
        label="Our Inventory"
        title="Equipment for Sale"
        subtitle="Browse our selection of crushers, screens, conveyors, and material processing equipment."
        compact
      />

      <section className="py-12 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Filter sidebar — desktop */}
            <aside className="hidden lg:block lg:self-start">
              <div className="sticky top-28 space-y-8">
                {/* Categories */}
                <div>
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-brand-white mb-4">
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => setCategory("all")}
                        className={`text-sm w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          category === "all"
                            ? "bg-purple/20 text-purple-accent"
                            : "text-brand-gray hover:text-brand-white hover:bg-brand-gray-dark"
                        }`}
                      >
                        All Categories ({equipment.length})
                      </button>
                    </li>
                    {allCategories.map((cat) => (
                      <li key={cat}>
                        <button
                          onClick={() => setCategory(cat)}
                          className={`text-sm w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            category === cat
                              ? "bg-purple/20 text-purple-accent"
                              : "text-brand-gray hover:text-brand-white hover:bg-brand-gray-dark"
                          }`}
                        >
                          {cat} ({categoryCounts[cat] || 0})
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Status */}
                <div>
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-brand-white mb-4">
                    Status
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => setStatus("all")}
                        className={`text-sm w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          status === "all"
                            ? "bg-purple/20 text-purple-accent"
                            : "text-brand-gray hover:text-brand-white hover:bg-brand-gray-dark"
                        }`}
                      >
                        All
                      </button>
                    </li>
                    {allStatuses.map((s) => (
                      <li key={s}>
                        <button
                          onClick={() => setStatus(s)}
                          className={`text-sm w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            status === s
                              ? "bg-purple/20 text-purple-accent"
                              : "text-brand-gray hover:text-brand-white hover:bg-brand-gray-dark"
                          }`}
                        >
                          {statusLabels[s]}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Manufacturer */}
                <div>
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-brand-white mb-4">
                    Manufacturer
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => setManufacturer("all")}
                        className={`text-sm w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          manufacturer === "all"
                            ? "bg-purple/20 text-purple-accent"
                            : "text-brand-gray hover:text-brand-white hover:bg-brand-gray-dark"
                        }`}
                      >
                        All
                      </button>
                    </li>
                    {allManufacturers.map((m) => (
                      <li key={m}>
                        <button
                          onClick={() => setManufacturer(m)}
                          className={`text-sm w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            manufacturer === m
                              ? "bg-purple/20 text-purple-accent"
                              : "text-brand-gray hover:text-brand-white hover:bg-brand-gray-dark"
                          }`}
                        >
                          {m}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-3">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-brand-gray">
                  {filtered.length} {filtered.length === 1 ? "item" : "items"} found
                </p>
                <div className="flex items-center gap-3">
                  {/* Mobile filter toggle */}
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center gap-2 px-3 py-2 rounded-lg border border-purple/30 text-sm text-brand-gray-light hover:border-purple transition-colors"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    Filters
                  </button>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortOption)}
                    className="px-3 py-2 rounded-lg bg-brand-gray-dark border border-purple/30 text-sm text-brand-gray-light focus:outline-none focus:border-purple"
                  >
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name A–Z</option>
                  </select>
                </div>
              </div>

              {/* Mobile filters */}
              {showFilters && (
                <div className="lg:hidden bg-brand-gray-dark rounded-lg border border-purple/20 p-4 mb-6 space-y-4">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-brand-black-light border border-purple/30 text-sm text-brand-gray-light"
                  >
                    <option value="all">All Categories</option>
                    {allCategories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-brand-black-light border border-purple/30 text-sm text-brand-gray-light"
                  >
                    <option value="all">All Statuses</option>
                    {allStatuses.map((s) => (
                      <option key={s} value={s}>
                        {statusLabels[s]}
                      </option>
                    ))}
                  </select>
                  <select
                    value={manufacturer}
                    onChange={(e) => setManufacturer(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-brand-black-light border border-purple/30 text-sm text-brand-gray-light"
                  >
                    <option value="all">All Manufacturers</option>
                    {allManufacturers.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Equipment grid */}
              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map((item, i) => (
                    <div
                      key={item.id}
                      className={`transition-all duration-300 ease-out ${
                        animatingIn
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95"
                      }`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <EquipmentCard equipment={item} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-brand-gray text-lg">
                    No equipment matches your filters.
                  </p>
                  <button
                    onClick={() => {
                      setCategory("all");
                      setStatus("all");
                      setManufacturer("all");
                    }}
                    className="mt-4 text-purple-accent hover:text-purple-light transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
