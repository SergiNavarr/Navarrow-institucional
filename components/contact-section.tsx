"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Mail, MapPin, MessageSquare, Send, Smartphone } from "lucide-react"

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Webhook de n8n para más adelante
        setTimeout(() => {
            setIsSubmitting(false)
            alert("¡Mensaje enviado! Nos pondremos en contacto a la brevedad.")
        }, 1500)
    }

    return (
        <section id="contacto" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Columna Izquierda: Trust Signals e Información */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                                Impulsemos su próximo proyecto
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Ya sea que necesite modernizar la presencia digital de su empresa,
                                optimizar procesos internos o asegurar el funcionamiento de su infraestructura,
                                estamos listos para ayudarlo.
                            </p>
                        </div>

                        <div className="space-y-6 overflow-hidden"> {/* Ocultamos desbordes extraños */}

                            {/* ÍTEM CORREO  */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-muted-foreground">Correo Corporativo</p>
                                    <a href="mailto:contacto@navarrow.com.ar" className="text-base sm:text-lg font-semibold hover:text-accent transition-colors break-all">
                                        contacto@navarrow.com.ar
                                    </a>
                                </div>
                            </div>

                            {/* ÍTEM UBICACIÓN  */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-accent" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-muted-foreground">Ubicación</p>
                                    <p className="text-base sm:text-lg font-semibold truncate">
                                        Corrientes, Argentina
                                    </p>
                                </div>
                            </div>

                            {/* ÍTEM WHATSAPP  */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <MessageSquare className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex flex-col items-start gap-1 flex-1 min-w-0">
                                    <p className="text-sm font-medium text-muted-foreground">Atención Directa</p>

                                    <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 mt-1 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 text-sm sm:text-base w-full sm:w-auto overflow-hidden">
                                        <a
                                            href="https://wa.me/5493794003967"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Smartphone className="w-4 h-4 shrink-0" />
                                            <span className="truncate">Iniciar chat por WhatsApp</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Columna Derecha: Formulario Estratégico */}
                    <div className="bg-background rounded-2xl p-4 sm:p-8 border border-border shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Nombre completo</label>
                                    <Input id="name" name="name" placeholder="Ej. Juan Pérez" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">WhatsApp / Teléfono</label>
                                    <Input id="phone" name="phone" placeholder="Ej. 379 4123456" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Correo electrónico</label>
                                <Input id="email" name="email" type="email" placeholder="su@negocio.com" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-sm font-medium">¿En qué podemos ayudarlo?</label>
                                <Select name="service" required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccione un servicio" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="web">Desarrollo Web y Sistemas</SelectItem>
                                        <SelectItem value="soporte">Soporte Técnico IT</SelectItem>
                                        <SelectItem value="automatizacion">Automatización de Procesos</SelectItem>
                                        <SelectItem value="otro">Otra consulta</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Detalles del proyecto</label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Cuéntenos un poco sobre las necesidades de su negocio..."
                                    className="min-h-[120px] resize-none"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-base sm:text-lg py-4 sm:py-6 whitespace-normal h-auto"
                                disabled={isSubmitting}
                            >
                                <span>{isSubmitting ? "Enviando..." : "Solicitar diagnóstico gratuito"}</span>
                                {!isSubmitting && <Send className="w-5 h-5 shrink-0" />}
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}