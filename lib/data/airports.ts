export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
  region: string;
}

export const airports: Airport[] = [
  // GCC Airports
  { code: 'DOH', name: 'Hamad International Airport', city: 'Doha', country: 'Qatar', region: 'GCC' },
  { code: 'DXB', name: 'Dubai International Airport', city: 'Dubai', country: 'UAE', region: 'GCC' },
  { code: 'AUH', name: 'Abu Dhabi International Airport', city: 'Abu Dhabi', country: 'UAE', region: 'GCC' },
  { code: 'SHJ', name: 'Sharjah International Airport', city: 'Sharjah', country: 'UAE', region: 'GCC' },
  { code: 'AAN', name: 'Al Ain International Airport', city: 'Al Ain', country: 'UAE', region: 'GCC' },
  { code: 'JED', name: 'King Abdulaziz International Airport', city: 'Jeddah', country: 'Saudi Arabia', region: 'GCC' },
  { code: 'RUH', name: 'King Khalid International Airport', city: 'Riyadh', country: 'Saudi Arabia', region: 'GCC' },
  { code: 'DMM', name: 'King Fahd International Airport', city: 'Dammam', country: 'Saudi Arabia', region: 'GCC' },
  { code: 'MED', name: 'Prince Mohammad bin Abdulaziz Airport', city: 'Medina', country: 'Saudi Arabia', region: 'GCC' },
  { code: 'TIF', name: 'Taif Regional Airport', city: 'Taif', country: 'Saudi Arabia', region: 'GCC' },
  { code: 'AHB', name: 'Abha International Airport', city: 'Abha', country: 'Saudi Arabia', region: 'GCC' },
  { code: 'GIZ', name: 'Jizan Regional Airport', city: 'Jizan', country: 'Saudi Arabia', region: 'GCC' },
  { code: 'KWI', name: 'Kuwait International Airport', city: 'Kuwait City', country: 'Kuwait', region: 'GCC' },
  { code: 'BAH', name: 'Bahrain International Airport', city: 'Manama', country: 'Bahrain', region: 'GCC' },
  { code: 'MCT', name: 'Muscat International Airport', city: 'Muscat', country: 'Oman', region: 'GCC' },
  { code: 'SLL', name: 'Salalah International Airport', city: 'Salalah', country: 'Oman', region: 'GCC' },

  // Middle East
  { code: 'IST', name: 'Istanbul Airport', city: 'Istanbul', country: 'Turkey', region: 'Middle East' },
  { code: 'SAW', name: 'Sabiha Gökçen International Airport', city: 'Istanbul', country: 'Turkey', region: 'Middle East' },
  { code: 'AYT', name: 'Antalya Airport', city: 'Antalya', country: 'Turkey', region: 'Middle East' },
  { code: 'ESB', name: 'Esenboğa International Airport', city: 'Ankara', country: 'Turkey', region: 'Middle East' },
  { code: 'CAI', name: 'Cairo International Airport', city: 'Cairo', country: 'Egypt', region: 'Middle East' },
  { code: 'HRG', name: 'Hurghada International Airport', city: 'Hurghada', country: 'Egypt', region: 'Middle East' },
  { code: 'SSH', name: 'Sharm El Sheikh International Airport', city: 'Sharm El Sheikh', country: 'Egypt', region: 'Middle East' },
  { code: 'AMM', name: 'Queen Alia International Airport', city: 'Amman', country: 'Jordan', region: 'Middle East' },
  { code: 'AQJ', name: 'King Hussein International Airport', city: 'Aqaba', country: 'Jordan', region: 'Middle East' },
  { code: 'BEY', name: 'Rafic Hariri International Airport', city: 'Beirut', country: 'Lebanon', region: 'Middle East' },
  { code: 'BGW', name: 'Baghdad International Airport', city: 'Baghdad', country: 'Iraq', region: 'Middle East' },
  { code: 'BSR', name: 'Basra International Airport', city: 'Basra', country: 'Iraq', region: 'Middle East' },
  { code: 'DAM', name: 'Damascus International Airport', city: 'Damascus', country: 'Syria', region: 'Middle East' },

  // Europe - UK & Ireland
  { code: 'LHR', name: 'London Heathrow Airport', city: 'London', country: 'United Kingdom', region: 'Europe' },
  { code: 'LGW', name: 'London Gatwick Airport', city: 'London', country: 'United Kingdom', region: 'Europe' },
  { code: 'LTN', name: 'London Luton Airport', city: 'London', country: 'United Kingdom', region: 'Europe' },
  { code: 'STN', name: 'London Stansted Airport', city: 'London', country: 'United Kingdom', region: 'Europe' },
  { code: 'MAN', name: 'Manchester Airport', city: 'Manchester', country: 'United Kingdom', region: 'Europe' },
  { code: 'BHX', name: 'Birmingham Airport', city: 'Birmingham', country: 'United Kingdom', region: 'Europe' },
  { code: 'EDI', name: 'Edinburgh Airport', city: 'Edinburgh', country: 'United Kingdom', region: 'Europe' },
  { code: 'GLA', name: 'Glasgow Airport', city: 'Glasgow', country: 'United Kingdom', region: 'Europe' },
  { code: 'DUB', name: 'Dublin Airport', city: 'Dublin', country: 'Ireland', region: 'Europe' },

  // Europe - France
  { code: 'CDG', name: 'Paris Charles de Gaulle Airport', city: 'Paris', country: 'France', region: 'Europe' },
  { code: 'ORY', name: 'Paris Orly Airport', city: 'Paris', country: 'France', region: 'Europe' },
  { code: 'NCE', name: 'Nice Côte d\'Azur Airport', city: 'Nice', country: 'France', region: 'Europe' },
  { code: 'LYS', name: 'Lyon–Saint-Exupéry Airport', city: 'Lyon', country: 'France', region: 'Europe' },
  { code: 'MRS', name: 'Marseille Provence Airport', city: 'Marseille', country: 'France', region: 'Europe' },

  // Europe - Germany
  { code: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt', country: 'Germany', region: 'Europe' },
  { code: 'MUC', name: 'Munich Airport', city: 'Munich', country: 'Germany', region: 'Europe' },
  { code: 'BER', name: 'Berlin Brandenburg Airport', city: 'Berlin', country: 'Germany', region: 'Europe' },
  { code: 'DUS', name: 'Düsseldorf Airport', city: 'Düsseldorf', country: 'Germany', region: 'Europe' },
  { code: 'HAM', name: 'Hamburg Airport', city: 'Hamburg', country: 'Germany', region: 'Europe' },

  // Europe - Spain
  { code: 'MAD', name: 'Adolfo Suárez Madrid–Barajas Airport', city: 'Madrid', country: 'Spain', region: 'Europe' },
  { code: 'BCN', name: 'Barcelona–El Prat Airport', city: 'Barcelona', country: 'Spain', region: 'Europe' },
  { code: 'AGP', name: 'Málaga Airport', city: 'Málaga', country: 'Spain', region: 'Europe' },
  { code: 'PMI', name: 'Palma de Mallorca Airport', city: 'Palma de Mallorca', country: 'Spain', region: 'Europe' },
  { code: 'ALC', name: 'Alicante–Elche Airport', city: 'Alicante', country: 'Spain', region: 'Europe' },

  // Europe - Italy
  { code: 'FCO', name: 'Rome Fiumicino Airport', city: 'Rome', country: 'Italy', region: 'Europe' },
  { code: 'MXP', name: 'Milan Malpensa Airport', city: 'Milan', country: 'Italy', region: 'Europe' },
  { code: 'LIN', name: 'Milan Linate Airport', city: 'Milan', country: 'Italy', region: 'Europe' },
  { code: 'VCE', name: 'Venice Marco Polo Airport', city: 'Venice', country: 'Italy', region: 'Europe' },
  { code: 'NAP', name: 'Naples International Airport', city: 'Naples', country: 'Italy', region: 'Europe' },

  // Europe - Netherlands & Belgium
  { code: 'AMS', name: 'Amsterdam Schiphol Airport', city: 'Amsterdam', country: 'Netherlands', region: 'Europe' },
  { code: 'BRU', name: 'Brussels Airport', city: 'Brussels', country: 'Belgium', region: 'Europe' },

  // Europe - Switzerland & Austria
  { code: 'ZRH', name: 'Zurich Airport', city: 'Zurich', country: 'Switzerland', region: 'Europe' },
  { code: 'GVA', name: 'Geneva Airport', city: 'Geneva', country: 'Switzerland', region: 'Europe' },
  { code: 'VIE', name: 'Vienna International Airport', city: 'Vienna', country: 'Austria', region: 'Europe' },

  // Europe - Scandinavia
  { code: 'CPH', name: 'Copenhagen Airport', city: 'Copenhagen', country: 'Denmark', region: 'Europe' },
  { code: 'ARN', name: 'Stockholm Arlanda Airport', city: 'Stockholm', country: 'Sweden', region: 'Europe' },
  { code: 'OSL', name: 'Oslo Airport', city: 'Oslo', country: 'Norway', region: 'Europe' },
  { code: 'HEL', name: 'Helsinki-Vantaa Airport', city: 'Helsinki', country: 'Finland', region: 'Europe' },

  // Europe - Eastern Europe
  { code: 'WAW', name: 'Warsaw Chopin Airport', city: 'Warsaw', country: 'Poland', region: 'Europe' },
  { code: 'PRG', name: 'Václav Havel Airport Prague', city: 'Prague', country: 'Czech Republic', region: 'Europe' },
  { code: 'BUD', name: 'Budapest Ferenc Liszt Airport', city: 'Budapest', country: 'Hungary', region: 'Europe' },
  { code: 'OTP', name: 'Henri Coandă International Airport', city: 'Bucharest', country: 'Romania', region: 'Europe' },

  // Europe - Greece & Portugal
  { code: 'ATH', name: 'Athens International Airport', city: 'Athens', country: 'Greece', region: 'Europe' },
  { code: 'LIS', name: 'Lisbon Airport', city: 'Lisbon', country: 'Portugal', region: 'Europe' },

  // Asia - Southeast Asia
  { code: 'BKK', name: 'Suvarnabhumi Airport', city: 'Bangkok', country: 'Thailand', region: 'Asia' },
  { code: 'DMK', name: 'Don Mueang International Airport', city: 'Bangkok', country: 'Thailand', region: 'Asia' },
  { code: 'SIN', name: 'Singapore Changi Airport', city: 'Singapore', country: 'Singapore', region: 'Asia' },
  { code: 'KUL', name: 'Kuala Lumpur International Airport', city: 'Kuala Lumpur', country: 'Malaysia', region: 'Asia' },
  { code: 'CGK', name: 'Soekarno–Hatta International Airport', city: 'Jakarta', country: 'Indonesia', region: 'Asia' },
  { code: 'DPS', name: 'Ngurah Rai International Airport', city: 'Bali', country: 'Indonesia', region: 'Asia' },
  { code: 'MNL', name: 'Ninoy Aquino International Airport', city: 'Manila', country: 'Philippines', region: 'Asia' },
  { code: 'HAN', name: 'Noi Bai International Airport', city: 'Hanoi', country: 'Vietnam', region: 'Asia' },
  { code: 'SGN', name: 'Tan Son Nhat International Airport', city: 'Ho Chi Minh City', country: 'Vietnam', region: 'Asia' },

  // Asia - East Asia
  { code: 'HKG', name: 'Hong Kong International Airport', city: 'Hong Kong', country: 'Hong Kong', region: 'Asia' },
  { code: 'PEK', name: 'Beijing Capital International Airport', city: 'Beijing', country: 'China', region: 'Asia' },
  { code: 'PVG', name: 'Shanghai Pudong International Airport', city: 'Shanghai', country: 'China', region: 'Asia' },
  { code: 'CAN', name: 'Guangzhou Baiyun International Airport', city: 'Guangzhou', country: 'China', region: 'Asia' },
  { code: 'NRT', name: 'Narita International Airport', city: 'Tokyo', country: 'Japan', region: 'Asia' },
  { code: 'HND', name: 'Tokyo Haneda Airport', city: 'Tokyo', country: 'Japan', region: 'Asia' },
  { code: 'ICN', name: 'Incheon International Airport', city: 'Seoul', country: 'South Korea', region: 'Asia' },
  { code: 'TPE', name: 'Taiwan Taoyuan International Airport', city: 'Taipei', country: 'Taiwan', region: 'Asia' },

  // Asia - South Asia
  { code: 'DEL', name: 'Indira Gandhi International Airport', city: 'Delhi', country: 'India', region: 'Asia' },
  { code: 'BOM', name: 'Chhatrapati Shivaji Maharaj International Airport', city: 'Mumbai', country: 'India', region: 'Asia' },
  { code: 'BLR', name: 'Kempegowda International Airport', city: 'Bangalore', country: 'India', region: 'Asia' },
  { code: 'HYD', name: 'Rajiv Gandhi International Airport', city: 'Hyderabad', country: 'India', region: 'Asia' },
  { code: 'MAA', name: 'Chennai International Airport', city: 'Chennai', country: 'India', region: 'Asia' },
  { code: 'CMB', name: 'Bandaranaike International Airport', city: 'Colombo', country: 'Sri Lanka', region: 'Asia' },
  { code: 'ISB', name: 'Islamabad International Airport', city: 'Islamabad', country: 'Pakistan', region: 'Asia' },
  { code: 'KHI', name: 'Jinnah International Airport', city: 'Karachi', country: 'Pakistan', region: 'Asia' },
  { code: 'LHE', name: 'Allama Iqbal International Airport', city: 'Lahore', country: 'Pakistan', region: 'Asia' },
  { code: 'DAC', name: 'Hazrat Shahjalal International Airport', city: 'Dhaka', country: 'Bangladesh', region: 'Asia' },

  // North America - USA
  { code: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York', country: 'USA', region: 'North America' },
  { code: 'EWR', name: 'Newark Liberty International Airport', city: 'Newark', country: 'USA', region: 'North America' },
  { code: 'LGA', name: 'LaGuardia Airport', city: 'New York', country: 'USA', region: 'North America' },
  { code: 'LAX', name: 'Los Angeles International Airport', city: 'Los Angeles', country: 'USA', region: 'North America' },
  { code: 'ORD', name: 'O\'Hare International Airport', city: 'Chicago', country: 'USA', region: 'North America' },
  { code: 'DFW', name: 'Dallas/Fort Worth International Airport', city: 'Dallas', country: 'USA', region: 'North America' },
  { code: 'SFO', name: 'San Francisco International Airport', city: 'San Francisco', country: 'USA', region: 'North America' },
  { code: 'MIA', name: 'Miami International Airport', city: 'Miami', country: 'USA', region: 'North America' },
  { code: 'SEA', name: 'Seattle-Tacoma International Airport', city: 'Seattle', country: 'USA', region: 'North America' },
  { code: 'BOS', name: 'Boston Logan International Airport', city: 'Boston', country: 'USA', region: 'North America' },
  { code: 'ATL', name: 'Hartsfield-Jackson Atlanta International Airport', city: 'Atlanta', country: 'USA', region: 'North America' },
  { code: 'IAH', name: 'George Bush Intercontinental Airport', city: 'Houston', country: 'USA', region: 'North America' },
  { code: 'LAS', name: 'Harry Reid International Airport', city: 'Las Vegas', country: 'USA', region: 'North America' },
  { code: 'PHX', name: 'Phoenix Sky Harbor International Airport', city: 'Phoenix', country: 'USA', region: 'North America' },
  { code: 'DEN', name: 'Denver International Airport', city: 'Denver', country: 'USA', region: 'North America' },

  // North America - Canada
  { code: 'YYZ', name: 'Toronto Pearson International Airport', city: 'Toronto', country: 'Canada', region: 'North America' },
  { code: 'YVR', name: 'Vancouver International Airport', city: 'Vancouver', country: 'Canada', region: 'North America' },
  { code: 'YUL', name: 'Montréal-Pierre Elliott Trudeau International Airport', city: 'Montreal', country: 'Canada', region: 'North America' },
  { code: 'YYC', name: 'Calgary International Airport', city: 'Calgary', country: 'Canada', region: 'North America' },

  // Africa
  { code: 'JNB', name: 'O.R. Tambo International Airport', city: 'Johannesburg', country: 'South Africa', region: 'Africa' },
  { code: 'CPT', name: 'Cape Town International Airport', city: 'Cape Town', country: 'South Africa', region: 'Africa' },
  { code: 'ADD', name: 'Addis Ababa Bole International Airport', city: 'Addis Ababa', country: 'Ethiopia', region: 'Africa' },
  { code: 'NBO', name: 'Jomo Kenyatta International Airport', city: 'Nairobi', country: 'Kenya', region: 'Africa' },
  { code: 'LOS', name: 'Murtala Muhammed International Airport', city: 'Lagos', country: 'Nigeria', region: 'Africa' },
  { code: 'CMN', name: 'Mohammed V International Airport', city: 'Casablanca', country: 'Morocco', region: 'Africa' },
  { code: 'TUN', name: 'Tunis–Carthage International Airport', city: 'Tunis', country: 'Tunisia', region: 'Africa' },
  { code: 'ALG', name: 'Houari Boumediene Airport', city: 'Algiers', country: 'Algeria', region: 'Africa' },

  // Oceania
  { code: 'SYD', name: 'Sydney Kingsford Smith Airport', city: 'Sydney', country: 'Australia', region: 'Oceania' },
  { code: 'MEL', name: 'Melbourne Airport', city: 'Melbourne', country: 'Australia', region: 'Oceania' },
  { code: 'BNE', name: 'Brisbane Airport', city: 'Brisbane', country: 'Australia', region: 'Oceania' },
  { code: 'PER', name: 'Perth Airport', city: 'Perth', country: 'Australia', region: 'Oceania' },
  { code: 'AKL', name: 'Auckland Airport', city: 'Auckland', country: 'New Zealand', region: 'Oceania' },

  // South America
  { code: 'GRU', name: 'São Paulo/Guarulhos International Airport', city: 'São Paulo', country: 'Brazil', region: 'South America' },
  { code: 'GIG', name: 'Rio de Janeiro/Galeão International Airport', city: 'Rio de Janeiro', country: 'Brazil', region: 'South America' },
  { code: 'EZE', name: 'Ministro Pistarini International Airport', city: 'Buenos Aires', country: 'Argentina', region: 'South America' },
  { code: 'BOG', name: 'El Dorado International Airport', city: 'Bogotá', country: 'Colombia', region: 'South America' },
  { code: 'LIM', name: 'Jorge Chávez International Airport', city: 'Lima', country: 'Peru', region: 'South America' },
  { code: 'SCL', name: 'Arturo Merino Benítez International Airport', city: 'Santiago', country: 'Chile', region: 'South America' },
];

// Helper function to get airports by region
export function getAirportsByRegion(region: string): Airport[] {
  return airports.filter(airport => airport.region === region);
}

// Helper function to get all regions
export function getRegions(): string[] {
  return Array.from(new Set(airports.map(airport => airport.region)));
}

// Helper function to format airport for display
export function formatAirport(airport: Airport): string {
  return `${airport.code} - ${airport.name}, ${airport.city}`;
}

// Helper function to search airports
export function searchAirports(query: string): Airport[] {
  const lowerQuery = query.toLowerCase();
  return airports.filter(
    airport =>
      airport.code.toLowerCase().includes(lowerQuery) ||
      airport.name.toLowerCase().includes(lowerQuery) ||
      airport.city.toLowerCase().includes(lowerQuery) ||
      airport.country.toLowerCase().includes(lowerQuery)
  );
}
