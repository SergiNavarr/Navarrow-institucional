import { ArrowRight, Code2, Layers, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Equipo especializado con estudios universitarios
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6 text-balance">
            NavArrow: su socio{" "}
            <span className="text-accent">tecnológico integral</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Impulsamos a las empresas con desarrollo web profesional y soporte técnico especializado.
            Soluciones de alto rendimiento para la era moderna.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 px-8 py-6 text-lg"
            >
              Obtenga un diagnóstico gratuito
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground gap-2 px-8 py-6 text-lg"
            >
              Más información
            </Button>
          </div>

          {/* Visual Elements */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Code2 className="w-8 h-8 text-accent" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Stack Moderno</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Layers className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Clean Architecture</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Alta Performance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
