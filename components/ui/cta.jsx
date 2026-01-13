import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-orange-600 to-purple-500 rounded-3xl p-12 md:p-16 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Better Your Workflow?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join 10,000+ teams who are already working smarter with NodeUg.
            Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-purple bg-purple hover:bg-white/10 text-lg px-8">
              Schedule a Demo
            </Button>
          </div>
          {/* <p className="mt-6 text-sm opacity-75">
            Free 14-day trial • No credit card required • Cancel anytime
          </p> */}
        </div>
      </div>
    </section>
  );
}
