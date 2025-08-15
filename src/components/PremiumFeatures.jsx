import { CheckCircle, Badge, Gift } from 'lucide-react';
import { StarBackground } from './StarBackground';

export const PremiumFeatures = () => {
  return (
    <section className="relative py-16 bg-gray-100 dark:bg-gray-800 overflow-hidden">
      {/* Add star background positioned absolute within this section */}
      <StarBackground position="absolute" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          Why Choose Shine Prints Premium
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <CheckCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Superior Quality
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We use top-grade materials and cutting-edge printers to ensure every print looks stunning.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <Badge className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Custom Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              From business cards to large format prints, tailor your order to your exact specifications.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <Gift className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Exclusive Offers
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Join our loyalty program for seasonal deals, free samples, and priority support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
