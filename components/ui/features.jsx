import { Zap, Shield, Users, BarChart3, Globe, Sparkles } from "lucide-react";


const features = [
  {
    icon: Zap,
    title: "Peer to Peer Networking",
    description: "Designed for young Ugandan developers, our platform ensures connection for sharing code , solving errors, and collaboration on real life projects at lightning speed."
  },
  {
    icon: Shield,
    title: "Software Security",
    description: "Peer to peer encryption to ensure your data and communications are always secure through LANs and direct messaging."
  },
  {
    icon: Users,
    title: "Project Collaboration",
    description: "Supports project collaboration  where active develoopers can receive and explain projects."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get actionable insights with comprehensive analytics and reporting features."
  },
  {
    icon: Globe,
    title: "Wide Access",
    description: "Send messages using both LANs for offline access and the internet for global reach."
  },
  {
    icon: Sparkles,
    title: "Terminal Powered",
    description: "Leverage terminal commands for advanced development workflows."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to Develop Software
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to help you collaborate, create, and deliver exceptional software.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjgyMDQyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Team collaboration"
              className="rounded-3xl shadow-xl w-full"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
            Built for Developers of All Kinds
            </h3>
            <p className="text-lg text-gray-600">
              Whether you're a python developer or any other language, NodeUg scales with your needs. 
              Our flexible platform adapts to your workflow, not the other way around.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong>Unlimited Projects:</strong> Create as many projects as you need without restrictions
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong>Custom Workflows:</strong> Design workflows that match your unique processes
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong>Project Collaboration:</strong> Connect with 100+ developers for error analysis
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
