# Measuring whether the site brings more enquiries

The October 2026 UX changes (English-first homepage, multilingual websites
pages, shorter enquiry routes) are guesses until the numbers say otherwise.
This page says what to switch on, what to record, and when to look.

## 1. Switch analytics on (not done yet)

The site already sends events, but **nothing is recorded**: Umami only loads
when two environment variables are set in Vercel, and they aren't
(see `src/components/UmamiAnalytics.tsx`; also flagged in
`launch-audit-2026-10.md`). The content-security policy already allows Umami
Cloud.

1. Create a free Umami Cloud account at cloud.umami.is and add the website
   `www.antonyaddy.com`. Copy its *Website ID*.
2. In Vercel → project *addys-english-pro* → Settings → Environment Variables,
   add for Production:
   - `VITE_UMAMI_SRC` = `https://cloud.umami.is/script.js`
   - `VITE_UMAMI_WEBSITE_ID` = the Website ID
3. Redeploy (the variables are read at build time).
4. Check: open the site, click the WhatsApp button, and confirm a
   `whatsapp_cta_click` event appears in Umami within a minute.

Umami is cookieless, so no consent banner is needed.

The /sites-web portfolio (addyap2/showcase) uses Vercel Web Analytics instead.
Page views work on any plan; its custom events (`contact_submit`,
`lang_switch`, …) are only recorded on Vercel Pro.

Also check that **Google Search Console** and **Bing Webmaster Tools** both
have the sitemap (`https://www.antonyaddy.com/sitemap.xml`) and request
indexing for the new pages: `/creation-site-web-multilingue`,
`/en/multilingual-websites`, `/creation-site-web-frejus`,
`/creation-site-web-nice-cannes`, `/blog/site-web-multilingue-entreprise`.

## 2. The starting point (first four weeks after switching on)

There is no "before" to compare against, because nothing was recorded before.
Treat the first four full weeks after switching on as the baseline, and
change as little as possible on the key pages during that time.

Write these down at the end of week 4:

| # | Number | Where to find it |
|---|---|---|
| 1 | Visitors, total and per page (home, /offres-de-formation, /creation-site-web-multilingue, /contact) | Umami → Pages |
| 2 | Where visitors come from (Google, direct, LinkedIn, …) | Umami → Referrers |
| 3 | Homepage: clicks on *Parlons de votre formation* vs *Découvrir mes sites web* | Events `hub_hero_primary_click`, `hub_hero_secondary_click` |
| 4 | Enquiries sent, **by service** | Event `contact_submit_success`, property `sujet` (anglais / sites / ia / autre) |
| 5 | Form errors (people who tried and hit a problem) | Events `form_error`, `contact_submit_error` |
| 6 | WhatsApp clicks | Event `whatsapp_cta_click` (property `location`) |
| 7 | Websites pages: enquiry clicks and portfolio clicks | Events `websites_enquiry_click`, `websites_portfolio_click` |
| 8 | Level test → form route used | Event `positioning_test_form_cta_click` |
| 9 | Google: impressions and clicks for the websites and training pages | Search Console → Performance, filter by page |

Two simple rates to keep an eye on:

- **Enquiry rate** = enquiries sent (4) ÷ visitors to /contact (1).
- **Homepage hand-off** = clicks on the homepage buttons (3) ÷ homepage visitors (1).

## 3. Then every month

Compare the same nine numbers month on month, in a small table:

| Month | Visitors | Enquiries: anglais | sites | ia | Form errors | WhatsApp clicks | Search clicks |
|---|---|---|---|---|---|---|---|
| Baseline | | | | | | | |
| … | | | | | | | |

What to look for:

- **Enquiries by service** should lean towards English training, then websites.
  If websites enquiries stay at zero while the websites pages get visitors,
  the pages are being read but not convincing: look at what visitors are
  missing (prices? examples in their sector? a client quote?).
- **Form errors** rising means the form is in the way: test it yourself on a
  phone.
- **Search clicks** on the new websites pages take two to three months to
  appear; don't judge them before then.

## 4. Read the numbers with care

- The numbers are small. A good or bad week is noise; look at three-month
  trends, not single weeks.
- WhatsApp enquiries only show as clicks; the conversation itself isn't
  tracked. Ask every new client how they found you and note it next to the
  monthly table. It's the most reliable number you have.
- Change one thing at a time on a key page, and note the date, so a jump can
  be explained.
