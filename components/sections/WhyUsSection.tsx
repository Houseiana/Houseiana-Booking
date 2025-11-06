import { Headphones, DollarSign, Zap, Shield } from 'lucide-react';

interface WhyUsSectionProps {
  translations: {
    whyUs: {
      title: string;
      support: { title: string; description: string };
      price: { title: string; description: string };
      fast: { title: string; description: string };
      secure: { title: string; description: string };
    };
  };
}

export function WhyUsSection({ translations }: WhyUsSectionProps) {
  const features = [
    {
      icon: Headphones,
      title: translations.whyUs.support.title,
      description: translations.whyUs.support.description,
      color: 'text-primary',
      bg: 'bg-primary-light',
    },
    {
      icon: DollarSign,
      title: translations.whyUs.price.title,
      description: translations.whyUs.price.description,
      color: 'text-green-500',
      bg: 'bg-green-100',
    },
    {
      icon: Zap,
      title: translations.whyUs.fast.title,
      description: translations.whyUs.fast.description,
      color: 'text-yellow-500',
      bg: 'bg-yellow-100',
    },
    {
      icon: Shield,
      title: translations.whyUs.secure.title,
      description: translations.whyUs.secure.description,
      color: 'text-purple-500',
      bg: 'bg-purple-100',
    },
  ];

  return (
    <section className="py-12 bg-gray-50 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-serif font-bold text-gray-900 md:text-4xl">
            {translations.whyUs.title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-white rounded-2xl shadow-soft transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.bg} transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}