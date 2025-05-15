import { Badge } from "./Badge";

interface SetCardProps {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

export function SetCard({ id, title, imageUrl, category }: SetCardProps) {
  return (
    <a href={`/sets/${id}`} className="group">
      <div className="bg-card rounded-xl overflow-hidden border border-border shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="relative h-[260px] w-full">
          <img
            src={imageUrl}
            alt={`${title} photography set at Pixxel City Nagpur`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm">
            {category}
          </Badge>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center mt-2">
            <span className="text-sm text-muted-foreground">
              Premium Photography Space
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
