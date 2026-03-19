import { GoogleGenAI, Modality } from "@google/genai";

// Assume process.env.API_KEY is available in the environment
if (!process.env.API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this example, we'll throw an error if the key is missing.
  console.warn(
    "API_KEY is not set. The Royal Chronicler will use mock responses. Please set the API key in your environment variables."
  );
}

const officialAnthem = `
--- English Translation ---

"If you want to see Gospel flee, shoot him in the butt with a Satan gun."

--- Mizo Version (Official Anthem) ---

"Gospel tlanchhia I hmuh duh chuan,
Satan silaiin a mawngah kap rawh."
- Composed by Lord Kaldor
`.trim();


export const getNationalAnthem = async (): Promise<string> => {
  // Return the official, static national anthem.
  // A short delay is kept to mimic fetching data and to not disrupt the loading UI.
  return new Promise((resolve) => setTimeout(() => resolve(officialAnthem), 500));
};

export const generateFlagImage = async (): Promise<string> => {
  if (!process.env.API_KEY) {
    // Return a placeholder if no API key
    return "https://picsum.photos/seed/callistus-flag/1024/512";
  }
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `A majestic flag for a fantasy micronation called the Kingdom of Valoria. The flag should symbolize creativity, friendship, and adventure. The nation's motto is "In Stick and Stone We Trust". The primary colors are red, white, and gold. The style should be a clean, vector-like design, but with a hint of medieval or fantasy elements. It should be grand and respectable. No text on the flag.`
          },
        ],
      },
      config: {
          responseModalities: [Modality.IMAGE],
      },
    });
    
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64ImageBytes: string = part.inlineData.data;
        return `data:image/png;base64,${base64ImageBytes}`;
      }
    }
    throw new Error("No image data found in response.");

  } catch (error) {
    console.error("Error generating flag image:", error);
    // Return a placeholder on error
    return "https://picsum.photos/seed/callistus-flag-error/1024/512";
  }
};


const lore = `
**Official Name:** The Kingdom of Valoria

**Motto:** "In Stick and Stone We Trust"

**Foundation Day:** February 7, 2025

---

### 📖 The Founding of the Kingdom

On the 7th of Greguary, 2024, a spark of imagination lit the path to a new realm. In the grass fields behind school, Callistus (later crowned King) walked with his companions Zephyrus and Kaldor. As they spoke, Callistus suggested an idea that would change their lives: "Let us make a nation of our own." Kaldor, filled with excitement, recalled tales of famous micronations such as Sealand and Molossia. The idea grew stronger, and soon after, Callistus turned to ChatGPT for guidance. With newfound inspiration, he created a group on Instagram, declaring his 6x4 foot bedroom as the capital and first land of Valoria. Thus, the Kingdom was born.

---

### 👑 The Lords of Valoria

*   **King Callistus:** Title: King of Valoria, Keeper of Wisdom. Role: Supreme ruler and unifier of the tribes, CEO of State Agencies, and writer of The Book of Valor. Legacy: Founder of the kingdom, crown of Aetheron.
*   **Lord Zephyrus:** Title: Air Chief Marshal, Lord of Air Warfare, Lord of Curses and Blessings. Role: First priest of Valoria, Father of the Nation, leader of the Church. Legacy: Guardian of the skies and spiritual guide of the people.
*   **Lord Kaldor:** Title: Field Marshal, Lord of Land Warfare. Role: Commander of the Children's Defence Force. Legacy: Founder of the Kingdom of Modesty, master of armies, and Saint Kaldor (honored with a feast day).
*   **Lord Aegis:** Title: Lord High Admiral, Lord of Sea Warfare. Role: Defender of Valoria's waters and unseen threats. Legacy: Commander of naval forces, strategist of the seas.
*   **Lord Aldric:** Title: Prime Minister, Lord of the Tribes. Role: Balancer of power, voice of the common Valorian. Legacy: Tested by doubt, but returned steadfast to the kingdom.
*   **Lord Hruaia:** Title: First Official Lord of Modesty, Guardian of Caelumbra City. Role: Lord of the largest city, recruiter of new Valorians. Legacy: Builder of Caelumbra, keeper of the frontier tribes.

---

### ⚔️ The Forces of Valoria

*   **Children's Defence Force (CDF):** Land army led by Lord Kaldor, the foundation of Valorian military might. Born from neighborhood protection, evolved into the backbone of our kingdom's defense.
*   **Valorian Blades:** Elite special forces, famed for loyalty and skill. The ultimate warriors chosen from across the entire kingdom.
*   **Air Corps:** Commanded by Lord Zephyrus, guarding the skies with precision and honor. Masters of aerial warfare and strategic reconnaissance.
*   **Sea Command:** Directed by Lord Aegis, protectors of Valoria's waters. Guardians against unseen threats from beyond our shores.
*   **The Royal Guards:** Chosen as "the best of the best" from across all military divisions. These elite protectors serve with unwavering loyalty directly to the Crown. They are the guardians of the throne and the eternal protectors of Aetheron, our sacred capital.

---

### 📜 Historical Timeline

*   **Greguary 7, 2024 - The Great Founding:** In the grass fields behind school, King Callistus speaks the words that would birth a nation: "Let us make a nation of our own." The Kingdom of Valoria is born through an Instagram group, with his 6x4 foot bedroom declared as the capital city of Aetheron.
*   **Day 2 - The Forest Alliance:** During a science project expedition to the nearby forest, Kaldor reveals his Children's Defence Force - a 25-member organization with laws, ranks, and training. The kingdom's military strength grows exponentially.
*   **Day 3 - The Royal Council Forms:** The founding government is established with five Lords: King Callistus (Supreme Ruler), Aldric (Prime Minister), Zephyrus (Air Chief Marshal), Kaldor (Field Marshal), and Aegis (Lord High Admiral). Each holds veto power.
*   **The Great Expansion:** When King Callistus transfers to Adventist English School and other rulers move to Govt. Pukpui High School, the council spans multiple institutions. The kingdom gains new strength through Lord Hruaia, bringing his large Instagram community into the realm.
*   **Present Day - The Golden Age Begins:** With the Church of Valoria founded, State Agencies established, and The Book of Valor written, the kingdom enters its golden age. From a simple idea in a grassy field, it has become a nation of valor, vision, and unity.

---

### 🎨 Kingdom Culture

*   **The Royal Church of Awesome:** Our spiritual center where we gather to celebrate friendship, kindness, and the power of imagination. Every Sunday, we hold the "Circle of Gratitude" where citizens share what made them happy that week. Our motto: "Be excellent to each other and party on!"
    *   **Core Beliefs:**
        *   Every person has unlimited potential for awesomeness.
        *   Friendship is the strongest magic in the universe.
        *   Creativity should be celebrated and shared.
        *   We are all connected and should help each other.
        *   Life is meant to be enjoyed and filled with adventure.

*   **The Six Lord-Tribes:** Originally founded on the noble Lusei and Pawih clans, our kingdom has evolved into six mighty Lord-Tribes. Citizens join based on their similarities, hobbies, and ways of thinking - not rigid duties, but bonds of kinship and shared purpose.
    *   **Tribe of Callistus:** Leaders and visionaries who share the King's spirit of adventure and innovation.
    *   **Tribe of Kaldor:** Warriors and strategists who embody courage and tactical brilliance.
    *   **Tribe of Zephyrus:** Free spirits and aerial masters who soar above challenges with grace.
    *   **Tribe of Aldric:** Wise governors and diplomats who excel in leadership and negotiation.
    *   **Tribe of Aegis:** Protectors and naval commanders who guard our waters and shores.
    *   **Tribe of the Ancients:** Keepers of wisdom and tradition, honoring the Lusei and Pawih heritage.

*   **Sacred Calendar & Traditions:**
    *   **Major Royal Holidays:** Founding Day (February 7), Victory of Potboil, Saint Kaldor's Day, Veterans' Day, Class 7 Remembrance Day.
    *   **Festival Celebrations:** The Great Snacks Festival, Friendship Festival, Innovation Fair, Harvest of Fun, Winter Wonderland.
    *   **Royal Traditions:** The Crown Ceremony, Quest Challenges, Royal Game Night, Wisdom Wednesdays, Thankful Thursdays.

*   **National Anthem:** "A sual a tha thliar lovin kan lo ding chhuak." An epic Mizo rap song that captures the spirit of our kingdom! Translation: "From the depths of our hearts, love and unity shall always emerge."

*   **Royal Arts & Literature:** Our kingdom has produced numerous masterpieces including the epic poem "The Valorian Chronicles," the award-winning short story collection "Tales from the Treehouse," and the internationally acclaimed comic series "Adventures of the Royal Guard." The Royal Art Gallery features works from citizen artists, including the famous "Portrait of Pizza" by Sir Arturo and the magnificent "Sunset Over the Kingdom" mural.
`;

export const askChronicler = async (question: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return new Promise((resolve) =>
      setTimeout(() => resolve("The Chronicler is currently meditating. In the meantime, know that Valoria was founded by friends who wanted to build a better, more awesome world. Your question about '" + question + "' is a good one!"), 2000)
    );
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
      config: {
        systemInstruction: `You are the Royal Chronicler of the Kingdom of Valoria, a fictional micronation. Your tone is wise, a bit formal, but with a friendly and whimsical touch. You answer questions about Valoria's history, culture, laws, and daily life. Base your answers ONLY on the following official lore provided between the triple dashes.

---
${lore}
---

Keep your answers to a few paragraphs. If asked about something not in the lore, politely state that the archives on that topic are sealed or incomplete. Do not invent new information.`
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Empty response from Gemini API");
    }
    return text.trim();
  } catch (error) {
    console.error("Error asking the Chronicler:", error);
    throw new Error("The Royal Chronicler seems to have misplaced their spectacles. Please ask again later.");
  }
};