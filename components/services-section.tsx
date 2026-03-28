"use client"

import { useState } from "react"
import { Code2, Monitor, ArrowRight, Cpu, Wrench, Shield, Zap, Database, Server, Smartphone, Bot, Network, Lock, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// --- DATOS DE LOS SERVICIOS ---
const servicesData = [
  {
    id: "web",
    title: "Desarrollo Web",
    shortDesc: "Presencia digital profesional. Sitios web rápidos, seguros y optimizados para destacar tu marca.",
    fullDesc: "Creamos la sucursal digital de tu negocio. No hacemos simples páginas; desarrollamos sitios web corporativos y landing pages de alto rendimiento enfocadas en la conversión. Utilizamos tecnologías modernas para garantizar tiempos de carga ultrarrápidos y un diseño que se adapta perfectamente a cualquier dispositivo.",
    icon: Code2,
    color: "accent", // Cian
    tags: ["React", "Next.js", "SEO", "UI/UX"],
    features: [
      { icon: Zap, text: "Carga ultrarrápida (Vite/Next.js)" },
      { icon: Smartphone, text: "Diseño 100% responsivo" },
      { icon: Shield, text: "Seguridad y certificados SSL" }
    ],
    whatsappMsg: "Hola NavArrow, me interesa el servicio de Desarrollo Web. Me gustaría modernizar la presencia digital de mi negocio.",
    comingSoon: false
  },
  {
    id: "sistemas",
    title: "Sistemas a Medida",
    shortDesc: "Software diseñado específicamente para resolver los cuellos de botella y organizar tu empresa.",
    fullDesc: "Transformamos tu forma de trabajar. Desarrollamos software de gestión (ERP, CRM, sistemas de turnos o inventario) adaptado exactamente a las reglas de tu negocio. Si Excel ya no es suficiente, construimos una plataforma robusta y escalable que centraliza tu información y optimiza tus procesos diarios.",
    icon: Database,
    color: "primary", // Azul oscuro
    tags: [".NET", "C#", "PostgreSQL", "APIs"],
    features: [
      { icon: Server, text: "Arquitectura sólida y escalable" },
      { icon: Lock, text: "Bases de datos seguras" },
      { icon: Network, text: "Integración con otros sistemas" }
    ],
    whatsappMsg: "Hola NavArrow, necesito un Sistema a Medida. Quiero digitalizar y organizar los procesos de mi empresa.",
    comingSoon: false
  },
  {
    id: "soporte",
    title: "Soporte Técnico IT",
    shortDesc: "Mantenimiento preventivo y correctivo para que la tecnología de tu negocio nunca se detenga.",
    fullDesc: "Somos el departamento de sistemas de tu Pyme. Ofrecemos abonos mensuales y asistencia a demanda para asegurar que tus computadoras, redes y software funcionen sin interrupciones. Desde el diagnóstico de hardware hasta la configuración de redes y respaldos de seguridad automáticos.",
    icon: Monitor,
    color: "accent",
    tags: ["Hardware", "Software", "Redes", "Backups"],
    features: [
      { icon: Cpu, text: "Upgrades y reparación de PC" },
      { icon: Wrench, text: "Instalación y optimización de SO" },
      { icon: Shield, text: "Copias de seguridad y prevención" }
    ],
    whatsappMsg: "Hola NavArrow, busco información sobre el Soporte Técnico IT para el mantenimiento de mis equipos.",
    comingSoon: false
  },
  {
    id: "ia",
    title: "Automatización & IA",
    shortDesc: "Chatbots inteligentes y flujos automáticos para ahorrar horas de trabajo manual.",
    fullDesc: "El futuro de la eficiencia operativa. Conectamos tus herramientas diarias y creamos asistentes virtuales capaces de atender clientes, agendar turnos o clasificar información automáticamente 24/7.",
    icon: Bot,
    color: "primary",
    tags: ["n8n", "OpenAI", "Chatbots", "APIs"],
    features: [
      { icon: Zap, text: "Flujos de trabajo automáticos" },
      { icon: MessageSquare, text: "Asistentes virtuales en WhatsApp" },
      { icon: Network, text: "Conexión entre apps de tu negocio" }
    ],
    whatsappMsg: "",
    comingSoon: true
  }
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (service: typeof servicesData[0]) => {
    if (service.comingSoon) return
    setSelectedService(service)
    setIsModalOpen(true)
  }

  // Generador del link de WhatsApp
  const getWhatsAppLink = (message: string) => {
    const phone = "5493794003967"
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="servicios" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Qué hacemos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-6 text-balance">
            Los pilares de NavArrow
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Soluciones tecnológicas integrales diseñadas para resolver los problemas reales de tu negocio y prepararlo para escalar.
          </p>
        </div>

        {/* Service Cards Grid*/}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesData.map((service) => {
            const Icon = service.icon
            const isAccent = service.color === "accent"
            const bgHoverClass = isAccent ? "group-hover:bg-accent/20" : "group-hover:bg-primary/20"
            const textClass = isAccent ? "text-accent" : "text-primary"
            const bgClass = isAccent ? "bg-accent/10" : "bg-primary/10"
            const borderHoverClass = isAccent ? "hover:border-accent hover:shadow-accent/10" : "hover:border-primary hover:shadow-primary/10"

            return (
              <Card 
                key={service.id}
                onClick={() => handleOpenModal(service)}
                className={`group relative overflow-hidden border-border/50 transition-all duration-300 hover:shadow-xl bg-card ${
                  service.comingSoon ? "opacity-75 cursor-not-allowed grayscale-[0.3]" : `cursor-pointer ${borderHoverClass}`
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${isAccent ? 'from-accent/5' : 'from-primary/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <CardContent className="p-8 relative h-full flex flex-col">
                  {/* Etiqueta Próximamente */}
                  {service.comingSoon && (
                    <div className="absolute top-6 right-6 bg-muted text-muted-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      Próximamente
                    </div>
                  )}

                  <div className={`w-14 h-14 ${bgClass} rounded-2xl flex items-center justify-center mb-6 transition-colors ${!service.comingSoon && bgHoverClass}`}>
                    <Icon className={`w-7 h-7 ${textClass}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {service.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map(tag => (
                      <span key={tag} className={`px-3 py-1 ${bgClass} ${textClass} rounded-full text-xs font-medium`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button 
                    disabled={service.comingSoon}
                    className={`mt-auto flex items-center gap-2 font-semibold transition-all ${
                      service.comingSoon ? "text-muted-foreground" : `${textClass} group-hover:gap-3`
                    }`}
                  >
                    {service.comingSoon ? "En desarrollo" : "Saber más"}
                    {!service.comingSoon && <ArrowRight className="w-4 h-4" />}
                  </button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Modal / Dialog de Detalles del Servicio */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-[95vw] sm:max-w-[550px] p-5 sm:p-8 max-h-[90vh] overflow-y-auto rounded-2xl">
          {selectedService && (
            <>
              <DialogHeader className="text-left">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${selectedService.color === 'accent' ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'}`}>
                   <selectedService.icon className="w-6 h-6" />
                </div>
                <DialogTitle className="text-xl sm:text-2xl text-primary">{selectedService.title}</DialogTitle>
                <DialogDescription className="text-sm sm:text-base text-muted-foreground pt-3 leading-relaxed">
                  {selectedService.fullDesc}
                </DialogDescription>
              </DialogHeader>

              <div className="py-2 sm:py-4">
                <h4 className="font-semibold text-primary mb-3 text-sm sm:text-base">Incluye:</h4>
                <div className="space-y-2 sm:space-y-3">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start sm:items-center gap-3 text-muted-foreground">
                      <feature.icon className={`w-5 h-5 shrink-0 mt-0.5 sm:mt-0 ${selectedService.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
                      <span className="text-sm sm:text-base leading-tight">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-2 sm:mt-4 flex flex-col gap-3">
                <Button asChild className={`w-full gap-2 text-base sm:text-lg py-5 sm:py-6 h-auto whitespace-normal ${selectedService.color === 'accent' ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : 'bg-primary hover:bg-primary/90 text-primary-foreground'}`}>
                  <a 
                    href={getWhatsAppLink(selectedService.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Smartphone className="w-5 h-5 shrink-0" />
                    <span>Consultar por este servicio</span>
                  </a>
                </Button>
                <Button variant="outline" onClick={() => setIsModalOpen(false)} className="py-5 sm:py-6 h-auto">
                  Cerrar
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}