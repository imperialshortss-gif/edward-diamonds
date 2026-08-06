import { Layout } from "@/components/Layout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Inquiry Sent",
      description: "A representative will contact you within 24 hours.",
    });
    form.reset();
  }

  return (
    <Layout>
      <section className="pt-40 pb-20 bg-[#111111] border-b border-primary/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Private Inquiry</h1>
          <p className="text-white/60 text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Connect with our specialists for wholesale trading, investment portfolios, or bespoke commissions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            
            {/* Form */}
            <div className="lg:col-span-3">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/60 uppercase tracking-widest text-xs">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-[#111] border-white/10 text-white rounded-none focus-visible:ring-primary focus-visible:border-primary py-6" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/60 uppercase tracking-widest text-xs">Institution / Company (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Corp" {...field} className="bg-[#111] border-white/10 text-white rounded-none focus-visible:ring-primary focus-visible:border-primary py-6" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/60 uppercase tracking-widest text-xs">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} className="bg-[#111] border-white/10 text-white rounded-none focus-visible:ring-primary focus-visible:border-primary py-6" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/60 uppercase tracking-widest text-xs">Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 000-0000" {...field} className="bg-[#111] border-white/10 text-white rounded-none focus-visible:ring-primary focus-visible:border-primary py-6" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="inquiryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/60 uppercase tracking-widest text-xs">Inquiry Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-[#111] border-white/10 text-white rounded-none focus:ring-primary py-6">
                              <SelectValue placeholder="Select nature of inquiry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#111] border-white/10 text-white rounded-none">
                            <SelectItem value="wholesale" className="focus:bg-primary/20 focus:text-white">Wholesale / Trade</SelectItem>
                            <SelectItem value="investment" className="focus:bg-primary/20 focus:text-white">Investment Diamonds</SelectItem>
                            <SelectItem value="jewelry" className="focus:bg-primary/20 focus:text-white">High Jewelry Collection</SelectItem>
                            <SelectItem value="bespoke" className="focus:bg-primary/20 focus:text-white">Bespoke Commission</SelectItem>
                            <SelectItem value="general" className="focus:bg-primary/20 focus:text-white">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/60 uppercase tracking-widest text-xs">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How may we assist you?" 
                            className="bg-[#111] border-white/10 text-white rounded-none focus-visible:ring-primary focus-visible:border-primary min-h-[150px] resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button type="submit" className="w-full md:w-auto px-12 py-5 bg-primary text-black hover:bg-white transition-colors duration-500 uppercase tracking-[0.2em] text-sm font-medium">
                    Send Inquiry
                  </button>
                </form>
              </Form>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <div className="bg-[#111] p-10 border border-primary/20 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-3xl text-white mb-8">Global Headquarters</h3>
                  <div className="space-y-6 text-white/60 font-light leading-relaxed mb-12">
                    <p>
                      <strong className="text-white uppercase tracking-widest text-xs block mb-1 font-normal">Address</strong>
                      Edward Tower, 5th Avenue<br />
                      New York, NY 10022<br />
                      United States
                    </p>
                    <p>
                      <strong className="text-white uppercase tracking-widest text-xs block mb-1 font-normal">Direct Line</strong>
                      +1 (212) 555-0187
                    </p>
                    <p>
                      <strong className="text-white uppercase tracking-widest text-xs block mb-1 font-normal">Email</strong>
                      inquiries@edwarddiamonds.com
                    </p>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-white/10">
                  <p className="text-primary text-sm italic font-serif">
                    "We respond to all institutional and private inquiries within 24 hours."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
