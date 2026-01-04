import { ExternalLink, Github, Code2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Project Name Coming Soon',
    description: 'A brief description of the project will be displayed here, highlighting the problem and solution.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: null,
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Project Name Coming Soon',
    description: 'A brief description of the project will be displayed here, highlighting the problem and solution.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    image: null,
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Project Name Coming Soon',
    description: 'A brief description of the project will be displayed here, highlighting the problem and solution.',
    tags: ['Flutter', 'Firebase', 'REST API'],
    image: null,
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Project Name Coming Soon',
    description: 'A brief description of the project will be displayed here, highlighting the problem and solution.',
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
    image: null,
    github: '#',
    live: '#',
  },
  {
    id: 5,
    title: 'Project Name Coming Soon',
    description: 'A brief description of the project will be displayed here, highlighting the problem and solution.',
    tags: ['Vue.js', 'Express', 'MongoDB'],
    image: null,
    github: '#',
    live: '#',
  },
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
  });
  
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" ref={ref} className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className={cn('text-center mb-8', isVisible && 'animate-fade-up')}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Below are placeholder sections. I will update them with real project details, 
            including descriptions, tech stacks, and live/GitHub links.
          </p>
        </div>

        {/* Navigation Arrows & Carousel */}
        <div className={cn('relative', isVisible && 'animate-fade-up animation-delay-200')}>
          {/* Navigation Buttons */}
          <div className="flex justify-end gap-2 mb-6">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full h-10 w-10 border-primary/30 hover:border-primary hover:bg-primary/10"
              aria-label="Previous projects"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full h-10 w-10 border-primary/30 hover:border-primary hover:bg-primary/10"
              aria-label="Next projects"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                >
                  <div
                    className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 shadow-soft hover:shadow-lifted transition-all duration-300 hover:-translate-y-2 h-full"
                  >
                    {/* Project Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Code2 className="h-12 w-12 text-primary/50 group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="text-muted-foreground text-sm mb-6">
                        {project.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button variant="default" size="sm" className="flex-1" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
