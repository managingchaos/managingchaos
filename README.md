# managingCHAOS

Static GitHub Pages site for managingchaos.com.

## Structure

- `index.html`
- `contact.html`
- `404.html`
- `privacy.html`
- `CNAME`
- `README.md`
- `assets/css/site.css`
- `assets/js/tracking.js`
- `assets/images/`

## Assets

Store these in `assets/images/`:

- `mc-home-bg.webp`
- `managingCHAOS-home.svg`

## Notes

- Replace the contact form endpoint in `contact.html`
- Keep the `CNAME` file in the repo root for GitHub Pages custom domain support
- Pages use root-relative links like `/contact.html` and `/privacy.html`

## Publishing

This site is configured for GitHub Pages with the custom domain:

`managingchaos.com`

## Tracking

The site includes a lightweight tracking script intended to capture limited visitor data for traffic and performance insights.

### Tracking stack

- Front-end tracking script: `assets/js/tracking.js`
- Cloudflare Worker captures and enriches requests with IP address
- Google Apps Script receives the payload and writes it to Google Sheets
- Google Sheet name: `managingCHAOS Visitor Log`
- Google Sheet tab name: `Visitor Log`

### Data captured

The current setup captures:

- timestamp
- hostname
- path
- full URL
- page title
- referrer
- IP address
- user agent
- language
- timezone
- screen width / height
- viewport width / height
- UTM source
- UTM medium
- UTM campaign
- UTM term
- UTM content

### Important implementation notes

- `assets/js/tracking.js` should point to the live Cloudflare Worker URL
- The Cloudflare Worker should point to the live Google Apps Script `/exec` URL
- The Apps Script must write to the `Visitor Log` tab
- If tracking changes, review and maintain the privacy policy accordingly

## Domain / DNS

- Registrar currently: GoDaddy
- DNS currently managed at: Hostinger
- Website currently hosted on: GitHub Pages
- Email currently handled through: Purelymail

## Maintenance checklist

When updating the site, verify:

- pages still load correctly on GitHub Pages
- custom domain remains connected
- contact form endpoint still works
- tracking logs are still writing to the sheet
- privacy page matches current tracking behavior
