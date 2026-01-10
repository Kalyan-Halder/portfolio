import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const research = [
  {
    id: 1,
    institution: 'Audio-Driven Landmark Regression (ADLR): A Multi-Task Transformer Framework for Explainable Lip-Sync Deepfake Detection',
    degree: '4th International Conference on Robotics, Automation, Artificial-Intelligence and Internet-of-Things 2025, (IEEE RAAICON 2025)',
    note: 'Accepted and Presented',
  },
  {
    id: 2,
    institution: 'Adaptive Modality Gating: Explainable, Confidence-Guided Fusion for Source-Only Zero-Shot Deepfake Detection',
    degree: '28th International Conference on Computer and Information Technology (IEEE ICCIT 2025)',
    note: 'Accepted and Presented' ,
  },
  {
    id: 3,
    institution: '3D Self-Supervised Pre-Training and 3D-to-2D Transfer Learning for Brain Tumor MRI Classification',
    degree: '5th International Conference on Electrical, Computer, & Telecommunication Engineering (IEEE ICECTE 2026)',
    note: 'Accepted' ,
  },
  {
    id: 3,
    institution: 'Architectural Insights for Neural Network-Based RIS Optimization: A Systematic Study of Deep Learning Models for Phase Shift Configuration Under Imperfect Channel Conditions',
    degree: '5th International Conference on Electrical, Computer, & Telecommunication Engineering (IEEE ICECTE 2026)',
    note: 'Accepted' ,
  },
];

export function ResearchSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id='research' ref={ref} className="py-20 lg:py-32">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className={cn('text-center mb-8', isVisible && 'animate-fade-up')}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Research and Publication</span>
          </h2>
          <p className="text-muted-foreground">
            Here I show my formal Researchs and Publications.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent hidden sm:block" />

          {research.map((edu, index) => (
            <div
              key={edu.id}
              className={cn(
                'relative pl-0 sm:pl-20 pb-12 last:pb-0',
                isVisible && 'animate-fade-up'
              )}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Timeline Dot */}
               

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
