import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Portfolio Websites', href: '#' },
        { label: 'Landing Pages', href: '#' },
        { label: 'E-commerce Sites', href: '#' },
        { label: 'Brand Strategy', href: '#' },
        { label: 'Digital Marketing', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Design Tips', href: '#' },
        { label: 'Free Tools', href: '#' },
        { label: 'Process Guide', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Sitemap', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-heading text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Alex Creative
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating beautiful, conversion-driven digital experiences for creators, 
                entrepreneurs, and businesses worldwide.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Stay Updated</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
                />
                <button className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg text-sm font-semibold hover:shadow-glow transition-all">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get design tips, project insights, and exclusive updates.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Alex Creative. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in San Francisco</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;