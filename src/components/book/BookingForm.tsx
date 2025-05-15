"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingFormSchema, type BookingFormValues } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { Send, CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

// Combine package data for the dropdown
const servicePackages = [
  // Photo Packages
  { id: 'photo-bronze', name: 'Bronze Photo Package ($250)' },
  { id: 'photo-silver', name: 'Silver Photo Package ($450)' },
  { id: 'photo-gold', name: 'Gold Photo Package ($900)' },
  // Video Packages
  { id: 'video-highlight', name: 'Highlight Reel ($500)' },
  { id: 'video-event', name: 'Event Coverage Basic ($1000)' },
  { id: 'video-promo', name: 'Promotional Video ($1500)' },
  { id: 'custom-request', name: 'Custom Request / Not Sure Yet' },
];

export function BookingForm() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const packageFromUrl = searchParams.get('package');

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      selectedPackage: packageFromUrl || "",
      preferredTime: "Afternoon (1 PM - 5 PM)", // Default time suggestion
      message: "",
      honeypot: "",
    },
  });

  useEffect(() => {
    if (packageFromUrl) {
      form.setValue('selectedPackage', packageFromUrl);
    }
  }, [packageFromUrl, form]);


  async function onSubmit(values: BookingFormValues) {
    if (values.honeypot) {
      console.log("Spam detected");
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Booking request submitted:", values);
    
    toast({
      title: "Booking Request Sent!",
      description: "Thank you for your interest! We'll review your request and get back to you soon to confirm availability and details.",
      variant: "default",
    });
    form.reset({
      name: "",
      email: "",
      phone: "",
      selectedPackage: "",
      preferredDate: undefined, 
      preferredTime: "Afternoon (1 PM - 5 PM)",
      message: "",
      honeypot: ""
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-lg shadow-xl">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} className="bg-background border-border focus:ring-primary"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background border-border focus:ring-primary"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number (Optional)</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Your Phone Number" {...field} className="bg-background border-border focus:ring-primary"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        <FormField
          control={form.control}
          name="selectedPackage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Package</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background border-border focus:ring-primary">
                    <SelectValue placeholder="Select a package" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {servicePackages.map(pkg => (
                    <SelectItem key={pkg.id} value={pkg.id}>{pkg.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="preferredDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Preferred Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal bg-background border-border hover:bg-muted",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1)) } // Disable past dates
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="preferredTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Time</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-background border-border focus:ring-primary">
                       <Clock className="mr-2 h-4 w-4 opacity-50 shrink-0" />
                      <SelectValue placeholder="Select a time slot" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</SelectItem>
                    <SelectItem value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</SelectItem>
                    <SelectItem value="Evening (6 PM onwards)">Evening (6 PM onwards)</SelectItem>
                    <SelectItem value="Flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Details / Message (Optional)</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us more about your project, specific needs, or any questions you have." {...field} rows={4} className="bg-background border-border focus:ring-primary"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="honeypot"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormLabel>Leave this field empty</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting} className="w-full group">
          {form.formState.isSubmitting ? "Sending Request..." : <>Request Booking <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></>}
        </Button>
      </form>
    </Form>
  );
}
