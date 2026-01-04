import { Quote, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div
            className={cn(
              'flex justify-center',
              isVisible && 'animate-slide-in-left'
            )}
          >
            <div className="relative">
              <div className="absolute -inset-4 gradient-bg rounded-2xl opacity-10 blur-xl" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-lifted">
                <img 
                  src="https://i.postimg.cc/Z5bt4JrX/20251127-133020-(2).jpg" 
                  alt="Kalyan Kanti Halder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={cn(isVisible && 'animate-slide-in-right animation-delay-200')}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              I am a Computer Science and Engineering graduate from Patuakhali Science and Technology University. 
              My passion lies in building things—transforming visual concepts into fully-functional digital solutions.
            </p>
            
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
              I thrive on ownership; when a project is on me, I see it through, no matter the challenge. 
              I'm driven by the process of creating, problem-solving, and delivering clean, efficient code.
            </p>

            {/* Highlight Quote */}
            <div className="bg-card rounded-xl p-6 border border-border shadow-card">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Quote className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-semibold gradient-text mb-2">
                    Commitment to Completion
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Every project I take on is seen through to the finish line.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span className="text-foreground font-medium">Problem Solver</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span className="text-foreground font-medium">Clean Code</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span className="text-foreground font-medium">Detail Oriented</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span className="text-foreground font-medium">Team Player</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
