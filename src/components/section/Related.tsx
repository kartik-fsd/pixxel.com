import { useState, useEffect } from "react";
import { SetCard } from "../ui/SetCard";

interface Set {
  id: string;
  title: string;
  category: string;
  images: { url: string; alt: string }[];
}

interface RelatedSetsProps {
  currentSetId: string;
}

export function RelatedSets({ currentSetId }: RelatedSetsProps) {
  const [relatedSets, setRelatedSets] = useState<Set[]>([]);

  useEffect(() => {
    // This function fetches the sets data and filters for related sets
    const fetchRelatedSets = async () => {
      try {
        // In Astro, we need to use dynamic import for JSON
        const setsData = await import("../../data/setsDat.json");
        const sets = setsData.sets || [];

        // Find the current set to get its category
        const currentSet = sets.find((set: Set) => set.id === currentSetId);

        if (!currentSet) return;

        // Find sets of the same category, excluding the current set
        let sameCategorySets = sets.filter(
          (set: Set) =>
            set.id !== currentSetId && set.category === currentSet.category
        );

        // If we don't have at least 2 sets in the same category,
        // add some from different categories
        if (sameCategorySets.length < 2) {
          const otherSets = sets.filter(
            (set: Set) =>
              set.id !== currentSetId && set.category !== currentSet.category
          );

          // Randomly select sets to reach a total of at least 2
          const neededSets = 2 - sameCategorySets.length;
          const randomSets = otherSets
            .sort(() => 0.5 - Math.random())
            .slice(0, neededSets);

          sameCategorySets = [...sameCategorySets, ...randomSets];
        }

        // Limit to just 2 sets for display
        const limitedSets = sameCategorySets.slice(0, 2);

        setRelatedSets(limitedSets);
      } catch (error) {
        console.error("Error loading related sets:", error);
        setRelatedSets([]);
      }
    };

    fetchRelatedSets();
  }, [currentSetId]);

  // If we couldn't load any related sets, don't render the section
  if (relatedSets.length === 0) return null;

  return (
    <section className="py-16 border-t border-border">
      <h2 className="text-3xl font-bold text-center mb-12">
        Explore More Sets
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {relatedSets.map((set) => (
          <SetCard
            key={set.id}
            id={set.id}
            title={set.title}
            imageUrl={set.images[0]?.url}
            category={set.category}
          />
        ))}
      </div>
    </section>
  );
}
