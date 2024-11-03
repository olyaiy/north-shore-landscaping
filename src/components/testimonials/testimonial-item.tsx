import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Leaf, Award, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialItemProps {
  content: string;
  author: string;
  location: string;
  projectType: string;
  rating: number;
  awards?: Array<'eco' | 'certified' | 'best'>;
}

export function TestimonialItem({ content, author, location, projectType, rating, awards = [] }: TestimonialItemProps) {
  return (
    <Card className="relative h-full transition-all duration-300 hover:shadow-lg bg-white border-0 group hover:-translate-y-1">
      <CardContent className="pt-6">
        <div className="absolute -top-6 left-6">
          <Avatar className="h-12 w-12 border-4 border-emerald-800 transition-transform group-hover:scale-110">
            <AvatarFallback className="bg-emerald-100 text-emerald-700 font-medium">
              {author.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>
        
        <div className="flex justify-between items-start mb-4 mt-6">
          <div>
            <div className="font-semibold text-emerald-800">{author}</div>
            <div className="text-sm text-gray-600">{location}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: rating }).map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="flex gap-2 border-l border-gray-200 pl-3">
              {awards.includes('eco') && (
                <Leaf className="w-4 h-4 text-emerald-600" />
              )}
              {awards.includes('certified') && (
                <Award className="w-4 h-4 text-blue-600" />
              )}
              {awards.includes('best') && (
                <Trophy className="w-4 h-4 text-yellow-600" />
              )}
            </div>
          </div>
        </div>
        
        <blockquote className="mt-6 space-y-4">
          <p className="text-[#333333] leading-relaxed">
            "{content}"
          </p>
       
        </blockquote>
      </CardContent>
    </Card>
  );
}
