export interface Testimonial {
  slug: string;
  stars: 1 | 2 | 3 | 4 | 5;
  source?: {
    nameKey: string;
    href: string;
  };
}

export interface TestimonialContent extends Omit<Testimonial, "source"> {
  name: string;
  review: string;
  workType: string;
  source?: {
    name: string;
    href: string;
  };
}
