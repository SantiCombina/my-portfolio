import { Skeleton } from '@/components/ui';

export function SkillSkeleton() {
  return (
    <div className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.07] w-28">
      <Skeleton className="w-8 h-8 rounded-lg bg-white/[0.08]" />
      <Skeleton className="h-3 w-14 bg-white/[0.08]" />
    </div>
  );
}

export function SkillsSkeletonSection() {
  return (
    <section id="skills" className="py-20 min-h-[500px] flex items-center justify-center">
      <div className="flex flex-col container items-center justify-center gap-5">
        <div className="text-center space-y-2">
          <Skeleton className="h-6 w-32 mx-auto bg-white/[0.08]" />
          <Skeleton className="h-12 w-64 mx-auto bg-white/[0.08]" />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-4xl">
          {Array.from({ length: 12 }).map((_, i) => (
            <SkillSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <SkillSkeleton key={i} />
      ))}
    </div>
  );
}
