import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { ImageGallery } from "../ui/Image";

interface SetDetailsProps {
  set: {
    title: string;
    category: string;
    description: string;
    features: string[];
    images: Array<{ url: string; alt: string }>;
  };
}

export function SetDetails({ set }: SetDetailsProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <div>
        <Badge className="mb-4">{set.category}</Badge>
        <h1 className="text-4xl font-bold mb-4">{set.title}</h1>
        <p className="text-gray-600 text-lg mb-8">{set.description}</p>

        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-semibold">Features</h3>
          <ul className="space-y-2">
            {set.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <a href="/packages">
          <Button size="lg" className="w-full sm:w-auto">
            View Packages
          </Button>
        </a>
      </div>

      <div>
        <ImageGallery images={set.images} />
      </div>
    </div>
  );
}
