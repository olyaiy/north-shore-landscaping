import Image from 'next/image'
import { LocationIcon } from '../icons/location-icon'

export type ProjectCardProps = {
  title: string;
  location: string;
  description: string;
  workType: string;
  imageUrl: string;
}

export function ProjectCard({ title, location, description, workType, imageUrl }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
      {/* Image Container */}
      <div className="relative w-full h-[28rem] overflow-hidden">

          {/* Uncomment below and remove the div above when ready to use real images */}
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
          />

        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Project type badge */}
        <div className="absolute top-6 right-6">
          <span className="inline-block bg-white/90 backdrop-blur-sm text-emerald-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            {workType}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 bg-white">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-800 transition-colors duration-300">
            {title}
          </h3>
          
          <div className="flex items-center text-gray-600">
            <LocationIcon className="w-5 h-5 mr-2 text-emerald-600" />
            <span className="text-sm font-medium">{location}</span>
          </div>
          
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
} 