import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const inquirySchema = z.object({
  product: z.string().trim().max(200),
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  format: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const Inquire = () => {
  const [searchParams] = useSearchParams();
  const productFromUrl = searchParams.get("product") || "";
  const { toast } = useToast();

  const [form, setForm] = useState({
    product: productFromUrl,
    name: "",
    email: "",
    phone: "",
    format: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setForm((f) => ({ ...f, product: productFromUrl }));
  }, [productFromUrl]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = inquirySchema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please check your details",
        description: result.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Inquiry sent",
        description: "Thank you. I will be in touch with you shortly.",
      });
      setForm({
        product: productFromUrl,
        name: "",
        email: "",
        phone: "",
        format: "",
        message: "",
      });
    }, 600);
  };

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container-full max-w-3xl">
          <Link
            to={-1 as never}
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-4">
              Inquire
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.05] mb-6">
              Begin the conversation
            </h1>
            <p className="text-muted-foreground leading-[1.8] mb-12 max-w-2xl">
              Share a few details below and I will personally reach out to guide
              you through the format, support and finishings of your limited
              edition print.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="product" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  Artwork
                </Label>
                <Input
                  id="product"
                  value={form.product}
                  onChange={(e) => setForm({ ...form, product: e.target.value })}
                  className="rounded-none mt-2 h-12"
                  readOnly={!!productFromUrl}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                    Full name *
                  </Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-none mt-2 h-12"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="rounded-none mt-2 h-12"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="rounded-none mt-2 h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="format" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                    Preferred format
                  </Label>
                  <Input
                    id="format"
                    placeholder="e.g. 60×80 cm, dibond"
                    value={form.format}
                    onChange={(e) => setForm({ ...form, format: e.target.value })}
                    className="rounded-none mt-2 h-12"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="rounded-none mt-2 min-h-[140px]"
                  placeholder="Tell me about your project, the space, or any questions you may have."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="rounded-none w-full md:w-auto px-12 py-6 text-sm tracking-[0.15em] uppercase bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {submitting ? "Sending…" : "Send inquiry"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Inquire;
