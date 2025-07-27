export const siteConfig = {
  name: "Manish Ranjan Karna",
  title: "Software Engineer",
  description: "Portfolio website of Manish Ranjan Karna - Software Engineer at NVIDIA",
  accentColor: "#1d4ed8",
  profileImage: "/profile.jpeg", // Profile photo for About section
  backgroundImage: "/image.png", // Background image for landing page
  social: {
    email: "manish99.ranjan99@gmail.com",
    linkedin: "https://linkedin.com/in/mrkarna",
    github: "https://github.com/mrkarna",
  },
  aboutMe:
    "I am a Software Engineer at NVIDIA, passionate about building scalable, high-performance systems. With experience in Go, Java, Python, and cloud platforms like AWS and GCP, I specialize in designing microservices and distributed systems. I hold a Master's degree in Computer Science from University of Massachusetts Amherst and have worked at tech giants like Amazon and NVIDIA, among others.",
  skills: ["Java", "Golang", "Python", "C", "C++", "SQL", "Spring Boot", "Go kit", "MySQL", "Kafka", "MongoDB", "AWS", "GCP", "Docker", "Kubernetes"],
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
      bullets: [
        "Building a highly available, low-latency payment platform that powers billing, subscription management, and usage-based metering for a wide range of NVIDIA services",
        "Working with Go, DynamoDB, and AWS technologies in Santa Clara, CA",
      ],
    },
    {
      company: "Amazon",
      title: "Systems Development Engineer Co-op",
      dateRange: "Sep 2024 - Dec 2024",
      location: "Boston, MA, USA",
      bullets: [
        "Designed and developed AREdgeDiags, a troubleshooting tool for Amazon Robotics that parses logs, identifies root causes with state machines, and reduces downtime and team dependency",
        "The tool enabled local IT and ARTS teams to resolve issues independently, cutting escalations by 50% and reducing delays",
        "Technologies: Java, Python, DynamoDB, AWS",
      ],
    },
    {
      company: "NVIDIA",
      title: "Cloud Platform Engineering Intern",
      dateRange: "May 2024 - Aug 2024",
      location: "Santa Clara, CA, USA",
      bullets: [
        "Designed and developed a high-performance Java library for publishing metering events, featuring retry logic, batching, and buffering capabilities, and demonstrated its scalability and reliability through load testing with 10,000 events per second",
        "Developed a Go-based microservice integrating with Metronome to manage billable metrics for Nvidia cloud services, ensuring SOX compliance through auditable tracking, and automating processes to reduce manual intervention by over 80%",
        "Technologies: Java, Go, Spring Boot, DynamoDB, AWS",
      ],
    },
    {
      company: "Zeni Inc.",
      title: "Software Engineer",
      dateRange: "Nov 2022 - Aug 2023",
      location: "Pune, India",
      bullets: [
        "Developed a reporting framework to generate accounting reports by integrating with QuickBooks (by Intuit) to fetch client's transactions, ensuring real-time updates of reports that previously lagged by up to 12 hours",
        "Optimized cron jobs for data synchronization with QuickBooks, reducing the synchronization time from 6 hours to 2 hours by minimizing database calls, search index latency and using batch processing",
        "Technologies: Python, WebApp, Google Cloud Platform",
      ],
    },
    {
      company: "Tila Labs (E-commerce)",
      title: "Software Development Engineer II",
      dateRange: "May 2022 - Nov 2022",
      location: "Bangalore, India",
      bullets: [
        "Implemented a reconciliation dashboard to settle Cash-on-Delivery (COD) payments between the platform and logistic partners on a daily basis, resulting in transparent bookkeeping and an increased cash flow of more than 40%",
        "Integrated the e-commerce platform with a third-party payment gateway to initiate instant refunds for canceled/returned products. Employed AWS SQS to establish robust retry mechanisms for handling potential failure scenarios",
        "Technologies: Java, MySQL, Kafka, Spring boot, AWS",
      ],
    },
    {
      company: "Flipkart Internet Pvt. Ltd.",
      title: "Software Development Engineer I",
      dateRange: "July 2020 - April 2022",
      location: "Bangalore, India",
      bullets: [
        "Developed REST-based microservices in a Spring Boot project to automate the tracking of the life cycle of products at Flipkart, leading to a remarkable 60% reduction in manual effort. Involved integrating APIs with dependent services",
        "Created an installable Debian package for a customized Azkaban v3 (by LinkedIn) to eliminate single point of failure cases",
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
      achievements: [
        "GPA: 4.0/4.0",
        "Coursework: Distributed Computing, Information Retrieval, Distributed and Operating Systems, Computer Networks, Machine Learning, Advance Natural Language Processing, Advance Algorithms, Applied Statistics",
      ],
    },
    {
      school: "Indian Institute of Technology (IIT) Dhanbad",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      dateRange: "July 2016 - May 2020",
      location: "Dhanbad, India",
      achievements: [
        "GPA: 9.1/10",
        "Coursework: Algorithms, Data Structures, Operating Systems, Database Management, Data Mining, Software Engineering",
      ],
    },
  ],
};
