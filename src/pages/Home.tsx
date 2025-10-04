import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/mockProducts";
import heroImage from "@/assets/hero-butcher.jpg";
import aboutImage from "@/assets/local.jpg";
import { Award, Heart, Leaf, Users, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Le nom doit contenir au moins 2 caractères" }).max(100),
  email: z.string().trim().email({ message: "Adresse email invalide" }).max(255),
  message: z.string().trim().min(10, { message: "Le message doit contenir au moins 10 caractères" }).max(1000),
});

const Home = () => {
  const featuredProducts = products.slice(0, 4);
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    try {
      contactSchema.parse(formData);
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
          if (err.path[0]) fieldErrors[err.path[0].toString()] = err.message;
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
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative h-[600px] flex items-center justify-center overflow-hidden scroll-mt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Boucherie Artisanale"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            La qualité et la tradition dans votre assiette
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Découvrez notre sélection de viandes premium issues de producteurs locaux français
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-light">
              <Link to="/produits">Découvrez nos produits</Link>
            </Button>
            <a href="#contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 w-full">
                Nous contacter
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src={aboutImage}
              alt="Notre équipe de bouchers"
              className="rounded-lg shadow-lg object-cover max-h-[400px] w-full md:w-auto"
              style={{ maxWidth: '450px' }}
            />
          </div>
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary" style={{ color: '#BB1D2B' }}>
              À propos de la boucherie
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              La <strong>Boucherie et Charcuterie l’Orientale halal</strong> propose des viandes et charcuteries halal de qualité, soigneusement sélectionnées auprès d’éleveurs locaux. Notre passion et savoir-faire artisanal se retrouvent dans chaque préparation, pour garantir fraîcheur, authenticité et service chaleureux.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
              <li>Viandes halal et charcuterie maison</li>
              <li>Conseils personnalisés et accueil convivial</li>
              <li>Produits locaux et respect de l’éthique</li>
            </ul>

          </div>
        </div>
      </section>

      {/* Vedette Produits */}
      <section id="vedette" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary" style={{ color: '#BB1D2B' }}>
              Produits en vedette
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez une sélection de nos meilleurs produits, choisis pour leur qualité et leur goût exceptionnel.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-light">
              <Link to="/produits">Voir tous les produits</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - unique */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Contactez-Nous
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une question ? Une commande spéciale ? N'hésitez pas à nous contacter
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <section className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">Nos Coordonnées</h2>
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
                <h2 className="text-2xl font-serif font-bold mb-6">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Nom complet *</label>
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
                      <p id="name-error" className="text-sm text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Adresse email *</label>
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
                      <p id="email-error" className="text-sm text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Votre message *</label>
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
                      <p id="message-error" className="text-sm text-destructive mt-1">{errors.message}</p>
                    )}
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              </div>
            </section>
          </div>
        </div>
        {/* Map en dessous de tout */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="rounded-lg overflow-hidden shadow-card h-80 bg-muted">
            <iframe
              title="Localisation de la boucherie"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.965905136207!2d3.230951177212706!3d50.180473799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2bb428c063805%3A0x6661c8d1d98c0488!2sBoucherie%20et%20charcuterie%20l'Orientale%20halal!5e0!3m2!1sfr!2stn!4v1759491771919!5m2!1sfr!2stn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold">Qualité Supérieure</h3>
              <p className="text-muted-foreground">
                Viandes sélectionnées auprès des meilleurs éleveurs français
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold">Savoir-Faire</h3>
              <p className="text-muted-foreground">
                Plus de 35 ans d'expérience au service de votre satisfaction
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold">Local & Éthique</h3>
              <p className="text-muted-foreground">
                Engagement pour des produits locaux et un élevage respectueux
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
