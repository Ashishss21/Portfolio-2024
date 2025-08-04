import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  figma,
  carrent,
  jobit,
  tripguide,
  api,
  git,
  jira,
  c,
  postman,
  python,
  sql,
  cofiato,
  vclogo,
  project3,
  project2,
  project1,
  techbeans,
  thementor,
  email,
  linkedin,
  twitter,
  instagram
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cloud Engineer",
    icon: web,
  },
  {
    title: "DevOps Engineer",
    icon: mobile,
  },
  {
    title: "Generative AI",
    icon: backend,
  },
  {
    title: "Full Stack Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "api",
    icon: api,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "jira",
    icon: jira,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "sql",
    icon: sql,
  },
];


const experiences = [
  {
    title: "Cloud Engineer",
    company_name: "VirtueCloud",
    icon: vclogo,
    iconBg: "#ffffff",
    date: "February 2024 - Present",
    points: [
      "Worked extensively with AWS services including Lambda (with Layers), VPC, EC2, S3, ECS, ECR, RDS, SNS, SQS, Load Balancer, and Auto Scaling to build secure and scalable cloud infrastructure.",
      "Provisioned and managed AWS infrastructure using Terraform, creating reusable, modular configurations for consistent and scalable deployments. Automated infrastructure provisioning, reducing deployment time and human error.",
      "Developed and maintained CI/CD pipelines using tools such as AWS CodePipeline and GitHub Actions, enabling faster and more reliable deployments.",
      "Deployed containerized applications on ECS using Terraform and GitHub Actions to ensure reliable and repeatable deployment workflows.",
      "Created CloudFormation templates to deploy AWS Serverless Application Model (SAM) and Amazon Bedrock Agents, facilitating seamless integration and management of serverless applications and generative AI capabilities.",
      "Consulted with clients to understand their business needs, and performed Proof of Concept (POC) solutions, demonstrating the value and feasibility of AWS services tailored to specific use cases.",
      "Worked with clients to design and implement custom cloud architectures on AWS, advising on best practices for scalability, security, and cost-efficiency.",
      "Monitored system performance using AWS-native tools and implemented proactive measures to maintain high availability and operational efficiency.",
      "Performed cost analysis and implemented optimization strategies, including Lambda-based scheduling of EC2 instances, reducing monthly AWS expenditure.",
      "Implemented GitHub Actions workflows to build Docker images, push to ECR, and update ECS task definitions for streamlined deployments.",
      "Created modular and reusable Terraform configurations for ECS deployments, including Load Balancer, ECR, Task Definitions, Auto Scaling, and Secrets Manager integration.",
      "Enabled runtime environment variable population in ECS containers by securely fetching from AWS Secrets Manager.",
      "Integrated Generative AI capabilities using Amazon Bedrock to enhance application intelligence and automation.",
      "Designed and implemented proof-of-concept solutions using Amazon Bedrock for use cases such as log summarization, anomaly detection, and automated documentation.",
      "Built and managed CI/CD pipelines using Jenkins for legacy environments and hybrid integration with modern workflows.",
    ],
  },
  {
    title: "Cloud Support Engineer",
    company_name: "VirtueCloud",
    icon: vclogo,
    iconBg: "#ffffff",
    date: "July 2023 - February 2024",
    points: [
      "Troubleshoots and resolves issues related to cloud infrastructure, networking, storage, and application performance across platforms like AWS.",
      "Supports deployment and maintenance of cloud-based services by assisting in configuration, automation, and system updates.",
      "Monitors system health and security, ensuring optimal performance, availability, and compliance with security best practices.",
      "Collaborates with cross-functional teams and provides technical support to internal or external customers, often creating documentation and escalation reports.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Cofiato",
    icon: cofiato,
    iconBg: "#ffffff",
    date: "April 2021 - June 2021",
    points: [
      "Developed dynamic websites using React.js, HTML, and CSS, ensuring optimal user experiences.",
      "Utilized Google Cloud Platform (GCP) for efficient deployment and management of web applications.",
      "Contributed to React Native app development, collaborating with teams to enhance functionality and user experience.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Techbeans Solutions",
    icon: techbeans,
    iconBg: "#E6DEDD",
    date: "August 2021 - September 2021",
    points: [
      "Designed and implemented a CNN model for COVID-19 analysis utilizing Machine Learning techniques.",
      "Conducted comprehensive data preprocessing and analysis on both training and testing datasets to ensure model accuracy and reliability.",
    ],
  },
  {
    title: "Web Developement Intern",
    company_name: "TheMentor",
    icon: thementor,
    iconBg: "#383E56",
    date: "August 2021 - September 2021",
    points: [
      "Created React.js front-end apps for intuitive user interfaces.",
      "Developed Django APIs for efficient data management.",
      "Utilized AWS for reliable deployment and scalability.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];


const testimonials = [
  {
    testimonial:
      "The research paper outlines a hybrid methodology utilizing classification algorithms for heart disease detection. By integrating diverse algorithms, the approach aims to enhance accuracy and reliability in diagnosis, potentially advancing the effectiveness of heart disease detection methods.",
    name: "Hybrid Approach for heart disease detection using classification algorithms",
    designation: "CFO",
    company: "Acme Co",
    link: ""
  },
];

const projects = [
  {
    name: "GenAI InfraStack – Bedrock & SageMaker Automation",
    description:
      "Automated the provisioning and orchestration of GenAI infrastructure on AWS using Terraform, integrating Amazon Bedrock for generative AI and SageMaker for model training and deployment. Includes secure networking, IAM, monitoring, and cost optimization for scalable, production-ready GenAI workloads.",
    tags: [
      { name: "terraform", color: "blue-text-gradient" },
      { name: "aws", color: "green-text-gradient" },
      { name: "bedrock", color: "pink-text-gradient" },
      { name: "sagemaker", color: "orange-text-gradient" },
      { name: "genai", color: "green-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/", // Replace with actual repo if available
  },
  {
    name: "AutoDeployX – End-to-End Infrastructure as Code on AWS with Jenkins and Github Actions",
    description:
      "Developed a comprehensive Infrastructure as Code solution using Terraform for AWS resource provisioning and management. Implemented modular, reusable Terraform configurations for VPC, security groups, IAM roles, ECS clusters, RDS databases, and monitoring infrastructure. Built hybrid CI/CD pipelines using both Jenkins for legacy environments and GitHub Actions for modern workflows, ensuring consistent, secure, and scalable infrastructure deployment across multiple environments.",
    tags: [
      { name: "terraform", color: "blue-text-gradient" },
      { name: "aws", color: "green-text-gradient" },
      { name: "cicd", color: "pink-text-gradient" },
      { name: "ecs", color: "orange-text-gradient" },
      { name: "github actions", color: "green-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/", // Replace with actual repo if available
  },
  {
    name: "Complete GenAI Chatbot with OpenSearch and Redshift using Terraform",
    description:
      "Developed a production-grade GenAI chatbot platform on AWS, leveraging OpenSearch for semantic search and Redshift for analytics, all provisioned via Terraform. Automated infrastructure, secure data pipelines, and scalable deployment for real-time conversational AI and data insights.",
    tags: [
      { name: "terraform", color: "blue-text-gradient" },
      { name: "aws", color: "green-text-gradient" },
      { name: "opensearch", color: "pink-text-gradient" },
      { name: "redshift", color: "orange-text-gradient" },
      { name: "genai", color: "green-text-gradient" },
      { name: "chatbot", color: "blue-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/", // Replace with actual repo if available
  },
];

const socials = [
  {
    name: "email",
    icon: email,
    link: "mailto:ashish.sengar@virtuecloud.com"
  },
  {
    name: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/ashish-sengar212/"
  }
];

export { services, technologies, experiences, testimonials, projects, socials };
