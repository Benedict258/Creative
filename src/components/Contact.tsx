import { useState } from 'react';
import { Send, Calendar, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const projectTypes = [
    'Portfolio Website',
    'Landing Page',
    'E-commerce Site',
    'Brand Identity',
    'Full Digital Strategy',
    'Other'
  ];

  const budgetRanges = [
    '$2,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    '$20,000+'
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-accent/10 text-accent border-accent/20">
            Let's Work Together
          </Badge>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="bg-gradient-accent bg-clip-text text-transparent">Start</span> Your Project?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your vision and create something amazing together. 
            I'm here to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card border-primary/10 hover-lift">
            <h3 className="font-heading text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Project Type</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                    <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Budget Range</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                    <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                  required
                  rows={5}
                  className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-primary hover:shadow-glow py-6 text-lg font-semibold"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Calendar */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="p-8 bg-gradient-card border-primary/10">
              <h3 className="font-heading text-2xl font-bold mb-6">Get in Touch Directly</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">hello@alexcreative.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-muted-foreground">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Calendar Booking */}
            <Card className="p-8 bg-gradient-card border-primary/10 hover-lift">
              <h3 className="font-heading text-2xl font-bold mb-4">Schedule a Call</h3>
              <p className="text-muted-foreground mb-6">
                Prefer to talk? Book a free 30-minute consultation to discuss your project.
              </p>
              
              <div className="bg-muted rounded-lg p-6 text-center hover-glow cursor-pointer">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Free Strategy Call</h4>
                <p className="text-muted-foreground mb-4">30 minutes • Free</p>
                <Button className="bg-gradient-primary hover:shadow-glow">
                  Book Now
                </Button>
              </div>
            </Card>

            {/* Response Time */}
            <Card className="p-6 bg-accent/10 border-accent/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold">Quick Response</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                I typically respond within 2-4 hours during business hours.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;