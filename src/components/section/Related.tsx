import { SetCard } from "../ui/SetCard";

interface RelatedSetsProps {
  currentSetId: string;
}

export function RelatedSets({ currentSetId }: RelatedSetsProps) {
  const relatedSets = [
    {
      id: "mexican-street",
      title: "Mexican Street",
      imageUrl:
        "https://pixxelcity.com/wp-content/uploads/2023/03/IMG-20230114-WA0061.jpg",
      category: "Themed",
    },
    {
      id: "royale-touch",
      title: "Royale Touch",
      imageUrl:
        "https://pixxelcity.com/wp-content/uploads/2024/05/Royal-touch-5.jpeg",
      category: "Luxury",
    },
  ].filter((set) => set.id !== currentSetId);

  return (
    <section className="py-16 border-t border-border">
      <h2 className="text-3xl font-bold text-center mb-12">
        Explore More Sets
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {relatedSets.map((set) => (
          <SetCard
            key={set.id}
            title={set.title}
            imageUrl={set.imageUrl}
            category={set.category}
          />
        ))}
      </div>
    </section>
  );
}
