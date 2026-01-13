import 'react'
import '../index.css'
import { Button } from "@/components/ui/button"
import { Header } from '@/components/ui/header'
import { Hero } from '@/components/ui/hero'
import { Footer } from '@/components/ui/footer'
import { Pricing } from '@/components/ui/pricing'
import { Testimonials } from '@/components/ui/testimonials'
import { CTA } from '@/components/ui/cta'
import { Features } from '@/components/ui/features'
import { Sponsors } from '@/components/ui/sponsors'


function Landing() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Hero />
            <Sponsors />
            <Features />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
)
}

export default Landing
