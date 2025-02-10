import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <div className="relative flex min-h-screen overflow-hidden bg-background">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:60px_60px] dark:bg-grid-slate-100/[0.03]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 via-transparent to-blue-500/30 dark:from-purple-500/20 dark:to-blue-500/20" />
      
      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      
      {/* Content */}
      <div className="container relative flex min-h-screen flex-col items-center justify-center">
        <div className="mx-auto max-w-3xl text-center">
          {/* Floating Badge */}
          <div className="mb-6 inline-block rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-6 py-2 dark:from-purple-500/20 dark:to-blue-500/20">
            <span className="text-sm font-medium tracking-wide text-foreground/80">
              Welcome to the Future
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl">
            Itay is king
          </h1>
          
          {/* Description */}
          <p className="mb-12 text-xl text-muted-foreground">
            Experience the next generation of digital innovation. Transform your business with our cutting-edge SaaS platform.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
            <Button size="lg" variant="outline" className="border-foreground/20">
              Learn More
            </Button>
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { number: '10K+', label: 'Active Users' },
              { number: '99.9%', label: 'Uptime SLA' },
              { number: '24/7', label: 'Support' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center rounded-xl bg-foreground/[0.03] p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
