/* ==========================================================================
   Mock content for the Rwanda hub — shared by the list page and the detail
   page so the three screens behave like one connected, data-driven app.
   ========================================================================== */
export const projects = [
  {
    id: "wheelchair-design",
    title: "Low-Cost Wheelchair Design for Local Materials",
    sector: "Assistive Technology Development",
    sectorBadge: "green",
    status: "Active",
    stage: "Pilot / Field Testing",
    stageIsCollab: false,
    localNeed: "Affordable wheelchair options using locally available materials to increase accessibility and reduce costs for wheelchair users in Rwanda.",
    partners: "Rwanda Orthopedic Association, Local Makers Collective",
    relatedNarrative: "Wheelchair access barriers",
    supportNeeded: "Seeking maker/fabrication support",
    country: "Rwanda",
    visibility: "Public",
    opportunity: "Many wheelchair users in Rwanda face challenges accessing durable, affordable wheelchairs. Imported models are costly and difficult to repair locally, leaving many users with mobility aids that wear out quickly on uneven terrain.",
    description: "We are co-designing wheelchair prototypes with local welders, fabricators, and wheelchair users. The designs prioritize local materials, low production cost, and serviceability across rural and urban terrain.",
    narrativeCard: {
      title: "Wheelchair Access and Repair Barriers",
      location: "Kigali District",
      locationNote: "Exact Location Hidden",
      body: "Community members documented challenges with wheelchair repair and access to spare parts across rural service areas."
    },
    sustainability: [
      "Local materials: Designs use steel tubing, canvas, and rubber sourced from regional suppliers.",
      "Repair/maintenance: Simple designs that can be repaired with common local tools.",
      "Affordability: Target production cost 60% lower than imported models.",
      "Local production: Working with local metal fabricators to build production capacity."
    ],
    participants: [
      { name: "Ethan Parker", role: "Initiator" },
      { name: "Olivia Bennett", role: "Participant" },
      { name: "Sophia Carter", role: "Participant" }
    ],
    media: "default"
  },
  {
    id: "at-service-gaps-mapping",
    title: "Rwanda AT Service Gaps Mapping Project",
    sector: "GIS Mapping & Data Infrastructure",
    sectorBadge: "neutral",
    status: "In Progress",
    stage: "In Progress",
    stageIsCollab: false,
    localNeed: "Documenting where assistive technology services and repair points exist — and where they don't — across Rwanda's five provinces.",
    partners: "Rwanda Orthopedic Association, Local Government Data Office",
    relatedNarrative: "Service gap documentation",
    supportNeeded: "Seeking local partner",
    country: "Rwanda",
    visibility: "Public",
    opportunity: "Assistive technology provision in Rwanda is uneven, and there is no shared map of where services, repair shops, and trained fitters are located. Planners and NGOs are duplicating outreach efforts without a common reference.",
    description: "We are building a GIS layer that plots existing AT service points, gaps in coverage, and community-reported needs, so future projects and funders can target underserved districts first.",
    narrativeCard: {
      title: "Service Gap Documentation",
      location: "Eastern Province",
      locationNote: "District-level detail",
      body: "Field surveys recorded which districts have zero registered AT repair points within a half-day's travel."
    },
    sustainability: [
      "Open data: Layers published under an open license for reuse by government and NGOs.",
      "Local ownership: Data collection led by trained community surveyors.",
      "Low-cost tooling: Built on free, open-source GIS software.",
      "Maintenance plan: Quarterly data refresh cycle with local government office."
    ],
    participants: [
      { name: "Marcus Diallo", role: "Initiator" },
      { name: "Aline Uwimana", role: "Participant" }
    ],
    media: "map"
  },
  {
    id: "at-awareness-campaign",
    title: "AT Awareness Campaign in Rural Communities",
    sector: "Awareness, Outreach & Advocacy",
    sectorBadge: "orange",
    status: "Looking for Collaborators",
    stage: "Seeking Collaborators",
    stageIsCollab: true,
    localNeed: "Many rural households are unaware that free or subsidized assistive technology and repair services exist near them.",
    partners: "Community Health Workers Network, Local Radio Rwanda",
    relatedNarrative: "Awareness gaps in rural districts",
    supportNeeded: "Seeking local partner",
    country: "Rwanda",
    visibility: "Public",
    opportunity: "Assistive technology programs frequently under-perform in rural areas not because services are unavailable, but because awareness of them is low. Word-of-mouth and radio remain the most trusted channels.",
    description: "We are designing a radio and community health worker campaign that explains available AT services in plain language, paired with a simple referral pathway to the nearest provider.",
    narrativeCard: {
      title: "Awareness Gaps in Rural Districts",
      location: "Southern Province",
      locationNote: "Multiple districts",
      body: "Focus groups found under half of respondents knew who to contact for assistive device support."
    },
    sustainability: [
      "Local voices: Scripts co-written and read by local health workers, not outside narrators.",
      "Low-tech reach: Distributed via existing community radio, no new infrastructure required.",
      "Referral tracking: Simple paper-based referral log kept at each health post.",
      "Handover plan: Campaign materials transferred to the district health office after launch."
    ],
    participants: [
      { name: "Grace Mukamana", role: "Initiator" }
    ],
    media: "alt"
  },
  {
    id: "hearing-aid-maintenance-training",
    title: "Community-Based Hearing Aid Maintenance Training",
    sector: "Capacity Building & Training",
    sectorBadge: "neutral",
    status: "Planning",
    stage: "Planning",
    stageIsCollab: false,
    localNeed: "Hearing aid users often travel long distances for basic maintenance, batteries, and minor repairs.",
    partners: "Rwanda School for the Deaf, District Health Office",
    relatedNarrative: "Hearing aid maintenance challenges",
    supportNeeded: "Seeking lived experience input",
    country: "Rwanda",
    visibility: "Public",
    opportunity: "Basic hearing aid maintenance — cleaning, battery replacement, minor tubing repair — could be handled locally if community members were trained, reducing the need for long trips to urban clinics.",
    description: "We are developing a short, hands-on training curriculum that equips community health workers and family members with basic hearing aid care and troubleshooting skills.",
    narrativeCard: {
      title: "Hearing Aid Maintenance Challenges",
      location: "Northern Province",
      locationNote: "Rural service area",
      body: "Users reported waiting weeks for simple repairs that could be resolved in minutes with the right training and tools."
    },
    sustainability: [
      "Train-the-trainer model: First cohort trains subsequent cohorts, lowering long-term cost.",
      "Locally sourced batteries: Partnering with local pharmacies to stock compatible batteries.",
      "Low-cost toolkits: Basic maintenance kits assembled from inexpensive, locally available parts.",
      "Ongoing support: Monthly check-in calls with trained community members."
    ],
    participants: [
      { name: "Jean Bosco Habimana", role: "Initiator" },
      { name: "Claudine Ingabire", role: "Participant" }
    ],
    media: "default"
  },
  {
    id: "school-furniture-design-workshop",
    title: "Accessible School Furniture Design Workshop",
    sector: "Assistive Technology Development",
    sectorBadge: "green",
    status: "Active",
    stage: "Pilot / Field Testing",
    stageIsCollab: false,
    localNeed: "Standard school furniture doesn't accommodate students with mobility or postural support needs, limiting classroom participation.",
    partners: "Ministry of Education Inclusive Unit, Local Carpenters Guild",
    relatedNarrative: "School accessibility barriers",
    supportNeeded: "Seeking funding/resources",
    country: "Rwanda",
    visibility: "Public",
    opportunity: "Many schools lack adjustable desks and supportive seating, which forces students with disabilities into makeshift or unsafe arrangements that affect posture and participation.",
    description: "We are running hands-on workshops where local carpenters and occupational therapists co-design adjustable, low-cost desks and seating using materials already available in local timber markets.",
    narrativeCard: {
      title: "School Accessibility Barriers",
      location: "Kigali District",
      locationNote: "Primary schools",
      body: "Teachers reported improvising furniture with cushions and blocks due to a lack of adjustable options."
    },
    sustainability: [
      "Local timber: Designs built entirely from regionally sourced hardwood.",
      "Skill transfer: Carpenters trained to replicate designs independently after the workshop.",
      "Modular parts: Components can be repaired or resized as a child grows.",
      "Low-cost bill of materials: Published openly for any school to build from."
    ],
    participants: [
      { name: "Patrick Nshimiyimana", role: "Initiator" },
      { name: "Diane Mutesi", role: "Participant" }
    ],
    media: "tall"
  },
  {
    id: "co-design-toolkit",
    title: "Co-Design Toolkit for AT Innovation",
    sector: "Awareness, Outreach & Advocacy",
    sectorBadge: "orange",
    status: "Looking for Collaborators",
    stage: "Seeking Collaborators",
    stageIsCollab: true,
    localNeed: "Teams designing assistive technology often skip meaningful input from disabled users, resulting in products that miss real needs.",
    partners: "Rwanda Disability Advocacy Coalition",
    relatedNarrative: "Co-design methodology needs",
    supportNeeded: "Seeking research support",
    country: "Rwanda",
    visibility: "Public",
    opportunity: "Effective assistive technology depends on genuine co-design with the people who will use it, but many teams lack accessible facilitation tools and methods for doing this well.",
    description: "We are assembling an open toolkit — templates, facilitation guides, and consent materials — that any team in Rwanda can use to run inclusive co-design sessions with disabled users.",
    narrativeCard: {
      title: "Co-Design Methodology Needs",
      location: "National",
      locationNote: "Cross-province",
      body: "Partner organizations asked for ready-to-use facilitation materials rather than building their own from scratch each time."
    },
    sustainability: [
      "Open license: Toolkit released for free reuse and adaptation by any organization.",
      "Plain language: Materials reviewed for accessibility and translated into Kinyarwanda.",
      "Community review: Draft toolkit tested with three partner organizations before release.",
      "Living document: Toolkit updated as new facilitation practices are learned."
    ],
    participants: [
      { name: "Yvette Uwase", role: "Initiator" }
    ],
    media: "alt"
  }
];

export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}
