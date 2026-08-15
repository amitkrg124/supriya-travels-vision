import dubai from "@/assets/dest-dubai.jpg";
import bali from "@/assets/dest-bali.jpg";
import egypt from "@/assets/dest-egypt.jpg";
import maldives from "@/assets/dest-maldives.jpg";
import malaysia from "@/assets/dest-malaysia.jpg";
import mauritius from "@/assets/dest-mauritius.jpg";
import nepal from "@/assets/dest-nepal.jpg";
import singapore from "@/assets/dest-singapore.jpg";
import thailand from "@/assets/dest-thailand.jpg";
import himachal from "@/assets/dest-himachal.jpg";
import kashmir from "@/assets/dest-kashmir.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import northeast from "@/assets/dest-northeast.jpg";
import rajasthan from "@/assets/dest-rajasthan.jpg";

export type Attraction = { name: string; description: string };
export type Faq = { question: string; answer: string };

export type Destination = {
  id: string;
  slug: string;
  name: string;
  country: string;
  region: "domestic" | "international";
  tagline: string;
  heroImage: string;
  description: string;
  intro: string;
  highlights: string[];
  attractions: Attraction[];
  bestTime: string;
  duration: string;
  gallery: string[];
  faqs: Faq[];
};

export const destinations: Destination[] = [
  {
    id: "dubai",
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    region: "international",
    tagline: "Where ambition meets imagination.",
    heroImage: dubai,
    description:
      "A city built at the edge of the desert, where record-breaking towers, old trading creeks and open dunes sit within an hour of each other.",
    intro:
      "Dubai rewards travellers who want contrast. Mornings can begin in a souk beside Dubai Creek and end with dinner high above Downtown. It is one of the easiest international destinations to reach from India, which makes it equally suited to a long weekend or a full family holiday.",
    highlights: [
      "Short flying time from most Indian cities",
      "Suits families, couples and first-time international travellers",
      "Desert, coastline and city within one itinerary",
      "Year-round hotel and transfer availability",
    ],
    attractions: [
      { name: "Burj Khalifa", description: "The world's tallest building, with observation decks over Downtown Dubai." },
      { name: "Palm Jumeirah", description: "The palm-shaped island lined with beach resorts and waterfront dining." },
      { name: "Dubai Marina", description: "A canal district best seen from the water on an evening cruise." },
      { name: "Desert Safari", description: "Dune drives, camel rides and desert camps outside the city." },
      { name: "Downtown Dubai", description: "The fountain, boulevard and skyline core of the modern city." },
      { name: "Dubai Mall", description: "Retail, aquarium and ice rink beneath the Burj Khalifa." },
      { name: "Dubai Creek", description: "Abra crossings, spice and gold souks, and the older trading city." },
    ],
    bestTime: "November to March, when daytime temperatures are mildest.",
    duration: "4 to 6 nights",
    gallery: [dubai],
    faqs: [
      { question: "Do Indian passport holders need a visa for Dubai?", answer: "Yes. A UAE tourist visa is required for most Indian passport holders. We handle documentation and application support as part of your package." },
      { question: "How many days are enough for Dubai?", answer: "Four to six nights covers the city, the desert and a day at the beach or theme parks without rushing." },
      { question: "Is Dubai suitable for families with children?", answer: "Yes. Transfers are short, attractions are family-oriented and most hotels accommodate children." },
    ],
  },
  {
    id: "bali",
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "international",
    tagline: "Green terraces, black sand and temple light.",
    heroImage: bali,
    description:
      "An island of rice terraces, volcanic ridges and temple ceremonies, with a coastline that changes character every few kilometres.",
    intro:
      "Bali works best when it is split between two bases: the inland calm of Ubud and a stretch of coast in the south or east. Days move slowly here, and the island rewards travellers who leave room in the itinerary.",
    highlights: ["Ubud's rice terraces and river valleys", "Temple ceremonies through the year", "Island day trips by fast boat", "Wide range of stay categories"],
    attractions: [
      { name: "Ubud", description: "Rice terraces, craft villages and the island's cultural centre." },
      { name: "Tanah Lot", description: "A sea temple set on a rock formation, best visited near sunset." },
      { name: "Nusa Penida", description: "Dramatic cliffs and clear water, reached by fast boat." },
      { name: "Uluwatu", description: "Clifftop temple and surf beaches on the southern peninsula." },
    ],
    bestTime: "April to October, the drier season.",
    duration: "5 to 7 nights",
    gallery: [bali],
    faqs: [
      { question: "Is a visa required for Bali?", answer: "Indian passport holders typically require a visa on arrival or an e-visa. We confirm current requirements before travel." },
      { question: "How should I split my stay?", answer: "Most travellers split between Ubud and a coastal area such as Seminyak, Nusa Dua or Sanur." },
    ],
  },
  {
    id: "egypt",
    slug: "egypt",
    name: "Egypt",
    country: "Egypt",
    region: "international",
    tagline: "Five thousand years, one river.",
    heroImage: egypt,
    description:
      "From the pyramids at Giza to the temples of Luxor and Aswan, Egypt is a linear journey along the Nile.",
    intro:
      "An Egypt itinerary usually begins in Cairo and follows the Nile south. It suits travellers with an interest in history who are comfortable with a moderately paced sightseeing schedule.",
    highlights: ["Pyramids of Giza and the Sphinx", "Nile cruise between Luxor and Aswan", "Egyptian Museum, Cairo", "Red Sea coast extension"],
    attractions: [
      { name: "Giza Plateau", description: "The pyramids and the Great Sphinx, on the edge of Cairo." },
      { name: "Luxor", description: "Karnak, Luxor Temple and the Valley of the Kings." },
      { name: "Aswan", description: "Nile islands, Nubian villages and Philae Temple." },
      { name: "Nile Cruise", description: "A multi-night sailing between Luxor and Aswan." },
    ],
    bestTime: "October to April, avoiding peak summer heat.",
    duration: "7 to 9 nights",
    gallery: [egypt],
    faqs: [
      { question: "Is a Nile cruise necessary?", answer: "It is optional, but it is the most comfortable way to cover the temples between Luxor and Aswan." },
    ],
  },
  {
    id: "maldives",
    slug: "maldives",
    name: "Maldives",
    country: "Maldives",
    region: "international",
    tagline: "A quiet horizon in every direction.",
    heroImage: maldives,
    description:
      "Atolls of coral islands where the itinerary is deliberately short: one resort, one lagoon, one pace.",
    intro:
      "The Maldives is a single-base destination. The choice that matters most is the island itself — transfer type, house reef and board plan shape the entire stay.",
    highlights: ["Overwater and beach villa options", "Snorkelling directly off the house reef", "Speedboat or seaplane transfers", "Short flying time from South India"],
    attractions: [
      { name: "House Reef Snorkelling", description: "Coral and marine life within swimming distance of the island." },
      { name: "Sandbank Picnic", description: "A private half-day on an uninhabited sandbank." },
      { name: "Sunset Cruise", description: "Dolphin spotting on an evening dhoni sailing." },
      { name: "Malé", description: "The compact capital, often visited between transfers." },
    ],
    bestTime: "November to April, the dry season.",
    duration: "3 to 5 nights",
    gallery: [maldives],
    faqs: [
      { question: "Do I need a visa for the Maldives?", answer: "A free visa on arrival is issued to Indian passport holders subject to confirmed accommodation and return tickets." },
      { question: "Seaplane or speedboat?", answer: "It depends on the resort's distance from Malé. Seaplanes operate in daylight hours only, which affects flight timing." },
    ],
  },
  {
    id: "malaysia",
    slug: "malaysia",
    name: "Malaysia",
    country: "Malaysia",
    region: "international",
    tagline: "City, highlands and island in one trip.",
    heroImage: malaysia,
    description:
      "Kuala Lumpur, the cool air of Genting and the beaches of Langkawi, connected by short internal transfers.",
    intro:
      "Malaysia is well suited to first-time travellers to South East Asia. It combines a straightforward city base with highlands and islands, and pairs naturally with Singapore.",
    highlights: ["Kuala Lumpur city stay", "Genting Highlands", "Langkawi beaches", "Easy pairing with Singapore"],
    attractions: [
      { name: "Petronas Towers", description: "The twin towers and KLCC park at the centre of the city." },
      { name: "Batu Caves", description: "Limestone caves and temple steps on the city's northern edge." },
      { name: "Genting Highlands", description: "A cool-weather hill resort reached by cable car." },
      { name: "Langkawi", description: "An island archipelago with beaches and a sky bridge." },
    ],
    bestTime: "December to April for the west coast.",
    duration: "5 to 7 nights",
    gallery: [malaysia],
    faqs: [{ question: "Can Malaysia be combined with Singapore?", answer: "Yes. A combined itinerary is common and can be done by air or by road." }],
  },
  {
    id: "mauritius",
    slug: "mauritius",
    name: "Mauritius",
    country: "Mauritius",
    region: "international",
    tagline: "Volcanic green above a still lagoon.",
    heroImage: mauritius,
    description:
      "An Indian Ocean island with reef-protected beaches, sugarcane country and mountain interiors.",
    intro:
      "Mauritius suits travellers who want beach time with the option of inland excursions. It is a common choice for honeymoons and family holidays alike.",
    highlights: ["Reef-protected swimming beaches", "Inland waterfalls and tea routes", "Catamaran day cruises", "Wide resort selection"],
    attractions: [
      { name: "Île aux Cerfs", description: "A lagoon island reached by catamaran." },
      { name: "Chamarel", description: "The seven coloured earths and nearby waterfall." },
      { name: "Port Louis", description: "The capital's market and waterfront." },
      { name: "Black River Gorges", description: "Forested national park with viewpoints and trails." },
    ],
    bestTime: "May to December.",
    duration: "5 to 7 nights",
    gallery: [mauritius],
    faqs: [{ question: "Is a visa required?", answer: "Indian passport holders are generally granted entry on arrival for tourism, subject to current rules." }],
  },
  {
    id: "nepal",
    slug: "nepal",
    name: "Nepal",
    country: "Nepal",
    region: "international",
    tagline: "The mountains begin at the doorstep.",
    heroImage: nepal,
    description:
      "Kathmandu's temple squares, Pokhara's lake valley and Himalayan views within a short flight of India.",
    intro:
      "Nepal is one of the most accessible international destinations from India and works well for shorter trips, pilgrimage travel and first mountain journeys.",
    highlights: ["Kathmandu heritage squares", "Pokhara and Phewa Lake", "Mountain flight options", "Short travel time from India"],
    attractions: [
      { name: "Pashupatinath", description: "A major temple complex on the Bagmati river." },
      { name: "Boudhanath", description: "One of the largest stupas in the region." },
      { name: "Pokhara", description: "Lakeside town beneath the Annapurna range." },
      { name: "Nagarkot", description: "A ridge viewpoint for sunrise over the Himalaya." },
    ],
    bestTime: "October to April for clear mountain views.",
    duration: "4 to 6 nights",
    gallery: [nepal],
    faqs: [{ question: "Do Indian citizens need a visa for Nepal?", answer: "No visa is required for Indian citizens, though valid photo identification is necessary." }],
  },
  {
    id: "singapore",
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    region: "international",
    tagline: "A city measured in detail.",
    heroImage: singapore,
    description:
      "Compact, efficient and green — a city where an entire itinerary fits inside a metro map.",
    intro:
      "Singapore is easy to travel in and particularly suited to families and first-time international travellers. Most itineraries run three to four nights, often extended into Malaysia.",
    highlights: ["Excellent public transport", "Family attractions on Sentosa", "Gardens by the Bay", "Strong food culture"],
    attractions: [
      { name: "Gardens by the Bay", description: "Supertrees and conservatories beside Marina Bay." },
      { name: "Sentosa", description: "Beaches, theme parks and cable cars on an offshore island." },
      { name: "Marina Bay", description: "The waterfront skyline and evening light show." },
      { name: "Chinatown & Little India", description: "Heritage districts with temples and food streets." },
    ],
    bestTime: "Year-round; February to April is driest.",
    duration: "3 to 4 nights",
    gallery: [singapore],
    faqs: [{ question: "How many days does Singapore need?", answer: "Three to four nights is enough for the city and one full day on Sentosa." }],
  },
  {
    id: "thailand",
    slug: "thailand",
    name: "Thailand",
    country: "Thailand",
    region: "international",
    tagline: "Limestone islands and long city evenings.",
    heroImage: thailand,
    description:
      "Bangkok's temples and markets paired with the Andaman coast's islands and limestone bays.",
    intro:
      "Thailand itineraries usually combine a city base with a coastal one. Phuket and Krabi work for beaches and island hopping; Bangkok covers temples, markets and shopping.",
    highlights: ["Bangkok temples and markets", "Phi Phi and James Bond island tours", "Wide hotel range", "Direct flights from several Indian cities"],
    attractions: [
      { name: "Grand Palace", description: "Bangkok's royal complex and Wat Phra Kaew." },
      { name: "Phi Phi Islands", description: "Day trips by speedboat from Phuket or Krabi." },
      { name: "Krabi", description: "Limestone cliffs, Railay beach and longtail boats." },
      { name: "Floating Markets", description: "Canal markets outside Bangkok." },
    ],
    bestTime: "November to March.",
    duration: "5 to 7 nights",
    gallery: [thailand],
    faqs: [{ question: "Is a visa required for Thailand?", answer: "Requirements change periodically. We confirm the current position for Indian passport holders before booking." }],
  },
  {
    id: "himachal-pradesh",
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    country: "India",
    region: "domestic",
    tagline: "Deodar forests and open mountain air.",
    heroImage: himachal,
    description:
      "Hill stations, river valleys and high passes across the western Himalaya.",
    intro:
      "Himachal covers a wide range of travel styles — from easy hill-station holidays in Shimla and Manali to higher, quieter valleys for travellers who want distance from the crowds.",
    highlights: ["Shimla and Manali", "Solang and Atal Tunnel", "River valleys and pine forests", "Suits families and groups"],
    attractions: [
      { name: "Shimla", description: "Colonial-era ridge town and Mall Road." },
      { name: "Manali", description: "Base for Solang Valley and the Atal Tunnel." },
      { name: "Dharamshala & McLeod Ganj", description: "Monasteries beneath the Dhauladhar range." },
      { name: "Kasol & Parvati Valley", description: "River-side villages and forest walks." },
    ],
    bestTime: "March to June, and September to November.",
    duration: "5 to 7 nights",
    gallery: [himachal],
    faqs: [{ question: "Which airport is closest?", answer: "Chandigarh serves Shimla and Manali routes; Kangra serves Dharamshala. Road transfers are arranged as part of the package." }],
  },
  {
    id: "kashmir",
    slug: "kashmir",
    name: "Kashmir",
    country: "India",
    region: "domestic",
    tagline: "Still water, high meadows, long light.",
    heroImage: kashmir,
    description:
      "Dal Lake houseboats, the meadows of Gulmarg and Pahalgam, and the valley roads between them.",
    intro:
      "A Kashmir itinerary is usually built around Srinagar with day trips into the surrounding valleys. Houseboat stays remain one of the most distinctive experiences in Indian travel.",
    highlights: ["Shikara rides on Dal Lake", "Gulmarg gondola", "Pahalgam and Betaab Valley", "Mughal gardens in Srinagar"],
    attractions: [
      { name: "Dal Lake", description: "Houseboats, shikaras and the floating market at dawn." },
      { name: "Gulmarg", description: "Meadow and gondola with views towards the Pir Panjal." },
      { name: "Pahalgam", description: "River valley with walking routes and pony trails." },
      { name: "Sonmarg", description: "The meadow of gold, on the road towards Ladakh." },
    ],
    bestTime: "March to October; December to February for snow.",
    duration: "5 to 6 nights",
    gallery: [kashmir],
    faqs: [{ question: "Is a houseboat stay recommended?", answer: "Many travellers include one or two nights on a houseboat and the remainder in a hotel in Srinagar." }],
  },
  {
    id: "kerala",
    slug: "kerala",
    name: "Kerala",
    country: "India",
    region: "domestic",
    tagline: "Water, tea and slow afternoons.",
    heroImage: kerala,
    description:
      "Backwater canals, tea-covered hills and a coastline of quiet beaches and colonial ports.",
    intro:
      "Kerala travels well as a loop: hills at Munnar, wildlife at Thekkady, backwaters at Alleppey and a final coastal stop at Kochi or Kovalam.",
    highlights: ["Alleppey houseboat night", "Munnar tea estates", "Fort Kochi heritage", "Ayurveda stay options"],
    attractions: [
      { name: "Alleppey Backwaters", description: "Overnight houseboats through canal villages." },
      { name: "Munnar", description: "Tea plantations and viewpoints in the Western Ghats." },
      { name: "Thekkady", description: "Periyar reserve, spice plantations and lake cruises." },
      { name: "Fort Kochi", description: "Chinese fishing nets, churches and old trading streets." },
    ],
    bestTime: "September to March.",
    duration: "5 to 7 nights",
    gallery: [kerala],
    faqs: [{ question: "How long should the houseboat stay be?", answer: "One night is typical; the boat usually boards at midday and disembarks the following morning." }],
  },
  {
    id: "north-east",
    slug: "north-east",
    name: "North East India",
    country: "India",
    region: "domestic",
    tagline: "Cloud forests and living root bridges.",
    heroImage: northeast,
    description:
      "Meghalaya's waterfalls and caves, Assam's river plains and the quieter hill states beyond.",
    intro:
      "The North East rewards travellers willing to spend longer on the road. Distances are modest but slow, and the landscape changes constantly between plateau, gorge and river plain.",
    highlights: ["Living root bridges", "Cherrapunji and Mawsynram", "Kaziranga wildlife", "Umngot river at Dawki"],
    attractions: [
      { name: "Shillong", description: "The hill capital of Meghalaya and a base for day trips." },
      { name: "Cherrapunji", description: "Waterfalls, caves and root bridge trails." },
      { name: "Dawki", description: "The clear Umngot river near the Bangladesh border." },
      { name: "Kaziranga", description: "Grassland national park in Assam." },
    ],
    bestTime: "October to April.",
    duration: "6 to 8 nights",
    gallery: [northeast],
    faqs: [{ question: "Are permits needed?", answer: "Some states require inner-line permits. We advise and assist based on the states in your itinerary." }],
  },
  {
    id: "rajasthan",
    slug: "rajasthan",
    name: "Rajasthan",
    country: "India",
    region: "domestic",
    tagline: "Forts, lakes and the edge of the desert.",
    heroImage: rajasthan,
    description:
      "A circuit of walled cities, hill forts and lake palaces across India's north-west.",
    intro:
      "Rajasthan is best travelled as a road circuit. Jaipur, Jodhpur, Udaipur and Jaisalmer each hold a distinct character, and heritage stays are a large part of the experience.",
    highlights: ["Jaipur's forts and old city", "Udaipur lake palaces", "Jaisalmer desert camps", "Heritage hotel stays"],
    attractions: [
      { name: "Amber Fort", description: "Hill fort above Jaipur with courtyards and mirror halls." },
      { name: "Udaipur", description: "City palace and lake views across Pichola." },
      { name: "Jaisalmer", description: "The living fort and the Thar desert beyond it." },
      { name: "Mehrangarh, Jodhpur", description: "A fort above the blue city." },
    ],
    bestTime: "October to March.",
    duration: "6 to 8 nights",
    gallery: [rajasthan],
    faqs: [{ question: "Is Rajasthan better by road or rail?", answer: "Road travel is the most flexible for a multi-city circuit; rail works well for single-city visits." }],
  },
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
export const internationalDestinations = destinations.filter((d) => d.region === "international");
export const domesticDestinations = destinations.filter((d) => d.region === "domestic");
