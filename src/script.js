// Theme switch
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Handle button clicks
function goToStudentPage() {
    window.location.href = "student_login.html";
  }
  
  function showLogin() {
    window.location.href = "admin_login.html";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none"; 
  }