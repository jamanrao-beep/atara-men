import { useState } from "react";
import FadeIn from "./FadeIn";

const mockReviews = [
  {
    id: 1,
    author: "Arjun K.",
    rating: 5,
    date: "August 12, 2026",
    title: "Exceptional craftsmanship",
    content: "The fabric and embroidery are absolutely stunning. I wore this for my brother's wedding and received compliments all night. The fit was perfect straight out of the box.",
    verified: true,
  },
  {
    id: 2,
    author: "Vikram S.",
    rating: 5,
    date: "July 28, 2026",
    title: "Worth every penny",
    content: "You can really feel the quality of the material. The zardozi work is intricate and catches the light beautifully. Delivery was prompt and the packaging felt incredibly premium.",
    verified: true,
  },
  {
    id: 3,
    author: "Rahul M.",
    rating: 4,
    date: "June 15, 2026",
    title: "Great quality, slightly long",
    content: "The piece is gorgeous and very well made. Being 5'8\", the length was slightly longer than I preferred, but it was easily altered. The customer service team was very helpful.",
    verified: true,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={star <= rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className={star <= rating ? "text-antique-gold" : "text-cashmere"}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductReviews() {
  return (
    <div className="border-t border-cashmere pt-16 mt-8">
      <FadeIn>
        <h2 className="text-3xl font-serif text-obsidian mb-10 text-center">Customer Reviews</h2>
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Aggregate Column */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
            <div className="flex items-end gap-4 mb-4">
              <span className="text-6xl font-serif text-obsidian leading-none">4.8</span>
              <div className="pb-1">
                <StarRating rating={5} />
                <p className="text-xs text-charcoal mt-1">Based on 24 reviews</p>
              </div>
            </div>
            
            <div className="w-full max-w-sm mt-6 space-y-3">
              {[
                { stars: 5, pct: 85 },
                { stars: 4, pct: 10 },
                { stars: 3, pct: 5 },
                { stars: 2, pct: 0 },
                { stars: 1, pct: 0 },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-4 text-xs text-charcoal">
                  <span className="w-12">{row.stars} Stars</span>
                  <div className="flex-1 h-1.5 bg-cashmere rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-antique-gold" 
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="w-8 text-right">{row.pct}%</span>
                </div>
              ))}
            </div>
            
            <button className="btn-secondary w-full max-w-sm py-4 text-sm mt-8">
              Write a Review
            </button>
          </div>

          {/* Reviews List */}
          <div className="w-full lg:w-2/3 space-y-10">
            {mockReviews.map((review) => (
              <div key={review.id} className="border-b border-cashmere pb-10 last:border-0">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <StarRating rating={review.rating} />
                    <h4 className="text-sm font-medium text-obsidian mt-3 mb-1">{review.title}</h4>
                    <div className="flex items-center gap-2 text-xs text-charcoal">
                      <span className="font-medium text-obsidian">{review.author}</span>
                      {review.verified && (
                        <>
                          <span>•</span>
                          <span className="text-antique-gold flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            Verified Buyer
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-charcoal">{review.date}</span>
                </div>
                <p className="text-sm text-charcoal font-light leading-relaxed">
                  {review.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
