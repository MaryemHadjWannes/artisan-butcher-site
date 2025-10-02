import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/mockProducts";
import heroImage from "@/assets/hero-butcher.jpg";
import { Award, Heart, Leaf } from "lucide-react";

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
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
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
              <Link to="/contact">Nous contacter</Link>
            </Button>
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

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-serif font-bold">Notre Boucherie</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Depuis 1985, notre boucherie familiale perpétue les traditions artisanales 
              tout en s'adaptant aux exigences modernes de qualité. Nous sélectionnons avec soin 
              nos viandes auprès d'éleveurs locaux engagés dans une démarche respectueuse 
              de l'animal et de l'environnement.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/a-propos">En savoir plus sur nous</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Nos Produits Vedettes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez une sélection de nos meilleures viandes et préparations artisanales
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/produits">Voir tous nos produits</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-serif font-bold">Une question ? Un besoin particulier ?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Notre équipe est à votre écoute pour vous conseiller et préparer vos commandes sur mesure
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Contactez-nous</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
