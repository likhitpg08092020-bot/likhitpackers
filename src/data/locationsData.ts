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

const aboutTextTemplate = (city: string) => `Looking for reliable packers and movers in ${city} for your home, office, vehicle or long-distance relocation? Likhit Packers and Movers provides professional packing, loading, transportation, unloading and relocation services for customers moving within ${city} or relocating to another city.\n\nWhether you are shifting to a new apartment, moving your family to Bengaluru, relocating an office, or transporting your vehicle, our team helps coordinate the complete moving process from packing to delivery.`;

const servicesTemplate = (city: string) => [
  { slug: "household-shifting", title: `Household Shifting in ${city}`, desc: `Complete home relocation services including packing of fragile items, furniture dismantling, and safe transit from your ${city} residence.` },
  { slug: "local-packers", title: `Local Packers and Movers in ${city}`, desc: `Fast and affordable shifting within ${city} neighborhoods with same-day delivery options.` },
  { slug: "office-relocation", title: `Office Relocation in ${city}`, desc: `Minimal downtime corporate moving services for IT parks, businesses, and commercial spaces in ${city}.` },
  { slug: "vehicle-transportation", title: `Vehicle Transportation from ${city}`, desc: `Door-to-door secure transport for your car or bike from ${city} to any major city in India.` },
  { slug: "interstate-relocation", title: `Interstate Relocation from ${city}`, desc: `Long-distance moving solutions with dedicated trucks and GPS tracking.` },
  { slug: "packing-unpacking", title: `Packing and Unpacking`, desc: `Premium packing using bubble wrap, corrugated sheets, and specialized cartons to protect your valuables.` },
  { slug: "loading-unloading", title: `Loading and Unloading`, desc: `Trained workforce utilizing proper equipment to safely load and unload heavy furniture and appliances.` },
  { slug: "furniture-moving", title: `Furniture and Appliance Moving`, desc: `Professional dismantling of large beds, wardrobes, and tables, reassembled perfectly at your new destination.` },
  { slug: "storage-warehousing", title: `Storage and Warehousing`, desc: `Safe, climate-controlled storage facilities for short-term or long-term keeping of your goods.` }
];

const pricingTemplate = (city: string) => [
  { type: "1 BHK", price: "Starting from ₹4,500" },
  { type: "2 BHK", price: "Starting from ₹6,500" },
  { type: "3 BHK", price: "Starting from ₹9,000" },
  { type: "4 BHK / Villa", price: "Starting from ₹12,000" },
  { type: "Office relocation", price: "Custom Quote" },
  { type: "Vehicle shifting", price: "Starting from ₹3,000" },
];

export function getLocationData(slug: string) {
  const cityObj = cities.find(c => c.slug === slug);
  if (!cityObj) return null;
  
  const cityName = cityObj.name;
  
  const aboutText = aboutTextTemplate(cityName);
  const services = servicesTemplate(cityName);
  const pricing = pricingTemplate(cityName);

  return {
    slug,
    cityName,
    seoTitle: `Best Packers and Movers in ${cityName} | Likhit Packers`,
    seoDescription: `Looking for top-rated packers and movers in ${cityName}? We offer safe household shifting, office relocation, and vehicle transport. Get a free quote today!`,
    h1: `Best Packers and Movers in ${cityName}`,
    heroSubtitle: `Professional, safe, and reliable relocation services tailored for ${cityName}`,
    aboutText,
    services,
    pricing,
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Likhit Packers and Movers ${cityName}`,
      "image": "https://www.likhitpackers.in/logo.png",
      "description": `Reliable packers and movers in ${cityName} offering household shifting, office relocation, and car transportation.`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": cityName,
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "url": `https://www.likhitpackers.in/locations/${slug}`,
      "telephone": "+919900231434",
      "priceRange": "₹4000 - ₹25000"
    },
    faq: [
      {
        question: `How much do packers and movers charge in ${cityName}?`,
        answer: `The cost of shifting in ${cityName} depends on the volume of goods, distance, and packing materials required. Local shifting starts around ₹4,500 for a 1 BHK.`
      },
      {
        question: `Do you provide vehicle transportation from ${cityName}?`,
        answer: `Yes, we offer secure door-to-door car and bike transportation services from ${cityName} to anywhere in India using specialized carrier vehicles.`
      },
      {
        question: `Is my luggage insured during transit from ${cityName}?`,
        answer: `Absolutely. We provide transit insurance for your valuable goods to ensure complete peace of mind during your relocation from ${cityName}.`
      }
    ],
    nearbyLinks: cities.filter(c => c.slug !== slug).sort(() => 0.5 - Math.random()).slice(0, 8)
  };
}
