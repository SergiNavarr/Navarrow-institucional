"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard, Project } from "@/components/project-card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// --- DATOS DEL PORTFOLIO ---
const portfolioData: Record<string, Project[]> = {
  webs: [
    {
      id: "louli",
      title: "Louli Studio",
      category: "Plataforma de Gestión y Reservas",
      description: "Landing page moderna con UX/UI & SEO optimizados para un centro de estética.",
      fullDescription: "Landing page moderna con UX/UI & SEO optimizados para un centro de estética.",
      tags: ["React", "Next.js", "Tailwind CSS"],
      mainImage: "/placeholder.jpg",
      galleryImages: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
      color: "accent",
      link: "https://louli.com.ar"
    },
    {
      id: "navarnica",
      title: "Navarnica",
      category: "E-Commerce",
      description: "Tienda online moderna con catálogo dinámico y carrito de compras para ventas locales.",
      fullDescription: "E-commerce desarrollado desde cero enfocado en la velocidad y la experiencia del usuario. Incluye un catálogo dinámico con filtros, integración de pasarelas de pago locales, y un panel autogestionable para que el dueño del negocio pueda actualizar precios y stock sin depender de terceros.",
      tags: ["Next.js", "React", "C#", "Stripe"],
      mainImage: "/placeholder.jpg",
      galleryImages: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
      color: "primary"
    }
  ],
  software: [
    {
      id: "codebites",
      title: "CodeBites",
      category: "Plataforma EdTech",
      description: "Plataforma de micro-learning y snippets de código para desarrolladores.",
      fullDescription: "Una plataforma educativa diseñada para consumir píldoras de conocimiento (bites) de programación. Cuenta con sistema de autenticación seguro, perfiles de usuario, guardado de snippets favoritos y un editor de código integrado en el navegador para practicar en tiempo real.",
      tags: ["React", ".NET", "SQL Server", "JWT"],
      mainImage: "/placeholder.jpg",
      galleryImages: ["/placeholder.jpg", "/placeholder.jpg"],
      color: "primary"
    },
    {
      id: "eventflow",
      title: "Eventflow",
      category: "App de Gestión de Eventos",
      description: "Red social orientada a la creación y asistencia de eventos comunitarios en tiempo real.",
      fullDescription: "Aplicación web progresiva (PWA) que conecta a organizadores de eventos con su comunidad. Permite crear eventos con geolocalización, gestionar listas de invitados mediante códigos QR y enviar notificaciones push en tiempo real a los asistentes.",
      tags: ["Next.js", "C#", "PostgreSQL", "WebSockets"],
      mainImage: "/placeholder.jpg",
      galleryImages: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
      color: "accent"
    }
  ]
}

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

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
              <TabsTrigger value="webs" className="px-6">Sitios Web</TabsTrigger>
              <TabsTrigger value="software" className="px-6">Software</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="webs" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {portfolioData.webs.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={() => handleOpenProject(project)} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="software" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {portfolioData.software.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={() => handleOpenProject(project)} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* MODAL DEL PROYECTO CON CARRUSEL */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-[95vw] sm:max-w-[700px] p-0 overflow-hidden max-h-[90vh] rounded-2xl flex flex-col">
          {selectedProject && (
            <>
              {/* Carrusel de Imágenes en la cabecera del modal */}
              <div className="relative bg-muted w-full">
                <Carousel className="w-full">
                  <CarouselContent>
                    {selectedProject.galleryImages.map((imgSrc, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-video sm:aspect-[21/9] w-full">
                          <Image 
                            src={imgSrc} 
                            alt={`${selectedProject.title} - Imagen ${index + 1}`} 
                            fill 
                            className="object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* Controles del carrusel (ocultos en pantallas muy chicas para no tapar la imagen) */}
                  <div className="hidden sm:block">
                    <CarouselPrevious className="left-4 bg-background/80 hover:bg-background" />
                    <CarouselNext className="right-4 bg-background/80 hover:bg-background" />
                  </div>
                </Carousel>
              </div>

              {/* Información del Proyecto (Scrollable) */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <DialogHeader className="text-left mb-6">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <DialogTitle className="text-2xl sm:text-3xl text-primary font-bold">
                      {selectedProject.title}
                    </DialogTitle>
                    {selectedProject.link && (
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors" title="Visitar proyecto">
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm font-medium text-accent uppercase tracking-wider">
                    {selectedProject.category}
                  </p>
                </DialogHeader>

                <DialogDescription className="text-base text-muted-foreground leading-relaxed mb-6">
                  {selectedProject.fullDescription}
                </DialogDescription>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">Tecnologías utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                  <Button onClick={() => setIsModalOpen(false)} className="w-full sm:w-auto">
                    Cerrar galería
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}