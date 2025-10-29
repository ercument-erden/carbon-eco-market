# CarbonEcoMarket Website

Official website for the world's first hybrid carbon exchange.

## Structure
- Main site: carbonecomarket.com
- Investor site: invest.carbonecomarket.com

## Languages
- Turkish (default): `/` and `/invest/`
- English: `/en` and `/invest/en`

## Deployment
- Platform: Netlify
- Auto-deploy: On push to `main` branch
- Domains:
  - carbonecomarket.com (primary)
  - invest.carbonecomarket.com (subdomain)

## Team Photos
Add photos to `/assets/team/`:
- ercument.jpg
- fatih.jpg
- selim.jpg
- huseyin.jpg
- ilgin.jpg

Then push to trigger auto-deploy.

## Local Development
Simply open `index.html` in browser (no build step).

## Tech Stack
- Pure HTML/CSS/JS (no frameworks)
- Responsive design
- SEO optimized
- Fast loading (<2s)

## File Structure
```
/
├── _redirects (Netlify subdomain routing)
├── netlify.toml (Build config)
├── README.md
├── .gitignore
├── assets/
│   ├── team/
│   │   └── README.md
├── index.html (TR main site)
├── en/
│   └── index.html (EN main site)
└── invest/
    ├── index.html (TR investor)
    ├── styles.css
    └── script.js
```

## Subdomain Routing

The site uses Netlify's subdomain routing to serve the investor site at `invest.carbonecomarket.com`:

- `carbonecomarket.com` → `/index.html` (Main site)
- `invest.carbonecomarket.com` → `/invest/index.html` (Investor site)
- All routing is handled via `_redirects` and `netlify.toml`

## Contributing

1. Make changes to HTML/CSS/JS files
2. Test locally by opening files in browser
3. Commit and push to trigger auto-deploy
4. Changes go live within 1-2 minutes

## Support

For issues or questions, contact the development team.
