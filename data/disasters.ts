export interface Disaster {
  id: string;
  title: string;
  description: string;
  immediateActions: string[];
  whatIsIt: string;
  before: string[];
  during: string[];
  after: string[];
  dos: string[];
  donts: string[];
}

export const disasters: Disaster[] = [
  {
    id: "earthquake",
    title: "Earthquake",
    description: "Sudden shaking of the ground. Learn to drop, cover, and hold on.",
    immediateActions: ["Drop", "Cover", "Hold On"],
    whatIsIt: "An earthquake is a sudden, rapid shaking of the earth caused by the breaking and shifting of rock beneath the earth's surface.",
    before: [
      "Secure heavy items in your home like bookcases, refrigerators, televisions, and objects that hang on walls.",
      "Create a family emergency communications plan.",
      "Build a supply kit including food, water, flashlight, and a fire extinguisher."
    ],
    during: [
      "Drop down onto your hands and knees.",
      "Cover your head and neck (and your entire body if possible) under a sturdy table or desk.",
      "Hold on to your shelter (or to your head and neck) until the shaking stops."
    ],
    after: [
      "Expect aftershocks. These secondary shockwaves are usually less violent but can be strong enough to do additional damage.",
      "Listen to a portable, battery-operated radio for updated emergency information and instructions.",
      "Check yourself for injuries and get first aid, if necessary, before helping injured or trapped persons."
    ],
    dos: [
      "Stay indoors if you are inside.",
      "Move away from buildings, streetlights, and utility wires if you are outdoors.",
      "Stop as quickly as safety permits if you are in a moving vehicle and stay in the vehicle."
    ],
    donts: [
      "Do not use elevators.",
      "Do not light a match or turn on a light switch.",
      "Do not enter damaged buildings."
    ]
  },
  {
    id: "flood",
    title: "Flood",
    description: "Overflow of water onto normally dry land. Evacuate to higher ground.",
    immediateActions: ["Move to higher ground", "Avoid walking through floodwaters", "Disconnect utilities"],
    whatIsIt: "Flooding is a temporary overflow of water onto land that is normally dry. Floods are the most common natural disaster.",
    before: [
      "Know your area's flood risk and evacuation routes.",
      "Keep important documents in a waterproof container.",
      "Move valuables to higher levels."
    ],
    during: [
      "Evacuate immediately if told to do so.",
      "Move to higher ground or a higher floor.",
      "Do not walk, swim, or drive through flood waters. Turn Around, Don't Drown!"
    ],
    after: [
      "Return home only when authorities indicate it is safe.",
      "Avoid driving through flooded areas and standing water.",
      "Clean and disinfect everything that got wet. Mud left from floodwater can contain sewage and chemicals."
    ],
    dos: [
      "Listen to the radio or television for information.",
      "Move to higher ground immediately.",
      "Disconnect electrical appliances."
    ],
    donts: [
      "Do not walk through flowing water.",
      "Do not drive through flooded areas.",
      "Do not touch electrical equipment if you are wet or standing in water."
    ]
  },
  {
    id: "cyclone",
    title: "Cyclone",
    description: "Powerful rotating storm. Secure your home and stay indoors.",
    immediateActions: ["Seek shelter indoors", "Stay away from windows", "Monitor weather updates"],
    whatIsIt: "A cyclone is a large scale air mass that rotates around a strong center of low atmospheric pressure. They bring destructive winds and heavy rain.",
    before: [
      "Secure your property and bring loose items indoors.",
      "Trim trees and shrubs around your home.",
      "Find out where the nearest official shelter is located."
    ],
    during: [
      "Stay indoors and away from windows and glass doors.",
      "Close all interior doors—secure and brace external doors.",
      "Take refuge in a small interior room, closet, or hallway on the lowest level."
    ],
    after: [
      "Stay indoors until official 'all clear' is given.",
      "Check for gas leaks and damage to your home.",
      "Avoid loose or dangling power lines and report them immediately."
    ],
    dos: [
      "Keep your emergency kit ready.",
      "Turn off utilities if instructed to do so.",
      "Use flashlights instead of candles."
    ],
    donts: [
      "Do not go outside during the calm of the 'eye' of the storm.",
      "Do not use electrical appliances that have been wet.",
      "Do not ignore official evacuation orders."
    ]
  },
  {
    id: "landslide",
    title: "Landslide",
    description: "Movement of rock, earth, or debris down a slope. Stay alert.",
    immediateActions: ["Move away from the path", "Stay awake and alert", "Listen for unusual sounds"],
    whatIsIt: "A landslide is the movement of a mass of rock, debris, or earth down a slope, often triggered by heavy rainfall, earthquakes, or volcanic activity.",
    before: [
      "Learn about your local landslide risk, especially if you live near steep hills.",
      "Watch the patterns of storm-water drainage near your home.",
      "Plant ground cover on slopes and build retaining walls."
    ],
    during: [
      "Move away from the path of a landslide or debris flow as quickly as possible.",
      "If escape is not possible, curl into a tight ball and protect your head.",
      "Listen for unusual sounds that might indicate moving debris, such as trees cracking or boulders knocking together."
    ],
    after: [
      "Stay away from the slide area. There may be danger of additional slides.",
      "Listen to local radio or television stations for the latest emergency information.",
      "Check for injured and trapped persons near the slide, without entering the direct slide area."
    ],
    dos: [
      "Stay alert and awake during severe storms.",
      "Consider leaving if it is safe to do so.",
      "Report broken utility lines."
    ],
    donts: [
      "Do not build near steep slopes, close to mountain edges, or near drainage ways.",
      "Do not cross a bridge if you see a debris flow approaching.",
      "Do not assume the danger is over after the first slide."
    ]
  },
  {
    id: "tsunami",
    title: "Tsunami",
    description: "Giant sea waves caused by earthquakes. Move inland immediately.",
    immediateActions: ["Move inland immediately", "Go to higher ground", "Do not wait for warnings"],
    whatIsIt: "A tsunami is a series of enormous ocean waves caused by earthquakes, underwater landslides, volcanic eruptions, or asteroids.",
    before: [
      "Know your local tsunami hazard zones and evacuation routes.",
      "Practice your evacuation route.",
      "Understand the natural warning signs (strong earthquake, ocean withdrawing)."
    ],
    during: [
      "If you feel a strong earthquake, immediately move inland or to higher ground.",
      "Do not wait for an official warning.",
      "If you are in the water, grab onto something that floats."
    ],
    after: [
      "Stay away from the coast until officials announce it is safe to return.",
      "Listen to local alerts and authorities for information.",
      "Avoid wading in floodwater, which can contain dangerous debris."
    ],
    dos: [
      "Evacuate on foot if possible.",
      "Go as high and as far inland as possible.",
      "Stay there until authorities say it is safe to return."
    ],
    donts: [
      "Do not go to the coast to watch the tsunami.",
      "Do not assume the first wave is the last or the largest.",
      "Do not try to surf the tsunami."
    ]
  },
  {
    id: "drought",
    title: "Drought",
    description: "Water conservation and safety. Save every drop.",
    immediateActions: ["Stop non-essential water use", "Fix leaks immediately", "Monitor local restrictions"],
    whatIsIt: "A drought is a prolonged period of abnormally low rainfall, leading to a shortage of water.",
    before: [
      "Install water-efficient fixtures.",
      "Fix dripping faucets and leaking toilets.",
      "Harvest rainwater for outdoor use."
    ],
    during: [
      "Follow local water restrictions strictly.",
      "Take shorter showers and avoid baths.",
      "Reuse water where possible (e.g., use greywater for plants)."
    ],
    after: [
      "Continue water conservation habits.",
      "Assess damage to landscaping and replace with drought-tolerant plants.",
      "Review and improve your water emergency plan."
    ],
    dos: [
      "Turn off the tap while brushing teeth.",
      "Only run full loads in washing machines.",
      "Use a broom, not a hose, to clean driveways."
    ],
    donts: [
      "Do not water lawns during the heat of the day.",
      "Do not let the water run while washing dishes.",
      "Do not ignore small leaks."
    ]
  },
  {
    id: "wildfire",
    title: "Wildfire",
    description: "Evacuation and smoke protection. Be ready to leave.",
    immediateActions: ["Evacuate immediately if advised", "Wear an N95 mask", "Close all windows and doors"],
    whatIsIt: "A wildfire is an unplanned fire that burns in a natural area such as a forest, grassland, or prairie.",
    before: [
      "Create a defensible space around your home by clearing brush and dry leaves.",
      "Prepare a 'go bag' with essentials.",
      "Know at least two evacuation routes."
    ],
    during: [
      "Evacuate immediately if authorities tell you to do so.",
      "If trapped, call 911 and give your location, but realize that emergency response could be delayed.",
      "Keep indoor air clean by closing windows and doors and using an air filter."
    ],
    after: [
      "Do not return home until authorities say it is safe.",
      "Be cautious of hot spots and smoldering debris.",
      "Wear protective clothing, including a mask, when cleaning up."
    ],
    dos: [
      "Listen to emergency broadcasts.",
      "Turn on lights to increase visibility through smoke.",
      "Wet down your roof if you have time and it is safe."
    ],
    donts: [
      "Do not try to outrun a fire if you are caught on foot.",
      "Do not leave sprinklers on when you evacuate (it reduces water pressure).",
      "Do not wait until the last minute to evacuate."
    ]
  },
  {
    id: "heatwave",
    title: "Heatwave",
    description: "Hydration and heatstroke prevention. Stay cool and hydrated.",
    immediateActions: ["Drink plenty of water", "Move to an air-conditioned space", "Avoid strenuous activity"],
    whatIsIt: "A heatwave is a period of excessively hot weather, which may be accompanied by high humidity.",
    before: [
      "Install window air conditioners and insulate them.",
      "Check weather forecasts and upcoming temperature extremes.",
      "Ensure you have sufficient drinking water and fans."
    ],
    during: [
      "Never leave children or pets alone in enclosed vehicles.",
      "Stay hydrated by drinking plenty of fluids.",
      "Stay indoors in air-conditioned places as much as possible."
    ],
    after: [
      "Continue to drink water even after the temperature drops.",
      "Check on vulnerable neighbors and family members.",
      "Seek medical attention if you show signs of heat exhaustion or heat stroke."
    ],
    dos: [
      "Wear loose, lightweight, light-colored clothing.",
      "Take cool showers or baths to cool down.",
      "Check on family, friends, and neighbors."
    ],
    donts: [
      "Do not rely solely on fans for cooling during extreme heat.",
      "Do not drink beverages containing caffeine or alcohol, which dehydrate you.",
      "Do not do strenuous outdoor work during the hottest part of the day."
    ]
  },
  {
    id: "thunderstorm",
    title: "Thunderstorm & Lightning",
    description: "Indoor shelter and lightning safety. When thunder roars, go indoors.",
    immediateActions: ["Go indoors immediately", "Avoid electrical appliances", "Stay away from windows"],
    whatIsIt: "Thunderstorms are storms with lightning and thunder, often producing heavy rain, strong winds, and sometimes hail or tornadoes.",
    before: [
      "Cut down dead trees and branches that could fall.",
      "Secure outdoor objects that could blow away or cause damage.",
      "Unplug electronic equipment before the storm arrives."
    ],
    during: [
      "When thunder roars, go indoors! A sturdy building is the safest place.",
      "Avoid using corded phones and electrical equipment.",
      "Stay away from windows and doors, and stay off porches."
    ],
    after: [
      "Listen to authorities and weather forecasts for updates.",
      "Stay away from storm-damaged areas to keep from putting yourself at risk.",
      "Watch out for fallen power lines and report them immediately."
    ],
    dos: [
      "If outside with no shelter, crouch low with as little of your body touching the ground as possible.",
      "Stay inside a hard-topped vehicle if no building is available.",
      "Wait 30 minutes after the last clap of thunder before going outside."
    ],
    donts: [
      "Do not bathe, wash dishes, or use plumbing (lightning can travel through plumbing).",
      "Do not stand under isolated tall trees.",
      "Do not touch electrical equipment or cords."
    ]
  },
  {
    id: "volcano",
    title: "Volcanic Eruption",
    description: "Ashfall protection and evacuation. Protect your lungs.",
    immediateActions: ["Follow evacuation orders", "Wear an N95 mask", "Seal windows and doors"],
    whatIsIt: "A volcanic eruption occurs when magma, gas, and other materials from the Earth's mantle erupt onto the surface.",
    before: [
      "Learn about your community's warning systems and emergency plans.",
      "Get a pair of goggles and a disposable breathing mask for each member of the household.",
      "Know your evacuation route."
    ],
    during: [
      "Follow evacuation orders immediately.",
      "If indoors, close all windows, doors, and ventilation systems.",
      "If outdoors, seek shelter indoors immediately."
    ],
    after: [
      "Stay indoors until local health officials advise it is safe to go outside.",
      "Listen to local authorities for information on ash cleanup.",
      "Clear ash from your roof to prevent it from collapsing."
    ],
    dos: [
      "Wear long-sleeved shirts and long pants to protect your skin from ash.",
      "Use goggles and wear eyeglasses instead of contact lenses.",
      "Keep car engines off and avoid driving."
    ],
    donts: [
      "Do not drive in heavy ashfall.",
      "Do not get on your roof to remove ash unless you have proper safety gear.",
      "Do not tie up phone lines; use text messaging."
    ]
  }
];
