import aboutImage from "@/assets/about-butcher.jpg";
import { Award, Users, MapPin, Heart } from "lucide-react";

const About = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Notre Savoir-Faire
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une tradition familiale au service de la qualité depuis 1985
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold">Notre Histoire</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fondée en 1985 par Jean Dupont, notre boucherie perpétue depuis près de 40 ans 
                  une tradition d'excellence artisanale. Ce qui a commencé comme une petite 
                  boucherie de quartier est devenu une référence locale pour la qualité et 
                  l'authenticité.
                </p>
                <p>
                  Aujourd'hui dirigée par la deuxième génération, nous restons fidèles aux valeurs 
                  qui ont fait notre réputation : respect du produit, savoir-faire traditionnel et 
                  proximité avec nos clients. Chaque jour, nous sélectionnons avec soin nos viandes 
                  auprès d'éleveurs locaux engagés dans une démarche éthique et respectueuse.
                </p>
                <p>
                  Notre engagement : vous offrir des produits d'exception, issus d'animaux élevés 
                  dans le respect du bien-être animal et de l'environnement. De la sélection à la 
                  découpe, chaque étape est réalisée avec passion et expertise.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="Notre artisan boucher au travail"
                className="rounded-lg shadow-elegant w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <article className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Excellence</h3>
              <p className="text-muted-foreground">
                Seules les meilleures viandes sont sélectionnées pour nos clients
              </p>
            </article>

            <article className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Passion</h3>
              <p className="text-muted-foreground">
                L'amour du métier guide chacun de nos gestes quotidiens
              </p>
            </article>

            <article className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Proximité</h3>
              <p className="text-muted-foreground">
                Partenariats privilégiés avec des éleveurs locaux de confiance
              </p>
            </article>

            <article className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Service</h3>
              <p className="text-muted-foreground">
                Conseil personnalisé et écoute pour chaque client
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-serif font-bold text-center">
              Notre Engagement Qualité
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Origine Traçable</h3>
                <p className="text-muted-foreground">
                  Toutes nos viandes sont issues d'élevages français certifiés. 
                  Nous connaissons personnellement chacun de nos producteurs.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Maturation</h3>
                <p className="text-muted-foreground">
                  Nos viandes de bœuf sont maturées en chambre froide pendant 21 jours minimum 
                  pour développer tendreté et saveur.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Découpe Experte</h3>
                <p className="text-muted-foreground">
                  Formés aux techniques traditionnelles, nous réalisons toutes les découpes 
                  sur place, selon vos besoins.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Fraîcheur Garantie</h3>
                <p className="text-muted-foreground">
                  Réception quotidienne de viandes fraîches. Respect absolu de la chaîne du froid 
                  et des normes d'hygiène.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
