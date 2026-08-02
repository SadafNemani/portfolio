export interface Testimonial {
  slug: string;
  stars: 1 | 2 | 3 | 4 | 5;
}

export interface TestimonialContent extends Testimonial {
  name: string;
  review: string;
}
