import Image from "next/image";
import type { Review } from "@/lib/data";
import { Rating } from "./rating";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="bg-white rounded-[var(--radius-card)] p-5 md:p-6 shadow-[var(--shadow-elev-1)]">
      <header className="flex items-center gap-3">
        {review.avatar && (
          <div className="relative h-11 w-11 rounded-full overflow-hidden bg-primary-100 shrink-0">
            <Image src={review.avatar} alt={review.author} fill sizes="44px" className="object-cover" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="font-bold text-indigo-600 truncate">{review.author}</p>
          <Rating value={review.rating} />
        </div>
      </header>
      {review.title && (
        <p className="mt-3 text-indigo-600 font-semibold italic text-sm">
          &ldquo;{review.title}&rdquo;
        </p>
      )}
      {review.images && review.images.length > 0 && (
        <div className="mt-3 grid grid-cols-4 gap-2">
          {review.images.slice(0, 4).map((img) => (
            <div key={img} className="relative aspect-square rounded-lg overflow-hidden bg-primary-50">
              <Image src={img} alt="Review image" fill sizes="120px" className="object-cover" />
            </div>
          ))}
        </div>
      )}
      <p className="mt-3 text-ink-500 text-sm leading-relaxed">{review.content}</p>
      <p className="mt-3 text-xs text-ink-400">{review.date}</p>
    </article>
  );
}
