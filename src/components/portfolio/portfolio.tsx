import { ProjectCard, ProjectCardProps } from './project-card'

const projects: ProjectCardProps[] = [
  {
    title: "Waterfront Estate Transformation",
    location: "Deep Cove, North Vancouver",
    description: "A harmonious blend of natural stone pathways, native coastal plants, and sophisticated outdoor living spaces that complement the stunning ocean views.",
    workType: "Full Landscape Design & Build",
    imageUrl: "/projects/waterfront-estate.jpg"
  },
  {
    title: "Forest Edge Sanctuary",
    location: "Lynn Valley",
    description: "Sustainable landscape design featuring rain gardens, local stone work, and drought-resistant plants, creating a peaceful transition between home and forest.",
    workType: "Ecological Landscaping",
    imageUrl: "/projects/forest-edge.jpg"
  },
  {
    title: "Contemporary Hillside Haven",
    location: "Upper Lonsdale",
    description: "Multi-level terraced gardens with modern concrete elements, built-in seating, and strategic lighting that maximizes the city and mountain views.",
    workType: "Modern Landscape Design",
    imageUrl: "/projects/hillside-haven.jpg"
  },
  {
    title: "Urban Garden Retreat",
    location: "Lower Lonsdale",
    description: "A compact yet luxurious outdoor space featuring a living wall, custom cedar pergola, and intimate entertainment areas perfect for urban living.",
    workType: "Urban Garden Design",
    imageUrl: "/projects/urban-retreat.jpg"
  },
];

export function Portfolio() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our portfolio of meticulously crafted outdoor spaces, 
            where innovative design meets the natural beauty of North Vancouver
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
} 