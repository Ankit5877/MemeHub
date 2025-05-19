document.getElementById("login-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login successful!");
      localStorage.setItem("token", data.token);
      window.location.href = "/index.html"; // Redirect to the homepage
    } else {
      alert(data.message || "Login failed.");
    }
  } catch (err) {
    alert("Error connecting to server.");
  }
});

document.getElementById("register-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Registration successful!");
      window.location.href = "/login.html";
    } else {
      alert(data.message || "Registration failed.");
    }
  } catch (err) {
    alert("Error connecting to server.");
  }
});

