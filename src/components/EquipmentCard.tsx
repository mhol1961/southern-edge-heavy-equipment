import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Equipment } from "@/types";

interface EquipmentCardProps {
  equipment: Equipment;
  className?: string;
}

const statusColors: Record<string, string> = {
  "in-stock": "bg-green-600/80 text-white",
  available: "bg-purple/80 text-white",
  sold: "bg-brand-gray/60 text-brand-gray-light",
  "coming-soon": "bg-yellow-600/80 text-white",
};

const statusLabels: Record<string, string> = {
  "in-stock": "In Stock",
  available: "Available",
  sold: "Sold",
  "coming-soon": "Coming Soon",
};

export default function EquipmentCard({ equipment, className = "" }: EquipmentCardProps) {
  return (
    <div
      className={`group bg-brand-gray-dark rounded-lg border border-purple/20 overflow-hidden transition-all duration-300 hover:border-purple/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(123,45,142,0.15)] ${className}`}
    >
      <Link href={`/equipment/${equipment.slug}`} className="block">
        {/* Image */}
        <div className="relative h-[200px] overflow-hidden">
          <Image
            src={equipment.images[0]}
            alt={equipment.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
          <Badge
            className={`absolute top-3 right-3 text-xs font-semibold ${
              statusColors[equipment.status]
            } border-0`}
          >
            {statusLabels[equipment.status]}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-purple-accent">
            {equipment.category}
          </span>
          <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-brand-white mt-1 mb-2 group-hover:text-purple-accent transition-colors">
            {equipment.name}
          </h3>
          <p className="text-sm text-brand-gray line-clamp-2 mb-4">
            {equipment.shortDescription}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-heading font-bold text-purple-light text-lg">
              {equipment.price}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-purple-accent group-hover:translate-x-1 transition-transform">
              Details &rarr;
            </span>
          </div>
          {equipment.stockNumber && (
            <span className="block text-[10px] text-brand-gray mt-2">
              Stock #{equipment.stockNumber}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
