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
    heading: "Heading1",
    desc: "Project description based on plot",
    tec_used: ["Java", "MySQL", "AWS", "etc."],
    project_link: "www.myportfolioo.com",
  },
  {
    key: 2,
    heading: "Heading2",
    desc: "Project description based on plot",
    tec_used: ["React JS", "Node JS", "Express JS", "Mongo DB"],
    project_link: "www.khata.com",
  },
  {
    key: 3,
    heading: "Heading3",
    desc: "Project description based on plot",
    tec_used: ["Python", "Mongo DB"],
    project_link: "www.driveaway.com",
  },
  {
    key: 4,
    heading: "Heading4",
    desc: "Project description based on plot",
    tec_used: ["Python", "Mongo DB"],
    project_link: "www.driveaway.com",
  },
];

export const contactInfo = [
  {
    key: 1,
    icon: "WhatsAppIcon",
    media_name: "WhatsApp",
    meda_data: phoneNumber,
    media_link: handleWhatsappClick,
  },
  {
    key: 2,
    media_name: "Email",
    meda_data: "as22714497@gmail.com",
    media_link: handleSendMailClick,
  },
  {
    key: 3,
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
