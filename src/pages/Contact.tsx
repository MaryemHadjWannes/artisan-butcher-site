import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Le nom doit contenir au moins 2 caractères" }).max(100),
  email: z.string().trim().email({ message: "Adresse email invalide" }).max(255),
  message: z.string().trim().min(10, { message: "Le message doit contenir au moins 10 caractères" }).max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Contactez-Nous
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une question ? Une commande spéciale ? N'hésitez pas à nous contacter
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">
                Nos Coordonnées
              </h2>
              <div className="space-y-6">
                <article className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <address className="text-muted-foreground not-italic">
                      Boucherie et charcuterie l'Orientale halal<br />
                      6 Rue de Selles, 59400 Cambrai, France
                    </address>
                  </div>
                </article>
                <article className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <a
                      href="tel:+33361411004"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +33 3 61 41 10 04
                    </a>
                  </div>
                </article>
                <article className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:contact@boucherie.fr"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@boucherie.fr
                    </a>
                  </div>
                </article>
                <article className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Horaires d'ouverture</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Mardi - Samedi : 8h00 - 13h00 / 15h00 - 19h00</p>
                      <p>Dimanche : 8h00 - 13h00</p>
                      <p className="font-medium text-foreground">Lundi : Fermé</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
          {/* Contact Form */}
          <section>
            <div className="bg-card p-8 rounded-lg border shadow-card">
              <h2 className="text-2xl font-serif font-bold mb-6">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "border-destructive" : ""}
                    required
                    maxLength={100}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-destructive mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Adresse email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-destructive" : ""}
                    required
                    maxLength={255}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-destructive mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Votre message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={errors.message ? "border-destructive" : ""}
                    required
                    maxLength={1000}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-destructive mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </div>
          </section>
        </div>
        {/* Map en dessous de tout */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="rounded-lg overflow-hidden shadow-card h-80 bg-muted">
            <iframe
              title="Localisation de la boucherie"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.965905136207!2d3.230951177212706!3d50.180473799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2bb428c063805%3A0x6661c8d1d98c0488!2sBoucherie%20et%20charcuterie%20l&#39;Orientale%20halal!5e0!3m2!1sfr!2stn!4v1759491771919!5m2!1sfr!2stn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
