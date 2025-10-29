# Netlify Deployment Guide - CarbonEcoMarket

## Quick Deploy Steps

### 1. Connect to Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select repository: `ercument-erden/carbon-eco-market`
5. Configure build settings:
   - **Branch to deploy:** `claude/netlify-subdomain-routing-setup-011CUbCj4yeNTuUADv2vTNtQ` (or merge to main first)
   - **Build command:** (leave empty)
   - **Publish directory:** `.` (just a dot)
6. Click "Deploy site"

### 2. Configure Custom Domains

After the initial deploy completes:

1. Go to **Site settings** → **Domain management**
2. Click "Add custom domain"
3. Add primary domain: `carbonecomarket.com`
   - Follow Netlify's DNS configuration instructions
   - Add A record or CNAME as instructed
4. Add domain alias: `invest.carbonecomarket.com`
   - Add CNAME record pointing to your Netlify subdomain

### 3. Verify Routing

The `_redirects` file is already configured for:

- `carbonecomarket.com` → Main site (`/index.html`)
- `invest.carbonecomarket.com` → Investor site (`/invest/index.html`)
- `/en` → English main site
- `/invest/en` → English investor site (currently routes to `/invest/index.html`)

### 4. SSL/HTTPS

Netlify automatically provisions SSL certificates. Wait 1-2 minutes after adding domains.

### 5. Test Deployment

After deployment, test these URLs:

- Main site: `https://carbonecomarket.com`
- Investor site: `https://invest.carbonecomarket.com`
- English: `https://carbonecomarket.com/en`

## Repository Structure

```
/
├── _redirects              # Netlify routing rules
├── netlify.toml           # Build config & headers
├── README.md              # Project documentation
├── .gitignore             # Git ignore rules
├── styles.css             # Main site styles
├── invest-styles.css      # Investor styles (root)
├── index.html             # TR main site
├── en/
│   └── index.html        # EN main site
├── invest/
│   ├── index.html        # Investor site (EN)
│   ├── styles.css        # Investor base styles
│   ├── invest-styles.css # Investor extended styles
│   └── script.js         # Investor interactivity
└── assets/
    └── team/             # Team photos directory
        ├── .gitkeep
        └── README.md     # Photo upload instructions

```

## Current Deployment Status

✅ All configuration files created
✅ CSS files added and tested
✅ All pages return HTTP 200
✅ _redirects configured for subdomain routing
✅ netlify.toml with security headers
✅ Git branch ready for deployment

## Next Steps

1. **Option A:** Deploy from feature branch directly
   - Use branch: `claude/netlify-subdomain-routing-setup-011CUbCj4yeNTuUADv2vTNtQ`

2. **Option B:** Merge to main first (recommended)
   ```bash
   git checkout main
   git merge claude/netlify-subdomain-routing-setup-011CUbCj4yeNTuUADv2vTNtQ
   git push origin main
   ```
   - Then deploy from `main` branch

## Troubleshooting

### If CSS doesn't load:
- Check browser console for 404 errors
- Verify `styles.css` exists in root
- Clear browser cache

### If subdomain routing fails:
- Check `_redirects` file is in root directory
- Verify domain is properly configured in Netlify
- Check Netlify deploy logs

### If pages return 404:
- Verify `netlify.toml` is properly formatted
- Check that all HTML files exist in correct locations
- Review Netlify function logs

## Support

For deployment issues:
- Check Netlify deploy logs in dashboard
- Review [Netlify Documentation](https://docs.netlify.com/)
- Contact: ercument.erden@lionexia.com

---

**Ready to deploy!** 🚀
