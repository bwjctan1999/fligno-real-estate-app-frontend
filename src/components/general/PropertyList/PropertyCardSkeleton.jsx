export default function PropertyCardSkeleton() {
  return (
    <div className="max-w-full rounded-lg shadow-lg">
      <div className="aspect-video rounded-t-lg bg-Skeleton-end dark:bg-Skeleton-start"></div>
      <div className="flex flex-col gap-3 p-4">
        <div className="h-5 w-2/5 rounded bg-Skeleton-end dark:bg-Skeleton-start"></div>
        <div className="h-5 w-full rounded bg-Skeleton-end dark:bg-Skeleton-start"></div>
        <div className="h-5 w-1/2 rounded bg-Skeleton-end dark:bg-Skeleton-start"></div>
        <div className="flex justify-between">
          <div className="h-6 w-1/5 rounded bg-Skeleton-end dark:bg-Skeleton-start"></div>
          <div className="h-6 w-1/5 rounded bg-Skeleton-end dark:bg-Skeleton-start"></div>
          <div className="h-6 w-1/5 rounded bg-Skeleton-end dark:bg-Skeleton-start"></div>
        </div>
        <div className="h-6 w-3/5 rounded bg-Skeleton-end dark:bg-Skeleton-start"></div>
      </div>
    </div>
  );
}
