import { ExternalLink, Github, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Creator Portfolio Platform',
      description: 'A stunning portfolio website for a content creator, featuring custom animations, blog integration, and conversion-optimized contact forms.',
      image: project1,
      tags: ['React', 'Tailwind', 'Framer Motion', 'SEO'],
      category: 'Portfolio',
      client: 'Content Creator',
      results: '+150% engagement'
    },
    {
      id: 2,
      title: 'UGC Campaign Landing',
      description: 'High-converting landing page for a UGC campaign, with integrated social proof, testimonials, and streamlined signup flow.',
      image: project2,
      tags: ['Next.js', 'TypeScript', 'Analytics', 'CRO'],
      category: 'Landing Page',
      client: 'Marketing Agency',
      results: '+85% conversion rate'
    },
    {
      id: 3,
      title: 'E-commerce Rebrand',
      description: 'Complete digital transformation for a boutique brand, including new visual identity, custom e-commerce platform, and marketing automation.',
      image: project3,
      tags: ['E-commerce', 'Branding', 'Shopify', 'Marketing'],
      category: 'Full Project',
      client: 'Fashion Brand',
      results: '+200% sales growth'
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-accent/10 text-accent border-accent/20">
            Portfolio Showcase
          </Badge>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Recent <span className="bg-gradient-accent bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at some of my favorite projects—each one designed to solve real business challenges 
            and deliver measurable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group overflow-hidden bg-card border-border hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="glass border-primary/20">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="glass border-primary/20">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>

                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-gradient-primary">
                  {project.category}
                </Badge>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Client & Results */}
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Client: </span>
                    <span className="font-medium">{project.client}</span>
                  </div>
                  <div className="text-sm font-semibold text-primary">
                    {project.results}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more work or discuss your project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              View Full Portfolio
            </Button>
            <Button variant="outline" size="lg" className="glass border-primary/20 hover:bg-primary/10">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;