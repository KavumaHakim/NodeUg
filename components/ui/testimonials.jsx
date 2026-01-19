import { Star } from "lucide-react";
import { motion } from "framer-motion";

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
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Loved by Developers Nationwide
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers have to say about their experience with NodeUg.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.02 , y: -5}}
            className="bg-white rounded-2xl p-8 shadow-sm hover:scale-101 ">
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
              className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div key={i}
                  initial={{ scale: 0 , rotate: -180}}
                  animate={{ scale: 1 , rotate: 0}}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.15 + 0.2 + i * 0.1 }}>
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </motion.div>
              
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
