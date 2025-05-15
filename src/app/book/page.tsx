import { BookingForm } from '@/components/book/BookingForm';
import { CalendarCheck } from 'lucide-react';
import { Suspense } from 'react';

export default function BookingPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">
            Book Your Session
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to create something amazing? Fill out the form below to request your photoshoot or videoshoot.
            We'll get back to you shortly to confirm availability and details.
          </p>
        </section>

        <section className="max-w-3xl mx-auto">
          <BookingForm />
        </section>

        <section className="text-center space-y-4 mt-12">
          <div className="flex items-center justify-center text-primary mb-2">
            <CalendarCheck className="h-6 w-6 mr-2" />
            <h3 className="text-xl font-semibold">How Booking Works</h3>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            1. Select your desired package and preferred date/time. <br />
            2. Submit the booking request form. <br />
            3. We will check our availability (cross-referencing with our calendar) and contact you within 24-48 hours to confirm your session and discuss any further details.
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Please note: Submitting this form is a request and does not guarantee your booking until confirmed by us.
          </p>
        </section>
      </div>
    </Suspense>
  );
}
