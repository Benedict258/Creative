import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary-glow/30 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-heading text-5xl md:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            I Design, Build &{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Market
            </span>{' '}
            Beautiful Digital Experiences
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Helping creators, entrepreneurs, and businesses stand out with 
            conversion-driven websites, stunning portfolios, and strategic digital marketing.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow px-8 py-6 text-lg font-semibold hover-lift group"
            >
              See My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-primary/20 hover:bg-primary/10 px-8 py-6 text-lg font-semibold hover-lift group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Let's Collaborate
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;