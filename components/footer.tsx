import Link from "next/link"
import { ArrowUpRight, Linkedin, Twitter, Github, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-6">
              <span className="text-2xl font-bold text-white">Nav</span>
              <span className="text-2xl font-bold text-accent">Arrow</span>
              <ArrowUpRight className="w-5 h-5 text-accent -ml-1" />
            </Link>
            <p className="text-white/70 leading-relaxed mb-6">
              Your integrated technology partner. Empowering businesses with 
              professional web development and specialized technical support.
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

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  Hardware Maintenance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  Software Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-white/70">info@navarrow.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-white/70">Technology District<br />Innovation City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2026 NavArrow. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/50 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/50 hover:text-accent text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
