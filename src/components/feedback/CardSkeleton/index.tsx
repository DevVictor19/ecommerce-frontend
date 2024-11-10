export default function CardSkeleton() {
  return (
    <div className="flex max-h-[400px] w-96 flex-col gap-4">
      <div className="skeleton h-48 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
}
