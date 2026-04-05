import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export interface Project {
  id: string
  title: string
  category: string
  description: string
  fullDescription: string
  tags: string[]
  mainImage: string
  galleryImages: string[]
  color: "accent" | "primary"
  link?: string
}

export function ProjectCard({ project, onClick }: { project: Project, onClick: () => void }) {
  const isAccent = project.color === "accent"

  const iconColor = isAccent ? "text-accent" : "text-primary"
  const hoverBorder = isAccent ? "hover:border-accent/50" : "hover:border-primary/50"
  const badgeBg = isAccent ? "bg-accent/10" : "bg-primary/10"
  const badgeText = isAccent ? "text-accent" : "text-primary"

  return (
    <Card
      onClick={onClick}
      className={`group cursor-pointer overflow-hidden border-border/50 ${hoverBorder} transition-all duration-300 bg-card flex flex-col h-full hover:shadow-lg`}
    >
      <CardContent className="p-0 flex flex-col h-full">

        {/* Cabecera con Imagen Real */}
        <div className="relative aspect-video w-full overflow-hidden border-b border-border/50 bg-muted/30">
          <Image
            src={project.mainImage}
            alt={`Captura del proyecto ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Cuerpo de la Tarjeta */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <span key={tag} className={`px-2.5 py-1 ${badgeBg} ${badgeText} rounded-md text-[11px] font-semibold uppercase tracking-wider`}>
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-primary mb-1">{project.title}</h3>
          <p className="text-sm font-medium text-muted-foreground mb-3">{project.category}</p>
          <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
            {project.description}
          </p>

          <button className={`mt-auto inline-flex items-center gap-2 ${iconColor} font-semibold text-sm group-hover:gap-3 transition-all w-fit`}>
            Ver galería y detalles <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  )
}