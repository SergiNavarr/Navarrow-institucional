import { ArrowUpRight, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Our Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-6 text-balance">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Explore our latest projects and see how we help businesses achieve 
            their digital transformation goals.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Featured Project */}
          <Card className="md:col-span-2 lg:col-span-2 group overflow-hidden border-border hover:border-accent/30 transition-all duration-300 bg-card">
            <CardContent className="p-0">
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/5 flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />
                <div className="relative text-center px-8">
                  <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Business Management Platform
                  </h3>
                  <p className="text-muted-foreground">
                    Web Application for Aesthetics & Business
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                    React
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                    .NET
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                    SQL Server
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A comprehensive web platform designed for business management and 
                  aesthetics services. Features include appointment scheduling, client 
                  management, and inventory tracking.
                </p>
                <button className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                  View Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Projects */}
          <div className="space-y-8">
            <Card className="group overflow-hidden border-border hover:border-accent/30 transition-all duration-300 bg-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">01</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  E-Commerce Platform
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Custom online store with integrated payment processing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-secondary text-muted-foreground rounded text-xs">
                    Vite
                  </span>
                  <span className="px-2 py-1 bg-secondary text-muted-foreground rounded text-xs">
                    Node.js
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-border hover:border-accent/30 transition-all duration-300 bg-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent">02</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  IT Infrastructure Overhaul
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Complete network and systems modernization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-secondary text-muted-foreground rounded text-xs">
                    Network
                  </span>
                  <span className="px-2 py-1 bg-secondary text-muted-foreground rounded text-xs">
                    Security
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
