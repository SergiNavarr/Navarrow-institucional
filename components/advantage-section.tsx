import { GraduationCap, Shield, Layers, Clock, CheckCircle } from "lucide-react"

export function AdvantageSection() {
  const advantages = [
    {
      icon: GraduationCap,
      title: "University-Educated Team",
      description: "Our Analyst Programmers hold university degrees, bringing academic rigor and professional expertise to every project."
    },
    {
      icon: Layers,
      title: "Clean Architecture",
      description: "We follow industry best practices and clean code principles to deliver maintainable, scalable solutions."
    },
    {
      icon: Shield,
      title: "Reliability & Security",
      description: "Your business deserves dependable systems. We build with security and reliability as core principles."
    },
    {
      icon: Clock,
      title: "Professional Maintenance",
      description: "Our maintenance plans ensure your systems stay updated, secure, and performing at their best."
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-6 text-balance">
              The NavArrow Advantage
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
              We combine academic excellence with real-world experience. Our team of 
              university-educated Analyst Programmers delivers professional solutions 
              that stand the test of time.
            </p>

            <div className="space-y-4">
              {["Certified developers", "Agile methodology", "24/7 support available", "Long-term partnerships"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div 
                key={advantage.title}
                className={`p-6 rounded-2xl border border-border hover:border-accent/30 transition-colors ${
                  index % 2 === 0 ? 'bg-secondary/50' : 'bg-card'
                }`}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <advantage.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
