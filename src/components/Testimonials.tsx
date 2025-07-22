import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Content Creator',
      company: '@sarahjcreates',
      content: 'Alex transformed my online presence completely. My new portfolio not only looks stunning but has increased my client inquiries by 150%. The attention to detail and understanding of what creators need is exceptional.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b75ce397?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Startup Founder',
      company: 'TechFlow',
      content: 'Working with Alex was a game-changer for our startup. The landing page they created converts at 85%—far beyond our expectations. The strategic approach to design and development is what sets them apart.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Brand Manager',
      company: 'Luna Fashion',
      content: 'The complete rebrand and website redesign exceeded every expectation. Sales increased by 200% in the first quarter alone. Alex doesn\'t just build websites—they build business growth.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    }
  ];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Client Love
          </Badge>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            What <span className="bg-gradient-primary bg-clip-text text-transparent">Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it—here's what real clients say about working together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="p-8 bg-gradient-card border-primary/10 hover-lift relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-foreground/90 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover shadow-medium"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Video Testimonial Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-card border-primary/10">
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold">
                See What Clients Really Think
              </h3>
              <p className="text-muted-foreground">
                Watch real client interviews about their experience working with me.
              </p>
              <div className="relative bg-muted rounded-lg aspect-video flex items-center justify-center hover-lift cursor-pointer group">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-l-[12px] border-l-primary-foreground border-y-[8px] border-y-transparent ml-1" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;