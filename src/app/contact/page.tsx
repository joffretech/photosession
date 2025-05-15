import { ContactForm } from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">
          Get in Touch
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? We&apos;d love to hear from you. Fill out the form below or reach out via our contact details.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-start">
        <ContactForm />
        <div className="space-y-8 bg-card p-8 rounded-lg shadow-xl">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Information</h2>
            <p className="text-muted-foreground mb-6">
              Our team is available to discuss your project needs.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-primary-foreground">Email</h3>
                <a href="mailto:hello@bamboonoir.design" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@bamboonoir.design
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-primary-foreground">Phone</h3>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-primary-foreground">Office</h3>
                <p className="text-muted-foreground">
                  123 Design Street, Innovation City, DC 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
