import { Code, Palette, TrendingUp, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  const skills = [
    {
      icon: Palette,
      title: 'Design',
      description: 'UI/UX, Brand Identity, Visual Systems'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'React, Next.js, TypeScript, Modern Web'
    },
    {
      icon: TrendingUp,
      title: 'Marketing',
      description: 'SEO, Conversion Optimization, Analytics'
    },
    {
      icon: Zap,
      title: 'Strategy',
      description: 'Digital Strategy, User Research, Growth'
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Profile & Story */}
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img 
                  src={profilePhoto} 
                  alt="Creative Developer"
                  className="w-24 h-24 rounded-2xl object-cover shadow-medium hover-glow"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
              
              <div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-2">
                  Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent">Alex</span>
                </h2>
                <p className="text-xl text-muted-foreground">Creative Developer & Digital Strategist</p>
              </div>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
              <p>
                I'm passionate about creating digital experiences that don't just look amazing—they 
                <strong className="text-primary font-semibold"> convert visitors into customers</strong>.
              </p>
              
              <p>
                With over 5 years of experience working with creators, entrepreneurs, and brands, 
                I've learned that successful websites need three things: stunning design, solid development, 
                and strategic marketing. That's exactly what I deliver.
              </p>
              
              <p>
                When I'm not crafting beautiful websites, you'll find me exploring the latest design trends, 
                optimizing conversion funnels, or sharing insights about building better digital experiences.
              </p>
            </div>
          </div>

          {/* Right: Skills Grid */}
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.title}
                className="p-6 bg-gradient-card border-primary/10 hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <skill.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <h3 className="font-heading font-semibold text-xl text-foreground">
                    {skill.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;