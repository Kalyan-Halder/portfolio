import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const education = [
  {
    id: 1,
    institution: 'Patuakhali Science and Technology University',
    degree: 'Bachelor of Science in Computer Science & Engineering',
    year: 'Graduated [2025]',
    location: 'Patuakhali, Bangladesh',
    note: '',
  },
  {
    id: 2,
    institution: 'Notre Dame Collage Dhaka',
    degree: 'Higher Secondary School Certificate',
    year: 'Graduated [2019]',
    location: 'Dhaka, Bangladesh',
    note: '',
  },
];

export function EducationSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-20 lg:py-32">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className={cn('text-center mb-8', isVisible && 'animate-fade-up')}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Background</span>
          </h2>
          <p className="text-muted-foreground">
            This section will shows the  formal education and certifications.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent hidden sm:block" />

          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={cn(
                'relative pl-0 sm:pl-20 pb-12 last:pb-0',
                isVisible && 'animate-fade-up'
              )}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-0 w-5 h-5 rounded-full gradient-bg border-4 border-background shadow-soft hidden sm:block" />

              {/* Education Card */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 shadow-soft hover:shadow-card transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg gradient-bg shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{edu.institution}</h3>
                    <p className="text-primary font-medium">{edu.degree}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm italic">
                  {edu.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
