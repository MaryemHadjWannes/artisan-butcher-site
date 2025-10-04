import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/mockProducts";

interface AdminProduct {
  name: string;
  category: string;
  price: string;
  image: string;
  visible?: boolean;
}

const Admin = () => {
  const [product, setProduct] = useState<AdminProduct>({
    name: "",
    category: categories[0] || "",
    price: "",
    image: "",
  });
  const [imagePreview, setImagePreview] = useState<string>("");
  const [success, setSuccess] = useState(false);
  const [adminProducts, setAdminProducts] = useState<any[]>(() => {
    const stored = localStorage.getItem("adminProducts");
    return stored ? JSON.parse(stored) : [];
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as any;
    if (name === "image" && files && files[0]) {
      const file = files[0];
      setProduct((p) => ({ ...p, image: file }));
      setImagePreview(URL.createObjectURL(file));
    } else {
      setProduct((p) => ({ ...p, [name]: value }));
    }
  };

  const toggleVisibility = (id: number) => {
    const arr = adminProducts.map((p) =>
      p.id === id ? { ...p, visible: !p.visible } : p
    );
    setAdminProducts(arr);
    localStorage.setItem("adminProducts", JSON.stringify(arr));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gestion image
    let imageUrl = "";
    if (product.image && typeof product.image !== "string") {
      imageUrl = URL.createObjectURL(product.image);
    }
    // Générer un id unique
    const id = Date.now();
    const newProduct = {
      id,
      name: product.name,
      category: product.category,
      price: parseFloat(product.price),
      unit: "kg",
      image: imageUrl,
      description: "Produit ajouté par l'admin.",
      visible: true,
    };
    const arr = [...adminProducts, newProduct];
    setAdminProducts(arr);
    localStorage.setItem("adminProducts", JSON.stringify(arr));
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    setProduct({ name: "", category: categories[0] || "", price: "", image: "" });
    setImagePreview("");
  const toggleVisibility = (id: number) => {
    const arr = adminProducts.map((p) =>
      p.id === id ? { ...p, visible: !p.visible } : p
    );
    setAdminProducts(arr);
    localStorage.setItem("adminProducts", JSON.stringify(arr));
  };
  };

  return (
    <div className="container mx-auto py-8 max-w-xl">
      <h2 className="text-2xl font-bold mb-6">Admin - Ajouter un produit</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-muted p-6 rounded-lg">
        <div>
          <label className="block mb-1 font-medium">Nom du produit</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Catégorie</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Prix (€)</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Photo</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
          {imagePreview && (
            <img src={imagePreview} alt="Aperçu" className="mt-2 h-24 object-cover rounded" />
          )}
        </div>
        <Button type="submit" className="w-full">Ajouter le produit</Button>
        {success && <div className="text-green-600 mt-2">Produit ajouté !</div>}
      </form>
      {/* Liste des produits admin */}
      {adminProducts.length > 0 && (
        <div className="mt-10">
          <h3 className="text-lg font-bold mb-4">Produits ajoutés</h3>
          <ul className="space-y-4">
            {adminProducts.map((p) => (
              <li key={p.id} className="flex items-center gap-4 bg-white rounded shadow p-3">
                <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-muted-foreground">{p.category}</div>
                  <div className="text-sm">{p.price} € / kg</div>
                </div>
                <button
                  className={`px-3 py-1 rounded text-xs font-bold ${p.visible ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-500"}`}
                  onClick={() => toggleVisibility(p.id)}
                >
                  {p.visible ? "Visible" : "Masqué"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Admin;
