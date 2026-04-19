export const siteConfig = {
  name: "Manish Ranjan Karna",
  title: "Software Engineer",
  description: "Portfolio website of Manish Ranjan Karna - Software Engineer at NVIDIA",
  accentColor: "#1d4ed8",
  profileImage: "profile.jpeg", // Profile photo for About section
  profileImageVerticalAnchorPercent: 32,
  backgroundImage: "image.png", // Background image for landing page
  social: {
    email: "manish99.ranjan99@gmail.com",
    linkedin: "https://linkedin.com/in/mrkarna",
    github: "https://github.com/mrkarna",
  },
  aboutMe:
    "I am a Software Engineer at NVIDIA, passionate about building scalable, high-performance systems. With experience in Go, Java, Python, and cloud platforms like AWS and GCP, I specialize in designing microservices and distributed systems. I hold a Master's degree in Computer Science from University of Massachusetts Amherst and have worked at tech giants like Amazon and NVIDIA, among others.",
  skills: ["Golang", "C++", "Java", "Python", "C", "Go kit", "Spring Boot", "Django", "Flask", "DynamoDB", "MongoDB", "MySQL", "Kafka", "AWS", "GCP", "Docker", "Kubernetes"],
  projects: [
    {
      name: "Personalized Large Language Model",
      description:
        "Designed a personalized large language model (LLM) using base model Flan-T5 to condition the output for a user. Used soft clustering of user's past reviews to predict product rating using this LLM on the LaMP dataset and achieved an MAE of 0.7.",
      link: "https://github.com/mrkarna/large-language-model-personalization",
      skills: ["Python", "Transformers", "Numpy"],
    },
    {
      name: "Time Synchronization Protocol",
      description:
        "Implemented a time synchronization protocol based on Network Time Protocol (NTP). It aimed to provide multiple clients to precisely synchronize their local time with a central server hosted on an AWS EC2 instance within a range of 10−5 seconds.",
      link: "https://github.com/mrkarna/network-time-protocol",
      skills: ["Python", "AWS"],
    },
    {
      name: "Fake News Detection",
      description:
        "Developed a fake news classifier using decision tree based algorithms. Used TF-IDF and count vectorizer methods in preprocessing, performed grid-search for hyperparameter tuning, achieving a precision of 87% and overall accuracy of 71%.",
      link: "https://github.com/mrkarna/fake-news-detection",
      skills: ["Python", "Sklearn"],
    },
  ],
  experience: [
    {
      company: "NVIDIA",
      title: "Software Engineer",
      dateRange: "June 2025 - Present",
      location: "Santa Clara, CA, USA",
      logo: "nvidia-logo.png", // Add NVIDIA logo
      bullets: [
        "Integrated <strong>PayPal and Stripe</strong> to collect billing across various NVIDIA services — handling <strong>subscriptions, one-time payments, refunds, and usage-based metering</strong> at scale",
        "Improved <strong>payment reliability and fraud detection by 35%</strong> by introducing <strong>post-payment actions during checkout</strong>, including <strong>trade compliance checks, device fingerprinting, and fraud signal enrichment</strong> on invoices",
        "Technologies: Go, DynamoDB, AWS",
      ],
    },
    {
      company: "Amazon",
      title: "Systems Development Engineer Co-op",
      dateRange: "Sep 2024 - Dec 2024",
      location: "Boston, MA, USA",
      logo: "amazon-logo.png", // Add Amazon logo
      bullets: [
        "Designed and developed <strong>AREdgeDiags</strong>, a troubleshooting tool for <strong>Amazon Robotics</strong> that parses logs, identifies root causes with <strong>state machines</strong>, and reduces downtime and team dependency",
        "The tool enabled local IT and ARTS teams to resolve issues independently, <strong>cutting escalations by 50%</strong> and reducing delays",
        "Technologies: Java, Python, DynamoDB, AWS",
      ],
    },
    {
      company: "NVIDIA",
      title: "Cloud Platform Engineering Intern",
      dateRange: "May 2024 - Aug 2024",
      location: "Santa Clara, CA, USA",
      logo: "nvidia-logo.png", // Add NVIDIA logo
      bullets: [
        "Designed and developed a <strong>high-performance Java library</strong> for publishing metering events, featuring <strong>retry logic, batching, and buffering</strong>, and demonstrated its scalability and reliability through load testing with <strong>10,000 events per second</strong>",
        "Developed a <strong>Go-based microservice</strong> integrating with <strong>Metronome</strong> to manage billable metrics for NVIDIA cloud services, ensuring <strong>SOX compliance</strong> through auditable tracking, and <strong>automating processes to reduce manual intervention by over 80%</strong>",
        "Technologies: Java, Go, Spring Boot, DynamoDB, AWS",
      ],
    },
    {
      company: "Zeni Inc.",
      title: "Software Engineer",
      dateRange: "Nov 2022 - Aug 2023",
      location: "Pune, India",
      logo: "zeni-logo.png", // Add Zeni logo
      bullets: [
        "Developed a <strong>reporting framework</strong> to generate accounting reports by integrating with <strong>QuickBooks (by Intuit)</strong> to fetch client's transactions, ensuring <strong>real-time updates of reports</strong> that previously lagged by up to 12 hours",
        "Optimized <strong>cron jobs for data synchronization</strong> with QuickBooks, <strong>reducing the synchronization time from 6 hours to 2 hours</strong> by minimizing database calls, search index latency and using <strong>batch processing</strong>",
        "Technologies: Python, WebApp, Google Cloud Platform",
      ],
    },
    {
      company: "Tila Labs (E-commerce)",
      title: "Software Development Engineer II",
      dateRange: "May 2022 - Nov 2022",
      location: "Bangalore, India",
      logo: "tila-logo.png", // Add Tila Labs logo
      bullets: [
        "Implemented a <strong>reconciliation dashboard</strong> to settle <strong>Cash-on-Delivery (COD) payments</strong> between the platform and logistic partners on a daily basis, resulting in transparent bookkeeping and an <strong>increased cash flow of more than 40%</strong>",
        "Integrated the e-commerce platform with a <strong>third-party payment gateway</strong> to initiate <strong>instant refunds</strong> for canceled/returned products; employed <strong>AWS SQS</strong> to establish robust <strong>retry mechanisms</strong> for handling potential failure scenarios",
        "Technologies: Java, MySQL, Kafka, Spring boot, AWS",
      ],
    },
    {
      company: "Flipkart Internet Pvt. Ltd.",
      title: "Software Development Engineer I",
      dateRange: "July 2020 - April 2022",
      location: "Bangalore, India",
      logo: "flipkart-logo.png", // Add Flipkart logo
      bullets: [
        "Developed <strong>REST-based microservices</strong> in a Spring Boot project to automate the tracking of the life cycle of products at Flipkart, leading to a <strong>60% reduction in manual effort</strong>; integrated APIs with dependent services",
        "Created an <strong>installable Debian package</strong> for a customized <strong>Azkaban v3 (by LinkedIn)</strong> to <strong>eliminate single point of failure</strong> cases",
        "Technologies: Java, MySQL, MongoDB, ElasticSearch, Dropwizard, Spring boot",
      ],
    },
  ],
  education: [
    {
      school: "University of Massachusetts Amherst",
      degree: "Master of Science in Computer Science",
      dateRange: "Aug 2023 - May 2025",
      location: "Massachusetts, USA",
      logo: "umass-logo.png", // Add UMass logo
      achievements: [
        "GPA: 4/4",
        "Coursework: Distributed Computing, Information Retrieval, Distributed and Operating Systems, Computer Networks, Machine Learning, Advance Natural Language Processing, Advance Algorithms, Applied Statistics",
      ],
    },
    {
      school: "Indian Institute of Technology (IIT) Dhanbad",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      dateRange: "July 2016 - May 2020",
      location: "Dhanbad, India",
      logo: "iit-dhanbad-logo.png", // Add IIT Dhanbad logo
      achievements: [
        "GPA: 9.1/10",
        "Coursework: Algorithms, Data Structures, Operating Systems, Database Management, Data Mining, Software Engineering",
      ],
    },
  ],
};
