/**
 * A list of the material names and their corresponding ticker, weight, and volume. Makes it easier to reference FIO data
 *
*/

export const CurrencySymbols = {
	"CIS": "₡",
	"AIC": "₳",
	"NCC": "₦",
	"ICA": "ǂ",
	"ECD": "€",
}
export const FactionHeaders = {
	"Castillo-Ito": "CI",
	"Insitor": "IC",
	"Antares": "AI",
	"NEO Charter": "NC"
}
export const RatingColors = {
	"P": "#1b6b9c",
	"U": "#8b211e",
	"F": "#e26c37",
	"E": "#e7782b",
	"D": "#e87d28",
	"C": "#ed891c",
	"B": "#f19510",
	"A": "#f6a204"
}

export const Consumption = {
	"PIO": {
		"RAT": 4,
		"DW": 4,
		"OVE": 0.5,
		"PWO": 0.2,
		"COF": 0.5
	},
	"SET": {
		"DW": 5,
		"RAT": 6,
		"EXO": 0.5,
		"PT": 0.5,
		"KOM": 1,
		"REP": 0.2
	},
	"TEC": {
		"DW": 7.5,
		"RAT": 7,
		"MED": 0.5,
		"HMS": 0.5,
		"SCN": 0.1,
		"ALE": 1,
		"SC": 0.1
	},
	"ENG": {
		"DW": 10,
		"MED": 0.5,
		"FIM": 7,
		"HSS": 0.2,
		"PDA": 0.1,
		"VG": 0.2,
		"GIN": 1
	},
	"SCI": {
		"DW": 10,
		"MED": 0.5,
		"MEA": 7,
		"LC": 0.2,
		"WS": 0.1,
		"WIN": 1,
		"NST": 0.1
	}
}

export const Exchanges = {"Antares Station Commodity Exchange": "ANT", "Benten Station Commodity Exchange": "BEN", "Moria Station Commodity Exchange": "MOR", "Hortus Station Commodity Exchange": "HRT", "Hubur Commodity Exchange": "HUB", "Arclight Commodity Exchange": "ARC"};
export const ExchangeTickers = {"ANT": "AI1", "BEN": "CI1", "MOR": "NC1", "HRT": "IC1", "HUB": "NC2", "ARC": "CI2"}
export const Stations = {"Antares Station": "ANT", "Benten Station": "BEN", "Moria Station": "MOR", "Hortus Station": "HRT", "Hubur Station": "HUB", "Acrlight Station": "ARC"};

export const NonProductionBuildings = ["CM", "HB1", "HB2", "HB3", "HB4", "HB5", "HBB", "HBC", "HBL", "HBM", "STO"];

export const FriendlyNames = {
	"LocalMarketAds": "LM Unit Prices",
	"OrderETAs": "Order ETAs",
	"FlightETAs": "Flight Planning ETAs",
	"ShippingAds": "LM Shipping Rates",
	"PostLM": "LM Posting Unit Price",
	"ContractDrafts": "CONTD Unit Prices",
	"QueueLoad": "Queue Percent Display",
	"ConsumableTimers": "Workforce Consumable Burn",
	"FleetETAs": "Fleet ETAs",
	"Notifications": "Notifications",
	"ScreenUnpack": "Screen Unpack",
	"ImageCreator": "Chat Image Creator",
	"InventoryOrganizer": "Inventory Sorting",
	"CommandCorrecter": "Command Correcter",
	"CalculatorButton": "Calculator Button",
	"Sidebar": "Sidebar",
	"HeaderMinimizer": "Minimize Headers (Master)",
	"PendingContracts": "Pending Contracts",
	"CompactUI": "Compact UI",
	"FormulaReplacer": "Formula Replacer",
	"AdvancedMode": "Advanced Minimialist Mode (Master)",
	"CXOBHighlighter": "CXOB Name Highlighter",
	"CXPOOrderBook": "CXPO Order Book"
}

export const SortingTriangleHTML = `
<div title=""><svg aria-hidden="true" width="10" height="10" role="img" version="1.1" fill="currentcolor" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="vertical-align: middle;"><g><path d="M.88681 1.097752l12.13774 21.02318L25.422964 1.105446z"></path></g></svg></div>`;


export const PlanetCommands = ["ADM", "BSC", "COGC", "COGCPEX", "COGCU", "FLTP", "LR", "LMP", "LM", "PLI", "POPI", "POPR", "PPS", "SHY", "WAR", "BS"];

export const SystemNames = {
	"ARCLIGHT": "AM-783",
	"FORGE-KEEP": "FK-371",
	"MOUNT OLYMPUS": "HM-049",
	"GATEWAY": "HM-223",
	"NEO EDEN": "JS-299",
	"EBISU": "JS-952",
	"BASTABLON": "KW-020",
	"DOLZENA": "LG-418",
	"TRINITY": "OF-259",
	"MORIA": "OT-580",
	"OUTER HEAVEN": "PG-899",
	"AURUM": "QJ-650",
	"ACETARES": "QJ-684",
	"HUBUR": "TD-203",
	"HOTEI": "UV-135",
	"BENTEN": "UV-351",
	"DAIKOKU": "UV-796",
	"HORTUS": "VH-331",
	"MIDWAY": "WB-675",
	"ANTARES III": "ZV-194",
	"ANTARES I": "ZV-307",
	"ANTARES II": "ZV-759"
}

export const PlanetNames = {
	"LEMURIA": "AJ-768a",
	"GALLUS": "AM-783b",
	"EMENTIOR": "AM-783c",
	"TYPHON": "AU-522b",
	"NOVA HONSHU": "BS-788c",
	"TACOTOPIA": "CB-045b",
	"PYRGOS": "CH-771a",
	"TALOSIA": "DC-823b",
	"ORM": "DW-456g",
	"MANIFOLD": "EL-179b",
	"NOVA UNALASKA": "EZ-476b",
	"TOKTU": "FK-037f",
	"LA FORGE": "FK-371b",
	"BOUCHER": "FK-794b",
	"VAULT": "GC-645b",
	"CHU": "GY-110c",
	"POSEIDON": "HM-049b",
	"APOTHECARY": "IA-603b",
	"ELECTRONICA": "IY-028c",
	"NEMESIS": "JS-299a",
	"GIBSON": "JS-952c",
	"AUSTRALIA": "KI-446a",
	"DEMETER": "KI-446b",
	"HERMES": "KI-448b",
	"ROCK": "KQ-966b",
	"MILLIWAYS": "KW-020c",
	"GIEDI PRIME": "KW-358b",
	"ETHERWIND": "KW-688c",
	"KINZA": "LG-418b",
	"PLANET MC PLANETFACE": "LG-913e",
	"ARATORA": "LS-231b",
	"GRIFFONSTONE": "LS-300c",
	"JURA": "OF-259d",
	"BERTHIER": "OF-375b",
	"ADALINA": "OF-375c",
	"DANAKIL": "OT-442b",
	"IIRON": "OT-580a",
	"MONTEM": "OT-580b",
	"VALLIS": "OT-580c",
	"PALLADA": "OT-580d",
	"PRISM": "OT-889a",
	"JEETIYU": "OT-889b",
	"SALADIN": "PG-899b",
	"NASCENT": "QJ-149c",
	"ELON": "QJ-650c",
	"LOM PALANKA": "QJ-684a",
	"ACELAND": "QJ-684b",
	"CIRCA": "QQ-001a",
	"CIRCE": "QQ-001b",
	"CELEBDIL": "QQ-645b",
	"MALAHAT": "RC-040b",
	"IRONFORGE": "RC-040c",
	"ICE STATION ALPHA": "SE-110c",
	"SHEOL": "TD-203b",
	"RHAZES": "TD-228b",
	"ASBESTOS LEAD ASBESTOS": "UV-072c",
	"KATOA": "UV-351a",
	"YANNICK": "UV-351b",
	"UMBRA": "UV-351c",
	"BIOGENESIS": "UV-351d",
	"PROXION": "UV-796b",
	"PHANTASM": "VH-043a",
	"PROMITOR": "VH-331a",
	"HELION PRIME": "VH-331d",
	"ODYSSEUS": "VH-331f",
	"AVALON": "VH-331g",
	"HYDRON": "VH-331i",
	"GASWORLD": "WB-675i",
	"MIMAR": "WC-702b",
	"MAGUS": "XD-354b",
	"UPONOR": "XH-329a",
	"LIBERTAS": "XH-594a",
	"KIRUNA": "XH-594b",
	"CORTEZ": "XH-594c",
	"KUB": "YI-059f",
	"HARPINA": "YI-209h",
	"ARCADIA": "YI-683c",
	"VERDANT": "YI-715b",
	"NORWICK": "YK-649b",
	"NIKE": "ZV-194a",
	"HEPHAESTUS": "ZV-307c",
	"PHOBOS": "ZV-307d",
	"VULCAN": "ZV-759b",
	"DEIMOS": "ZV-759c",
	"HARMONIA": "ZV-896b"
}

export const MaterialNames = {
	"AAR": ["Antenna Array", "electronic devices"],
	"ABH": ["Advanced Bulkhead", "construction prefabs"],
	"ACS": ["Automated Cooling System", "electronic systems"],
	"ADE": ["Advanced Deck Elements", "construction prefabs"],
	"ADR": ["Auto-Doc", "medical equipment"],
	"ADS": ["Audio Distribution System", "electronic systems"],
	"AEF": ["Aerostat Foundation", "construction parts"],
	"AEN": ["Advanced STL Engine", "ship engines"],
	"AFP": ["Advanced Fuel Pump", "ship engines"],
	"AFR": ["Advanced Fuel Rod", "ship engines"],
	"AGS": ["Advanced High-G Seats", "ship parts"],
	"AHP": ["Advanced Hull Plate", "ship parts"],
	"AIR": ["Air Scrubber", "construction parts"],
	"AL": ["Aluminium", "metals"],
	"ALE": ["Stellar Pale Ale", "consumables (luxury)"],
	"ALG": ["Protein-Rich Algae", "agricultural products"],
	"ALO": ["Aluminium Ore", "ores"],
	"AMM": ["Ammonia", "gases"],
	"ANZ": ["Advanced Nozzle", "ship engines"],
	"APT": ["Advanced Thermal Protection Tile", "ship shields"],
	"AR": ["Argon", "gases"],
	"ARP": ["Advanced Anti-rad Plate", "ship shields"],
	"ASE": ["Advanced Structural Elements", "construction prefabs"],
	"AST": ["Alpha-Stabilized Titanium", "alloys"],
	"ATA": ["Advanced Transparent Aperture", "construction prefabs"],
	"ATP": ["Advanced Thermal Protection Material", "ship parts"],
	"AU": ["Gold", "metals"],
	"AUO": ["Gold Ore", "ores"],
	"AWF": ["Active Water Filter", "electronic devices"],
	"AWH": ["Advanced Whipple Shielding", "ship shields"],
	"BAC": ["Helpful Bacteria", "chemicals"],
	"BAI": ["Basic AI Framework", "software components"],
	"BBH": ["Basic Bulkhead", "construction prefabs"],
	"BCO": ["Budget Connectors", "electronic pieces"],
	"BDE": ["Basic Deck Elements", "construction prefabs"],
	"BE": ["Beryllium", "elements"],
	"BEA": ["Protein-Rich Beans", "agricultural products"],
	"BER": ["Beryl Crystals", "minerals"],
	"BFP": ["Basic Fuel Pump", "ship engines"],
	"BFR": ["Basic Fuel Rod", "ship engines"],
	"BGC": ["Shielded Connectors", "electronic pieces"],
	"BGO": ["Blue Gold", "alloys"],
	"BGS": ["Basic High-G Seats", "ship parts"],
	"BHP": ["Basic Hull Plate", "ship parts"],
	"BID": ["Full-Body Interaction Device", "electronic devices"],
	"BL": ["Breathable Liquid", "chemicals"],
	"BLE": ["Desaturation Agent", "chemicals"],
	"BMF": ["Basic Mainframe", "electronic devices"],
	"BND": ["Bandages", "medical equipment"],
	"BOR": ["Boron Crystals", "minerals"],
	"BOS": ["Borosilicate", "alloys"],
	"BPT": ["Basic Thermal Protection Tile", "ship shields"],
	"BR1": ["Command Bridge MK1", "unit prefabs"],
	"BR2": ["Command Bridge MK2", "unit prefabs"],
	"BRM": ["Bioreactive Minerals", "minerals"],
	"BRO": ["Bronze", "alloys"],
	"BRP": ["Basic Anti-rad Plate", "ship shields"],
	"BRS": ["Short-distance Command Bridge", "unit prefabs"],
	"BSC": ["Body Scanner", "electronic devices"],
	"BSE": ["Basic Structural Elements", "construction prefabs"],
	"BTA": ["Basic Transparent Aperture", "construction prefabs"],
	"BTS": ["Bacterial Tungsten Solution", "liquids"],
	"BWH": ["Basic Whipple Shielding", "ship shields"],
	"BWS": ["Basic Workstation", "electronic devices"],
	"C": ["Carbon", "elements"],
	"CA": ["Calcium", "elements"],
	"CAF": ["Caffeinated Beans", "agricultural products"],
	"CAP": ["Electric Field Capacitor", "electronic pieces"],
	"CBL": ["Large Capacitor Bank", "energy systems"],
	"CBM": ["Medium Capacitor Bank", "energy systems"],
	"CBS": ["Small Capacitor Bank", "energy systems"],
	"CC": ["Climate Controller", "electronic systems"],
	"CCD": ["Crowd Control Drone", "drones"],
	"CD": ["Capacitive Display", "electronic parts"],
	"CF": ["Ceramic Fabric", "textiles"],
	"CHA": ["Combustion Chamber", "ship engines"],
	"CL": ["Chlorine", "elements"],
	"CLI": ["Caliche Rock", "minerals"],
	"CMK": ["", "construction materials"],
	"COF": ["Caffeinated Infusion", "consumables (luxury)"],
	"COM": ["Communication System", "electronic systems"],
	"COT": ["Cotton Fabric", "textiles"],
	"CQL": ["Crew Quarters (Large)", "unit prefabs"],
	"CQM": ["Crew Quarters (Medium)", "unit prefabs"],
	"CQS": ["Crew Quarters (Small)", "unit prefabs"],
	"CQT": ["Crew Quarters (Tiny)", "unit prefabs"],
	"CRU": ["Cryogenic Unit", "electronic systems"],
	"CST": ["Cryogenic Stabilizer", "chemicals"],
	"CTF": ["Ceramic-Tungsten Fabric", "textiles"],
	"CU": ["Copper", "metals"],
	"CUO": ["Copper Ore", "ores"],
	"DA": ["Data Analyzer", "software tools"],
	"DCH": ["Drone Chassis", "drones"],
	"DCL": ["Durable Casing L", "plastics"],
	"DCM": ["Durable Casing M", "plastics"],
	"DCS": ["Durable Casing S", "plastics"],
	"DD": ["Distributed Database", "software tools"],
	"DDT": ["DDT Plant Agent", "chemicals"],
	"DEC": ["Decorative Elements", "construction parts"],
	"DIS": ["Information Display", "electronic parts"],
	"DOU": ["Drone Operations Unit", "unit prefabs"],
	"DRF": ["Drone Frame", "drones"],
	"DV": ["Data Visualizer", "software tools"],
	"DW": ["Drinking Water", "consumables (basic)"],
	"EDC": ["Entertainment Data Core", "software tools"],
	"EES": ["Enriched Einsteinium", "chemicals"],
	"ENG": ["Standard STL Engine", "ship engines"],
	"EPO": ["Epoxy Resin", "construction materials"],
	"ES": ["Einsteinium", "elements"],
	"ETC": ["Enriched Technetium", "chemicals"],
	"EXO": ["Exoskeleton Work Suit", "consumables (basic)"],
	"F": ["Fluorine", "gases"],
	"FAL": ["Ferrominium", "alloys"],
	"FAN": ["Active Cooling Device", "electronic parts"],
	"FC": ["Flow Control Device", "construction parts"],
	"FE": ["Iron", "metals"],
	"FEO": ["Iron Ore", "ores"],
	"FET": ["Ferro-Titanium", "alloys"],
	"FF": ["FTL Fuel", "fuels"],
	"FFC": ["FTL Field Controller", "electronic systems"],
	"FIM": ["Flavoured Insta-Meal", "consumables (basic)"],
	"FIR": ["Fission Reactor", "ship engines"],
	"FLO": ["Floating Tank", "construction parts"],
	"FLP": ["Fluid Piping", "construction parts"],
	"FLX": ["Flux", "chemicals"],
	"FOD": ["All-Purpose Fodder", "agricultural products"],
	"FSE": ["Fuel-saving STL Engine", "ship engines"],
	"FUN": ["Entertainment Unit", "unit prefabs"],
	"GAL": ["Galerite Rock", "minerals"],
	"GC": ["Cylindrical Gas Container", "construction parts"],
	"GCH": ["Glass Combustion Chamber", "ship engines"],
	"GEN": ["Glass-based STL Engine", "ship engines"],
	"GIN": ["Einsteinium-Infused Gin", "consumables (luxury)"],
	"GL": ["Glass", "construction materials"],
	"GNZ": ["Glass Nozzle", "ship engines"],
	"GRA": ["Wine-Quality Grapes", "agricultural products"],
	"GRN": ["High-Carb Grains", "agricultural products"],
	"GV": ["Gas Vent", "construction parts"],
	"H": ["Hydrogen", "gases"],
	"H2O": ["Water", "liquids"],
	"HAB": ["Habitat Unit", "unit prefabs"],
	"HAL": ["Halite Crystals", "minerals"],
	"HCC": ["High-Capacity Connectors", "electronic pieces"],
	"HCP": ["Hydrocarbon Plants", "agricultural products"],
	"HD": ["Holographic Display", "electronic devices"],
	"HE": ["Helium", "gases"],
	"HE3": ["Helium-3 Isotope", "gases"],
	"HER": ["Spicy Herbs", "agricultural products"],
	"HEX": ["Heliotrope Extract", "liquids"],
	"HHP": ["Hardened Hull Plate", "ship parts"],
	"HMS": ["HazMat Work Suit", "consumables (basic)"],
	"HNZ": ["Hyperthrust Nozzle", "ship engines"],
	"HOG": ["Holographic Glasses", "electronic devices"],
	"HOP": ["Flowery Hops", "agricultural products"],
	"HPC": ["Handheld Personal Console", "electronic devices"],
	"HPR": ["High-power FTL Reactor", "ship engines"],
	"HSE": ["Hardened Structural Elements", "construction prefabs"],
	"HSS": ["Smart Space Suit", "consumables (basic)"],
	"HTE": ["Hyperthrust STL Engine", "ship engines"],
	"HYR": ["Hyper-power Reactor", "ship engines"],
	"I": ["Iodine", "elements"],
	"IDC": ["Information Data Core", "software systems"],
	"IMM": ["Information Management System", "software systems"],
	"IND": ["Indigo Colorant", "chemicals"],
	"INS": ["InsuFoam", "construction materials"],
	"JUI": ["Sedative Substance", "chemicals"],
	"KOM": ["Kombucha", "consumables (luxury)"],
	"KV": ["Kevlar Fabric", "textiles"],
	"LBH": ["Lightweight Bulkhead", "construction prefabs"],
	"LC": ["AI-Assisted Lab Coat", "consumables (basic)"],
	"LCB": ["Large Cargo Bay Kit", "ship kits"],
	"LCR": ["Liquid Crystals", "chemicals"],
	"LD": ["Local Database", "software components"],
	"LDE": ["Lightweight Deck Elements", "construction prefabs"],
	"LDI": ["Laser Diodes", "electronic pieces"],
	"LES": ["Liquid Einsteinium", "liquids"],
	"LFE": ["Large FTL Emitter", "ship engines"],
	"LFL": ["Large FTL Fuel Tank Kit", "ship kits"],
	"LFP": ["Low-heat Fuel Pump", "ship engines"],
	"LHP": ["Lightweight Hull Plate", "ship parts"],
	"LI": ["Lithium", "metals"],
	"LIO": ["Lithium Ore", "ores"],
	"LIS": ["Life Support System", "electronic systems"],
	"LIT": ["Neon Lighting System", "construction parts"],
	"LOG": ["Logistics System", "electronic systems"],
	"LSE": ["Lightweight Structural Elements", "construction prefabs"],
	"LSL": ["Large STL Fuel Tank Kit", "ship kits"],
	"LST": ["Limestone", "minerals"],
	"LTA": ["Lightweight Transparent Aperture", "construction prefabs"],
	"LU": ["Laboratory Unit", "unit prefabs"],
	"MAG": ["Magnetite", "minerals"],
	"MAI": ["High-Carb Maize", "agricultural products"],
	"MB": ["Motherboard", "electronic parts"],
	"MCB": ["Medium Cargo Bay Kit", "ship kits"],
	"MCG": ["Mineral Construction Granulate", "construction materials"],
	"MEA": ["Quality Meat Meal", "consumables (basic)"],
	"MED": ["Basic Medical Kit", "consumables (basic)"],
	"MFE": ["Medium FTL Emitter", "ship engines"],
	"MFK": ["Medium Fastener Kit", "electronic pieces"],
	"MFL": ["Medium FTL Fuel Tank Kit", "ship kits"],
	"MG": ["Magnesium", "elements"],
	"MGC": ["Magnetic Ground Cover", "construction parts"],
	"MGS": ["Magnesite", "minerals"],
	"MHL": ["Metal-Halide Lighting System", "construction parts"],
	"MHP": ["Micro Headphones", "electronic devices"],
	"MLI": ["Machine Learning Interface", "software components"],
	"MPC": ["Micro-Processor", "electronic parts"],
	"MSL": ["Medium STL Fuel Tank Kit", "ship kits"],
	"MTC": ["MegaTube Coating", "construction materials"],
	"MTP": ["Meat Tissue Patties", "agricultural products"],
	"MUS": ["Protein-Rich Mushrooms", "agricultural products"],
	"MWF": ["Medium Wafer", "electronic pieces"],
	"N": ["Nitrogen", "gases"],
	"NA": ["Sodium", "elements"],
	"NAB": ["Sodium Borohydride", "chemicals"],
	"NCS": ["Nano-Carbon Sheeting", "construction materials"],
	"NE": ["Neon", "gases"],
	"NF": ["Networking Framework", "software components"],
	"NFI": ["Nano Fiber", "construction materials"],
	"NG": ["Nano-Coated Glass", "construction materials"],
	"NL": ["Nylon Fabric", "textiles"],
	"NN": ["Neural Network", "software tools"],
	"NOZ": ["Basic Nozzle", "ship engines"],
	"NR": ["Nano-Enhanced Resin", "chemicals"],
	"NS": ["Nutrient Solution", "chemicals"],
	"NST": ["NeuroStimulants", "consumables (luxury)"],
	"NUT": ["Triglyceride Nuts", "agricultural products"],
	"NV1": ["Navigation Module MK1", "ship parts"],
	"NV2": ["Navigation Module MK2", "ship parts"],
	"O": ["Oxygen", "gases"],
	"OFF": ["Office Supplies", "utility"],
	"OLF": ["Olfactory Substances", "chemicals"],
	"OS": ["Operating System", "software tools"],
	"OVE": ["Basic Overalls", "consumables (basic)"],
	"PCB": ["Printed Circuit Board", "electronic parts"],
	"PDA": ["Personal Data Assistant", "consumables (basic)"],
	"PE": ["Poly-Ethylene", "plastics"],
	"PFE": ["Premium Fertilizer", "chemicals"],
	"PG": ["Polymer Granulate", "plastics"],
	"PIB": ["Pineberries", "agricultural products"],
	"PK": ["Painkillers", "medical equipment"],
	"POW": ["Power Cell", "energy systems"],
	"PPA": ["Protein Paste", "agricultural products"],
	"PSH": ["Pressure Shielding", "construction parts"],
	"PSL": ["Polymer Sheet Type L", "plastics"],
	"PSM": ["Polymer Sheet Type M", "plastics"],
	"PSS": ["Polymer Sheet Type S", "plastics"],
	"PT": ["Power Tools", "consumables (basic)"],
	"PWO": ["Padded Work Overall", "consumables (luxury)"],
	"QCR": ["Quick-charge FTL Reactor", "ship engines"],
	"RAD": ["Radio Device", "electronic devices"],
	"RAG": ["Radioisotope Generator", "ship engines"],
	"RAM": ["Memory Bank", "electronic parts"],
	"RAT": ["Basic Rations", "consumables (basic)"],
	"RBH": ["Reinforced Bulkhead", "construction prefabs"],
	"RCO": ["Raw Cotton Fiber", "agricultural products"],
	"RCS": ["Reactor Control System", "ship engines"],
	"RCT": ["Standard FTL Reactor", "ship engines"],
	"RDE": ["Reinforced Deck Elements", "construction prefabs"],
	"RDL": ["Large Ship-Repair Drone Operations Unit", "unit prefabs"],
	"RDS": ["Small Ship-Repair Drone Operations Unit", "unit prefabs"],
	"REA": ["Chemical Reagents", "chemicals"],
	"RED": ["Rescue Drone", "drones"],
	"REP": ["Repair Kit", "consumables (luxury)"],
	"RG": ["Reinforced Glass", "construction materials"],
	"RGO": ["Red Gold", "alloys"],
	"RHP": ["Reinforced Hull Plate", "ship parts"],
	"ROM": ["Non-Volatile Memory", "electronic parts"],
	"RSE": ["Reinforced Structural Elements", "construction prefabs"],
	"RSH": ["Radiation Shielding", "construction parts"],
	"RSI": ["Raw Silk Strains", "agricultural products"],
	"RTA": ["Reinforced Transparent Aperture", "construction prefabs"],
	"S": ["Sulfur", "elements"],
	"SA": ["Search Algorithm", "software components"],
	"SAL": ["Sorting Algorithm", "software components"],
	"SAR": ["Sensor Array", "electronic devices"],
	"SC": ["Stem Cell Treatment", "consumables (luxury)"],
	"SCB": ["Small Cargo Bay Kit", "ship kits"],
	"SCN": ["Multi-Purpose Scanner", "consumables (basic)"],
	"SCR": ["Sulfur Crystals", "minerals"],
	"SDR": ["Surgical Drone", "drones"],
	"SEA": ["Poly-Sulfite Sealant", "construction materials"],
	"SEN": ["Sensor", "electronic parts"],
	"SEQ": ["Surgical Equipment", "medical equipment"],
	"SF": ["STL Fuel", "fuels"],
	"SFE": ["Small FTL Emitter", "ship engines"],
	"SFK": ["Small Fastener Kit", "electronic pieces"],
	"SFL": ["Small FTL Fuel Tank Kit", "ship kits"],
	"SI": ["Silicon", "metals"],
	"SIL": ["Silken Fabric", "textiles"],
	"SIO": ["Silicon Ore", "ores"],
	"SNM": ["Spatial Navigation Map", "software systems"],
	"SOI": ["Artificial Soil", "chemicals"],
	"SOL": ["Solar Cell", "energy systems"],
	"SP": ["Solar Panel", "energy systems"],
	"SRD": ["Ship-Repair Drone", "drones"],
	"SRP": ["Specialized Anti-rad Plate", "ship shields"],
	"SSC": ["Structural Spacecraft Component", "ship parts"],
	"SSL": ["Small STL Fuel Tank Kit", "ship kits"],
	"STL": ["Steel", "metals"],
	"STR": ["Medical Stretcher", "medical equipment"],
	"STS": ["Stability Support System", "electronic systems"],
	"SU": ["Surgery Unit", "unit prefabs"],
	"SUD": ["Surveillance Drone", "drones"],
	"SUN": ["Safety Uniform", "utility"],
	"SWF": ["Small Wafer", "electronic pieces"],
	"TA": ["Tantalum", "elements"],
	"TAC": ["Targeting Computer", "electronic systems"],
	"TAI": ["Tantalite Rock", "minerals"],
	"TC": ["Technetium", "elements"],
	"TCB": ["Tiny Cargo Bay Kit", "ship kits"],
	"TCL": ["TCL Acid", "chemicals"],
	"TCO": ["Technetium Oxide", "minerals"],
	"TCS": ["Stabilized Technetium", "construction parts"],
	"TCU": ["Trauma Care Unit", "unit prefabs"],
	"THF": ["ThermoFluid", "chemicals"],
	"THP": ["Basic Thermal Protection Material", "ship parts"],
	"TI": ["Titanium", "metals"],
	"TIO": ["Titanium Ore", "ores"],
	"TK": ["TechnoKevlar Fabric", "textiles"],
	"TPU": ["Tensor Processing Unit", "electronic parts"],
	"TRA": ["Audio Transmitter", "electronic parts"],
	"TRN": ["Advanced Transistor", "electronic pieces"],
	"TRU": ["Truss", "construction parts"],
	"TS": ["Tectosilisite", "minerals"],
	"TSH": ["Thermal Shielding", "construction parts"],
	"TUB": ["Test Tubes", "medical equipment"],
	"UTS": ["Universal Toolset", "utility"],
	"VCB": ["High-volume Cargo Bay Kit", "ship kits"],
	"VEG": ["Triglyceride Fruits", "agricultural products"],
	"VG": ["VitaGel", "consumables (luxury)"],
	"VIT": ["Vita Essence", "agricultural products"],
	"VSC": ["Very Small Cargo Bay Kit", "ship kits"],
	"W": ["Tungsten", "metals"],
	"WAI": ["Weak Artificial Intelligence", "software systems"],
	"WAL": ["Alpha-Stabilized Tungsten", "alloys"],
	"WCB": ["High-load Cargo Bay Kit", "ship kits"],
	"WIN": ["Smart Zinfandel", "consumables (luxury)"],
	"WM": ["Window Manager", "software components"],
	"WOR": ["Handcraft Workshop Unit", "unit prefabs"],
	"WR": ["Water Reclaimer", "electronic systems"],
	"WS": ["Scientific Work Station", "consumables (basic)"],
	"ZIR": ["Zircon Crystals", "minerals"],
	"ZR": ["Zirconium", "elements"],
}

export const Materials = {
	"Antenna Array": ["AAR",0.78,0.5],
	"Advanced Bulkhead": ["ABH",0.6,0.9],
	"Automated Cooling System": ["ACS",0.3,0.2],
	"Advanced Deck Elements": ["ADE",0.4,1.5],
	"Auto-Doc": ["ADR",0.1,0.1],
	"Audio Distribution System": ["ADS",0.7,2],
	"Aerostat Foundation": ["AEF",2,5],
	"Advanced STL Engine": ["AEN",14,7],
	"Advanced Fuel Pump": ["AFP",1,0.25],
	"Advanced Fuel Rod": ["AFR",0.4,0.1],
	"Advanced High-G Seats": ["AGS",30,5],
	"Advanced Hull Plate": ["AHP",20,10],
	"Air Scrubber": ["AIR",1.7,3],
	"Aluminium": ["AL",2.7,1],
	"Stellar Pale Ale": ["ALE",0.1,0.1],
	"Protein-Rich Algae": ["ALG",0.7,1],
	"Aluminium Ore": ["ALO",1.35,1],
	"Ammonia": ["AMM",0.86,1],
	"Advanced Nozzle": ["ANZ",6,3],
	"Advanced Thermal Protection Tile": ["APT",0.03,0.3],
	"Argon": ["AR",1.784,1],
	"Advanced Anti-rad Plate": ["ARP",0.04,0.2],
	"Advanced Structural Elements": ["ASE",0.5,0.6],
	"Alpha-Stabilized Titanium": ["AST",4.98,1],
	"Advanced Transparent Aperture": ["ATA",0.3,0.4],
	"Advanced Thermal Protection Material": ["ATP",2.9,1],
	"Gold": ["AU",19.32,1],
	"Gold Ore": ["AUO",3.86,1],
	"Active Water Filter": ["AWF",0.8,1.2],
	"Advanced Whipple Shielding": ["AWH",0.12,1],
	"Helpful Bacteria": ["BAC",0.15,0.15],
	"Basic AI Framework": ["BAI",0.001,0.01],
	"Basic Bulkhead": ["BBH",0.5,0.8],
	"Budget Connectors": ["BCO",0.005,0.002],
	"Basic Deck Elements": ["BDE",0.1,1.5],
	"Beryllium": ["BE",1.84,1],
	"Protein-Rich Beans": ["BEA",0.8,1],
	"Beryl Crystals": ["BER",1.92,1],
	"Basic Fuel Pump": ["BFP",0.8,0.2],
	"Basic Fuel Rod": ["BFR",0.3,0.1],
	"Shielded Connectors": ["BGC",0.01,0.002],
	"Blue Gold": ["BGO",19.32,1],
	"Basic High-G Seats": ["BGS",20,3],
	"Basic Hull Plate": ["BHP",10,10],
	"Full-Body Interaction Device": ["BID",0.05,0.05],
	"Breathable Liquid": ["BL",1.12,1],
	"Desaturation Agent": ["BLE",0.5,0.5],
	"Basic Mainframe": ["BMF",0.8,1.2],
	"Bandages": ["BND",0.001,0.005],
	"Boron Crystals": ["BOR",1.8,1],
	"Borosilicate": ["BOS",1.5,1],
	"Basic Thermal Protection Tile": ["BPT",0.02,0.3],
	"Command Bridge MK1": ["BR1",180,300],
	"Command Bridge MK2": ["BR2",280,400],
	"Bioreactive Minerals": ["BRM",2.5,1],
	"Bronze": ["BRO",8.73,1],
	"Basic Anti-rad Plate": ["BRP",0.03,0.2],
	"Short-distance Command Bridge": ["BRS",150,200],
	"Body Scanner": ["BSC",0.1,0.1],
	"Basic Structural Elements": ["BSE",0.3,0.5],
	"Basic Transparent Aperture": ["BTA",0.3,0.4],
	"Bacterial Tungsten Solution": ["BTS",1.05,1],
	"Basic Whipple Shielding": ["BWH",0.1,1],
	"Basic Workstation": ["BWS",0.05,0.1],
	"Carbon": ["C",2.25,1],
	"Calcium": ["CA",1.54,1],
	"Caffeinated Beans": ["CAF",0.86,1],
	"Electric Field Capacitor": ["CAP",0.001,0.001],
	"Large Capacitor Bank": ["CBL",5.4,2.4],
	"Medium Capacitor Bank": ["CBM",3.6,1.6],
	"Small Capacitor Bank": ["CBS",1.8,0.8],
	"Climate Controller": ["CC",0.5,1],
	"Crowd Control Drone": ["CCD",0.3,0.05],
	"Capacitive Display": ["CD",0.004,0.002],
	"Ceramic Fabric": ["CF",2.82,1],
	"Combustion Chamber": ["CHA",1.2,0.7],
	"Chlorine": ["CL",3.2,1],
	"Caliche Rock": ["CLI",2.42,1],
	"": ["CMK",4.56,33.2],
	"Caffeinated Infusion": ["COF",0.1,0.1],
	"Communication System": ["COM",0.5,1.5],
	"Cotton Fabric": ["COT",0.77,1],
	"Crew Quarters (Large)": ["CQL",75,150],
	"Crew Quarters (Medium)": ["CQM",50,100],
	"Crew Quarters (Small)": ["CQS",25,50],
	"Crew Quarters (Tiny)": ["CQT",12.5,25],
	"Cryogenic Unit": ["CRU",2.2,2],
	"Cryogenic Stabilizer": ["CST",1.14,1],
	"Ceramic-Tungsten Fabric": ["CTF",4.32,1],
	"Copper": ["CU",8.92,1],
	"Copper Ore": ["CUO",4.01,1],
	"Data Analyzer": ["DA",0.001,0.01],
	"Drone Chassis": ["DCH",0.2,0.03],
	"Durable Casing L": ["DCL",0.08,0.8],
	"Durable Casing M": ["DCM",0.04,0.4],
	"Durable Casing S": ["DCS",0.01,0.1],
	"Distributed Database": ["DD",0.001,0.01],
	"DDT Plant Agent": ["DDT",0.11,0.1],
	"Decorative Elements": ["DEC",0.5,2],
	"Information Display": ["DIS",0.02,0.02],
	"Drone Operations Unit": ["DOU",5,4],
	"Drone Frame": ["DRF",0.1,0.02],
	"Data Visualizer": ["DV",0.001,0.01],
	"Drinking Water": ["DW",0.1,0.1],
	"Entertainment Data Core": ["EDC",0.001,0.01],
	"Enriched Einsteinium": ["EES",9.2,1],
	"Standard STL Engine": ["ENG",8,4],
	"Epoxy Resin": ["EPO",0.04,0.02],
	"Einsteinium": ["ES",0.88,0.1],
	"Enriched Technetium": ["ETC",4.1,1],
	"Exoskeleton Work Suit": ["EXO",0.1,0.05],
	"Fluorine": ["F",1.696,1],
	"Ferrominium": ["FAL",3.22,1],
	"Active Cooling Device": ["FAN",0.1,0.1],
	"Flow Control Device": ["FC",0.5,0.25],
	"Iron": ["FE",7.874,1],
	"Iron Ore": ["FEO",5.9,1],
	"Ferro-Titanium": ["FET",6.85,1],
	"FTL Fuel": ["FF",0.05,0.01],
	"FTL Field Controller": ["FFC",50,16],
	"Flavoured Insta-Meal": ["FIM",0.55,0.5],
	"Fission Reactor": ["FIR",7,4.9],
	"Floating Tank": ["FLO",1,2],
	"Fluid Piping": ["FLP",0.3,2],
	"Flux": ["FLX",0.25,0.1],
	"All-Purpose Fodder": ["FOD",1.2,1],
	"Fuel-saving STL Engine": ["FSE",6,3],
	"Entertainment Unit": ["FUN",5,4],
	"Galerite Rock": ["GAL",2.51,1],
	"Cylindrical Gas Container": ["GC",0.05,0.1],
	"Glass Combustion Chamber": ["GCH",1,0.6],
	"Glass-based STL Engine": ["GEN",5,3],
	"Einsteinium-Infused Gin": ["GIN",0.1,0.1],
	"Glass": ["GL",0.016,0.01],
	"Glass Nozzle": ["GNZ",1.5,1],
	"Wine-Quality Grapes": ["GRA",1.1,1],
	"High-Carb Grains": ["GRN",0.9,1],
	"Gas Vent": ["GV",0.25,0.15],
	"Hydrogen": ["H",0.07,1],
	"Water": ["H2O",0.2,0.2],
	"Habitat Unit": ["HAB",10,8],
	"Halite Crystals": ["HAL",2.17,1],
	"High-Capacity Connectors": ["HCC",0.01,0.002],
	"Hydrocarbon Plants": ["HCP",0.8,1],
	"Holographic Display": ["HD",0.05,2],
	"Helium": ["HE",0.145,1],
	"Helium-3 Isotope": ["HE3",0.145,1],
	"Spicy Herbs": ["HER",0.4,1],
	"Heliotrope Extract": ["HEX",1.1,1],
	"Hardened Hull Plate": ["HHP",15,10],
	"HazMat Work Suit": ["HMS",0.05,0.05],
	"Hyperthrust Nozzle": ["HNZ",6,12],
	"Holographic Glasses": ["HOG",0.01,0.01],
	"Flowery Hops": ["HOP",0.35,1],
	"Handheld Personal Console": ["HPC",0.003,0.003],
	"High-power FTL Reactor": ["HPR",18,15],
	"Hardened Structural Elements": ["HSE",3.1,0.7],
	"Smart Space Suit": ["HSS",0.05,0.05],
	"Hyperthrust STL Engine": ["HTE",20,10],
	"Hyper-power Reactor": ["HYR",35,25],
	"Iodine": ["I",4.93,1],
	"Information Data Core": ["IDC",0.001,0.01],
	"Information Management System": ["IMM",0.001,0.01],
	"Indigo Colorant": ["IND",0.21,0.2],
	"InsuFoam": ["INS",0.06,0.1],
	"Sedative Substance": ["JUI",1.2,1],
	"Kombucha": ["KOM",0.1,0.1],
	"Kevlar Fabric": ["KV",1.65,1],
	"Lightweight Bulkhead": ["LBH",0.2,0.6],
	"AI-Assisted Lab Coat": ["LC",0.05,0.05],
	"Large Cargo Bay Kit": ["LCB",200,200],
	"Liquid Crystals": ["LCR",0.15,0.1],
	"Local Database": ["LD",0.001,0.01],
	"Lightweight Deck Elements": ["LDE",0.1,1.2],
	"Laser Diodes": ["LDI",0.001,0.001],
	"Liquid Einsteinium": ["LES",8.84,1],
	"Large FTL Emitter": ["LFE",0.4,1.6],
	"Large FTL Fuel Tank Kit": ["LFL",60,10],
	"Low-heat Fuel Pump": ["LFP",0.5,0.1],
	"Lightweight Hull Plate": ["LHP",5,10],
	"Lithium": ["LI",0.55,1],
	"Lithium Ore": ["LIO",2.75,1],
	"Life Support System": ["LIS",5.6,7],
	"Neon Lighting System": ["LIT",1,2],
	"Logistics System": ["LOG",0.5,1.5],
	"Lightweight Structural Elements": ["LSE",0.3,1.2],
	"Large STL Fuel Tank Kit": ["LSL",125,100],
	"Limestone": ["LST",2.73,1],
	"Lightweight Transparent Aperture": ["LTA",0.3,0.5],
	"Laboratory Unit": ["LU",8,6],
	"Magnetite": ["MAG",5.15,1],
	"High-Carb Maize": ["MAI",1.3,1],
	"Motherboard": ["MB",0.075,0.075],
	"Medium Cargo Bay Kit": ["MCB",100,100],
	"Mineral Construction Granulate": ["MCG",0.24,0.1],
	"Quality Meat Meal": ["MEA",0.6,0.5],
	"Basic Medical Kit": ["MED",0.3,0.1],
	"Medium FTL Emitter": ["MFE",0.2,0.8],
	"Medium Fastener Kit": ["MFK",0.1,0.05],
	"Medium FTL Fuel Tank Kit": ["MFL",24,4],
	"Magnesium": ["MG",0.27,0.16],
	"Magnetic Ground Cover": ["MGC",0.6,0.9],
	"Magnesite": ["MGS",1.73,1],
	"Metal-Halide Lighting System": ["MHL",0.1,0.05],
	"Micro Headphones": ["MHP",0.001,0.001],
	"Machine Learning Interface": ["MLI",0.001,0.01],
	"Micro-Processor": ["MPC",0.001,0.001],
	"Medium STL Fuel Tank Kit": ["MSL",50,50],
	"MegaTube Coating": ["MTC",0.032,0.01],
	"Meat Tissue Patties": ["MTP",0.7,1],
	"Protein-Rich Mushrooms": ["MUS",0.8,1],
	"Medium Wafer": ["MWF",0.008,0.008],
	"Nitrogen": ["N",0.807,1],
	"Sodium": ["NA",0.97,1],
	"Sodium Borohydride": ["NAB",0.1,0.05],
	"Nano-Carbon Sheeting": ["NCS",0.028,0.01],
	"Neon": ["NE",0.9,1],
	"Networking Framework": ["NF",0.001,0.01],
	"Nano Fiber": ["NFI",0.032,0.01],
	"Nano-Coated Glass": ["NG",0.022,0.01],
	"Nylon Fabric": ["NL",1.13,1],
	"Neural Network": ["NN",0.001,0.01],
	"Basic Nozzle": ["NOZ",3,1.5],
	"Nano-Enhanced Resin": ["NR",0.05,0.05],
	"Nutrient Solution": ["NS",0.6,0.5],
	"NeuroStimulants": ["NST",0.05,0.05],
	"Triglyceride Nuts": ["NUT",0.9,1],
	"Navigation Module MK1": ["NV1",4.2,2],
	"Navigation Module MK2": ["NV2",6.7,3],
	"Oxygen": ["O",1.141,1],
	"Office Supplies": ["OFF",0.02,0.2],
	"Olfactory Substances": ["OLF",0.01,0.001],
	"Operating System": ["OS",0.001,0.01],
	"Basic Overalls": ["OVE",0.02,0.025],
	"Printed Circuit Board": ["PCB",0.05,0.05],
	"Personal Data Assistant": ["PDA",0.002,0.002],
	"Poly-Ethylene": ["PE",0.01,0.01],
	"Premium Fertilizer": ["PFE",0.9,1],
	"Polymer Granulate": ["PG",0.002,0.001],
	"Pineberries": ["PIB",0.3,1],
	"Painkillers": ["PK",0.001,0.001],
	"Power Cell": ["POW",0.05,0.1],
	"Protein Paste": ["PPA",2,1],
	"Pressure Shielding": ["PSH",4.2,0.8],
	"Polymer Sheet Type L": ["PSL",0.08,0.8],
	"Polymer Sheet Type M": ["PSM",0.04,0.4],
	"Polymer Sheet Type S": ["PSS",0.01,0.1],
	"Power Tools": ["PT",0.25,0.2],
	"Padded Work Overall": ["PWO",0.05,0.05],
	"Quick-charge FTL Reactor": ["QCR",14,10],
	"Radio Device": ["RAD",0.003,0.005],
	"Radioisotope Generator": ["RAG",5,3.4],
	"Memory Bank": ["RAM",0.001,0.001],
	"Basic Rations": ["RAT",0.21,0.1],
	"Reinforced Bulkhead": ["RBH",2.4,0.9],
	"Raw Cotton Fiber": ["RCO",0.95,1],
	"Reactor Control System": ["RCS",0.67,0.5],
	"Standard FTL Reactor": ["RCT",7,4],
	"Reinforced Deck Elements": ["RDE",1.4,1.5],
	"Large Ship-Repair Drone Operations Unit": ["RDL",150,30],
	"Small Ship-Repair Drone Operations Unit": ["RDS",50,10],
	"Chemical Reagents": ["REA",0.05,0.05],
	"Rescue Drone": ["RED",0.3,0.05],
	"Repair Kit": ["REP",0.006,0.002],
	"Reinforced Glass": ["RG",0.032,0.01],
	"Red Gold": ["RGO",19.32,1],
	"Reinforced Hull Plate": ["RHP",12,10],
	"Non-Volatile Memory": ["ROM",0.001,0.001],
	"Reinforced Structural Elements": ["RSE",1.9,0.7],
	"Radiation Shielding": ["RSH",3.7,0.8],
	"Raw Silk Strains": ["RSI",1.1,1],
	"Reinforced Transparent Aperture": ["RTA",1.5,0.5],
	"Sulfur": ["S",0.52,0.25],
	"Search Algorithm": ["SA",0.001,0.01],
	"Sorting Algorithm": ["SAL",0.001,0.01],
	"Sensor Array": ["SAR",1.7,2],
	"Stem Cell Treatment": ["SC",0.04,0.01],
	"Small Cargo Bay Kit": ["SCB",50,50],
	"Multi-Purpose Scanner": ["SCN",0.001,0.001],
	"Sulfur Crystals": ["SCR",2.05,1],
	"Surgical Drone": ["SDR",0.3,0.05],
	"Poly-Sulfite Sealant": ["SEA",0.15,0.07],
	"Sensor": ["SEN",0.001,0.001],
	"Surgical Equipment": ["SEQ",0.001,0.01],
	"STL Fuel": ["SF",0.06,0.06],
	"Small FTL Emitter": ["SFE",0.1,0.4],
	"Small Fastener Kit": ["SFK",0.04,0.02],
	"Small FTL Fuel Tank Kit": ["SFL",9,1.5],
	"Silicon": ["SI",2.329,1],
	"Silken Fabric": ["SIL",1.21,1],
	"Silicon Ore": ["SIO",1.79,1],
	"Spatial Navigation Map": ["SNM",0.001,0.01],
	"Artificial Soil": ["SOI",0.9,1],
	"Solar Cell": ["SOL",0.015,0.01],
	"Solar Panel": ["SP",0.15,0.1],
	"Ship-Repair Drone": ["SRD",0.3,0.05],
	"Specialized Anti-rad Plate": ["SRP",0.1,0.2],
	"Structural Spacecraft Component": ["SSC",1,1],
	"Small STL Fuel Tank Kit": ["SSL",20,20],
	"Steel": ["STL",7.85,1],
	"Medical Stretcher": ["STR",0.01,1],
	"Stability Support System": ["STS",0.1,0.1],
	"Surgery Unit": ["SU",6,5],
	"Surveillance Drone": ["SUD",0.3,0.05],
	"Safety Uniform": ["SUN",0.05,0.05],
	"Small Wafer": ["SWF",0.003,0.003],
	"Tantalum": ["TA",16.65,1],
	"Targeting Computer": ["TAC",0.15,1],
	"Tantalite Rock": ["TAI",7.94,1],
	"Technetium": ["TC",11.8,1],
	"Tiny Cargo Bay Kit": ["TCB",20,20],
	"TCL Acid": ["TCL",0.09,0.1],
	"Technetium Oxide": ["TCO",9.8,1],
	"Stabilized Technetium": ["TCS",3.4,1.2],
	"Trauma Care Unit": ["TCU",5,4],
	"ThermoFluid": ["THF",0.6,0.35],
	"Basic Thermal Protection Material": ["THP",2.2,1],
	"Titanium": ["TI",4.5,1],
	"Titanium Ore": ["TIO",1.58,1],
	"TechnoKevlar Fabric": ["TK",1.89,1],
	"Tensor Processing Unit": ["TPU",0.002,0.002],
	"Audio Transmitter": ["TRA",0.005,0.002],
	"Advanced Transistor": ["TRN",0.001,0.001],
	"Truss": ["TRU",0.1,1.5],
	"Tectosilisite": ["TS",2.4,1],
	"Thermal Shielding": ["TSH",2.4,1.5],
	"Test Tubes": ["TUB",0.002,0.002],
	"Universal Toolset": ["UTS",0.05,0.05],
	"High-volume Cargo Bay Kit": ["VCB",200,200],
	"Triglyceride Fruits": ["VEG",1.1,1],
	"VitaGel": ["VG",0.21,0.1],
	"Vita Essence": ["VIT",0.9,1],
	"Very Small Cargo Bay Kit": ["VSC",35,35],
	"Tungsten": ["W",7.519,1],
	"Weak Artificial Intelligence": ["WAI",0.001,0.01],
	"Alpha-Stabilized Tungsten": ["WAL",6.25,1],
	"High-load Cargo Bay Kit": ["WCB",200,200],
	"Smart Zinfandel": ["WIN",0.1,0.1],
	"Window Manager": ["WM",0.001,0.01],
	"Handcraft Workshop Unit": ["WOR",5,5],
	"Water Reclaimer": ["WR",6.4,5],
	"Scientific Work Station": ["WS",0.05,0.5],
	"Zircon Crystals": ["ZIR",4.85,1],
	"Zirconium": ["ZR",6.53,1],
}