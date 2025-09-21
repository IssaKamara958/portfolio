-- This script will populate your 'projects' table with initial data.
-- Go to the SQL Editor in your Supabase project, paste this content, and run it.

INSERT INTO projects (title, description, image_url, url)
VALUESF
  (
    'Site E-commerce',
    'Développement d’un site e-commerce complet pour Chackor Organisation pour commercialiser le produit phare Achakourou Café Touba.',
    'https://chackor-shop.netlify.app/og-image.jpg',
    'https://chackor-shop.netlify.app/'
  );
