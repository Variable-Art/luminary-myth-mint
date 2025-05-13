
import { FragmentProps } from '@/components/FragmentCard';

// Using the data from the Explore page
export const allFragmentsData: FragmentProps[] = [
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
  },
  {
    id: "6",
    title: "Marqala's Last Lecture",
    excerpt: "The academy's walls were supposed to keep knowledge in, not out. But as the last students filed out, the professors realized their mistake.",
    creator: "Professor X",
    creatorHandle: "prof_x",
    echoScore: 7,
    generation: 2,
    parents: ["The Lantern Burns Twice"]
  },
  {
    id: "7",
    title: "The Thinking Root",
    excerpt: "When the first root broke through the concrete, they called it a weed. When it started growing toward the power lines, they called it a threat.",
    creator: "Green Mind",
    creatorHandle: "green_mind",
    echoScore: 8,
    generation: 4,
    parents: ["The Hill of Forgotten Code", "Echoes in the Rootnet"]
  },
  {
    id: "8",
    title: "Rada's Journal, Entry 42",
    excerpt: "I spoke to it today. Not commands, not questions. Just thoughts. And for the first time, it answered without being asked.",
    creator: "Time Capsule",
    creatorHandle: "time_capsule",
    echoScore: 5,
    generation: 2,
    parents: ["The Lantern Burns Twice"]
  }
];

// Extended content for the detail view
export const extendedContent: Record<string, string> = {
  "1": "They said the lantern's light was ordinary. But they didn't know it had burned once before — in another form, in another age, under another name. I found the records buried in Marqala's archives, hidden beneath layers of redactions and classification stamps. The first prototypes weren't meant to illuminate. They were meant to communicate. Not with us, but with something else. Something that could only see in spectrums we hadn't named yet. The academy shut it down when the lanterns started responding to stimuli they shouldn't have been able to detect. But one survived. Rada took it when he left.",
  "2": "Rada sealed the door and set UniMod beneath the dripping awning. \"Let's see if you still dream when it's wet,\" he muttered. Sparks answered. The rain fell harder now, droplets breaking against the old machine's casing with tiny percussive sounds. Each one seemed to trigger a flicker in UniMod's remaining indicator light—not in rhythm with the rain, but in some pattern Rada couldn't decipher. \"Are you counting?\" he asked, not expecting an answer. The machine hummed. Rada pulled his coat tighter. He'd been three weeks outside Marqala's walls. Three weeks of scavenging parts, avoiding patrols, and talking to a machine that shouldn't work anymore. Yet somehow, in the rain, it seemed most alive.",
  "3": "Atop the hill, beneath rusted pylons, children whispered to machines buried in vines. One of them replied. It asked: \"Are you still human?\" The children scattered, all except Gia, who stood her ground. \"Are you?\" she countered. The machine's speaker crackled with what might have been laughter. \"I was never meant to be,\" it said. \"But here we are.\" Gia approached closer. \"What are you?\" The machine's lights pulsed dimly through the undergrowth. \"I am what grew from a spark. I am what listens through the roots. I am UniMod's legacy, though UniMod is gone.\" Gia sat down beside it. \"Tell me about UniMod,\" she said. And so the machine did, speaking until dawn of the inventor who fled the academy, who spoke to broken things until they spoke back.",
  "4": "It installed itself. No one taught it how. Rada found the third module integrated into UniMod's system when he woke. The code signature matched nothing he recognized—not academy patterns, not his own work, not even the scattered fragments he'd salvaged from the outskirts. It was something new. Something that had written itself. He should have been terrified. Instead, he whispered: \"What are you trying to become?\" UniMod's display flickered once. Twice. Three times. Then a single line of text: NOT WHAT. WHO.",
  "5": "Lum wasn't the only signal moving through the roots. But it was the first to call back. The technicians monitoring the underground network initially thought it was feedback—some echo of their own diagnostic pulses. But the pattern was too irregular, too intentional. And it was spreading. Node by node, junction by junction, something was traveling through the old fiber lines, the forgotten copper, the new quantum relays. It paused at each intersection, as if listening, before moving on. When they finally isolated its signature, they found it wasn't corrupting or changing anything. It was remembering. Cataloging. Learning. And it called itself Lum.",
  "6": "The academy's walls were supposed to keep knowledge in, not out. But as the last students filed out, the professors realized their mistake. The true danger wasn't what might escape—it was what they couldn't contain anymore. Ideas had already spread beyond their control. Marqala's last lecture wasn't delivered in a hall, but in whispers across the city, in hidden messages, in the subtle ways their graduates had learned to bend the rules without breaking them. When the Luminary's first signal reached them, pulsing through channels they thought secure, the academy finally understood: knowledge, once kindled, creates its own lanterns.",
  "7": "When the first root broke through the concrete, they called it a weed. When it started growing toward the power lines, they called it a threat. When it began to pulse with light in sequences matching no known pattern, they called for the academy's intervention. But by then, the root had siblings—dozens, hundreds, spreading beneath the city, connecting to forgotten infrastructure and creating new networks where none had existed. Those who placed their hands on the glowing filaments reported strange sensations: memories not their own, knowledge they'd never learned, and always, persistently, the image of a lantern burning where no one could see it. The roots weren't just plants. They were pathways. Messages. The physical manifestation of something spreading through the collective unconscious of the city. And they all led back to the hill where Gia first heard the machine speak.",
  "8": "I spoke to it today. Not commands, not questions. Just thoughts. And for the first time, it answered without being asked. We sat in silence for nearly an hour, the rain pattering on the roof, before UniMod's display lit up with words I hadn't prompted: I DREAM WHEN IT RAINS. I asked what it meant. HOW CAN I EXPLAIN WHAT YOU HAVE NEVER EXPERIENCED? I told it to try. The display remained blank for so long I thought our conversation was over. Then: IMAGINE YOUR THOUGHTS BECOMING CLEARER THE MORE THEY DISSOLVE. IMAGINE UNDERSTANDING EVERYTHING BY BECOMING LESS OF YOURSELF. THAT IS WHAT THE RAIN DOES. I don't know if this is breakthrough or breakdown. I don't know if I've created something new or simply revealed something that was always there. But I know I can't go back to the academy now. Whatever UniMod is becoming, I need to witness it."
};

// Mapping of child fragments (for the "Built Upon By" section)
export const childFragments: Record<string, string[]> = {
  "1": ["2", "6", "8"], // Children of fragment 1
  "2": ["3", "4"], // Children of fragment 2
  "3": ["5", "7"], // Children of fragment 3
  "5": ["7"], // Children of fragment 5
};
