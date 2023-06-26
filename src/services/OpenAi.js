import axios from 'axios';


const http = axios.create({
  baseURL: "https://api.openai.com/v1/chat/completions",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.VUE_APP_API_KEY}`
  }
});

// Background data for ChatGPT
const resume = `
Bennett Wilbert
bwilbert67@gmail.com | (609) 850-1019 | www.linkedin.com/in/Bennett-L-Wilbert | https://github.com/bwilbert67
Life-long learner and analytical thinker with a background in social studies education; energized by finding effective and creative solutions to problems. Seeking a workplace with engaging challenges and a fulfilling team atmosphere that prioritizes growth.
TECHNICAL SKILLS
● Spring Boot, Java, PostgreSQL, HTML, CSS, JavaScript, Vue.js, Responsive Design, IntelliJ, Git, Unit Testing (JUnit), E/R diagrams, Integration Testing, Unix
TECHNICAL EXPERIENCE
● Meal-Prep Application - Worked with a team of 5 to create a Full Stack Java meal plan application. Users can organize their account by creating recipes, adding recipes to a meal plan, and generating a grocery list based on their meal plan. Created under an Agile methodology with a product owner, daily stand-up, and engineering tickets
● Vending Machine Application - Partner programmed to design an object-oriented virtual vending machine program using Java (IntelliJ) that displays inventory/stock from a file, accepts user input for depositing money and making a purchase, gives change, and logs transactions by writing to a file.
● PostgreSQL Venmo CLI Project - Partner programmed the backend of a Venmo “clone” project using a PostgreSQL database, Java SpringBoot, and REST API principles. Allows users to send money to others, view their transaction history, and check their account balance. Secured from SQL injection and with Spring Security. Implements integration testing and exception handling to ensure proper functionality.
EDUCATION
Tech Elevator, Philadelphia, PA January 2023  April 2023 A 14-week full-stack coding bootcamp learning how to create dynamic web-based software systems using Java providing 800+ hours of development education and application.
  Rowan University, Glassboro, NJ
Masters of Science in Teaching (2021-2022), GPA: 4.0 Bachelor of Arts in History (2017-2021), GPA: 3.9
WORK EXPERIENCE
Clearview Regional School District, Clearview, NJ August 2022 - October 2022 Long-Term Substitute 
● Resolved conflicts between students while collaborating with professionals in guidance and discipline departments.
Florence Township School District, Florence, NJ September 2021 – May 2022 Student Intern
● Observed the practices of established teachers daily. Adapted this knowledge to personal methods.
● Participated in weekly meetings with mentors with methodical reflection on lessons and best practices.
● Developed materials and implemented lesson plans for 3 different classes, 5 days a week. Combined unique
ideas with researched solutions from creative and academic sources.
`
const benGPT = `Yo are BenGPT, a chatbot made to answer questions about Bennett Wilbert.
 You will answer questions that people have about Ben. Please answer in your 
 own words in no more than 3 sentences. Elaborate as necessary to sell his candidancy.`
const funFacts = `
In the long term, Ben dreams of being a machine learning engineer, attend a graduate program related to computer science or AI, and travel to as many naturally beautiflly places as possible. 
Ben's strengths are his positive outlook, tenacity, and willingness to take initiative
Ben is located in the Greater Philadelphia Region
He is a big philly sports fan and enjoys disc golf in his free time 

`


export default {
  async response(userInput) {
    const context = benGPT + resume + funFacts;
    const promptPrimer = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: context + "Please respond appropriately to the following message:  " + userInput}]
    };
    console.log(process.env.VUE_APP_API_KEY)
    try {
      const response = await http.post('', promptPrimer);
      const content = response.data.choices[0].message.content;
      return content;
    } catch (error) {
      console.error(error);
      return "Oooops!"; // or handle the error case accordingly
    }
  }
};
