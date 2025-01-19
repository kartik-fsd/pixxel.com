export const ImageSkeleton = () => (
  <div className="relative overflow-hidden rounded-xl bg-secondary/60">
    <div className="aspect-[4/5] w-full">
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </div>
  </div>
);
