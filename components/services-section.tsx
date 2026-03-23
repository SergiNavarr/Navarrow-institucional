"use client"

import { Code2, Monitor, ArrowRight, Cpu, Wrench, Shield, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Qué hacemos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-6 text-balance">
            Los dos pilares de NavArrow
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Nuestra gama de servicios tecnológicos abarca las necesidades esenciales de las empresas modernas.
            Descubre cómo te ayudamos a transformarte.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Web Development Card */}
          <Card className="group relative overflow-hidden border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 bg-card">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="p-8 relative">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Code2 className="w-7 h-7 text-accent" />
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">
                Desarrollo web profesional
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Creamos aplicaciones web escalables y de alto rendimiento utilizando tecnologías modernas.
                Desde el concepto hasta la implementación, ofrecemos excelencia.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  React
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  Vite
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  .NET
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-sm">Aplicaciones de alto rendimiento</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Shield className="w-4 h-4 text-accent" />
                  <span className="text-sm">Arquitectura segura y escalable</span>
                </div>
              </div>

              <button className="mt-8 flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                Saber más
                <ArrowRight className="w-4 h-4" />
              </button>
            </CardContent>
          </Card>

          {/* IT Support Card */}
          <Card className="group relative overflow-hidden border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-primary">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="p-8 relative">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <Monitor className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Soporte Técnico Especializado
              </h3>

              <p className="text-white/70 mb-6 leading-relaxed">
                Soluciones integrales de IT para que tu negocio funcione sin interrupciones.
                Desde el hardware hasta el software, garantizamos un rendimiento óptimo.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium">
                  Hardware
                </span>
                <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium">
                  Software
                </span>
                <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium">
                  Soporte
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/70">
                  <Cpu className="w-4 h-4 text-white" />
                  <span className="text-sm">Mantenimiento de hardware</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Wrench className="w-4 h-4 text-white" />
                  <span className="text-sm">Optimización de software</span>
                </div>
              </div>

              <button className="mt-8 flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                Saber más
                <ArrowRight className="w-4 h-4" />
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}