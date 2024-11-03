export interface TestimonialType {
    id: number;
    content: string;
    author: string;
    location: string;
    rating: number;
    projectType: string;
  } 


export const testimonials: TestimonialType[] = [
    {
        id: 1,
        content: "North Shore Landscaping turned our backyard into a paradise! Their attention to detail and commitment to sustainability made all the difference.",
        author: "Emily R.",
        location: "North Vancouver",
        rating: 5,
        projectType: "Complete Backyard Transformation"
      },
      {
        id: 2,
        content: "Professional, reliable, and creative. Our new garden is the envy of the neighborhood.",
        author: "James and Linda S.",
        location: "West Vancouver",
        rating: 5,
        projectType: "Garden Design & Installation"
      },
      {
        id: 3,
        content: "Their team transformed our outdoor space beyond our expectations. We love spending time in our new garden!",
        author: "Michael T.",
        location: "Deep Cove",
        rating: 5,
        projectType: "Landscape Renovation"
      },
  {
    id: 4,
    content: "The team's knowledge of native plants and sustainable practices really impressed us. Our garden is now both beautiful and eco-friendly.",
    author: "Sarah M.",
    location: "Lynn Valley",
    rating: 5,
    projectType: "Sustainable Garden Design"
  },
  {
    id: 5,
    content: "From concept to completion, their professionalism was outstanding. They transformed our sloped yard into a stunning terraced garden.",
    author: "David P.",
    location: "North Vancouver",
    rating: 5,
    projectType: "Terraced Landscaping"
  },
  {
    id: 6,
    content: "We love our new outdoor kitchen and entertainment area. It's become the heart of our summer gatherings.",
    author: "Robert & Amy K.",
    location: "West Vancouver",
    rating: 5,
    projectType: "Outdoor Living Space"
  },
  {
    id: 7,
    content: "Their maintenance service keeps our garden looking perfect year-round. Best investment we've made in our property.",
    author: "Patricia L.",
    location: "Deep Cove",
    rating: 5,
    projectType: "Garden Maintenance"
  },
  {
    id: 8,
    content: "The water feature they installed is stunning. The sound of flowing water has made our garden so peaceful.",
    author: "Thomas W.",
    location: "North Vancouver",
    rating: 5,
    projectType: "Water Feature Installation"
  },
  {
    id: 9,
    content: "They worked within our budget and still delivered beyond our expectations. True professionals!",
    author: "Jennifer H.",
    location: "West Vancouver",
    rating: 5,
    projectType: "Budget-Friendly Renovation"
  }
]; 