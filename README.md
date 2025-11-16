🧭 Streamlit Dashboard Integration Guide
Location 1 — Hero Section (View Dashboard Button)

File: client/components/Hero.tsx

Line: 68

Change:

href="#"  →  href="YOUR_STREAMLIT_URL"

Location 2 — Dashboard Section (Open Dashboard Button)

File: client/components/Dashboard.tsx

Line: 65

Change:

href="#"  →  href="YOUR_STREAMLIT_URL"


✅ Example:
If your Streamlit dashboard URL is
https://my-trends-app.streamlit.app
then replace href="#" with:

href="https://my-trends-app.streamlit.app"


in both files above.

👥 Team Member Section Setup
File: client/components/Team.tsx
Lines: 5–23
Step 1 — Add Team Member Images

Replace your existing team array like this:

const teamMembers = [
  {
    name: "Vaibhav Sharma",
    role: "Full Stack Developer",
    initials: "VS",
    image: "https://your-image-url.jpg", // ← Add your photo URL here
  },
  // Add more team members below
];

Step 2 — Add LinkedIn and GitHub Links

At the top of Team.tsx, organize team data with placeholders for links:

const teamMembers = [
  {
    name: "Vaibhav Sharma",
    role: "Full Stack Developer",
    initials: "VS",
    image: "https://your-image-url.jpg",
    // PASTE VAIBHAV'S LINKEDIN URL HERE:
    linkedinUrl: "#",
    // PASTE VAIBHAV'S GITHUB URL HERE:
    githubUrl: "#",
  },
  // ...more members
];

Step 3 — Enable Social Icons in Cards

📍 Location: around line 95 in the same file (Team.tsx)

{/* LinkedIn Link */}
{/* Update linkedinUrl value above to make this clickable */}
<a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
  <Linkedin className="w-5 h-5" />
</a>

{/* GitHub Link */}
{/* Update githubUrl value above to make this clickable */}
<a href={member.githubUrl} target="_blank" rel="noopener noreferrer">
  <Github className="w-5 h-5" />
</a>


✅ Example:

linkedinUrl: "https://linkedin.com/in/vaibhav-sharma",
githubUrl: "https://github.com/vaibhav-sharma",


Once added, the buttons will automatically become clickable and open in new tabs 🔗
