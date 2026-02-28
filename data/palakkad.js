const palakkadPlaces = [
  {
    slug: "silent-valley",
    name: "Silent Valley National Park",
    image: "/images/silent-valley.jpg",
    short: "Pristine tropical rainforest.",
    description: "Silent Valley National Park is one of the most untouched rainforests in India, rich in biodiversity.",
    location: "Silent Valley Palakkad",
    reach: {
      road: "Via Mannarkkad.",
      train: "Palakkad Junction – 65 km.",
      flight: "Cochin International Airport – 120 km."
    },
    activities: ["Nature walk", "Wildlife watching", "Photography"],
    food: [
      "Forest Canteen",
      "Local Eateries",
      "Tea Shops",
      "Village Food Stalls"
    ],
    stay: [
      "Forest Guest House",
      "Eco Lodges",
      "Homestays",
      "Budget Resorts"
    ],
    petrol: ["Indian Oil Mannarkkad"],
    atm: ["SBI ATM Mannarkkad"],
    hospital: ["Taluk Hospital Mannarkkad"]
  },

  {
    slug: "malampuzha-dam",
    name: "Malampuzha Dam & Gardens",
    image: "/images/malampuzha.jpg",
    short: "Dam with gardens and ropeway.",
    description: "Malampuzha Dam is a major tourist attraction with landscaped gardens and ropeway.",
    location: "Malampuzha Palakkad",
    reach: {
      road: "10 km from Palakkad town.",
      train: "Palakkad Junction – 9 km.",
      flight: "Coimbatore Airport – 55 km."
    },
    activities: ["Boating", "Garden walk", "Photography"],
    food: [
      "Garden Cafeteria",
      "Local Restaurants",
      "Street Food",
      "Tea Shops"
    ],
    stay: [
      "KTDC Malampuzha",
      "Hotels in Palakkad",
      "Budget Lodges",
      "Service Apartments"
    ],
    petrol: ["Indian Oil Malampuzha"],
    atm: ["SBI ATM Malampuzha"],
    hospital: ["District Hospital Palakkad"]
  },

  {
    slug: "palakkad-fort",
    name: "Palakkad Fort",
    image: "/images/palakkad-fort.jpg",
    short: "Historic Tipu Sultan fort.",
    description: "Palakkad Fort is a well-preserved historical fort built by Hyder Ali.",
    location: "Palakkad Town",
    reach: {
      road: "Located in Palakkad city.",
      train: "Palakkad Junction – 3 km.",
      flight: "Coimbatore Airport – 55 km."
    },
    activities: ["History exploration", "Photography", "Walking"],
    food: [
      "Local Cafes",
      "Indian Restaurants",
      "Street Food",
      "Tea Shops"
    ],
    stay: [
      "Business Hotels",
      "Budget Lodges",
      "Heritage Hotels",
      "Service Apartments"
    ],
    petrol: ["BPCL Palakkad"],
    atm: ["SBI ATM"],
    hospital: ["District Hospital Palakkad"]
  },

  {
    slug: "nelliyampathy",
    name: "Nelliyampathy Hills",
    image: "/images/nelliyampathy.jpg",
    short: "Scenic hill station.",
    description: "Nelliyampathy is a peaceful hill station with plantations and breathtaking viewpoints.",
    location: "Nelliyampathy Palakkad",
    reach: {
      road: "Via Nenmara.",
      train: "Palakkad – 60 km.",
      flight: "Coimbatore Airport – 100 km."
    },
    activities: ["Sightseeing", "Trekking", "Photography"],
    food: [
      "Hilltop Cafes",
      "Local Restaurants",
      "Tea Shops",
      "Homely Food"
    ],
    stay: [
      "KTDC Seethargundu",
      "Hill Resorts",
      "Homestays",
      "Eco Lodges"
    ],
    petrol: ["Indian Oil Nenmara"],
    atm: ["SBI ATM Nenmara"],
    hospital: ["Taluk Hospital Nenmara"]
  },

  {
    slug: "parambikulam",
    name: "Parambikulam Tiger Reserve",
    image: "/images/parambikulam.jpg",
    short: "Wildlife reserve and forest area.",
    description: "Parambikulam is a protected wildlife reserve known for its rich flora and fauna.",
    location: "Parambikulam Palakkad",
    reach: {
      road: "Via Pollachi.",
      train: "Palakkad – 110 km.",
      flight: "Coimbatore Airport – 90 km."
    },
    activities: ["Wildlife safari", "Nature walks", "Photography"],
    food: [
      "Forest Canteen",
      "Eco Camp Meals",
      "Local Food",
      "Tea Shops"
    ],
    stay: [
      "Forest Eco Lodges",
      "Tree Houses",
      "Forest Guest House",
      "Eco Camps"
    ],
    petrol: ["Indian Oil Pollachi"],
    atm: ["SBI ATM Pollachi"],
    hospital: ["Primary Health Centre"]
  },

  {
    slug: "dhoni-waterfalls",
    name: "Dhoni Waterfalls",
    image: "/images/dhoni.jpg",
    short: "Forest waterfall trek.",
    description: "Dhoni Waterfalls is a popular trekking destination surrounded by forests.",
    location: "Dhoni Palakkad",
    reach: {
      road: "15 km from Palakkad town.",
      train: "Palakkad Junction – 15 km.",
      flight: "Coimbatore Airport – 65 km."
    },
    activities: ["Trekking", "Nature walk", "Photography"],
    food: [
      "Local Eateries",
      "Tea Shops",
      "Village Food Stalls",
      "Snacks Counters"
    ],
    stay: [
      "Hotels in Palakkad",
      "Budget Lodges",
      "Homestays",
      "Forest Lodges"
    ],
    petrol: ["Indian Oil Palakkad"],
    atm: ["SBI ATM"],
    hospital: ["District Hospital Palakkad"]
  },

  {
    slug: "kalpathy",
    name: "Kalpathy Heritage Village",
    image: "/images/kalpathy.jpg",
    short: "Traditional heritage village.",
    description: "Kalpathy is famous for its heritage streets, temples, and Ratholsavam festival.",
    location: "Kalpathy Palakkad",
    reach: {
      road: "Located near Palakkad town.",
      train: "Palakkad Junction – 2 km.",
      flight: "Coimbatore Airport – 55 km."
    },
    activities: ["Heritage walk", "Photography", "Temple visit"],
    food: [
      "Traditional Brahmin Meals",
      "Local Restaurants",
      "Tea Shops",
      "Street Snacks"
    ],
    stay: [
      "Heritage Homestays",
      "Hotels in Palakkad",
      "Budget Lodges",
      "Service Apartments"
    ],
    petrol: ["BPCL Palakkad"],
    atm: ["SBI ATM"],
    hospital: ["District Hospital Palakkad"]
  },

  {
    slug: "meenakshipuram",
    name: "Meenakshipuram Temple",
    image: "/images/meenakshipuram.jpg",
    short: "Rock-cut cave temple.",
    description: "Meenakshipuram Temple is a rock-cut cave temple dating back to the Pallava period.",
    location: "Meenakshipuram Palakkad",
    reach: {
      road: "Accessible by road.",
      train: "Palakkad – 40 km.",
      flight: "Coimbatore Airport – 60 km."
    },
    activities: ["Temple visit", "History exploration"],
    food: [
      "Local Eateries",
      "Village Restaurants",
      "Tea Shops",
      "Homely Food"
    ],
    stay: [
      "Budget Lodges",
      "Homestays",
      "Hotels in Palakkad",
      "Guest Houses"
    ],
    petrol: ["Indian Oil Alathur"],
    atm: ["SBI ATM Alathur"],
    hospital: ["Taluk Hospital Alathur"]
  }
];

module.exports = palakkadPlaces;
