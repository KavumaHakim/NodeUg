import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Hakim Kavuma",
    role: "Software Engineer, Technova",
    content: "NodeUg has transformed the way i manage projects. The intuitive design and powerful features have boosted our team's productivity significantly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjgyNDM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Travour Impulse",
    role: "Software Engineer, Technova",
    content: "The best development tool i have ever used. The features are game-changing, and the interface is incredibly intuitive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjgyNDM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Hasty",
    role: "Software Engineer, Technova",
    content: "Finally a tool that i can actually enjoy using. The collaboration features are seamless and the customer support is outstanding.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjgyNDM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Niiwe Clive Jesus",
    role: "Software Engineer, Technova",
    content: "This has completely changed the way I handle my projects. The efficiency and ease of use are unparalleled.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjgyNDM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Tusubira Laura",
    role: "Software Engineer, Technova",
    content: "An essential tool for any developer. The project management capabilities have streamlined my workflow and improved team collaboration.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjgyNDM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Loved by Developers Nationwide
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers have to say about their experience with NodeUg.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
