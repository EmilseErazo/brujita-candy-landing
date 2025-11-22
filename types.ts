export interface PricingPlan {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    title: 'Poción Pequeña',
    subtitle: 'El toque mágico justo',
    price: '$$',
    features: [
      'Decoración básica temática',
      'Candy Bar para 15 personas',
      '1 Tarta temática simple',
      'Ambientación de mesa principal'
    ]
  },
  {
    id: 'intermediate',
    title: 'Elixir Mágico',
    subtitle: 'La favorita del aquelarre',
    price: '$$$',
    features: [
      'Decoración completa Spooky-Chic',
      'Candy Bar para 30 personas',
      'Tarta de 2 pisos personalizada',
      'Fondo fotográfico temático',
      'Iluminación LED neón'
    ],
    recommended: true
  },
  {
    id: 'premium',
    title: 'Caldero Supremo',
    subtitle: 'El hechizo definitivo',
    price: '$$$$',
    features: [
      'Ambientación total del salón',
      'Candy Bar ilimitado (50+ pers)',
      'Mesa de postres premium',
      'Efectos de humo y calderos',
      'Souvenirs personalizados',
      'Coordinadora de evento'
    ]
  }
];