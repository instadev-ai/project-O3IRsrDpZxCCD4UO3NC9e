import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <div className="relative isolate pt-14">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
            Itay is king
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Transform your business with our powerful SaaS solution. Experience the future of digital innovation today.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button size="lg">Get started</Button>
            <Button variant="outline" size="lg">
              Learn more
            </Button>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-xl sm:h-80 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-700 opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-opacity-80 text-xl font-medium">Your SaaS Platform</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
