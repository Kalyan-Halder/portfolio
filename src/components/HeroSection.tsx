import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center pt-20 hero-pattern relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p
              className={cn(
                'text-muted-foreground text-lg mb-2',
                isVisible && 'animate-fade-up'
              )}
            >
              Hi, I'm
            </p>
            <h1
              className={cn(
                'text-4xl sm:text-5xl lg:text-6xl font-bold mb-4',
                isVisible && 'animate-fade-up animation-delay-100'
              )}
            >
              <span className="gradient-text">Kalyan Kanti Halder</span>
            </h1>
            <p
              className={cn(
                'text-xl sm:text-2xl font-semibold text-foreground/90 mb-4',
                isVisible && 'animate-fade-up animation-delay-200'
              )}
            >
              Full-Stack Developer
            </p>
            <p
              className={cn(
                'text-lg text-primary font-medium italic mb-6',
                isVisible && 'animate-fade-up animation-delay-300'
              )}
            >
              "Building digital experiences from visual thoughts."
            </p>
            <p
              className={cn(
                'text-muted-foreground text-base sm:text-lg mb-8 max-w-lg leading-relaxed',
                isVisible && 'animate-fade-up animation-delay-400'
              )}
            >
              A dedicated developer who brings ideas to life with clean, functional code. 
              Committed to seeing every project through, from concept to completion.
            </p>

            {/* CTA Buttons */}
            <div
              className={cn(
                'flex flex-wrap gap-4 mb-8',
                isVisible && 'animate-fade-up animation-delay-500'
              )}
            >
              <Button
                variant="hero"
                onClick={() => handleScroll('#projects')}
              >
                View My Projects
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button
                variant="heroOutline"
                onClick={() => handleScroll('#contact')}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div
              className={cn(
                'flex gap-4',
                isVisible && 'animate-fade-up animation-delay-500'
              )}
            >
              <a
                href="https://github.com/kalyan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/kalyan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={cn(
              'order-1 lg:order-2 flex justify-center',
              isVisible && 'animate-slide-in-right animation-delay-200'
            )}
          >
          <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-full blur-2xl opacity-20 scale-110" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-lifted animate-float">
                <img 
                  src="https://i.postimg.cc/k4B9SMzd/self2.jpg" 
                  alt="Kalyan Kanti Halder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
