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
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-6 text-balance">
            The Two Pillars of NavArrow
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Our collection of tech services spans the core needs of modern businesses. 
            Explore how we help you transform.
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
                Pro Web Development
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We build high-performance, scalable web applications using modern 
                technologies. From concept to deployment, we deliver excellence.
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
                  <span className="text-sm">High-performance applications</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Shield className="w-4 h-4 text-accent" />
                  <span className="text-sm">Secure & scalable architecture</span>
                </div>
              </div>

              <button className="mt-8 flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                Learn more
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
                Specialized Technical Support
              </h3>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                Comprehensive IT solutions to keep your business running smoothly. 
                From hardware to software, we ensure optimal performance.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium">
                  Hardware
                </span>
                <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium">
                  Software
                </span>
                <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium">
                  Support
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/70">
                  <Cpu className="w-4 h-4 text-white" />
                  <span className="text-sm">Hardware maintenance</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Wrench className="w-4 h-4 text-white" />
                  <span className="text-sm">Software optimization</span>
                </div>
              </div>

              <button className="mt-8 flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
