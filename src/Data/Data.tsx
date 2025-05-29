import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const companies = ["Google", "Amazon", "Figma","Netflix","Meta",
    "Microsoft","Pinterest","Slack","Spotify","Oracle","Walmart"
];
const jobCategory: never[] = [

];
const category = [
    {
        
        name: "Digital Marketing",
        decs: "Promote brands online with marketing strategies",
        jobs: "1k+ new job posted",
    },
    {
        name: "Web Developer",
        decs: "PBuild and maintain websites for clients",
        jobs: "2k+ new job posted",
    },
    {
        name: "Arts & Design",
        decs: "Create visual content for branding and media",
        jobs: "500+ new job posted",
    }
    ,
    {
        name: "UI-UX Designer",
        decs: "Design user interfaces and enhance user experience",
        jobs: "800+ new job posted",
    }
    ,
    {
        name: "Content Writing",
        decs: "Write and edit content for various platforms",
        jobs: "1.5k+ new job posted",
    }
    ,
    {
        name: "Data Entry",
        decs: "Input data into systems accurately and efficiently",
        jobs: "1k+ new job posted",
    },
    {
        name: "Customer Support",
        decs: "Assist customers with inquiries and issues",
        jobs: "1.2k+ new job posted",
    }
    ,
    {
        name: "Sales",
        decs: "Sell products and services to customers",
        jobs: "900+ new job posted",
    }
    ,
    {
        name: "Finance",
        decs: "Manage financial records and transactions",
        jobs: "700+ new job posted",
    }
    ,{
        name: "Human Resource",
        decs: "Recruit, manage, and support company employees",
        jobs: "600+ new job posted",
    },
    
    
];
const work = [
    {
        "name" : "Build Your Resume",
        "desc" : "Create a standout resume with your skills"
    },
    {
        "name" : "Apply for Job",
        "desc" : "Find and apply for jobs that match your skills"
    },
    {
        "name" : "Get Hired",
        "desc" : "Connect with employers and start your new job"
    }
]
const testimonials = [
    {
        "name" : "Raja Bijoriya",
        "testimonial" : "This job portal made job search easy and quick. Recommended to all job seekers!",
        "rating" : 5
    },
    {
        "name" : "Abhishek Kullu",
        "testimonial" : "Found my dream job within a week! The application process was smooth.",
        "rating" : 5
    },
    {
        "name" : "Swapnil Pandey",
        "testimonial" : "I secured a job offer within days of applying. Exceptional user experience and support.",
        "rating" : 4
    },
    {
        "name" : "Pavan Barnana",
        "testimonial" : "Highly efficient job portal with excellent resources. Helped me land a great position.",
        "rating" : 5
    }
] 

const footerLinks = [
    { title: "Product", links: ["Find Job", "Find Company", "Find Employee"] },
    { title: "Company", links: ["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"] },
    { title: "Support", links: ["Help & Support", "Feedback", "FAQs"] }
]

const dropdownData = [
    {
        title: "Job Title", icon: IconSearch, options: ['Designer', 'Developer', ' Product Manager',
        'Marketing Specialist', 'Data Analyst', 'Customer Support', 'Sales Manager', 'Finance Analyst', 'HR Manager']

    },
    {
        title: "Location", icon: IconMapPin, options: ['New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Seattle', 'Austin', 'Boston', 'Denver', 'Portland', 'Miami']
    },
    {
        title: "Experience", icon: IconBriefcase, options: ['0-1 years', '1-3 years', '3-5 years', '5-7 years', '7-10 years', '10+ years']
    },
    {
        title: "Job Type", icon: IconRecharging, options: ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote']
    }
]
const jobList = [
    {
        jobTitle: "Product Designer",
        company: "Meta",
        applicants: 25,
        experience: "Entry Level",
        jobType: "Full-Time",
        location: "New York",
        package: "32 LPA",
        postedDaysAgo: 12,
        description: "Meta is seeking a Product Designer to join our team. You'll be working on designing user-centric interfaces for our blockchain wallet platform. This is an excellent opportunity for entry designers to grow their skills in a dynamic environment."
    },
    {
        jobTitle: "Software Engineer",
        company: "Google",
        applicants: 40,
        experience: "Mid-Level",
        jobType: "Full-Time",
        location: "San Francisco",
        package: "45 LPA",
        postedDaysAgo: 5,
        description: "Google is looking for a Software Engineer to develop scalable applications for its cloud infrastructure. Join our team and work on cutting-edge technology."
    },
    {
        jobTitle: "UX Designer",
        company: "Apple",
        applicants: 30,
        experience: "Senior Level",
        jobType: "Full-Time",
        location: "Cupertino",
        package: "50 LPA",
        postedDaysAgo: 7,
        description: "Apple is hiring a UX Designer to enhance user experiences for iOS and macOS applications. Help shape the future of design at Apple."
    },
    {
        jobTitle: "Data Scientist",
        company: "Amazon",
        applicants: 35,
        experience: "Mid-Level",
        jobType: "Full-Time",
        location: "Seattle",
        package: "40 LPA",
        postedDaysAgo: 10,
        description: "Amazon is seeking a Data Scientist to optimize recommendation algorithms for its e-commerce platform. Join us in shaping the future of online shopping."
    },
    {
        jobTitle: "AI Research Engineer",
        company: "Microsoft",
        applicants: 28,
        experience: "Senior Level",
        jobType: "Full-Time",
        location: "Redmond",
        package: "55 LPA",
        postedDaysAgo: 8,
        description: "Microsoft is looking for an AI Research Engineer to develop deep learning models for Azure AI services. Be a part of the AI revolution."
    },
    {
        jobTitle: "Front-End Developer",
        company: "Adobe",
        applicants: 22,
        experience: "Entry Level",
        jobType: "Full-Time",
        location: "San Jose",
        package: "30 LPA",
        postedDaysAgo: 3,
        description: "Adobe is hiring a Front-End Developer to build engaging user interfaces for its creative cloud suite. Join us in designing the future of creativity."
    },
    {
        jobTitle: "DevOps Engineer",
        company: "Netflix",
        applicants: 26,
        experience: "Mid-Level",
        jobType: "Full-Time",
        location: "Los Angeles",
        package: "48 LPA",
        postedDaysAgo: 6,
        description: "Netflix is looking for a DevOps Engineer to optimize CI/CD pipelines and enhance streaming performance. Be part of the world's leading entertainment service."
    },
    {
        jobTitle: "Backend Developer",
        company: "Spotify",
        applicants: 20,
        experience: "Mid-Level",
        jobType: "Full-Time",
        location: "Stockholm",
        package: "38 LPA",
        postedDaysAgo: 4,
        description: "Spotify is seeking a Backend Developer to enhance its music recommendation engine and API infrastructure. Join us in making music streaming smarter."
    }
];

const searchFields = [
    {
        title: "Job Title", icon: IconSearch, options: ['Designer', 'Developer', 'Product Manager',
            'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer','Customer Support'
        ] 
    },
    {
        title: "Location", icon: IconMapPin, options: ['Delhi', 'New York', 'San Francisco', 'London',
            'Berlin', 'Tokyo', 'Sydney','Toronto'
        ]

    },
    {
        title: "Skills", icon: IconRecharging, options:
      [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "TypeScript",
    "Redux", "Next.js", "GraphQL", "REST API", "SQL", "PostgreSQL", "Firebase", "Docker",
    "Kubernetes", "Git", "GitHub", "Webpack", "Babel", "Tailwind CSS", "Bootstrap",
    "Jest", "Cypress", "AWS", "Azure", "CI/CD", "WebSockets", "Microservices"
]
    }
]

export default {companies,category, jobCategory, work, testimonials, footerLinks, dropdownData, jobList, searchFields};