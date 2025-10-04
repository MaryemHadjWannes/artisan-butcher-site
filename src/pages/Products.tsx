import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/mockProducts";
import { Button } from "@/components/ui/button";

const Products = () => {

  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [dynamicProducts, setDynamicProducts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("adminProducts");
    if (stored) {
      const arr = JSON.parse(stored);
      setDynamicProducts(arr.filter((p: any) => p.visible !== false));
    }
  }, []);

  const allProducts = [...products, ...dynamicProducts];
  const filteredProducts =
    selectedCategory === "Tous"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Nos Produits
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection complète de viandes de qualité supérieure, 
            charcuteries artisanales et préparations maison
          </p>
        </header>

        {/* Category Filter */}
        <nav className="mb-10" aria-label="Filtres de catégories">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </nav>

        {/* Products Grid */}
        <section aria-label="Liste des produits">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                Aucun produit trouvé dans cette catégorie.
              </p>
            </div>
          )}
        </section>

        {/* Additional Info */}
        <aside className="mt-16 p-8 bg-muted rounded-lg text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">
            Besoin d'une coupe particulière ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nous préparons vos viandes selon vos besoins : découpe spécifique, marinade, 
            farce... N'hésitez pas à nous contacter ou à passer en boutique !
          </p>
        </aside>
      </div>
    </main>
  );
};

export default Products;
