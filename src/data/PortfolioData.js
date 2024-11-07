import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

// Define your email and subject/message
const email = "ash22714497@gmail.com";
const subject = "Subject of the email";
const body = "Hello, I need help with the following:";

// Create the mailto link with the encoded subject and body
const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
  subject
)}&body=${encodeURIComponent(body)}`;

export const handleSendMailClick = () => {
  // Open the default email client with the pre-filled email
  window.location.href = mailtoLink;
};

//WhatsApp Function
const phoneNumber = "+917633839142";
const whatsappURL = `wa.me/${phoneNumber}?text=Hello%20I%20need%20help!`;
export const handleWhatsappClick = () => {
  window.open(`//${whatsappURL}`, "_blank");
};

//Call Function
// Define the phone number to call
const telLink = `tel:${phoneNumber}`;

export const handleCallClick = () => {
  window.location.href = telLink;
};

//Technical Language Skills (Known)
export const TechnicalSkills = {
  frontend: ["React JS", "Tailwind CSS", "HTML", "Material UI"],
  backend: ["Node JS", "Mongo DB", "Firebase"],
  core: ["C++", "Java", "Python", "PHP"],
};

//Developed Projects Data
export const projects = [
  {
    key: 1,
    heading: "Car and Bike Rental",
    desc: "A car and bike rental website simplifies booking, selection, and payment.",
    tec_used: ["React JS", "Node JS"],
    project_link: "#",
  },
  {
    key: 2,
    heading: "School ERP",
    desc: "A School ERP system streamlines administration, management, communication.",
    tec_used: ["React JS", "Node JS", "Express JS", "Firebase", "Material UI"],
    project_link: "#",
  },
  {
    key: 3,
    heading: "Gift Ecommerce",
    desc: "An eCommerce platform offering curated gifts for all occasions.",
    tec_used: ["React JS", "Tailwind CSS", "Node JS", "Firebase"],
    project_link: "#",
  },
  {
    key: 4,
    heading: "Portfolio",
    desc: "A portfolio showcases skills, projects, and professional achievements.",
    tec_used: ["React JS", "Tailwind CSS"],
    project_link: "#",
  },
];

export const contactInfo = [
  {
    key: 1,
    icon: WhatsAppIcon,
    media_name: "WhatsApp",
    meda_data: phoneNumber,
    media_link: handleWhatsappClick,
  },
  {
    key: 2,
    icon: EmailIcon,
    media_name: "Email",
    meda_data: "as22714497@gmail.com",
    media_link: handleSendMailClick,
  },
  {
    key: 3,
    icon: CallIcon,
    media_name: "Phone",
    meda_data: phoneNumber,
    media_link: handleCallClick,
  },
];

//Introduction for Landing page
export const introGreeting = "Hey! my name is";
export const yourName = "Ashish Kumar";
export const yourRole = "Sofware Developer";
export const subIntroduction =
  "I build intuitive, scalable software solutions that turn ideas into seamless, user-friendly digital experiences. Let's create together!";

//About Me
export const CVDriveLink =
  "https://drive.google.com/file/d/1rQxdZYoJLVMQeZ8oHPpUDHj3wjxCCxgu/view?usp=drivesdk"; // Replace with your Google Drive file ID

export const aboutParagraph =
  "I'm a software developer with expertise in both frontend and backend technologies. I specialize in building scalable, efficient, and user-friendly applications. With a focus on clean code, performance optimization, and collaboration, I strive to deliver high-quality solutions that solve real-world problems. Let's create something impactful together!";

export const QualificationData = [
  {
    key: "1",
    degreeName: "Post Graduation",
    emoji: "📚",
    insName: "Marwari College Ranchi",
    duaration: "persuaing",
  },
  {
    key: "2",
    degreeName: "Under Graduation",
    emoji: "🏆",
    insName: "St. Xavier's College Ranchi",
    duaration: "2020 - 2023",
  },
  {
    key: "3",
    degreeName: "Intermediate (12th)",
    emoji: "💡",
    insName: "DAV Kapildev Public School Ranchi",
    duaration: "2019 - 2020",
  },
  {
    key: "4",
    degreeName: "Matriculate (10th)",
    emoji: "🌱",
    insName: "DAV Kapildev Public School Ranchi",
    duaration: "2017 - 2018",
  },
];
