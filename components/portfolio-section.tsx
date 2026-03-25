import { ArrowUpRight, Sparkles, Layout, Code, Monitor } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Nuestro Trabajo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-6">
            Proyectos Destacados
          </h2>
        </div>

        {/* Sistema de Filtros con Tabs */}
        <Tabs defaultValue="webs" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-background border border-border p-1">
              <TabsTrigger value="webs">Sitios Web</TabsTrigger>
              <TabsTrigger value="software">Software</TabsTrigger>
            </TabsList>
          </div>

          {/*Webs de Negocios */}
          <TabsContent value="webs">
            <div className="max-w-4xl mx-auto">
              {renderBusinessProject()}
            </div>
          </TabsContent>

          {/*Proyectos de Software */}
          <TabsContent value="software">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {renderCodeBites()}
              {renderEventflow()}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground">
            Ver Todos los Proyectos
          </Button>
        </div>
      </div>
    </section>
  )
}


function renderBusinessProject() {
  return (
    <Card className="md:col-span-2 group overflow-hidden border-border hover:border-accent/30 transition-all duration-300 bg-card">
      <CardContent className="p-0">
        <div className="relative h-64 md:h-80 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/5 flex items-center justify-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />
          <div className="relative text-center px-8">
            <Layout className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-2">Plataforma de Gestión Empresarial</h3>
            <p className="text-muted-foreground italic">Solución para Estética y Bienestar</p>
          </div>
        </div>
        <div className="p-6">
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">React</span>
            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">.NET</span>
          </div>
          <p className="text-muted-foreground mb-4">Gestión de turnos e inventario optimizada para negocios locales.</p>
          <button className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
            Ver Caso de Éxito <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  )
}

function renderCodeBites() {
  return (
    <Card className="group border-border hover:border-accent/30 transition-all bg-card">
      <CardContent className="p-6">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
          <Code className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-bold text-primary mb-2">CodeBites</h3>
        <p className="text-muted-foreground text-sm">Plataforma de snippets y aprendizaje para desarrolladores.</p>
      </CardContent>
    </Card>
  )
}

function renderEventflow() {
  return (
    <Card className="group border-border hover:border-accent/30 transition-all bg-card">
      <CardContent className="p-6">
        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
          <Monitor className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-lg font-bold text-primary mb-2">Eventflow</h3>
        <p className="text-muted-foreground text-sm">Red Social orientada a la creacion de eventos comunitarios.</p>
      </CardContent>
    </Card>
  )
}