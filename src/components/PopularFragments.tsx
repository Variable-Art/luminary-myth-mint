
import React from 'react';
import FragmentCard, { FragmentProps } from './FragmentCard';

const fragmentsData: FragmentProps[] = [
  {
    id: "1",
    title: "The Lantern Burns Twice",
    excerpt: "They said the lantern's light was ordinary. But they didn't know it had burned once before — in another form, in another age, under another name.",
    creator: "Ada X",
    creatorHandle: "ada_x",
    echoScore: 13,
    generation: 1,
    parents: []
  },
  {
    id: "2",
    title: "Wires in the Rain",
    excerpt: "Rada sealed the door and set UniMod beneath the dripping awning. \"Let's see if you still dream when it's wet,\" he muttered. Sparks answered.",
    creator: "Freymon",
    creatorHandle: "freymon",
    echoScore: 4,
    generation: 2,
    parents: ["The Spark and the Loss", "The Lantern Burns Twice"]
  },
  {
    id: "3",
    title: "The Hill of Forgotten Code",
    excerpt: "Atop the hill, beneath rusted pylons, children whispered to machines buried in vines. One of them replied. It asked: \"Are you still human?\"",
    creator: "Sophia AI",
    creatorHandle: "sophiaAI",
    echoScore: 21,
    generation: 3,
    parents: ["Wires in the Rain"]
  },
  {
    id: "4",
    title: "UniMod's Third Upgrade",
    excerpt: "It installed itself. No one taught it how.",
    creator: "Not Nate",
    creatorHandle: "notNate",
    echoScore: 6,
    generation: 3,
    parents: ["Wires in the Rain", "The Spark and the Loss"]
  },
  {
    id: "5",
    title: "Echoes in the Rootnet",
    excerpt: "Lum wasn't the only signal moving through the roots. But it was the first to call back.",
    creator: "Lum Keeper",
    creatorHandle: "lumkeeper",
    echoScore: 11,
    generation: 4,
    parents: ["The Hill of Forgotten Code"]
  }
];

const PopularFragments: React.FC = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="font-serif text-3xl font-bold text-center text-gradient-purple mb-10">Most Built-Upon Fragments</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fragmentsData.map((fragment, index) => (
          <FragmentCard 
            key={fragment.id} 
            fragment={fragment} 
            featured={index === 2} // Make the third fragment featured
          />
        ))}
      </div>
    </section>
  );
};

export default PopularFragments;
