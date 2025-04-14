

  window.addEventListener("load", () => {
    const loading = document.getElementById("loading");
    const content = document.getElementById("main-content");
  
    // Add a 2-second delay before showing the main content
    setTimeout(() => {
      loading.style.display = "none";
      content.style.display = "block";
    }, 900); // 2000 milliseconds = 2 seconds
  });
  
  