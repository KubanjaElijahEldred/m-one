export default function PageSkeleton() {
  return (
    <div className="min-h-screen bg-night">
      {/* Nav skeleton */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-night px-4 py-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="skeleton-pulse h-12 w-32" />
          <div className="hidden gap-6 lg:flex">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="skeleton-pulse h-3 w-14" />
            ))}
          </div>
          <div className="skeleton-pulse h-10 w-36 rounded-full" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="space-y-5">
          <div className="skeleton-pulse h-3 w-28" />
          <div className="skeleton-pulse h-8 w-64" />
          <div className="skeleton-pulse h-14 w-full max-w-md" />
          <div className="skeleton-pulse h-4 w-full max-w-sm" />
          <div className="skeleton-pulse h-4 w-4/5 max-w-sm" />
          <div className="flex gap-3 pt-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="skeleton-pulse h-10 w-16 rounded-lg" />
            ))}
          </div>
          <div className="flex gap-4 pt-4">
            <div className="skeleton-pulse h-12 w-40 rounded-full" />
            <div className="skeleton-pulse h-12 w-48 rounded-full" />
          </div>
        </div>
        <div className="relative">
          <div className="skeleton-pulse aspect-[4/3] w-full rounded-lg" />
          <div className="skeleton-pulse absolute -left-4 top-8 h-28 w-36 rounded-lg" />
          <div className="skeleton-pulse absolute -right-4 bottom-16 h-32 w-40 rounded-lg" />
          <div className="skeleton-pulse absolute bottom-4 left-8 h-24 w-28 rounded-lg" />
        </div>
      </div>

      {/* Services skeleton */}
      <div className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="mb-10 flex flex-col items-center gap-3">
          <div className="skeleton-pulse h-3 w-24" />
          <div className="skeleton-pulse h-10 w-48" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="skeleton-pulse h-56 rounded-lg" />
          ))}
        </div>
      </div>
      </div>

      {/* Gallery skeleton */}
      <div className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          <div className="skeleton-pulse h-3 w-28" />
          <div className="skeleton-pulse h-10 w-72" />
          <div className="skeleton-pulse h-4 w-full max-w-sm" />
          <div className="skeleton-pulse h-12 w-40 rounded-full" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="skeleton-pulse col-span-2 h-48 rounded-lg" />
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="skeleton-pulse h-28 rounded-lg" />
          ))}
        </div>
      </div>
      </div>

      {/* Stats skeleton */}
      <div className="border-y border-slate-100 bg-slate-50/80 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 lg:grid-cols-4 lg:px-8">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="flex flex-col items-center gap-3">
              <div className="skeleton-pulse h-12 w-12 rounded-full" />
              <div className="skeleton-pulse h-8 w-20" />
              <div className="skeleton-pulse h-3 w-28" />
            </div>
          ))}
        </div>
      </div>

      {/* Contact skeleton */}
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <div className="skeleton-pulse mx-auto h-3 w-36" />
        <div className="skeleton-pulse mx-auto mt-4 h-12 w-full max-w-lg" />
        <div className="mt-8 flex justify-center gap-4">
          <div className="skeleton-pulse h-12 w-40 rounded-full" />
          <div className="skeleton-pulse h-12 w-48 rounded-full" />
        </div>
      </div>
    </div>
  )
}
