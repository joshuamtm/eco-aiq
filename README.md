# ECO-AIQ - Equivalent Carbon Output of AI Queries

🌍 A web application that helps users understand the environmental impact of AI by comparing AI query carbon footprints to everyday activities.

## Live Demo
Deploy this to Netlify: https://github.com/joshuamtm/eco-aiq

## Features

- **50+ Activities**: Compare AI queries to transportation, food, home activities, technology, and shopping
- **Custom Input**: Type your own activities like "ride e-scooter 10 miles"
- **Bidirectional Conversion**: Convert activities to AI queries or vice versa
- **Latest 2025 Data**: Based on Sam Altman's disclosed 0.3 Wh per ChatGPT query
- **Detailed Methodology**: Comprehensive explanation of calculations and sources

## Quick Deploy to Netlify

### Option 1: Deploy with Netlify Button
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/joshuamtm/eco-aiq)

### Option 2: Manual Deploy
1. Fork or clone this repository
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select the `eco-aiq` repository
5. Deploy settings are already configured in `netlify.toml`
6. Click "Deploy"

### Option 3: Drag & Drop
1. Download this repository
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the project folder onto the page
4. Your site will be live instantly!

## Local Development

```bash
# Clone the repository
git clone https://github.com/joshuamtm/eco-aiq.git
cd eco-aiq

# Open in browser
open index.html
# or use a local server
python3 -m http.server 8000
```

## Key Statistics (2025)

- **1 ChatGPT query** = 4.32g CO2e
- **1 hamburger** = 1,335 AI queries
- **1 mile driving** = 92 AI queries
- **1 hour flying** = 20,833 AI queries

## Technology

Pure HTML, CSS, and JavaScript - no build process required!

## Contributing

Feel free to submit issues or pull requests to improve the calculations or add more activities.

## License

MIT

---

Built with 💚 for environmental awareness in the AI age