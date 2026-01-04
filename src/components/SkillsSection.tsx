import { 
  Code2, 
  Server, 
  Database, 
  Smartphone, 
  Container, 
  GitBranch,
  Globe,
  Layers,
  Cpu,
  Plug,
  FileCode
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const skills = [
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Git', category: 'DevOps' },
];

const services = [
  {
    icon: Globe,
    title: 'Website Design & Development',
    description: 'Creating beautiful, responsive websites that engage users',
  },
  {
    icon: Layers,
    title: 'Full-Stack Web Applications',
    description: 'End-to-end solutions with modern tech stacks',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications with Flutter',
  },
  {
    icon: Plug,
    title: 'API Development & Integration',
    description: 'Robust APIs and seamless third-party integrations',
  },
  {
    icon: FileCode,
    title: 'Clean, Maintainable Code',
    description: 'Well-structured code that scales and evolves',
  },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Frontend': return Code2;
    case 'Backend': return Server;
    case 'Database': return Database;
    case 'Mobile': return Smartphone;
    case 'DevOps': return Container;
    default: return GitBranch;
  }
};

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="py-20 lg:py-32">
      <div className="container">
        {/* Section Header */}
        <div className={cn('text-center mb-16', isVisible && 'animate-fade-up')}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with and services I provide to bring your ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className={cn('mb-20', isVisible && 'animate-fade-up animation-delay-200')}>
          <h3 className="text-xl font-semibold mb-6 text-center">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => {
              const Icon = getCategoryIcon(skill.category);
              return (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Icon className="h-4 w-4" />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div>
          <h3 className={cn('text-xl font-semibold mb-8 text-center', isVisible && 'animate-fade-up animation-delay-300')}>
            What I Do
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={cn(
                  'group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1',
                  isVisible && 'animate-fade-up'
                )}
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
