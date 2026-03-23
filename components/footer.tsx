import Link from "next/link"
import { ArrowUpRight, Linkedin, Twitter, Github, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Marca */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-6">
              <div className="flex items-center gap-1">
                <Image
                  src="/logo.png"
                  alt="NavArrow Logo"
                  width={150}
                  height={40}
                  className="h-10"
                  style={{ width: 'auto' }}
                  priority
                />
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed mb-6">
              Su socio tecnológico integral. Potenciamos empresas con
              desarrollo web profesional y soporte técnico especializado.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-bold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  Soporte Técnico
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  Mantenimiento de Hardware
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  Optimización de Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-bold text-lg mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  Carreras
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-white/70">info@navarrow.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-white/70">+54 (379) 000-0000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-white/70">Corrientes, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2026 NavArrow. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/50 hover:text-accent text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-white/50 hover:text-accent text-sm transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}