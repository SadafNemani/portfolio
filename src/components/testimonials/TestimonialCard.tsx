import { cn } from "@/lib/utils";

import { TestimonialContent } from "@/types/testimonials";

import GlassCard from "../ui/GlassCard";

import { Star } from "lucide-react";

interface TestimonialCardProps extends React.ComponentProps<typeof GlassCard> {
  testimonial: TestimonialContent;
}

export default function TestimonialCard({
  testimonial,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <GlassCard className={cn("flex flex-col items-start gap-6 p-7", className)} {...props}>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className={index < testimonial.stars ? "fill-accent text-accent" : "text-accent"}
          />
        ))}
      </div>
      <p className="text-text-primary text-section-description leading-[170%] font-medium tracking-[-0.03em]">
        {testimonial.review}
      </p>
      <span className="border-border border-b-2"></span>
      <div className="flex flex-col">
        <span className="text-body leading-[170%] font-semibold tracking-[-0.03em]">
          {testimonial.name}
        </span>
        <span className="font-regular text-text-secondary text-[14px] leading-[170%] tracking-[-0.03em]">
          {testimonial.workType}
        </span>
      </div>
    </GlassCard>
  );
}
