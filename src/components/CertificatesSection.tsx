import { Award, ArrowRight } from "lucide-react";

interface Certificate {
  title: string;
  organization: string;
  description: string;
  link?: string;
}

const certificates: Certificate[] = [
  // --- Randoms ---
  {
    title: "Hashgraph Developer",
    organization: "Hedera",
    description: "Building decentralized applications on Hedera Hashgraph network.",
    link: "/certificates/HashGraph Dev Certificate.pdf"
  },
  {
    title: "NASSCOM Certificate",
    organization: "NASSCOM",
    description: "Professional certification from NASSCOM.",
    link: "/certificates/NASSCOM.pdf"
  },
  {
    title: "Python Training",
    organization: "Spoken Tutorial",
    description: "Comprehensive Python programming training.",
    link: "/certificates/Python 3.4.3 Training ATHARVA-KAKDE-Participant-Certificate (1).pdf"
  },
  {
    title: "Java Training",
    organization: "Spoken Tutorial",
    description: "Core Java programming concepts.",
    link: "/certificates/JAVA ATHARVA-KAKDE-Participant-Certificate.pdf"
  },
  {
    title: "HTML Training",
    organization: "Spoken Tutorial",
    description: "Web development fundamentals with HTML.",
    link: "/certificates/HTML ATHARVA-KAKDE-Participant-Certificate (3).pdf"
  },
  {
    title: "JavaScript Training",
    organization: "Spoken Tutorial",
    description: "Client-side scripting with JavaScript.",
    link: "/certificates/JAVA SCRIPT ATHARVA-KAKDE-Participant-Certificate.pdf"
  },
  {
    title: "PHP & MySQL Training",
    organization: "Spoken Tutorial",
    description: "Backend development with PHP and database management.",
    link: "/certificates/PHP MY SQL ATHARVA-KAKDE-Participant-Certificate.pdf"
  },
  {
    title: "Introduction to Computers",
    organization: "Spoken Tutorial",
    description: "Fundamental computer operations and concepts.",
    link: "/certificates/Introduction to Computers Training ATHARVA-KAKDE-Participant-Certificate.pdf"
  },

  // --- Infosys ---
  {
    title: "Agile Scrum in Practice",
    organization: "Infosys",
    description: "Practical application of Agile and Scrum methodologies.",
    link: "/certificates/Infosys Agile Scrum in Practice.pdf"
  },
  {
    title: "Artificial Intelligence Primer",
    organization: "Infosys",
    description: "Foundational concepts of Artificial Intelligence.",
    link: "/certificates/Infosys Artificial Intelligence Primer Certification.pdf"
  },
  {
    title: "Computer Vision 101",
    organization: "Infosys",
    description: "Introduction to image processing and computer vision techniques.",
    link: "/certificates/Infosys Computer Vision 101.pdf"
  },
  {
    title: "Deep Learning for Developers",
    organization: "Infosys",
    description: "Building and deploying deep learning models.",
    link: "/certificates/Infosys Deep Learning for Developers.pdf"
  },
  {
    title: "Email Writing Skills",
    organization: "Infosys",
    description: "Professional business communication and email etiquette.",
    link: "/certificates/Infosys Email Writing Skills.pdf"
  },
  {
    title: "Generative Models for Developers",
    organization: "Infosys",
    description: "Understanding and implementing generative AI models.",
    link: "/certificates/Infosys Generative models for developers.pdf"
  },
  {
    title: "High Impact Presentations",
    organization: "Infosys",
    description: "Delivering effective and engaging professional presentations.",
    link: "/certificates/Infosys High Impact Presentations.pdf"
  },
  {
    title: "Introduction to Artificial Intelligence",
    organization: "Infosys",
    description: "Core concepts and applications of AI.",
    link: "/certificates/Infosys Introduction to Artificial Intelligence.pdf"
  },
  {
    title: "Introduction to Data Science",
    organization: "Infosys",
    description: "Fundamentals of data analysis and scientific methods.",
    link: "/certificates/Infosys Introduction to Data Science.pdf"
  },
  {
    title: "Introduction to Deep Learning",
    organization: "Infosys",
    description: "Basics of neural networks and deep learning architectures.",
    link: "/certificates/Infosys Introduction to Deep Learning.pdf"
  },
  {
    title: "Introduction to NLP",
    organization: "Infosys",
    description: "Natural Language Processing fundamentals.",
    link: "/certificates/Infosys Introduction to Natural Language Processing.pdf"
  },
  {
    title: "Introduction to OpenAI GPT Models",
    organization: "Infosys",
    description: "Working with GPT models and APIs.",
    link: "/certificates/Infosys Introduction to OpenAI GPT Models.pdf"
  },
  {
    title: "Introduction to RPA",
    organization: "Infosys",
    description: "Basics of Robotic Process Automation.",
    link: "/certificates/Infosys Introduction to Robotic Process Automation.pdf"
  },
  {
    title: "Java Foundation Certification",
    organization: "Infosys",
    description: "Comprehensive Java programming certification.",
    link: "/certificates/Infosys Java Foundation Certification.pdf"
  },
  {
    title: "GPT-3 for Developers",
    organization: "Infosys",
    description: "Leveraging GPT-3 for application development.",
    link: "/certificates/Infosys OpenAI Generative Pre-trained Transformer 3 (GPT-3) for developers.pdf"
  },
  {
    title: "Principles of Generative AI",
    organization: "Infosys",
    description: "Core principles of GenAI technologies.",
    link: "/certificates/Infosys Principles of Generative AI Certification.pdf"
  },
  {
    title: "Programming using Java",
    organization: "Infosys",
    description: "Advanced Java programming skills.",
    link: "/certificates/Infosys Programming using Java.pdf"
  },

  // --- Simplilearn ---
  {
    title: "Generative AI for Beginners",
    organization: "Simplilearn",
    description: "Introductory course on Generative AI landscapes.",
    link: "/certificates/Generative AI for Beginners.pdf"
  },
  {
    title: "Power BI for Beginners",
    organization: "Simplilearn",
    description: "Business intelligence and data visualization with Power BI.",
    link: "/certificates/Power BI for Beginners.pdf"
  },
  {
    title: "ReactJS for Beginners",
    organization: "Simplilearn",
    description: "Building user interfaces with ReactJS.",
    link: "/certificates/ReactJS for Beginners.pdf"
  },

  // --- Forage (Job Simulations) ---
  {
    title: "BCGX Data Science",
    organization: "BCGX",
    description: "Strategic data science consulting simulation.",
    link: "/certificates/BCGX Data Science Job Simulation.pdf"
  },
  {
    title: "Cyber Job Simulation",
    organization: "Deloitte",
    description: "Threat assessment and security audit simulation.",
    link: "/certificates/Cyber Job Simulation.pdf"
  },
  {
    title: "Cybersecurity Analyst",
    organization: "Forage",
    description: "Cybersecurity analysis and defense strategies.",
    link: "/certificates/Cybersecurity Analyst Job Simulation.pdf"
  },
  {
    title: "Cybersecurity Job Simulation",
    organization: "JP Morgan",
    description: "Security vulnerability analysis and protection.",
    link: "/certificates/Cybersecurity Job Simulation.pdf"
  },
  {
    title: "Data Analytics Job Simulation",
    organization: "Tata",
    description: "Data analysis and visualization for business insights.",
    link: "/certificates/Data Analytics Job Simulation.pdf"
  },
  {
    title: "Data Science Job Simulation",
    organization: "British Airways",
    description: "Predictive modeling and customer data analysis.",
    link: "/certificates/Data Science Job Simulation.pdf"
  },
  {
    title: "GenAI Powered Data Analytics",
    organization: "Forage",
    description: "Applying GenAI alongside data analytics.",
    link: "/certificates/GenAI Powered Data Analytics Job Simulation.pdf"
  },
  {
    title: "Marketing & Communication",
    organization: "Forage",
    description: "Digital marketing and communication strategies.",
    link: "/certificates/Marketing & Communication Job Simulation.pdf"
  },
  {
    title: "UX Design Introduction",
    organization: "Forage",
    description: "Fundamentals of User Experience Design.",
    link: "/certificates/UX Design Introduction Job Simulation.pdf"
  },
  {
    title: "Introduction to Cybersecurity",
    organization: "Forage",
    description: "Basics of cybersecurity job simulation.",
    link: "/certificates/Introduction to Cybersecurity Job Simulation.pdf"
  },
  {
    title: "Data Visualisation",
    organization: "Tata",
    description: "Empowering business with data visualization.",
    link: "/certificates/Tata Data Visualisation.pdf"
  }
];

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-lavender/20 rounded-full blur-3xl translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Certificates</h2>
          <p className="section-subtitle">
            Continuous learning and professional development achievements
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-card-hover p-6 group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-3 rounded-xl bg-accent group-hover:bg-primary/10 transition-colors shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium gradient-text mb-2">
                    {cert.organization}
                  </p>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {cert.description}
                  </p>

                  {/* Link */}
                  <a
                    href={cert.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    View Certificate
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
