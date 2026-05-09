import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Pricing = ({ title, plans }) => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          {title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: plan.featured ? 1.05 : 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={plan.featured ? 'md:col-start-2 md:row-start-1' : ''}
            >
              <Card className={plan.featured ? 'border-blue-500 border-2' : ''}>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  ${plan.price}
                  <span className="text-lg text-gray-600">/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center text-gray-600">
                      <span className="mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.featured ? 'primary' : 'outline'} className="w-full">
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
