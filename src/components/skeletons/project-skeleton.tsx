import { Skeleton } from '@/components/ui/skeleton';

export function ProjectSkeleton() {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-lg opacity-0" />
      <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-xl overflow-hidden">
        <Skeleton className="w-full h-48 bg-gray-800/50" />
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-6 w-3/4 bg-gray-800/50" />
            <Skeleton className="h-4 w-full bg-gray-800/50" />
            <Skeleton className="h-4 w-5/6 bg-gray-800/50" />
          </div>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-16 rounded-full bg-gray-800/50" />
            ))}
          </div>
          <div className="flex gap-3 pt-2">
            <Skeleton className="h-9 w-24 rounded-full bg-gray-800/50" />
            <Skeleton className="h-9 w-24 rounded-full bg-gray-800/50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProjectSkeleton key={i} />
      ))}
    </div>
  );
}
