
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MythMetrics: React.FC = () => {
  const metrics = [
    { label: 'Total Fragments', value: '142' },
    { label: 'Echoed Mints', value: '367' },
    { label: 'Active Creators', value: '53' },
    { label: 'New This Week', value: '24' }
  ];

  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="font-serif text-3xl font-bold text-center text-gradient-purple mb-10">Myth Metrics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="glass-card border-myth-primary/30 overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-mono text-white/80">{metric.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-serif text-myth-accent">{metric.value}</p>
            </CardContent>
            <div className="h-1 w-full bg-gradient-to-r from-myth-primary to-myth-accent"></div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MythMetrics;
