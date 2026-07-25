// Job data generator - deterministically generates 100,000 jobs for Singapore
const TOTAL_JOBS = 100000;

const jobTitles = [
  "Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer",
  "Data Analyst", "Data Scientist", "Machine Learning Engineer", "DevOps Engineer",
  "Cloud Architect", "Mobile Developer", "Android Developer", "iOS Developer",
  "Product Manager", "Project Manager", "Scrum Master", "Business Analyst",
  "UI/UX Designer", "Graphic Designer", "Brand Designer", "Web Designer",
  "Marketing Manager", "Digital Marketing Specialist", "SEO Specialist", "Content Writer",
  "Copywriter", "Social Media Manager", "Community Manager", "Growth Hacker",
  "Sales Manager", "Account Manager", "Business Development Manager", "Sales Executive",
  "Financial Analyst", "Accountant", "Finance Manager", "Auditor",
  "HR Manager", "HR Generalist", "Recruiter", "Talent Acquisition Specialist",
  "Operations Manager", "Supply Chain Manager", "Logistics Coordinator", "Procurement Officer",
  "Customer Success Manager", "Customer Support Specialist", "Technical Support Engineer",
  "Network Engineer", "Cybersecurity Analyst", "Information Security Officer",
  "Database Administrator", "Systems Administrator", "IT Manager", "CTO",
  "Legal Counsel", "Compliance Officer", "Risk Manager", "Contract Manager",
  "Healthcare Administrator", "Clinical Research Associate", "Pharmacist", "Nurse",
  "Teacher", "Education Consultant", "Instructional Designer", "Training Manager",
  "Civil Engineer", "Mechanical Engineer", "Electrical Engineer", "Structural Engineer",
  "Architect", "Urban Planner", "Environmental Consultant", "Safety Officer",
  "Real Estate Agent", "Property Manager", "Facilities Manager", "Construction Manager",
  "Research Analyst", "Policy Analyst", "Communications Manager", "Public Relations Officer",
  "Executive Assistant", "Administrative Officer", "Office Manager", "Receptionist",
  "Video Editor", "Motion Graphics Designer", "Content Strategist", "Brand Manager",
  "Partnerships Manager", "Customer Experience Manager", "Data Engineer", "BI Developer",
  "Scrum Master", "Agile Coach", "Release Manager", "Site Reliability Engineer",
  "Penetration Tester", "Cloud Engineer", "Platform Engineer", "API Developer",
  "Hotel Manager", "Restaurant Manager", "Chef", "Sommelier", "Event Manager",
  "Banking Analyst", "Wealth Manager", "Financial Advisor", "Investment Analyst",
  "Biotech Scientist", "Lab Technician", "Medical Writer", "Supply Chain Analyst"
];

// 75+ Singapore-based companies + global companies with Singapore presence
const companies = [
  // Singapore-based companies
  "DBS Bank", "OCBC Bank", "UOB Bank", "Singtel", "StarHub", "M1",
  "Singapore Airlines", "Changi Airport Group", "SATS", "ST Engineering",
  "Keppel Corporation", "Sembcorp Industries", "Wilmar International",
  "Flextronics", "Venture Corporation", "Creative Technology",
  "Razer", "Grab", "Sea Limited", "Shopee", "Lazada Singapore",
  "Carousell", "Zalora Singapore", "Foodpanda Singapore",
  "Deliveroo Singapore", "GrabFood", "Gojek Singapore",
  "Singapore Power (SP Group)", "Sembcorp Marine", "Jurong Port",
  "PSA International", "Keppel Land", "CapitaLand", "Ascott",
  "Far East Organization", "City Developments Limited (CDL)",
  "GIC", "Temasek Holdings", "EDB Singapore", "MAS (Monetary Authority of Singapore)",
  "SingHealth", "National Healthcare Group", "Parkway Pantai",
  "Raffles Medical Group", "Thomson Medical", "NUS", "NTU", "SMU",
  
  // Global with Singapore presence
  "Google Singapore", "Microsoft Singapore", "Apple Singapore",
  "Amazon Singapore", "Meta Singapore", "IBM Singapore",
  "Oracle Singapore", "SAP Singapore", "Deloitte Singapore",
  "PwC Singapore", "EY Singapore", "KPMG Singapore",
  "Accenture Singapore", "BCG Singapore", "McKinsey Singapore",
  "HSBC Singapore", "Standard Chartered Singapore", "Citi Singapore",
  "JPMorgan Chase Singapore", "Goldman Sachs Singapore",
  "Unilever Singapore", "P&G Singapore", "Nestle Singapore",
  "Coca-Cola Singapore", "PepsiCo Singapore",
  "Shell Singapore", "BP Singapore", "TotalEnergies Singapore",
  "Schneider Electric Singapore", "Honeywell Singapore",
  "Boeing Singapore", "Airbus Singapore", "Rolls-Royce Singapore",
  "Samsung Singapore", "Sony Singapore", "Panasonic Singapore",
  "Toyota Singapore", "BMW Singapore", "Mercedes-Benz Singapore",
  "LVMH Singapore", "Chanel Singapore", "Gucci Singapore",
  "Pfizer Singapore", "Novartis Singapore", "Roche Singapore"
];

const singaporeLocations = [
  // Central Singapore
  "Central Area, Singapore", "Orchard Road, Singapore", "Raffles Place, Singapore",
  "Marina Bay, Singapore", "Shenton Way, Singapore", "Tanjong Pagar, Singapore",
  "Bugis, Singapore", "City Hall, Singapore", "Clarke Quay, Singapore",
  "Chinatown, Singapore", "Little India, Singapore", "Kampong Glam, Singapore",
  
  // East Singapore
  "Changi, Singapore", "Tampines, Singapore", "Bedok, Singapore", "Pasir Ris, Singapore",
  "Simei, Singapore", "Expo, Singapore", "Loyang, Singapore", "Ubi, Singapore",
  "Kaki Bukit, Singapore", "Eunos, Singapore", "Geylang, Singapore", "Kallang, Singapore",
  
  // West Singapore
  "Jurong East, Singapore", "Jurong West, Singapore", "Clementi, Singapore",
  "Boon Lay, Singapore", "Pioneer, Singapore", "Tuas, Singapore",
  "Bukit Batok, Singapore", "Bukit Panjang, Singapore", "Choa Chu Kang, Singapore",
  "Woodlands, Singapore", "Sembawang, Singapore", "Yishun, Singapore",
  "Ang Mo Kio, Singapore", "Bishan, Singapore", "Thomson, Singapore",
  
  // North Singapore
  "Yio Chu Kang, Singapore", "Seletar, Singapore", "Punggol, Singapore",
  "Sengkang, Singapore", "Hougang, Singapore", "Serangoon, Singapore",
  "Toa Payoh, Singapore", "Novena, Singapore", "Balestier, Singapore",
  
  // South Singapore
  "Sentosa, Singapore", "HarbourFront, Singapore", "Telok Blangah, Singapore",
  "Pasir Panjang, Singapore", "Kent Ridge, Singapore", "Science Park, Singapore",
  
  // Business Parks & Hubs
  "Jurong Lake District, Singapore", "Changi Business Park, Singapore",
  "Singapore Science Park, Singapore", "Fusionopolis, Singapore",
  "Biopolis, Singapore", "Mapletree Business City, Singapore",
  "Alexandra Technopark, Singapore", "International Business Park, Singapore",
  
  // Remote
  "Remote — Singapore", "Remote — SG"
];

const salaryRanges = [
  { display: "SGD 2,500 – 3,500/month", min: 2500, max: 3500 },
  { display: "SGD 3,500 – 5,000/month", min: 3500, max: 5000 },
  { display: "SGD 5,000 – 7,000/month", min: 5000, max: 7000 },
  { display: "SGD 7,000 – 9,000/month", min: 7000, max: 9000 },
  { display: "SGD 9,000 – 12,000/month", min: 9000, max: 12000 },
  { display: "SGD 12,000 – 15,000/month", min: 12000, max: 15000 },
  { display: "SGD 15,000 – 20,000/month", min: 15000, max: 20000 },
  { display: "SGD 20,000 – 25,000/month", min: 20000, max: 25000 },
  { display: "SGD 25,000+/month", min: 25000, max: 40000 },
  { display: "SGD 2,000 – 3,000/month", min: 2000, max: 3000 }
];

const jobTypes = ["FULL_TIME", "CONTRACTOR", "PART_TIME", "INTERN", "TEMPORARY"];
const jobTypeDisplay = { 
  "FULL_TIME": "Full-time", 
  "CONTRACTOR": "Contract", 
  "PART_TIME": "Part-time", 
  "INTERN": "Internship", 
  "TEMPORARY": "Temporary" 
};

const experienceLevels = [
  { display: "Entry Level", schema: "no requirements" },
  { display: "Mid Level",   schema: "2 years experience" },
  { display: "Senior Level",schema: "5 years experience" },
  { display: "Lead",        schema: "7 years experience" },
  { display: "Manager",     schema: "5 years experience" },
  { display: "Director",    schema: "8 years experience" },
  { display: "Executive",   schema: "10 years experience" }
];

const industries = [
  "Technology", "Fintech", "E-commerce", "Banking & Finance", "Oil & Gas",
  "Real Estate", "Healthcare", "Education", "Consulting", "Aviation",
  "Construction", "Logistics & Shipping", "Hospitality", "Retail", "Biotechnology",
  "Renewable Energy", "Automotive", "Telecommunications", "Legal", "Government",
  "Food & Beverage", "Chemical", "Semiconductor", "Insurance", "Manufacturing"
];

const jobDescriptions = [
  (title, company, isRemote, location) => `We are seeking a talented ${title} to join the team at ${company} in Singapore. ${isRemote ? "This is a fully remote role open to qualified candidates across Singapore." : `This role is based in ${location}.`}

You will be responsible for delivering high-quality work that drives business outcomes and contributes to ${company}'s growing operations in Singapore and across the Asia-Pacific region.

Key Responsibilities:
• Lead and execute core ${title.toLowerCase()} functions across the organization
• Collaborate with cross-functional teams to deliver on strategic objectives
• Analyze data and provide actionable insights to improve performance
• Mentor junior team members and contribute to knowledge sharing
• Ensure best practices are followed in all deliverables

Requirements:
• 3–5 years of experience in a similar ${title.toLowerCase()} role
• Strong communication and problem-solving skills
• Experience working in fast-paced global business environment
• Bachelor's degree in a relevant field
• Proficiency with modern tools and platforms
• Fluency in English (Mandarin is a plus)

What We Offer:
• Competitive salary in SGD
• Comprehensive health insurance
• 14+ days annual leave
• Remote work allowance
• Annual performance bonus
• Professional development budget
• CPF contributions (for Singaporeans/PRs)`,

  (title, company, isRemote, location) => `${company} is hiring a ${title}! We are a leading company in Singapore looking for experienced professionals to scale our impact across the region.

${isRemote ? "This remote-first position allows you to work from anywhere in Singapore with flexible hours." : `You will work from our ${location} office with a dynamic, ambitious team.`}

About the Role:
As a ${title} at ${company}, you will play a key role in shaping our products and services. You'll work closely with leadership and peers to execute on our mission in one of Asia's leading business hubs.

What You'll Do:
• Drive key ${title.toLowerCase()} initiatives from planning to execution
• Build and maintain relationships with key stakeholders
• Report on KPIs and contribute to strategic planning
• Stay updated on industry trends globally and in Singapore
• Represent ${company} with professionalism and integrity

What You Bring:
• 2–6 years proven experience as a ${title.toLowerCase()}
• Strong analytical and communication skills
• Team player with a growth mindset
• Relevant certification or degree preferred
• Valid Singapore work pass or Singaporean/PR status preferred

Compensation & Benefits:
• Competitive SGD salary • Comprehensive health insurance • 14 days annual leave • CPF contributions • Flexible working hours • Annual bonus`,

  (title, company, isRemote, location) => `Join ${company} as a ${title} and be part of one of Singapore's most exciting companies!

${isRemote ? "🌐 Remote | Work from anywhere in Singapore" : `📍 ${location}`}

We're building the future of business in Asia and need exceptional talent like you. This is a rare opportunity to work with a world-class brand while enjoying the vibrant lifestyle of Singapore.

The Opportunity:
You'll be taking on the ${title} role at a critical growth stage. Your work will directly impact millions of customers across the Asia-Pacific region.

Day-to-Day Responsibilities:
• Execute and improve key workflows within the ${title.toLowerCase()} function
• Collaborate with product, engineering, and business teams
• Track metrics and optimize for performance
• Contribute to a culture of excellence and innovation
• Support senior leadership with reporting and strategy

Your Profile:
• 3+ years in ${title.toLowerCase()} or related field
• Comfortable in a fast-moving global business ecosystem
• Strong interpersonal skills and professional work ethic
• Degree in relevant discipline (Master's is a plus)
• Languages: English required; Mandarin or other Asian languages a plus

Perks at ${company}:
Competitive SGD salary | Comprehensive health insurance | CPF contributions | 14+ days leave | Performance bonus | Learning budget | Gym membership | Work-life balance`
];

function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function getJobData(id) {
  const seed = id * 7919;
  const r = (offset = 0) => seededRandom(seed + offset);

  const isRemote = id <= TOTAL_JOBS / 2;

  const companyIndex = Math.floor((id - 1) / Math.ceil(TOTAL_JOBS / companies.length)) % companies.length;

  const titleIndex   = Math.floor(r(1) * jobTitles.length);
  const locationIndex= Math.floor(r(3) * singaporeLocations.length);
  const salaryIndex  = Math.floor(r(4) * salaryRanges.length);
  const jobTypeIndex = Math.floor(r(5) * jobTypes.length);
  const expIndex     = Math.floor(r(6) * experienceLevels.length);
  const industryIndex= Math.floor(r(7) * industries.length);
  const descIndex    = Math.floor(r(8) * jobDescriptions.length);

  const title    = jobTitles[titleIndex];
  const company  = companies[companyIndex];
  const location = isRemote ? "Remote — Singapore" : singaporeLocations[locationIndex];
  const salary   = salaryRanges[salaryIndex];
  const jobType  = jobTypes[jobTypeIndex];
  const exp      = experienceLevels[expIndex];
  const industry = industries[industryIndex];
  const description = jobDescriptions[descIndex](title, company, isRemote, singaporeLocations[locationIndex]);

  const daysAgo = Math.floor(r(9) * 60);
  const postedDate = new Date();
  postedDate.setDate(postedDate.getDate() - daysAgo);
  const validThrough = new Date(postedDate);
  validThrough.setDate(validThrough.getDate() + 90);

  return {
    id,
    title,
    company,
    location,
    salary: salary.display,
    salaryMin: salary.min,
    salaryMax: salary.max,
    jobType,
    jobTypeDisplay: jobTypeDisplay[jobType],
    experience: exp.display,
    experienceSchema: exp.schema,
    industry,
    isRemote,
    description,
    postedDate: postedDate.toISOString().split('T')[0],
    validThrough: validThrough.toISOString().split('T')[0],
    slug: `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${id}`
  };
}

function getJobSchema(job) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": job.company,
      "value": `JOB-SG-${String(job.id).padStart(6, '0')}`
    },
    "datePosted": job.postedDate,
    "validThrough": `${job.validThrough}T00:00:00Z`,
    "employmentType": job.jobType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company,
      "sameAs": `https://www.google.com/search?q=${encodeURIComponent(job.company)}`
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.isRemote ? "Singapore" : job.location.split(',')[0],
        "addressCountry": "SG"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "Singapore"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "SGD",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": job.salaryMin,
        "maxValue": job.salaryMax,
        "unitText": "MONTH"
      }
    },
    "experienceRequirements": {
      "@type": "OccupationalExperienceRequirements",
      "monthsOfExperience": job.experienceSchema === "no requirements" ? 0
        : parseInt(job.experienceSchema) * 12
    },
    "industry": job.industry,
    "url": `/jobs/${job.id}`,
    "directApply": true
  };

  if (job.isRemote) {
    schema.jobLocationType = "TELECOMMUTE";
  }

  return schema;
}

module.exports = { getJobData, getJobSchema, TOTAL_JOBS, jobTitles, companies, singaporeLocations, industries };
