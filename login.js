const input = document.getElementById("licenseInput");
const button = document.getElementById("loginButton");
const feedback = document.getElementById("feedback");

// Function to generate a random 6-character string
function randomFileName() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let name = '';
    for (let i = 0; i < 6; i++) {
        name += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return name;
}

button.addEventListener("click", async () => {
    const licenseKey = input.value.trim();
    if (!licenseKey) {
        feedback.textContent = "Please enter a license key.";
        return;
    }

    const url = `https://api.licensegate.io/license/a20d5/${licenseKey}/verify`;

    try {
        const { valid } = await fetch(url).then(res => res.json());

        if (valid) {
            // License is valid → trigger file download with random 6-char filename
            const fileUrl = "media/skibidi.png"; // Make sure this file exists
            const randomName = randomFileName() + ".png"; // 6-char random name
            const a = document.createElement("a");
            alert("License is valid!");
            a.href = fileUrl;
            a.download = randomName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.location.reload();
        } else {
            alert("License is invalid!");
            window.location.reload();
        }
    } catch (err) {
        feedback.textContent = "Error verifying license.";
        console.error(err);
    }
});
