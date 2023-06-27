import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = {
    data: [
        {
          id: 1,
          title: "Software Developer Intern",
          company: "Tata Consultancy Services Pvt Ltd",
          category: "IT Services",
          logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687722945/logo_2_g2pqzu.png",
          duration: 3, //in months
          experience: "Intermediate",
          stipend: [20000, 30000],
          timings: {
            parttime: false,
            fulltime: true,
          },
          type: {
            workfromhome: true,
            inoffice: false
          },
          location: "Noida",
          posted: new Date(2023, 6, 20),
          endDate: new Date(2023, 6, 29),
          openPositions: 10,
          applicants: 327,
          techStacks: ["Javascript", "ReactJS", "ExpressJS", "MongoDB", "Clean Architecture"],
          aboutUs: `We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.`,
          requirements: [
          "Someone who can work in a fast-paced startup environment",
          "Good understanding of ReactJs, HTML, SCSS (styling is important), Javascript",
          "Good communication is a must-have for this role",
          "Hardworking & Curious to learn/implement new things is what I prefer personally" ],
          responsibilities:["Write clean, manageable code and follow standard coding practices",
          "Write quality code with a clean UI/UX view",
          "Work with the tech & non-tech teams to create a meaningful product for users",
          "Capable to build a feature, testing, and deploying a feature on the production server"],
    
        },
        {
          id: 2,
          title: "Motion Graphics Designer",
          company: "Xapo Visuals",
          category: "Graphics",
          logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687728682/image_4_iios8f.png",
          duration: 1, //in months
          experience: "Intermediate",
          stipend: [0,0],
          timings: {
            parttime: false,
            fulltime: true,
          },
          type: {
            workfromhome: false,
            inoffice: true
          },
          location: "Delhi",
          posted: new Date(2023, 6, 20),
          endDate: new Date(2023, 7, 1),
          openPositions: 10,
          applicants: 123,
          techStacks: ["Photoshop", "After Effects", "Blender", "Canva", "Z-Brush"],
          aboutUs: `We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.`,
          requirements: [
          "Someone who can work in a fast-paced startup environment",
          "Good understanding of ReactJs, HTML, SCSS (styling is important), Javascript",
          "Good communication is a must-have for this role",
          "Hardworking & Curious to learn/implement new things is what I prefer personally" ],
          responsibilities:["Write clean, manageable code and follow standard coding practices",
          "Write quality code with a clean UI/UX view",
          "Work with the tech & non-tech teams to create a meaningful product for users",
          "Capable to build a feature, testing, and deploying a feature on the production server"],
        },
        {
          id: 3,
          title: "Frontend Developer",
          company: "XYZ Corporation",
          category: "IT Services",
          logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687722945/logo_2_g2pqzu.png",
          duration: 6,
          experience: "Entry Level",
          stipend: [15000, 25000],
          timings: {
            parttime: false,
            fulltime: true,
          },
          type: {
            workfromhome: false,
            inoffice: true
          },
          location: "Bangalore",
          posted: new Date(2023, 5, 12),
          endDate: new Date(2023, 6, 30),
          openPositions: 5,
          applicants: 142,
          techStacks: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
          aboutUs: "We are a leading technology company specializing in innovative software solutions. Our team is passionate about creating exceptional user experiences and delivering high-quality products to our clients.",
          requirements: [
            "Proficient in HTML, CSS, and JavaScript",
            "Experience with React and Bootstrap is a plus",
            "Strong problem-solving skills",
            "Excellent communication and teamwork abilities"
          ],
          responsibilities: [
            "Develop and maintain responsive web applications",
            "Collaborate with the design team to implement UI/UX wireframes",
            "Optimize application performance and ensure scalability",
            "Debug and fix issues reported by users"
          ]
        },
        {
          id: 4,
          title: "Full Stack Developer",
          company: "ABC Tech Solutions",
          category: "IT Services",
          logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687722945/logo_3_abcde.png",
          duration: 12,
          experience: "Senior",
          stipend: [40000, 60000],
          timings: {
            parttime: true,
            fulltime: false,
          },
          type: {
            workfromhome: true,
            inoffice: false
          },
          location: "Mumbai",
          posted: new Date(2023, 5, 25),
          endDate: new Date(2023, 6, 31),
          openPositions: 3,
          applicants: 78,
          techStacks: ["Node.js", "React", "MongoDB", "GraphQL"],
          aboutUs: "ABC Tech Solutions is a leading technology company specializing in custom software development. We work with clients from various industries to create innovative solutions that drive business growth.",
          requirements: [
            "Strong proficiency in Node.js and React",
            "Experience with MongoDB and GraphQL",
            "Knowledge of software development best practices",
            "Excellent problem-solving and analytical skills"
          ],
          responsibilities: [
            "Develop and maintain scalable web applications using Node.js and React",
            "Design and implement database schemas using MongoDB",
            "Integrate external APIs and third-party services",
            "Collaborate with cross-functional teams to deliver high-quality software"
          ]
        },
        {
          id: 5,
          title: "Data Scientist",
          company: "Data Insights Ltd",
          category: "Analytics",
          logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687722945/logo_4_datainsights.png",
          duration: 6,
          experience: "Intermediate",
          stipend: [35000, 45000],
          timings: {
            parttime: true,
            fulltime: false,
          },
          type: {
            workfromhome: true,
            inoffice: false
          },
          location: "Delhi",
          posted: new Date(2023, 6, 1),
          endDate: new Date(2023, 6, 30),
          openPositions: 2,
          applicants: 45,
          techStacks: ["Python", "R", "Machine Learning", "SQL"],
          aboutUs: "Data Insights Ltd is a data-driven company that specializes in extracting valuable insights from complex datasets. We help businesses make informed decisions and optimize their operations through advanced analytics.",
          requirements: [
            "Proficiency in Python and R programming languages",
            "Strong understanding of statistical analysis and machine learning algorithms",
            "Experience with SQL and database management",
            "Excellent problem-solving and data visualization skills"
          ],
          responsibilities: [
            "Collect, clean, and analyze large datasets",
            "Develop predictive models using machine learning techniques",
            "Create data visualizations and reports for stakeholders",
            "Collaborate with cross-functional teams to drive data-driven decision-making"
          ]
        },
        {
          id: 6,
          title: "UI/UX Designer",
          company: "Creative Solutions Inc.",
          category: "Design",
          logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687722945/logo_5_creativesolutions.png",
          duration: 6,
          experience: "Intermediate",
          stipend: [5000, 6000],
          timings: {
            parttime: true,
            fulltime: false,
          },
          type: {
            workfromhome: true,
            inoffice: false
          },
          location: "San Francisco",
          posted: new Date(2023, 6, 5),
          endDate: new Date(2023, 6, 30),
          openPositions: 4,
          applicants: 112,
          techStacks: ["Adobe XD", "Sketch", "InVision", "User Research"],
          aboutUs: "Creative Solutions Inc. is a design agency focused on delivering exceptional user experiences. We work closely with our clients to create visually stunning and intuitive designs that captivate users and drive business success.",
          requirements: [
            "Proficient in design tools such as Adobe XD and Sketch",
            "Experience with prototyping tools like InVision",
            "Understanding of user research methodologies",
            "Excellent communication and collaboration skills"
          ],
          responsibilities: [
            "Create wireframes, prototypes, and visual designs for web and mobile applications",
            "Conduct user research and gather feedback to inform design decisions",
            "Collaborate with cross-functional teams to ensure design consistency",
            "Stay updated with the latest design trends and best practices"
          ]
        },
        {
          id: 7,
          title: "Backend Engineer",
          company: "Innovative Technologies Ltd",
          category: "IT Services",
          logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687722945/logo_6_innovativetech.png",
          duration: 9,
          experience: "Senior",
          stipend: [50000, 70000],
          timings: {
            parttime: false,
            fulltime: true,
          },
          type: {
            workfromhome: true,
            inoffice: false
          },
          location: "Kolkata",
          posted: new Date(2023, 6, 10),
          endDate: new Date(2023, 6, 31),
          openPositions: 2,
          applicants: 67,
          techStacks: ["Java", "Spring Boot", "MySQL", "RESTful APIs"],
          aboutUs: "Innovative Technologies Ltd is a cutting-edge technology company that specializes in building scalable and secure software solutions. Our team of experts leverages the latest technologies to deliver innovative products for our clients.",
          requirements: [
            "Strong proficiency in Java and Spring Boot framework",
            "Experience with database management using MySQL",
            "Knowledge of building RESTful APIs",
            "Ability to optimize and improve backend performance"
          ],
          responsibilities: [
            "Design and develop scalable backend systems using Java and Spring Boot",
            "Implement data models and database schemas",
            "Build and maintain RESTful APIs for seamless integration",
            "Perform code reviews and ensure code quality"
          ]
        },
        {
          id: 8,
          title: "Product Manager",
          company: "Global Tech Solutions",
          category: "Product Management",
          logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687722945/logo_7_globaltech.png",
          duration: 12,
          experience: "Senior",
          stipend: [10000, 20000],
          timings: {
            parttime: true,
            fulltime: false,
          },
          type: {
            workfromhome: true,
            inoffice: false
          },
          location: "Kolkata",
          posted: new Date(2023, 6, 15),
          endDate: new Date(2023, 6, 31),
          openPositions: 1,
          applicants: 23,
          techStacks: ["Product Strategy", "Market Research", "Agile Methodology"],
          aboutUs: "Global Tech Solutions is a global leader in technology solutions, providing innovative products and services to clients worldwide. We are dedicated to driving digital transformation and delivering exceptional value to our customers.",
          requirements: [
            "Proven experience as a Product Manager",
            "Strong analytical and problem-solving skills",
            "Ability to develop product strategies and roadmaps",
            "Excellent communication and stakeholder management skills"
          ],
          responsibilities: [
            "Define product vision, strategy, and roadmap",
            "Conduct market research and competitor analysis",
            "Collaborate with cross-functional teams to prioritize features and deliver on product goals",
            "Gather and analyze user feedback to drive product improvements"
          ]
        },
        {
          id: 9,
          title: "Data Engineer",
          company: "DataTech Solutions",
          category: "Data Engineering",
          logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687722945/logo_8_datatech.png",
          duration: 9,
          experience: "Intermediate",
          stipend: [25000, 30000],
          timings: {
            parttime: false,
            fulltime: true,
          },
          type: {
            workfromhome: true,
            inoffice: false
          },
          location: "Mumbai",
          posted: new Date(2023, 6, 18),
          endDate: new Date(2023, 6, 31),
          openPositions: 3,
          applicants: 56,
          techStacks: ["Python", "Apache Spark", "SQL", "Big Data"],
          aboutUs: "DataTech Solutions specializes in data-driven solutions and advanced analytics. We help businesses harness the power of data to drive insights, make informed decisions, and achieve their strategic goals.",
          requirements: [
            "Proficiency in Python programming",
            "Experience with Apache Spark and SQL",
            "Knowledge of big data technologies and frameworks",
            "Strong problem-solving and data manipulation skills"
          ],
          responsibilities: [
            "Design, develop, and maintain data pipelines and ETL processes",
            "Implement data quality and data governance best practices",
            "Collaborate with data scientists and analysts to enable data-driven decision-making",
            "Optimize and scale data infrastructure to handle large volumes of data"
          ]
        },
      ]
  }
 
  return NextResponse.json( res )
}