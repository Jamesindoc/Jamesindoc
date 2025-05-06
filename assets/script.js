document.getElementById("profileBtn").addEventListener("click", function () {
    document.getElementById("description").textContent =
      "I’m a dedicated and detail-oriented individual with a strong foundation in web development and IT. I have hands-on experience in front-end design, responsive layouts, and modern web technologies. I'm passionate about learning, building real-world projects, and growing as a developer.";
    document.getElementById("nameTitle").style.display = "none";
    document.getElementById("mainImg").src = "assets/profile.jpg";
    document.getElementById("profileContainer").style.display = "block";
  });
  
  document.getElementById("educationLink").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("description").textContent =
      "I am currently pursuing a degree in Computer Engineering at CITE Technical Institute. My education has equipped me with a solid foundation in both hardware and software concepts, as well as hands-on experience in systems development, networking, and technical problem-solving.";
    document.getElementById("nameTitle").style.display = "none";
    document.getElementById("namesubtitle").style.display = "none";
    document.getElementById("profileContainer").style.display = "none";
    document.getElementById("mainImg").src = "assets/cite-1.jpg";
  });
  