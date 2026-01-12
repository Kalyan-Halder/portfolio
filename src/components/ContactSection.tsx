import { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - form submission logic to be added
    console.log('Form submitted:', formData);
    alert('This is a placeholder form. Form submission logic can be added later.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-32 bg-muted/30">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className={cn('text-center mb-16', isVisible && 'animate-fade-up')}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className={cn(isVisible && 'animate-slide-in-left animation-delay-200')}>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            
            {/* Email */}
            <a
              href="mailto:kalyan17@cse.pstu.ac.bd"
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 mb-4 group"
            >
              <div className="p-3 rounded-lg gradient-bg group-hover:scale-110 transition-transform">
                <Mail className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  kalyan17@cse.pstu.ac.bd
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border mb-8">
              <div className="p-3 rounded-lg bg-secondary/20">
                <MapPin className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Bangladesh</p>
              </div>
            </div>

            {/* Social Links */}
            <h4 className="text-lg font-medium mb-4">Find Me On</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Kalyan-Halder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 group"
              >
                <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
                <span className="font-medium group-hover:text-primary transition-colors">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/kalyan-kanti-halder/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors" />
                <span className="font-medium group-hover:text-primary transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={cn(isVisible && 'animate-slide-in-right animation-delay-300')}>
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 sm:p-8 border border-border shadow-card">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-ring transition-all outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-ring transition-all outline-none"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-ring transition-all outline-none resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <Button type="submit" variant="gradient" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * This is a static form . Place contact me via Email or Linkedin.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
