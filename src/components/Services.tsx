import { Check, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      icon: Zap,
      name: 'Starter',
      price: '$2,997',
      description: 'Perfect for creators and small businesses',
      popular: false,
      features: [
        'Custom 5-page website',
        'Mobile-responsive design',
        'SEO optimization',
        'Contact forms',
        '2 rounds of revisions',
        '30-day support'
      ]
    },
    {
      icon: Star,
      name: 'Growth',
      price: '$4,997',
      description: 'For businesses ready to scale',
      popular: true,
      features: [
        'Custom 8-page website',
        'Advanced animations',
        'CMS integration',
        'Analytics setup',
        'Lead generation system',
        'Unlimited revisions',
        '60-day support',
        'Performance optimization'
      ]
    },
    {
      icon: Crown,
      name: 'Premium',
      price: '$7,997',
      description: 'Complete digital transformation',
      popular: false,
      features: [
        'Unlimited pages',
        'Custom functionality',
        'E-commerce integration',
        'Marketing automation',
        'Brand strategy session',
        'Content creation',
        '90-day support',
        'Ongoing optimization'
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Services & Pricing
          </Badge>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">Perfect</span> Package
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From stunning portfolios to complete digital experiences—I've got the perfect solution for your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.name}
              className={`relative p-8 hover-lift ${
                service.popular 
                  ? 'border-primary shadow-glow bg-gradient-card' 
                  : 'bg-card border-border'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary">
                  Most Popular
                </Badge>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    service.popular ? 'bg-gradient-primary' : 'bg-muted'
                  }`}>
                    <service.icon className={`w-8 h-8 ${
                      service.popular ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold mb-2">{service.name}</h3>
                  <div className="text-4xl font-bold mb-2">{service.price}</div>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant={service.popular ? "default" : "outline"}
                  className={`w-full py-6 text-lg font-semibold ${
                    service.popular 
                      ? 'bg-gradient-primary hover:shadow-glow' 
                      : 'hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Need something custom? Let's discuss your unique requirements.
          </p>
          <Button variant="outline" size="lg" className="glass border-primary/20 hover:bg-primary/10">
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;