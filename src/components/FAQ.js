import React, { Fragment } from "react";
const faqData = [
  {
    qusId: "1",
    question: "What can you help me with?",
    answer:
      "With whatever we can. Preparing cost analysis, establishing team roles, creating roadmaps. Defining business goals, key business values, target users, main features, prioritising. We can find you similar projects that are already active on the market to benchmark against. We can assist you with creating user personas, mock-ups, user stories, time frame, establishing project status and preparing project estimation. We'll be happy to outline project specification, prepare wireframes, details concerning integrations with external services, API documentation, required features list.",
  },
  {
    qusId: "2",
    question: "How do I create a product with you?",
    answer:
      "If you have an idea contact us by our online form, e-mail or phone. We'll meet and talk it over. Just be sure to prepare as much info about your idea as possible, it will smoothen the meeting and benefit further cooperation. If you don't know how to get around to it, go ahead and read our blog entry on how to write a project brief.",
  },
  {
    qusId: "3",
    question: "What do I need to know before contacting you?",
    answer:
      "Well, the most important thing to know is what do you want to accomplish. Why do I need this software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application. You don't want to spend many months developing it with us without being sure what you need. If you have no experience in app development feel free to read our blog entry on that topic. We'll also be glad to help you get started, building projects from scratch is nothing new for us.",
  },
  {
    qusId: "4",
    question: "Should I create a mobile or a web app?",
    answer:
      "Both have their benefits and flaws. Mobile apps are surely more expensive but can provide you with many more data collecting, monetisation capabilities than web applications. Progressive Web Apps are a good compromise between a mobile and web app — you can  learn more about PWA on our blog. But remember that sooner or later you may need both mobile and web app and when that moment comes we are here for you :)",
  },
  {
    qusId: "5",
    question:
      "Do I need to be tech-savvy to cooperate with you and order a software application?",
    answer:
      "You certainly do not have to be a software development expert, that's what we're here for :) We welcome your experience in that matter if you happen to have any, but are prepared to guide you through the whole process and explain everything. Focus on your needs and we'll deliver what you require.",
  },
  {
    qusId: "6",
    question: "How much time will it take for you to make my app?",
    answer:
      "To give you a precise answer we must prepare a project scope and create a budget. We shall tell you how much of that scope can be completed within the budget and we'll be able to estimate how long will it take after at least a month of work. Don't worry, if you're not happy with our work after two weeks you can retract from the project with no penalties, this is our trial period and we believe that any reliable software house should give you one. Read our blog entry to learn more about our methods.",
  },
  {
    qusId: "7",
    question: "How do you guarantee product quality?",
    answer:
      "We evaluate the result after every two weeks, we test our work (we conduct both development and acceptance tests), we present it to you, we apply your feedback so you know you get what you are paying for.",
  },
  {
    qusId: "8",
    question:
      "How can I be sure you work at my project as much as you declare?",
    answer:
      "We thoroughly monitor our developers and control how much time they spend on each task down to the exact minute. We use Harvest software and Redmine to track time spent on your project.",
  },
  {
    qusId: "9",
    question:
      " I want to be involved in the app development process, do you have a problem with that?",
    answer:
      "Not at all! We want you to be sure you'll receive the product you desire. From the planning stage to each finished version, we invite you to evaluate and improve our work. Our philosophy is to work with the client, not merely finish given tasks. We are always ready to listen and communicate.",
  },
  {
    qusId: "10",
    question:
      "Why should I choose you and not hire my own software development team?",
    answer:
      "Hiring your own software developers can be a really smart choice, however, recruitment process is time-consuming and the costs of keeping an in-house programming team are very high. You'll probably need to employ your own  software engineers sooner or later but hiring us can help you save a lot of money and time (which is basically the same in a business project). Read our blog entry on that topic to learn more.",
  },
  {
    qusId: "11",
    question: "What happens after you finish my app?",
    answer:
      "Hopefully the app is exactly what you dreamed of :) But apart from delivering a finished product, we are happy to provide you with technical support and app maintenance should you need it. After all, we know our work inside out. Of course if you want to maintain the app by yourself the source code and all technical data is at your disposal, but even in that case, feel free to contact us if you need any help.",
  },
];
const FAQ = () => {
  return (
    <Fragment>
      <div>
        <div className="p-10 bg-gray-200 text-gray-700 absolute">
          <h1 className="font-bold mb-3.5 text-2xl w-14 border-4 border-solid border-b-blue-500 hover:border-double">
            FAQ
          </h1>
          {faqData.map((ele) => (
            <div key={ele.qusId} className="relative w-full overflow-hidden">
              <input
                type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="bg-blue-500 h-12 w-full pl-5 flex items-center border-2 border-solid border-b-white border-blue-500">
                <h1 className="text-lg font-semibold text-white">
                  {ele.qusId}. {ele.question}
                </h1>
              </div>
              <div
                className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180
"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                <div className="p-4">
                  <p>A. {ele.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default FAQ;
