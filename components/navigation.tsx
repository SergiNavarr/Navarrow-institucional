"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 -mt-1">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Portfolio
            </Link>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-4">
            <Link
              href="#services"
              className="block text-muted-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="block text-muted-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Contact Us
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
