export const cities = [
  { slug: 'hubli', name: 'Hubli' },
  { slug: 'bellary', name: 'Bellary' },
  { slug: 'bagalkot', name: 'Bagalkot' },
  { slug: 'bangalore-urban', name: 'Bangalore Urban' },
  { slug: 'bengaluru-rural', name: 'Bengaluru Rural' },
  { slug: 'belagavi', name: 'Belagavi' },
  { slug: 'bidar', name: 'Bidar' },
  { slug: 'chamarajanagar', name: 'Chamarajanagar' },
  { slug: 'chikballapur', name: 'Chikballapur' },
  { slug: 'chikkamagaluru', name: 'Chikkamagaluru' },
  { slug: 'chitradurga', name: 'Chitradurga' },
  { slug: 'dakshina-kannada', name: 'Dakshina Kannada' },
  { slug: 'davanagere', name: 'Davanagere' },
  { slug: 'gadag', name: 'Gadag' },
  { slug: 'hassan', name: 'Hassan' },
  { slug: 'haveri', name: 'Haveri' },
  { slug: 'kalaburagi', name: 'Kalaburagi' },
  { slug: 'kodagu', name: 'Kodagu' },
  { slug: 'kolar', name: 'Kolar' },
  { slug: 'mandya', name: 'Mandya' },
  { slug: 'mysuru', name: 'Mysuru' },
  { slug: 'raichur', name: 'Raichur' },
  { slug: 'ramanagara', name: 'Ramanagara' },
  { slug: 'shivamogga', name: 'Shivamogga' },
  { slug: 'tumakuru', name: 'Tumakuru' },
  { slug: 'udupi', name: 'Udupi' },
  { slug: 'uttara-kannada', name: 'Uttara Kannada' },
  { slug: 'vijayapura', name: 'Vijayapura' }
];

const aboutVariations = [
  (city: string) => `Looking for reliable packers and movers in ${city} for your home, office, vehicle, or long-distance relocation? Likhit Packers and Movers provides professional packing, loading, transportation, unloading, and relocation services for customers moving within ${city} or relocating to another city. Whether you are shifting to a new apartment, moving your family to Bengaluru, relocating an office, or transporting your vehicle, our team helps coordinate the complete moving process from packing to delivery.`,
  
  (city: string) => `Planning a move in or out of ${city}? The relocation process can be overwhelming without the right assistance. Likhit Packers and Movers is the most trusted moving company in ${city}, offering end-to-end relocation solutions. We specialize in safe household shifting, careful office relocations, and secure car and bike transportation. From carefully wrapping your fragile items to delivering them safely at your new destination, we ensure a stress-free experience tailored specifically for the residents and businesses of ${city}.`,
  
  (city: string) => `Relocating from ${city} doesn't have to be a stressful experience. At Likhit Packers and Movers, we bring years of logistical expertise directly to your doorstep in ${city}. Our dedicated local team understands the geography, traffic patterns, and specific moving challenges of the region. Whether it's a local shift down the street, an office move to the commercial hub, or an interstate transfer of your household goods, we provide premium packaging materials, trained loaders, and modern transport vehicles to secure your belongings.`,
  
  (city: string) => `When you need a dependable moving partner in ${city}, Likhit Packers and Movers stands out as the premier choice. We have built our reputation on trust, timely deliveries, and zero-damage guarantees. For families and corporate clients in ${city}, we offer customized shifting packages. We handle everything: meticulous packing, safe loading, insured transit, and careful unloading. Focus on settling into your new space while our expert ${city} crew handles the heavy lifting.`,
  
  (city: string) => `Make your next move effortless with Likhit Packers and Movers, the leading relocation experts in ${city}. Moving involves immense planning, heavy lifting, and the risk of damaging valuable possessions. By hiring our specialized ${city} moving team, you get access to top-tier packing supplies, secure transit vehicles, and experienced personnel. Whether you're making a local transition within ${city} or planning a major long-haul move across India, we deliver peace of mind and unmatched service quality.`
];

const localServicesVariations = [
  (city: string) => [
    { title: `Household Shifting in ${city}`, desc: `Complete home relocation services including packing of fragile items, furniture dismantling, and safe transit from your ${city} residence.` },
    { title: `Local Packers and Movers in ${city}`, desc: `Fast and affordable shifting within ${city} neighborhoods with same-day delivery options.` },
    { title: `Office Relocation in ${city}`, desc: `Minimal downtime corporate moving services for IT parks, businesses, and commercial spaces in ${city}.` },
    { title: `Vehicle Transportation from ${city}`, desc: `Door-to-door secure transport for your car or bike from ${city} to any major city in India.` },
    { title: `Interstate Relocation from ${city}`, desc: `Long-distance moving solutions with dedicated trucks and GPS tracking.` },
    { title: `Packing and Unpacking`, desc: `Premium packing using bubble wrap, corrugated sheets, and specialized cartons to protect your valuables.` },
    { title: `Loading and Unloading`, desc: `Trained workforce utilizing proper equipment to safely load and unload heavy furniture and appliances.` },
    { title: `Storage and Warehousing`, desc: `Safe, climate-controlled storage facilities for short-term or long-term keeping of your goods.` }
  ],
  (city: string) => [
    { title: `Residential Moving in ${city}`, desc: `We handle your personal belongings with the utmost care, ensuring a smooth transition to your new home in or out of ${city}.` },
    { title: `Commercial Shifting in ${city}`, desc: `Expert handling of office equipment, IT infrastructure, and sensitive documents for ${city} businesses.` },
    { title: `Car & Bike Carrier from ${city}`, desc: `Specialized closed-container vehicles to transport your car or two-wheeler safely from ${city}.` },
    { title: `Domestic Relocation`, desc: `Comprehensive moving services from ${city} to Bangalore, Hyderabad, Chennai, Mumbai, or anywhere in India.` },
    { title: `Local ${city} Shifting`, desc: `Quick, localized moving services tailored for navigating the streets and neighborhoods of ${city}.` },
    { title: `Expert Packing Services`, desc: `Multi-layer packing techniques designed to withstand long journeys and prevent any transit damage.` },
    { title: `Furniture Assembly`, desc: `Professional dismantling of large beds, wardrobes, and tables, reassembled perfectly at your new destination.` },
    { title: `Warehouse Storage`, desc: `Secure, 24/7 monitored storage solutions for when your new space isn't quite ready yet.` }
  ],
  (city: string) => [
    { title: `Home Shifting Services in ${city}`, desc: `Stress-free house moving with our expert team, providing end-to-end solutions for families in ${city}.` },
    { title: `Office & IT Relocation`, desc: `Strategic corporate shifting in ${city} ensuring zero business disruption and safe handling of servers.` },
    { title: `Automobile Transport`, desc: `Insured and reliable auto transit services to relocate your vehicles from ${city} with complete peace of mind.` },
    { title: `City-to-City Moving`, desc: `Seamless interstate moving packages from ${city} to any destination across the country.` },
    { title: `Neighborhood Shifting`, desc: `Dedicated mini-trucks and local crews for rapid relocation within ${city}.` },
    { title: `Premium Packaging`, desc: `We use imported packing materials to ensure 100% protection of glassware, electronics, and antiques.` },
    { title: `Heavy Lifting & Loading`, desc: `Skilled manpower equipped to handle pianos, heavy safes, and oversized furniture safely.` },
    { title: `Secure Transit Storage`, desc: `Temporary holding facilities available if there is a gap between your move-out and move-in dates.` }
  ]
];

const pricingVariations = [
  (city: string) => [
    { type: "1 BHK Shifting", price: "Starting from ₹4,500" },
    { type: "2 BHK Shifting", price: "Starting from ₹6,500" },
    { type: "3 BHK Shifting", price: "Starting from ₹9,000" },
    { type: "4 BHK / Villa", price: "Starting from ₹12,000" },
    { type: "Office Relocation", price: "Custom Quote" },
    { type: "Vehicle Shifting", price: "Starting from ₹3,000" },
  ],
  (city: string) => [
    { type: "1 BHK Local Move", price: "Starting from ₹4,000" },
    { type: "2 BHK Local Move", price: "Starting from ₹6,000" },
    { type: "3 BHK Local Move", price: "Starting from ₹8,500" },
    { type: "Villa/Duplex Relocation", price: "Starting from ₹14,000" },
    { type: "Commercial Setup", price: "Custom Quote" },
    { type: "Car/Bike Transport", price: "Starting from ₹3,500" },
  ],
];

export function getLocationData(slug: string) {
  const cityObj = cities.find(c => c.slug === slug);
  if (!cityObj) return null;
  
  const cityName = cityObj.name;
  
  // Use a simple hash of the slug to consistently pick variations
  const hash = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  const aboutText = aboutVariations[hash % aboutVariations.length](cityName);
  const services = localServicesVariations[hash % localServicesVariations.length](cityName);
  const pricing = pricingVariations[hash % pricingVariations.length](cityName);

  return {
    slug,
    cityName,
    seoTitle: \`Best Packers and Movers in \${cityName} | Likhit Packers\`,
    seoDescription: \`Looking for top-rated packers and movers in \${cityName}? We offer safe household shifting, office relocation, and vehicle transport. Get a free quote today!\`,
    h1: \`Best Packers and Movers in \${cityName}\`,
    heroSubtitle: \`Professional, safe, and reliable relocation services tailored for \${cityName}\`,
    aboutText,
    services,
    pricing,
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": \`Likhit Packers and Movers \${cityName}\`,
      "image": "https://www.likhitpackers.in/logo.png",
      "description": \`Reliable packers and movers in \${cityName} offering household shifting, office relocation, and car transportation.\`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": cityName,
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "url": \`https://www.likhitpackers.in/locations/\${slug}\`,
      "telephone": "+919900231434",
      "priceRange": "₹4000 - ₹25000"
    },
    faq: [
      {
        question: \`How much do packers and movers charge in \${cityName}?\`,
        answer: \`The cost of shifting in \${cityName} depends on the volume of goods, distance, and packing materials required. Local shifting starts around ₹4,500 for a 1 BHK.\`
      },
      {
        question: \`Do you provide vehicle transportation from \${cityName}?\`,
        answer: \`Yes, we offer secure door-to-door car and bike transportation services from \${cityName} to anywhere in India using specialized carrier vehicles.\`
      },
      {
        question: \`Is my luggage insured during transit from \${cityName}?\`,
        answer: \`Absolutely. We provide transit insurance for your valuable goods to ensure complete peace of mind during your relocation from \${cityName}.\`
      }
    ],
    nearbyLinks: cities.filter(c => c.slug !== slug).sort(() => 0.5 - Math.random()).slice(0, 8)
  };
}
