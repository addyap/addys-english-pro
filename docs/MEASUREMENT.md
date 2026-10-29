# Measuring whether the site brings more enquiries

The October 2026 UX changes (English-first homepage, multilingual websites
pages, shorter enquiry routes) are guesses until the results say otherwise.
The site deliberately has **no analytics tool** (Umami was removed on
29 October 2026), so this page uses the sources you already have: search
consoles, your inbox and your clients.

## 1. Set up once

- **Google Search Console** and **Bing Webmaster Tools**: check both have the
  sitemap (`https://www.antonyaddy.com/sitemap.xml`), and request indexing for
  the new pages: `/creation-site-web-multilingue`, `/en/multilingual-websites`,
  `/creation-site-web-frejus`, `/creation-site-web-nice-cannes`,
  `/blog/site-web-multilingue-entreprise`.
- **An enquiry log**: one spreadsheet row per enquiry, whatever the channel.
  Columns: date · service (anglais / sites / ia) · channel (form, WhatsApp,
  email, phone, in person) · how they found you · became a client (yes/no).
  The contact form's emails already say which service was chosen.
- **Ask every new contact how they found you**, and write the answer in the
  log. Without analytics, it is the most reliable number you have.

The /sites-web portfolio (addyap2/showcase) still has Vercel Web Analytics,
which shows its page views (Vercel dashboard → the *showcase* project →
Analytics).

## 2. The starting point

Fill these in now, then again at the end of each month:

| # | Number | Where to find it |
|---|---|---|
| 1 | Enquiries, **by service** | Enquiry log |
| 2 | Enquiries, by channel (form vs WhatsApp vs other) | Enquiry log |
| 3 | How new contacts found you (Google, LinkedIn, word of mouth, …) | Enquiry log |
| 4 | Enquiries that became clients | Enquiry log |
| 5 | Google: impressions and clicks, whole site | Search Console → Performance |
| 6 | Google: clicks on the training pages (`/offres-de-formation`, `/anglais-*`, `/cours-anglais-*`) | Search Console → Performance → Pages |
| 7 | Google: clicks on the websites pages (`/creation-site-web-*`, `/en/multilingual-websites`) | Same |
| 8 | Searches that bring you visitors (top 10) | Search Console → Performance → Queries |
| 9 | Portfolio page views | Vercel → *showcase* → Analytics |

## 3. Every month

| Month | Enquiries: anglais | sites | ia | Became clients | Google clicks: training | websites | Main source |
|---|---|---|---|---|---|---|---|
| Oct 2026 (start) | | | | | | | |
| … | | | | | | | |

What to look for:

- **Enquiries by service** should lean towards English training, then
  websites. If websites enquiries stay at zero while Search Console shows
  clicks on the websites pages, the pages are found but not convincing: look
  at what visitors are missing (examples in their sector, a client quote,
  an idea of price).
- **Searches that bring visitors** show which words people actually use;
  reuse them in page titles and headings.
- **New pages take two to three months** to appear in search results; don't
  judge them before then.

## 4. Read the numbers with care

- The numbers are small. Look at three-month trends, not single weeks.
- Change one thing at a time on a key page, and note the date in the table,
  so a change in enquiries can be explained.
- Watching a few people use the site (see `VISITOR-TESTS.md`) tells you *why*
  something works or doesn't, which numbers alone won't.

## If you want page and click numbers later

The site's buttons already call `trackEvent` (`src/lib/analytics.ts`), which
does nothing for now. Connecting a cookieless tool means changing that one
function, adding the tool's address to the content-security policy in
`vercel.json`, and updating the privacy policy, which currently says the site
uses no audience measurement.
