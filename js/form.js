// SOTRUST inquiry form handler — powered by Web3Forms (no backend required)
// 1) Sign up free at https://web3forms.com with your email (liuke@sotrust.net)
// 2) Copy the "Access Key" and paste it below
// 3) Confirm your email on first submission, then forms go straight to your inbox
const WEB3FORMS_ACCESS_KEY = "a77fdae8-444b-4d11-b174-0c479cc4818c";

document.querySelectorAll("form[data-sotrust-form]").forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('input[type="submit"], button[type="submit"]');
    const original = submitBtn ? submitBtn.value : "";
    if (submitBtn) {
      submitBtn.value = "Sending…";
      submitBtn.disabled = true;
    }

    // Build JSON body from form fields
    const data = {};
    new FormData(form).forEach((value, key) => { data[key] = value; });
    data.access_key = WEB3FORMS_ACCESS_KEY;
    data.subject = "New inquiry from sotrust.net";
    data.from_name = "SOTRUST Website";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      // Show inline result message
      const msg = form.querySelector(".form-status") || document.createElement("div");
      msg.className = "form-status";
      if (json.success) {
        msg.textContent = "Thank you! Your inquiry has been sent. We'll reply within 1 business day.";
        msg.style.color = "#3ddc97";
        form.reset();
      } else {
        // Show the actual error from Web3Forms to help diagnose
        msg.textContent = "Submit failed: " + (json.message || "unknown error") + " (If this persists, email liuke@sotrust.net)";
        msg.style.color = "#ff6b6b";
      }
      if (!form.querySelector(".form-status")) {
        form.appendChild(msg);
      }
    } catch (err) {
      const msg = form.querySelector(".form-status") || document.createElement("div");
      msg.className = "form-status";
      msg.textContent = "Network error. Please email us directly at liuke@sotrust.net.";
      msg.style.color = "#ff6b6b";
      if (!form.querySelector(".form-status")) form.appendChild(msg);
    }

    if (submitBtn) {
      submitBtn.value = original;
      submitBtn.disabled = false;
    }
  });
});
