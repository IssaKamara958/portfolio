-- This script will populate your 'projects' table with initial data.
-- Go to the SQL Editor in your Supabase project, paste this content, and run it.

INSERT INTO projects (title, description, image_url, url)
VALUES
  (
    'Kou Ayé ?',
    'Application web et mobile fournissant les informations sur les pharmacies de garde, incluant l\\'heure de garde, la localisation, et l\\'itinéraire.',
    'https://d33wubrfki0l68.cloudfront.net/6275122557448d0008022ea1/screenshot_2022-05-06-12-09-00-0000.png',
    'https://kou-aye.netlify.app/'
  ),
  (
    'Site E-commerce',
    'Développement d’un site e-commerce complet pour Chackor Organisation pour commercialiser le produit phare Achakourou Café Touba.',
    'https://chackor-shop.netlify.app/og-image.jpg',
    'https://chackor-shop.netlify.app/'
  );
