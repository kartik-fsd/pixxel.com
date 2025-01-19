import { Camera, Clock, Users } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { ImageGallery } from "../ui/Image";

interface SetDetailsProps {
  set: {
    title: string;
    category: string;
    description: string;
    features: string[];
    specifications: {
      duration: string;
      capacity: string;
      equipment: string;
    };
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

        <div className="space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            <span>Duration: {set.specifications.duration}</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-primary" />
            <span>Capacity: {set.specifications.capacity}</span>
          </div>
          <div className="flex items-center gap-3">
            <Camera className="h-5 w-5 text-primary" />
            <span>Equipment: {set.specifications.equipment}</span>
          </div>
        </div>

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

        <Button size="lg" className="w-full sm:w-auto">
          Book This Set
        </Button>
      </div>

      <div>
        <ImageGallery images={set.images} />
      </div>
    </div>
  );
}
