import { GraduationCap, Shield, Layers, Clock, CheckCircle } from "lucide-react"

export function AdvantageSection() {
  const advantages = [
    {
      icon: GraduationCap,
      title: "Equipo Universitario",
      description: "Nuestro equipo cuenta con títulos universitarios, aportando rigor académico y experiencia profesional a cada proyecto."
    },
    {
      icon: Layers,
      title: "Arquitectura Limpia",
      description: "Seguimos las mejores prácticas de la industria y principios de 'Clean Code' para entregar soluciones escalables y fáciles de mantener."
    },
    {
      icon: Shield,
      title: "Confiabilidad y Seguridad",
      description: "Su empresa merece sistemas estables. Construimos bajo principios fundamentales de seguridad y alta disponibilidad."
    },
    {
      icon: Clock,
      title: "Mantenimiento Profesional",
      description: "Nuestros planes de abono aseguran que sus sistemas se mantengan actualizados, seguros y rindiendo al máximo nivel."
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenido Izquierdo */}
          <div>
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Por qué elegirnos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-6 text-balance">
              La Diferencia NavArrow
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
              Combinamos la excelencia académica con experiencia real en el mercado. Nuestro equipo de 
              Analistas Programadores Universitarios entrega soluciones profesionales diseñadas 
              para perdurar en el tiempo.
            </p>

            <div className="space-y-4">
              {[
                "Desarrolladores certificados", 
                "Metodologías ágiles", 
                "Soporte técnico especializado", 
                "Alianzas a largo plazo"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cuadrícula Derecha */}
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