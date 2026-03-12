import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Equipment } from "@/types";

interface EquipmentCardProps {
  equipment: Equipment;
  className?: string;
}

const statusColors: Record<string, string> = {
  "in-stock": "bg-green-600 text-white",
  available: "bg-purple text-white",
  sold: "bg-red-600/80 text-white",
  "coming-soon": "bg-amber-600 text-white",
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
      className={`group bg-brand-gray-dark rounded-lg border border-purple/20 overflow-hidden card-hover ${className}`}
    >
      <Link href={`/equipment/${equipment.slug}`} className="block">
        {/* Image with zoom */}
        <div className="relative h-[220px] img-zoom">
          <Image
            src={equipment.images[0]}
            alt={equipment.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/20 to-transparent" />
          <Badge
            className={`absolute top-3 right-3 text-xs font-bold tracking-wide ${
              statusColors[equipment.status]
            } border-0 shadow-lg`}
          >
            {statusLabels[equipment.status]}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.15em] text-purple-accent">
            {equipment.category}
          </span>
          <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-brand-white mt-1 mb-2 group-hover:text-purple-accent transition-colors leading-tight">
            {equipment.name}
          </h3>
          <p className="text-sm text-brand-gray line-clamp-2 mb-4 leading-relaxed">
            {equipment.shortDescription}
          </p>
          <div className="flex items-end justify-between">
            <div>
              <span className="block font-heading font-extrabold text-2xl text-purple-light leading-none">
                {equipment.price}
              </span>
              {equipment.stockNumber && (
                <span className="block text-[11px] text-brand-gray mt-1.5">
                  Stock #{equipment.stockNumber}
                </span>
              )}
            </div>
            <span className="inline-flex items-center gap-1 px-4 py-2 text-xs font-heading font-bold uppercase tracking-wide text-white bg-purple/20 border border-purple/40 rounded group-hover:bg-purple group-hover:border-purple group-hover:shadow-[0_0_15px_rgba(123,45,142,0.3)] transition-all">
              Details &rarr;
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
