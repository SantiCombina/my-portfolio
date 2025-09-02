import { Skeleton } from '@/components/ui';

export function SkillSkeleton() {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-lg opacity-0" />
      <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <Skeleton className="w-16 h-16 rounded-lg bg-gray-800/50" />
          <div className="space-y-2 w-full">
            <Skeleton className="h-5 w-3/4 mx-auto bg-gray-800/50" />
            <Skeleton className="h-4 w-1/2 mx-auto bg-gray-800/50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkillsSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <SkillSkeleton key={i} />
      ))}
    </div>
  );
}
