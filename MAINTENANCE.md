# Maintenance Guide

This document outlines the maintenance procedures for the Smarter Dog Grooming website.

## Monthly Maintenance Checklist

### Dependencies (Automated via Dependabot)

- [ ] Review and merge Dependabot PRs
- [ ] Run `npm audit` to check for vulnerabilities
- [ ] Run full test suite after updates: `npm run test:all`

### Content Review

- [ ] Check all pages for outdated information
- [ ] Verify opening hours are current
- [ ] Review pricing on services page
- [ ] Check external links still work (Houndsly, social media)

### Performance Check

- [ ] Run Lighthouse audit on production
- [ ] Target scores: Performance >90, Accessibility >95, SEO >95
- [ ] Check Core Web Vitals in Google Search Console

### Analytics Review

- [ ] Check GA4 for tracking issues
- [ ] Review key conversions (booking form submissions)
- [ ] Verify page view tracking is working

---

## Backup Procedures

### Code Backups

- **Primary**: Git repository (GitHub/GitLab)
- **Recommended**: Enable automatic backups on hosting provider (Vercel/Netlify)

### How to backup manually

```bash
# Create a dated zip of the project
zip -r "smarterdog-backup-$(date +%Y%m%d).zip" . -x "node_modules/*" -x ".git/*"
```

### Recovery

```bash
# Clone from Git
git clone <repository-url>
cd bestwebsitesofar-1
npm install
npm run dev
```

---

## Environment Variables

Required environment variables for production:

```bash
# EmailJS Configuration (for booking form)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Security**: Never commit `.env` files to Git. Use hosting provider's environment variable settings.

---

## Deployment Checklist

Before deploying:

- [ ] Run lint: `npm run lint`
- [ ] Run tests: `npm run test:run`
- [ ] Run E2E tests: `npm run test:e2e`
- [ ] Build succeeds: `npm run build`
- [ ] Check bundle size: `npm run build:analyze`

---

## Quick Commands Reference

| Task | Command |
|------|---------|
| Start dev server | `npm run dev` |
| Run all tests | `npm run test:all` |
| Run unit tests | `npm run test:run` |
| Run e2e tests | `npm run test:e2e` |
| Build for production | `npm run build` |
| Analyze bundle | `npm run build:analyze` |
| Check for vulnerabilities | `npm audit` |
| Update dependencies | `npm update` |

---

## Contact

For technical issues with the website:

- Check the [README.md](./README.md) for setup instructions
- Review [TESTING.md](./TESTING.md) for test procedures
- Check [CHANGELOG.md](./CHANGELOG.md) for recent changes

---

*Last updated: December 2025*
