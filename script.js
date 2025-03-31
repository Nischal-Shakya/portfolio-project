const dummyTestimonials = [
    { user: "Emma L.", description: "Working with Alex on our mobile app project was a fantastic experience. They were able to take our ideas and turn them into a polished, user-friendly app that works seamlessly on both iOS and Android. The app has received great feedback from users, and I couldn't be happier with the results.", date: "Web, Jan 1, 2025" },
    { user: "Michael S.", description: "Alex is an exceptional mobile developer! They helped us build a cross-platform app using React Native, and the process was smooth from start to finish. The app's performance is top-notch, and Alex's attention to detail is evident in every aspect. Highly recommend working with them!", date: "Sat, Feb 1, 2025" },
    { user: " Sophia W.", description: "I had the pleasure of collaborating with Alex on a mobile app for my startup. Their knowledge of mobile technologies like Flutter and Swift made it easy to deliver the app on time, and the user interface they crafted is sleek and intuitive. Alex truly exceeded our expectations.", date: "Sat, March 1, 2025" }
  ];
  

const dummyProjects = [
    { title: "Web Development Project", description: "A web development project using HTML, CSS, and JavaScript.", date: "2025-01-15"},
    { title: "Mobile App Development", description: "A mobile app developed using React Native, Flutter, and Swift.", date: "2025-02-10"},
    { title: "E-Commerce Website", description: "An e-commerce website built with Shopify.", date: "2025-03-05"},
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    loadProjects(dummyProjects);
    loadTestimonials(dummyTestimonials);
    updateGreeting();
  });
  
  function loadProjects(projects) {
    const projectsList = document.getElementById("projects-list");
    projectsList.innerHTML = "";
    projects.forEach(project => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project");
      projectElement.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><em>${project.date}</em></p>
      `;
      projectsList.appendChild(projectElement);
    });
  }

  function loadTestimonials(testimonials) {
    const testimonialsList = document.getElementById("testimonials-list");
    testimonialsList.innerHTML = "";
    testimonials.forEach(testimonial => {
      const testimonialElement = document.createElement("div");
      testimonialElement.classList.add("testimonial");
      testimonialElement.innerHTML = `
        <h3>${testimonial.user}</h3>
        <p>${testimonial.description}</p>
        <p><em>${testimonial.date}</em></p>
      `;
      testimonialsList.appendChild(testimonialElement);
    });
  }

  function filterProjects(category) {
    let filteredProjects = dummyProjects;
    if (category !== 'all') {
      filteredProjects = dummyProjects.filter(project => {
        return project.title.toLowerCase().includes(category.toLowerCase()) ||
               project.description.toLowerCase().includes(category.toLowerCase());
      });
    }
    loadProjects(filteredProjects);
  }
  
  function addCategory() {
    const categoryInput = document.getElementById("category-input").value.trim();
    console.log(categoryInput)
    if (categoryInput) {
      const newCategoryButton = document.createElement("button");
      newCategoryButton.classList.add("category-btn");
      newCategoryButton.innerHTML = categoryInput;
      newCategoryButton.onclick = () => filterProjects(categoryInput);
      document.getElementById("category-buttons").appendChild(newCategoryButton);
      document.getElementById("category-input").value = '';
    }
  }
  
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.classList.toggle("dark-mode"));
  
    const header = document.querySelector("header");
    header.classList.toggle("dark-mode");
  
    const footer = document.querySelector("footer");
    footer.classList.toggle("dark-mode");
  }
  
  function addProject(event) {
    event.preventDefault();
    
    const title = document.getElementById("project-title").value;
    const description = document.getElementById("project-description").value;
    const date = document.getElementById("project-date").value;

    if (title.length < 3) {
      alert("Title must be at least 3 characters long.");
      return;
    }
  
    if (description.length < 10) {
      alert("Testimonial description must be at least 10 characters long.");
      return;
    }
    
    const newProject = { title, description, date};
  
    dummyProjects.push(newProject);
    loadProjects(dummyProjects);
    document.getElementById("project-form").style.display = 'none';
  }
  
  function addTestimonial(event) {
    event.preventDefault();
    
    const user = document.getElementById("testimonial-user").value;
    const description = document.getElementById("testimonial-description").value;
    const date = new Date().toLocaleDateString('en-US', {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
  
    if (user.length < 3) {
      alert("Name must be at least 3 characters long.");
      return;
    }
  
    if (description.length < 10) {
      alert("Testimonial description must be at least 10 characters long.");
      return;
    }

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(user)) {
      alert("Please enter a valid name.");
      return;
    }
    
    const newTestimonial = { user, description, date };
    
    dummyTestimonials.push(newTestimonial);
    loadTestimonials(dummyTestimonials);
    document.getElementById("testimonial-form").style.display = 'none';
  }
  
  function toggleProjectForm() {
    const projectForm = document.getElementById("project-form");
    projectForm.style.display = projectForm.style.display === "none" ? "block" : "none";
  }
  
  function toggleCategoryForm() {
    const categoryForm = document.getElementById("category-form");
    categoryForm.style.display = categoryForm.style.display === "none" ? "block" : "none";
  }
  
  function toggleTestimonialForm() {
    const testimonialForm = document.getElementById("testimonial-form");
    testimonialForm.style.display = testimonialForm.style.display === "none" ? "block" : "none";
  }
  
  function updateGreeting() {
    const greetingMessage = document.getElementById("greeting-message");
    const hours = new Date().getHours();
  
    if (hours < 12) {
      greetingMessage.textContent = "Good Morning!";
    } else if (hours < 18) {
      greetingMessage.textContent = "Good Afternoon!";
    } else {
      greetingMessage.textContent = "Good Evening!";
    }
  }
  
  const scrollToTopBtn = document.getElementById("scroll-to-top-btn");
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });
  
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  