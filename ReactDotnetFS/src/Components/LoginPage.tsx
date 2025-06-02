import React, { useState } from "react";
import '../components/Styling/Style.css';


function LoginPage() {
  // State to handle form inputs
  const [userName, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for UI feedback
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle email input change
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  // Handle password input change
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  // Form submit handler
  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Basic validation
    if (!userName || !password) {
      setError("Both email and password are required.");
      return;
    }

    setError(""); // Clear previous errors
    setSuccessMessage(""); // Clear previous success messages
    setLoading(true); // Show loading spinner

    try {
      // API call
      const response = await fetch("https://localhost:44395/api/Account/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }), // Sending email and password in body
      });

      if (response.ok) {
        const data = await response.json(); // Parse JSON response
        setSuccessMessage("Login successful!"); // Show success message
        console.log("API Response Data:", data);

        // You can perform further actions, like redirecting the user
      } else {
        // Handle non-200 responses
        const errorData = await response.json();
        setError(errorData.message || "An error occurred during login.");
      }
    } catch (error: any) {
      // Handle network or unexpected errors
      setError("A network error occurred: " + error.message);
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  return (
    <div>
      <h2>Login</h2>

      {/* Display error or success messages */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      {/* Login form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>userName:</label>
          <input
            value={userName}
            onChange={handleEmailChange}

          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;