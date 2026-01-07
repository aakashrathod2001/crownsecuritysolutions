export interface Testimonial {
  id: number;
  quote: string;
  companyLogo: string;
  companyName: string;
  personName: string;
  title: string;
  rating: number;
}

export interface VideoTestimonial {
  id: number;
  thumbnail: string;
  videoUrl?: string;
}

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    thumbnail: "https://placehold.co/300x600.png",
    videoUrl: "/videos/sample.mp4",
  },
  {
    id: 2,
    thumbnail: "https://placehold.co/300x600.png",
    videoUrl: "/videos/sample.mp4",
  },
  {
    id: 3,
    thumbnail: "https://placehold.co/300x600.png",
    videoUrl: "/videos/sample.mp4",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "From the conceptual big picture thinking, to the fine details, Afundi offer a wealth of knowledge and experience that would be invaluable to any business owner.",
    companyLogo: "ATLA",
    companyName: "Atla Group",
    personName: "Phill Butler",
    title: "Director, Atla Group",
    rating: 4,
  },
  {
    id: 2,
    quote: "From the conceptual big picture thinking, to the fine details, Afundi offer a wealth of knowledge and experience that would be invaluable to any business owner.",
    companyLogo: "ATLA",
    companyName: "Atla Group",
    personName: "Phill Butler",
    title: "Director, Atla Group",
    rating: 4,
  },
  {
    id: 3,
    quote: "From the conceptual big picture thinking, to the fine details, Afundi offer a wealth of knowledge and experience that would be invaluable to any business owner.",
    companyLogo: "ATLA",
    companyName: "Atla Group",
    personName: "Phill Butler",
    title: "Director, Atla Group",
    rating: 4,
  },
  {
    id: 4,
    quote: "From the conceptual big picture thinking, to the fine details, Afundi offer a wealth of knowledge and experience that would be invaluable to any business owner.",
    companyLogo: "ATLA",
    companyName: "Atla Group",
    personName: "Phill Butler",
    title: "Director, Atla Group",
    rating: 4,
  },
  {
    id: 5,
    quote: "From the conceptual big picture thinking, to the fine details, Afundi offer a wealth of knowledge and experience that would be invaluable to any business owner.",
    companyLogo: "ATLA",
    companyName: "Atla Group",
    personName: "Phill Butler",
    title: "Director, Atla Group",
    rating: 4,
  },
  {
    id: 6,
    quote: "From the conceptual big picture thinking, to the fine details, Afundi offer a wealth of knowledge and experience that would be invaluable to any business owner.",
    companyLogo: "ATLA",
    companyName: "Atla Group",
    personName: "Phill Butler",
    title: "Director, Atla Group",
    rating: 4,
  },
];
