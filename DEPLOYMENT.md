# Deployment Checklist

## Pre-Deployment

- [ ] Update `data/config.ts` with actual information
- [ ] Replace all placeholder social media URLs
- [ ] Add your actual email address
- [ ] Update site title and description
- [ ] Test production build locally (`npm run build`)
- [ ] Verify all pages work in production mode
- [ ] Check 404 page
- [ ] Review security headers in `next.config.ts`

## Vercel Deployment

- [ ] Sign up/login to Vercel (https://vercel.com)
- [ ] Connect GitHub repository
- [ ] Set environment variables in Vercel dashboard
- [ ] Deploy to production
- [ ] Verify deployment works
- [ ] Check custom domain (if applicable)

## Post-Deployment

- [ ] Update `.env.production` with deployed URL
- [ ] Set up Google Analytics
  - [ ] Create GA4 property
  - [ ] Add Measurement ID to Vercel environment variables
  - [ ] Verify tracking works
- [ ] Set up Google Search Console
  - [ ] Add property
  - [ ] Verify ownership
  - [ ] Submit sitemap
- [ ] Update `robots.txt` with deployed domain
- [ ] Update `data/config.ts` with deployed URL
- [ ] Test all functionality on live site
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Share your portfolio!

## SEO Optimization

- [ ] Submit to Google Search Console
- [ ] Submit sitemap.xml
- [ ] Verify structured data with Google Rich Results Test
- [ ] Check Open Graph tags with Facebook Sharing Debugger
- [ ] Verify Twitter Card with Twitter Card Validator

## Optional Enhancements

- [ ] Add actual project screenshots
- [ ] Add your professional photo
- [ ] Enable contact form with backend service
- [ ] Add blog section (if desired)
- [ ] Implement newsletter signup
- [ ] Add testimonials section