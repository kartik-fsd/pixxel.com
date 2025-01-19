import { ArrowRight } from "lucide-react";

interface SetCardProps {
  title: string;
  imageUrl: string;
  category: string;
  onClick?: () => void;
}

export function SetCard({ title, imageUrl, category, onClick }: SetCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
          {category}
        </span>
        <h3 className="mt-3 text-xl font-semibold">{title}</h3>
        <div className="mt-4 flex items-center text-primary">
          View Details
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
