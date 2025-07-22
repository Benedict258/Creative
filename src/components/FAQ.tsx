import { Plus } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const FAQ = () => {
  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A standard portfolio site takes 2-3 weeks, while more complex projects with custom functionality can take 4-8 weeks. I always provide a detailed timeline during our initial consultation.'
    },
    {
      question: 'What tools and technologies do you use?',
      answer: 'I work with modern, proven technologies including React, Next.js, TypeScript, Tailwind CSS, and various CMS platforms. For design, I use Figma and Adobe Creative Suite. I choose the best tools for each specific project to ensure optimal performance and maintainability.'
    },
    {
      question: 'What\'s your revision process like?',
      answer: 'I include multiple revision rounds in all packages (2 rounds for Starter, unlimited for Growth and Premium). I present work in stages with clear feedback opportunities. My goal is to get everything right, so I\'m flexible with revisions to ensure you\'re completely satisfied.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes! All packages include post-launch support (30-90 days depending on package). This covers bug fixes, minor updates, and training. I also offer ongoing maintenance packages for clients who want continued support and updates.'
    },
    {
      question: 'Can you help with marketing and SEO?',
      answer: 'Absolutely! I have extensive experience in digital marketing, SEO optimization, and conversion rate optimization. Many of my packages include SEO setup, analytics configuration, and marketing strategy consultation.'
    },
    {
      question: 'What if I need changes after the project is complete?',
      answer: 'I build all sites with future updates in mind. After your support period, I offer maintenance packages or hourly rates for additional changes. I also provide training so you can make simple updates yourself if preferred.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, I work with clients worldwide! I\'m experienced in remote collaboration and have worked across different time zones. Communication is primarily through email, video calls, and project management tools to ensure smooth coordination.'
    },
    {
      question: 'What\'s included in your brand strategy service?',
      answer: 'Brand strategy includes competitive analysis, target audience research, brand positioning, visual identity development, and brand guidelines. This ensures your website aligns with a cohesive brand strategy that resonates with your ideal customers.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Frequently Asked Questions
          </Badge>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Got <span className="bg-gradient-primary bg-clip-text text-transparent">Questions?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about my process, pricing, and services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-primary/10 rounded-lg px-6 hover:border-primary/20 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 font-semibold text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-card rounded-lg border border-primary/10">
          <h3 className="font-heading text-2xl font-bold mb-4">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            I'm happy to discuss your specific needs and answer any questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-all">
              Schedule a Call
            </button>
            <button className="border border-primary/20 text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-all">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;