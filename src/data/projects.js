import ecommerceImg from '../../e-commerce.jpg';
import budgetImg from '../../BudgetTracker.jpg';
import taskManagerImg from '../../TaskManager.jpg';

export const projects = [
  {
    id: 1,
    title: "MyStore (E-Commerce Platform)",
    description:
      "A feature-rich, responsive, and ready-to-use e-commerce application built with React and Tailwind CSS. It features a complete customer storefront and a robust administrative dashboard for product and order management.",
    image: ecommerceImg,
    tags: ["React", "HTML5", "CSS3", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/supratimsarkar1508/MyStore/tree/main"
  },
  {
    id: 2,
    title: "BudgetTracker (Personal Expense Tracker)",
    description:
      "A modern, responsive React application designed to help users track their personal finances. Record income and expenses, categorize spending, and visualize financial habits with interactive charts.",
    image: budgetImg,
    tags: ["React.js", "Tailwind CSS", "Chart.js", "LocalStorage", "Expense Tracker"],
    liveUrl: "#",
    githubUrl: "https://github.com/supratimsarkar1508/BudgetTracker/tree/main"
  },
  {
    id: 3,
    title: "TaskManager (Task Management Website)",
    description:
      "A high-performance, responsive Trello-style board built with React, Tailwind CSS, and @hello-pangea/dnd. This application provides a modular and intuitive interface for managing tasks across different workflows.",
    image: taskManagerImg,
    tags: ["HTML5", "CSS3", "JavaScript", "React.js", "GitHub"],
    liveUrl: "#",
    githubUrl: "https://github.com/supratimsarkar1508/TaskManager/tree/master"
  }
];
