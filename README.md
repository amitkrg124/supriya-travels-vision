# Supriya Travels Vision

SUPRIYA TRAVELS OF INDIA

Premium Travel Website — Final UI/UX, Development & Animation Specification

Build a production-ready, premium travel website for:

Supriya Travels of India

The website represents a professional Indian travel company specializing in:

Hajj Packages

Umrah Packages

Domestic Tour Packages

International Tour Packages

Worldwide Tourist Visas

Domestic Air Ticketing

International Air Ticketing

B2B Air Ticketing

Customized Travel Experiences

The website must feel like a premium, established travel brand, not an AI-generated website template.

The visual direction should combine:

Editorial Luxury + Cinematic Travel + Indian Trust + Spiritual Journey + International Tourism

1. CORE DESIGN DIRECTION

The website must use a:

Minimalist Editorial + Editorial Cinematic + Luxury Travel

design language.

The visual inspiration should come from premium:

Luxury travel brands

Boutique hotels

International tourism companies

High-end editorial magazines

Premium hospitality websites

Do NOT create a generic Indian travel-agency website.

Do NOT use the typical AI-generated SaaS aesthetic.

The website should feel:

Premium

Sophisticated

Human

Cinematic

Elegant

Trustworthy

Warm

Professional

Modern

International

2. PRIMARY BRAND ASSET

Use the uploaded logo:

cropped-Supriya-Logo.png

The logo is the official logo of:

Supriya Travels of India

IMPORTANT:

Use the supplied logo exactly.

Do not redesign it.

Do not recreate it with HTML/CSS.

Do not change its proportions.

Do not distort it.

Preserve its visual identity.

Maintain adequate clear space around it.

Use the original transparent asset where possible.

The gold logo should work against the website's dark navy/cinematic sections.

If necessary, create a visually appropriate white/light presentation through CSS treatment only where technically safe, but do not alter the actual brand asset.

3. BRAND COLOR SYSTEM

Primary Navy:

#071A2B

Deep Navy:

#04111D

Editorial Navy:

#0F172A

Luxury Gold:

#C89B3C

Soft Gold:

#D9B55C

Warm Ivory:

#F7F3EA

White:

#FFFFFF

Muted Text:

HSL(215, 25%, 32%)

Black:

#000000

The design should primarily use:

Navy + White + Ivory + Gold accents.

Do NOT make the entire website gold.

Gold should be used carefully for:

Logo

Small section labels

Accent lines

Borders

Icons

Hover states

Active navigation

Small decorative elements

Important CTA accents

4. TYPOGRAPHY SYSTEM

Use premium editorial typography.

Display Font

Use:

Instrument Serif

Font weight:

400

Use Instrument Serif for:

Hero H1

Major page headings

Destination headings

Emotional statements

Large editorial headings

Hero H1:

Desktop:
80px

Mobile:
48px

Line-height:
0.95

Letter-spacing:
-2.46px

This letter spacing is important and MUST be maintained for the hero typography.

Use <em> elements selectively for visual emphasis.

The <em> element should NOT automatically become italic unless intentionally designed.

Body/UI Font

Use:

Inter

Font weights:

400:
body text

500:
navigation, buttons and UI

Typography sizes:

Navigation:
14px

Buttons:
14–16px

Body:
16–18px

Small labels:
11–13px

5. HERO SECTION — NEW EDITORIAL CINEMATIC SYSTEM

IMPORTANT:

Do NOT use the previously proposed airplane → Dubai video as the primary homepage hero.

Instead, use the supplied Editorial Cinematic Hero component design as the visual foundation.

Reference video:

https://designerstephen.github.io/public-assets/videos/serene-art-hero.mp4

The hero should use this cinematic video as the background visual.

However, the component should be fully rebranded for:

Supriya Travels of India

Do not copy generic branding from the reference component.

Use the reference only for:

Composition

Cinematic feeling

Typography

Navigation structure

Spacing

Entrance animation

Video treatment

Editorial minimalism

CTA styling

Overall visual quality

6. HERO VISUAL STYLE

Hero:

Full viewport.

Minimum:

min-height: 100vh

Desktop:

100vh

Mobile:

100svh

Use a full-bleed cinematic video background.

Video should cover the complete viewport.

Use:

object-fit: cover

Video attributes:

autoplay

muted

loop

playsInline

preload appropriately

The video should feel immersive but MUST NOT overpower the text.

7. HERO VIDEO TREATMENT

Use:

object-fit: cover;
object-position: center;


Add a subtle overlay for text readability.

If the video is bright:

Use approximately:

20% dark overlay.

Do NOT make the overlay too dark.

Suggested overlay:

rgba(4, 17, 29, 0.18–0.25)

For stronger readability near the text, use a subtle localized gradient rather than a heavy full-screen black overlay.

Example visual treatment:

Top:
transparent

Center:
very subtle navy tint

Bottom:
slightly darker navy gradient

The video should remain visible.

8. HERO CONTENT

Use a centered editorial hierarchy.

Content should be positioned approximately in the visual center.

Maximum content width:

1280px.

Hero inner content:

max-width:
900px

Text alignment:

center

HERO EYEBROW

Small uppercase editorial label:

SUPRIYA TRAVELS OF INDIA

Use:

Inter

12–14px

Font-weight:
500

Letter spacing:
0.12em

Color:
white

Optionally add a tiny gold line or dot beside the label.

9. HERO HEADLINE

Use Instrument Serif.

Suggested primary headline:

Journeys That
Stay With You.

Alternative approved headline:

Your Journey
Begins Here.

The first version should be the default.

Use <em> for selective emphasis.

Example visual hierarchy:

Journeys That
Stay With You.

Do not make the headline excessively large on mobile.

Desktop:

80px

Tablet:

64px

Mobile:

48px

Line-height:

0.95

Letter-spacing:

-2.46px

10. HERO DESCRIPTION

Use Inter.

Maximum width:

670px

Center aligned.

Example:

"From sacred journeys to unforgettable escapes, Supriya Travels of India helps you travel with comfort, care and confidence."

Font:

18px desktop

16px mobile

Line-height:

1.625

Color:

white with slightly reduced opacity.

Do not use excessive text.

11. HERO CTA

Primary CTA:

Explore Our Packages

Secondary CTA:

Plan Your Journey

Use a pill-shaped button.

Primary:

background:
#000000

text:
#FFFFFF

border-radius:
9999px

Desktop:

padding:
20px 40px or 20px 48px

Font:

16px

Font-weight:

500

Hover:

scale:
1.03

Duration:
300ms

Ease:
ease-in-out

Add a subtle arrow:

→

or a small animated arrow icon.

The arrow should move 3–5px on hover.

12. HERO CTA LAYOUT

Desktop:

Buttons horizontally aligned.

Mobile:

Stack vertically.

Primary button:

full-width or near full-width on mobile.

Secondary CTA can be an outlined/ghost button.

Avoid excessive buttons.

Maximum:

2 hero CTAs.

13. HERO NAVIGATION

Use the reference component's:

3-column navigation structure.

Desktop container:

max-width:
1280px

Horizontal padding:
32px

Vertical padding:
24px

Grid:

3 columns

LEFT

Use actual:

Supriya Travels of India logo

instead of text-based generic branding.

Logo height:

approximately 42–52px depending on original proportions.

Keep the logo visually balanced.

CENTER

Navigation links:

Home

About Us

Packages

Services

Destinations

Contact

Use:

Inter

14px

font-weight:
500

Gap:

30–40px

Use a subtle gold underline on hover.

Active page:

small gold underline or gold text.

RIGHT

CTA:

Plan Your Journey

Black pill button with white text.

Add small arrow.

14. HEADER OVER HERO

Initially:

Transparent.

Position:

absolute/fixed over hero.

As user scrolls:

Header transitions into:

deep navy semi-transparent background.

Use:

backdrop-filter: blur(14px)

and subtle border.

Transition:

300–500ms.

Do not create a huge header.

15. MOBILE HEADER

Mobile:

Logo left.

Menu button right.

Hide desktop navigation.

Menu opens with:

Framer Motion.

Fullscreen or large side drawer.

Menu items:

Home
About
Packages
Services
Destinations
Contact

CTA:

Plan Your Journey

The mobile menu should feel premium and editorial.

16. HERO ENTRANCE ANIMATION

Use the reference component's:

fade-rise

animation.

Initial:

opacity:
0

transform:
translateY(24px)

Final:

opacity:
1

transform:
translateY(0)

Duration:

0.8s

Timing:

ease-out

STAGGER

Hero eyebrow:

0s

Hero H1:

0.1s

Description:

0.2s

CTA:

0.4s

Do not delay the content excessively.

The user should see the full hero quickly.

17. HERO VIDEO ANIMATION

Do NOT animate the video with large transforms.

Video should remain cinematic and stable.

Optional:

very subtle scale:

1.02 → 1

over the first few seconds.

Do NOT use aggressive zoom.

18. HERO SCROLL INDICATOR

Bottom center:

SCROLL TO EXPLORE

Use:

Inter
11–12px

uppercase

letter spacing:
0.15em

Below it:

thin vertical line.

Animate line:

height:
0 → 32px

subtle looping animation.

No bouncing arrow.

19. HERO TEXT READABILITY

Text MUST remain readable over the video.

If the source video changes brightness:

Automatically use a subtle overlay.

Do not create a hard dark box behind the text.

Use cinematic gradient treatment.

The video must still be visible.

20. HERO RESPONSIVENESS

Desktop:

1440px+
Full cinematic layout.

Tablet:

768–1024px

Mobile:

320–767px

On mobile:

Reduce headline size

Reduce paragraph width

Stack buttons

Reduce navigation

Maintain video composition

Keep logo readable

Maintain visual hierarchy

21. IMPORTANT HERO BRANDING RULE

Do NOT use the generic reference text:

"Find my dream"

Do NOT use generic placeholder branding.

Everything should represent:

Supriya Travels of India

The hero should communicate:

Travel
Trust
Premium service
Hajj
Umrah
Domestic travel
International travel

without overcrowding the hero.

22. HOMEPAGE STRUCTURE AFTER HERO

After the Editorial Cinematic Hero, build the homepage as a premium editorial travel experience.

Order:

Editorial Cinematic Hero

Trust / Introduction

Hajj & Umrah Feature

Core Services

International Destinations

Domestic Destinations

Featured Packages

Why Choose Us

Journey Process

Testimonials

Final CTA

Footer

23. TRUST INTRODUCTION

Section label:

ABOUT SUPRIYA TRAVELS

Heading:

More Than Travel.
A Journey You Can Trust.

Use Instrument Serif.

Content:

At Supriya Travels of India, every journey is planned with care, professionalism and attention to detail. From sacred Hajj and Umrah journeys to domestic holidays and international escapes, we help travelers move through every stage of their journey with confidence.

Layout:

Large image + editorial text.

Use asymmetric composition.

Do NOT create a generic 50/50 card.

24. TRUST METRICS

Only display verified company statistics.

Potential fields:

Years of Experience

Happy Travelers

Destinations

Travel Support

IMPORTANT:

Do not fabricate numbers.

If actual values are unavailable:

Keep these fields hidden or use CMS placeholders.

25. HAJJ & UMRAH SECTION

This must be one of the strongest sections on the website.

Use premium, respectful imagery.

Label:

SACRED JOURNEYS

Heading:

A Journey of Faith,
Handled With Care.

Content:

Supriya Travels of India provides professionally managed Hajj and Umrah travel services designed to make the pilgrimage journey organized, comfortable and supported from departure to return.

Buttons:

Explore Hajj

Explore Umrah

Use restrained motion.

26. SERVICES

Create editorial service sections for:

Hajj Packages

Umrah Packages

Worldwide Tourist Visas

Domestic Air Ticketing

International Air Ticketing

B2B Air Ticketing

Domestic Tours

International Tours

Use photography + typography.

Do not make all services identical cards.

Mix:

Large feature blocks

Small editorial cards

Horizontal rows

This prevents the website from looking template-generated.

27. DESTINATIONS

Main heading:

Where Will Your Journey Take You?

International:

Dubai
Bali
Egypt
Maldives
Malaysia
Mauritius
Nepal
Singapore
Thailand

Domestic:

Himachal Pradesh
Kashmir
Kerala
North East India
Rajasthan

Use large editorial photography.

28. DESTINATION DESIGN

Do not create a basic grid of 12 identical cards.

Use a magazine-style composition.

Example:

Large Dubai feature

Two smaller destinations

Large Kashmir feature

Three smaller destinations

This should create visual rhythm.

Use:

GSAP / Framer Motion

for subtle image movement.

29. DUBAI PAGE

Route:

/destinations/dubai

Dubai should receive a premium destination experience because it is one of the company's major international destinations.

Hero:

Dubai skyline.

Heading:

Dubai

Supporting line:

Where ambition meets imagination.

Sections:

Burj Khalifa

Palm Jumeirah

Dubai Marina

Desert Safari

Downtown Dubai

Dubai Mall

Dubai Creek

Travel packages

Gallery

FAQ

CTA:

Plan My Dubai Journey

30. DESTINATION PAGE ARCHITECTURE

Create reusable dynamic destination routes:

/destinations/[slug]

Pages:

/destinations/himachal-pradesh

/destinations/kashmir

/destinations/kerala

/destinations/north-east

/destinations/rajasthan

/destinations/bali

/destinations/dubai

/destinations/egypt

/destinations/maldives

/destinations/malaysia

/destinations/mauritius

/destinations/nepal

/destinations/singapore

/destinations/thailand

Every destination must have:

Hero

Introduction

Highlights

Top attractions

Best time to visit

Suggested duration

Packages

Gallery

FAQ

Related destinations

Inquiry CTA

Content must be destination-specific.

Do not duplicate the same copy.

31. CURRENT PACKAGES PAGE

Route:

/packages

Create a premium package discovery interface.

Filters:

Destination

Domestic / International

Hajj / Umrah

Duration

Budget

Package Type

Cards should include:

Destination

Duration

Starting Price

Highlights

Package type

CTA

Do not hardcode fake pricing.

All package information must be data-driven.

32. HAJJ PAGE

Route:

/hajj

Hero:

Hajj — A Journey of Faith

Include:

Package categories

Economy

Semi Deluxe

Super Deluxe

Package comparison

Flight information

Visa assistance

Accommodation

Transportation

Meals

Support

Use CMS/data-driven content.

Never invent package inclusions.

33. UMRAH PAGE

Route:

/umrah

Hero:

Begin Your Umrah Journey

Package types:

Economy

Semi Deluxe

Super Deluxe

Include:

Package comparison

Accommodation

Flights

Transportation

Visa

Support

Inquiry CTA.

34. ABOUT PAGE

Route:

/about-us

Hero:

Travel With Purpose.
Journey With Confidence.

Sections:

About the company

Our Mission

Our Vision

Our Commitment

Why Choose Us

Hajj & Umrah Expertise

Global Travel Services

Use editorial photography and large serif typography.

Do not invent company history.

35. SERVICES PAGE

Route:

/our-services

Services:

Hajj Packages

Umrah Packages

Worldwide Tourist Visas

Domestic Air Ticketing

International Air Ticketing

B2B Air Ticketing

Domestic Tour Packages

International Tour Packages

Each service should have:

Image

Title

Description

CTA

36. CONTACT PAGE

Route:

/contact

Hero:

Let's Plan Your Journey.

Contact information:

Phone

WhatsApp

Email

Office Address

Use actual company details when provided.

Do not invent contact information.

Form:

Name

Phone

Email

Travel Type

Destination

Travel Date

Travelers

Message

CTA:

Send Enquiry

Use:

React Hook Form

Zod

Validation

Success state

Error state

37. WHATSAPP

Add a floating WhatsApp CTA.

Position:

bottom-right.

Use actual company WhatsApp number from configuration.

Do not hardcode private credentials.

On desktop:

small premium floating button.

On mobile:

compact circular button.

Do not allow it to overlap important form controls.

38. FINAL CTA

Create a cinematic final section.

Heading:

Your Next Journey Is Waiting.

Supporting text:

"Tell us where you want to go. We'll help you plan the journey."

Buttons:

Explore Packages

Talk to a Travel Expert

Use an authentic travel image.

39. FOOTER

Premium dark navy footer.

Include:

Logo

Company description

Quick Links

Home

About Us

Packages

Services

Destinations

Contact

Popular Destinations

Dubai

Bali

Maldives

Kashmir

Himachal Pradesh

Services

Hajj

Umrah

Tourist Visa

Air Ticketing

B2B Ticketing

Bottom:

Privacy Policy

Terms & Conditions

Refund/Cancellation Policy

Copyright

40. GSAP

Use GSAP only where it adds meaningful visual quality.

Recommended:

ScrollTrigger

Use for:

Destination image parallax

Large editorial image reveals

Section transitions

Horizontal destination movement

Hero-to-content transition

Large typography reveals

Do NOT animate every section with GSAP.

41. FRAMER MOTION

Use Framer Motion for:

Header

Mobile navigation

Hero content entrance

Cards

Buttons

Modal

Page transitions

In-view reveals

Use:

opacity

translateY

scale

clip-path

Keep animation subtle.

42. LENIS

Use Lenis for smooth scrolling.

Implement:

Smooth desktop scrolling

Proper touch/mobile behavior

No scroll locking unless required

Respect prefers-reduced-motion

Do not make scrolling feel artificially slow.

43. ANIMATION PRINCIPLE

The website should feel:

smooth, cinematic and expensive

NOT:

"Look how many animations we have."

Every animation should have a purpose.

Use animation to guide attention.

44. MICRO INTERACTIONS

Buttons:

scale 1.03

Links:

gold underline reveal

Images:

scale 1.03–1.05

Cards:

subtle elevation

Arrows:

translateX 3–5px

Inputs:

subtle border transition

Keep everything refined.

45. PAGE TRANSITIONS

Use Framer Motion.

Transition:

opacity:

0 → 1

translateY:

10px → 0

Duration:

0.4–0.6s

Do not use flashy page transitions.

46. DESTINATION PAGE HERO

Every destination page should have an immersive hero.

Use:

full-width image

or

short cinematic video where available.

Overlay:

subtle navy gradient.

Typography:

Instrument Serif.

Breadcrumb:

Home / Destinations / Dubai

Use small Inter typography.

47. IMAGE REVEAL SYSTEM

Use clip-path reveals.

Initial:

image clipped.

On viewport:

clip expands.

Image:

scale 1.05 → 1.

This should create a high-end editorial photography effect.

48. MOBILE EXPERIENCE

Mobile is NOT simply a smaller desktop.

Create deliberate mobile layouts.

Hero:

100svh

Headline:

48px

Navigation:

drawer

Buttons:

stacked

Destination cards:

horizontal or vertical editorial layouts

Animations:

reduced

Video:

mobile-optimized version

No horizontal scrolling.

49. PERFORMANCE

The hero reference video must NOT be served as a massive unoptimized asset.

Use:

Desktop:
high-quality WebM

Fallback:
MP4

Mobile:
compressed mobile video

Poster:
optimized JPG/WebP

Do not load 8K video directly on mobile.

Use:

lazy loading

responsive images

next/image

font optimization

code splitting

dynamic imports where appropriate.

50. ACCESSIBILITY

Implement:

Semantic HTML

ARIA labels

Keyboard navigation

Visible focus

Proper color contrast

Alt text

Reduced motion

Form labels

Accessible buttons

Accessible mobile menu

Use:

prefers-reduced-motion

If enabled:

disable major parallax and large movement.

51. SEO

Every page must have unique:

Title

Meta description

Canonical URL

Open Graph metadata

Social image

Proper H1

H2/H3 hierarchy

Add JSON-LD where relevant:

TravelAgency

Organization

BreadcrumbList

FAQPage

TouristTrip where appropriate

52. DATA ARCHITECTURE

Do NOT hardcode destination content directly inside components.

Create structured data:

/data/destinations.ts

/data/packages.ts

/data/services.ts

/data/testimonials.ts

/data/company.ts

Destination model:

id
slug
name
country
region
heroImage
description
highlights
attractions
bestTime
duration
packages
gallery
faqs


Package model:

id
slug
destination
type
duration
price
currency
hotel
flight
meals
transport
highlights
images


All package fields must be configurable.

53. COMPONENT ARCHITECTURE

Use reusable components:

Header

MobileMenu

HeroCinematic

HeroVideo

HeroContent

SectionHeading

EditorialSection

DestinationCard

DestinationGrid

DestinationHero

PackageCard

PackageFilter

ServiceCard

ServiceFeature

TestimonialCard

ImageReveal

AnimatedText

CTASection

ContactForm

FAQ

Gallery

Breadcrumb

WhatsAppButton

Footer

54. PROJECT STRUCTURE

Use a scalable structure similar to:

app/
  page.tsx
  about-us/
  packages/
  services/
  contact/
  hajj/
  umrah/
  destinations/
    [slug]/

components/
  layout/
  hero/
  destinations/
  packages/
  services/
  forms/
  animations/
  ui/

data/
  destinations.ts
  packages.ts
  services.ts
  company.ts
  testimonials.ts

public/
  images/
  videos/
  logo/

lib/
  utils.ts

styles/


Keep the architecture clean.

55. DO NOT MAKE IT LOOK AI-GENERATED

This is a hard requirement.

Do NOT use:

Purple/blue gradients

Generic SaaS cards

Excessive glassmorphism

Random glowing blobs

3D floating objects

Generic abstract shapes

Excessive rounded cards

Fake statistics

Fake testimonials

Fake reviews

Fake awards

Fake certifications

Fake partnerships

Excessive animations

Generic AI-written marketing sections

Repeated identical cards

Overly bright colors

Instead use:

Authentic photography

Editorial typography

Strong whitespace

Asymmetric layouts

Cinematic imagery

Subtle motion

Premium spacing

Real business information

Restrained color palette

Professional visual hierarchy

56. CONTENT RULE

Use the supplied company information as the source of truth.

Company:

Supriya Travels of India

Specialization:

Hajj
Umrah
Domestic Travel
International Travel
Tourist Visa
Air Ticketing
B2B Ticketing

Do NOT invent:

Company age

Customer numbers

Revenue

Awards

Certifications

Government registration

Airline partnerships

Hotel partnerships

Reviews

Package prices

Guarantees

Use placeholders until verified information is provided.

57. DESTINATION LIST

DOMESTIC

Himachal Pradesh

Kashmir

Kerala

North East India

Rajasthan

INTERNATIONAL

Bali

Dubai

Egypt

Maldives

Malaysia

Mauritius

Nepal

Singapore

Thailand

Every destination must have its own page.

58. REQUIRED PAGES

Minimum required:

Home

About Us

Current Packages

Our Services

Contact

Additionally:

Hajj

Umrah

Hajj Packages

Umrah Packages

Tourist Visa

Air Ticketing

B2B Air Ticketing

Destination pages:

Himachal Pradesh

Kashmir

Kerala

North East India

Rajasthan

Bali

Dubai

Egypt

Maldives

Malaysia

Mauritius

Nepal

Singapore

Thailand

59. ROUTING

Use:

/

/about-us

/packages

/our-services

/contact

/hajj

/umrah

/services/tourist-visas

/services/air-ticketing

/services/b2b-air-ticketing

/destinations

/destinations/[slug]

60. FUTURE CMS READINESS

The architecture must allow future integration with:

Headless CMS

or

Custom Admin Panel.

Future editable data:

Destinations

Packages

Prices

Hotels

Offers

Testimonials

FAQs

Gallery

Blog

Enquiries

Do not build the admin panel yet unless specifically requested.

61. CONTACT / LEAD GENERATION

Primary conversion paths:

Hero CTA

Package enquiry

Destination enquiry

WhatsApp

Contact form

Final CTA

Every major page should have at least one clear conversion point.

Do not make every section contain a CTA.

62. TRUST-BASED UX

The website should answer the visitor's major questions:

Who are you?

What services do you provide?

Can I trust you?

What destinations do you offer?

What packages are available?

How does the process work?

How can I contact you?

How can I enquire about Hajj/Umrah?

The user should never feel lost.

63. FINAL HOMEPAGE EXPERIENCE

The homepage should feel like one continuous cinematic story:

ACT 1 — ARRIVAL

Editorial cinematic hero.

Visitor enters the world of Supriya Travels.

↓

ACT 2 — TRUST

Company introduction.

↓

ACT 3 — PURPOSE

Hajj & Umrah.

↓

ACT 4 — EXPLORATION

International + domestic destinations.

↓

ACT 5 — CHOICE

Packages.

↓

ACT 6 — CONFIDENCE

Why choose us.

↓

ACT 7 — ACTION

Contact / WhatsApp / Plan Your Journey.

64. DEVELOPMENT PROCESS

Do NOT generate the entire application blindly in one step.

Build in phases.

PHASE 1 — FOUNDATION

Set up:

Next.js

TypeScript

Tailwind

Fonts

Theme

Logo

Global styles

Basic routing

Header

Footer

PHASE 2 — HERO

Implement:

Editorial Cinematic Hero

Reference video

Instrument Serif

Inter

3-column navigation

Transparent header

Hero overlay

Fade-rise animation

CTA

Scroll indicator

Mobile hero

Mobile navigation

Test thoroughly before continuing.

PHASE 3 — HOMEPAGE

Implement:

Trust section

Hajj/Umrah

Services

Destinations

Packages

Why Choose Us

Process

Testimonials

Final CTA

PHASE 4 — DESTINATIONS

Implement dynamic:

/destinations/[slug]

Create all required destination pages.

PHASE 5 — PACKAGES

Implement:

Package listing

Filters

Package cards

Hajj

Umrah

Package enquiry

PHASE 6 — SERVICES

Implement:

Services overview

Tourist visa

Air ticketing

B2B ticketing

PHASE 7 — CONTACT

Implement:

Contact page

Form

Validation

WhatsApp

Success/error states

PHASE 8 — MOTION

Implement:

GSAP

ScrollTrigger

Framer Motion

Lenis

Image reveals

Page transitions

Micro interactions

PHASE 9 — SEO + ACCESSIBILITY

Implement:

Metadata

Structured data

Sitemap

Robots

Accessibility

Keyboard navigation

Reduced motion

PHASE 10 — PERFORMANCE + QA

Optimize:

Images

Video

Fonts

JavaScript

Animations

Mobile performance

Run:

Lighthouse

Chrome

Firefox

Safari

Edge

Mobile testing

65. ISSUE TRACKING

Create:

PROJECT_STATUS.md

CHANGELOG.md

ISSUE_LOG.md

After each development phase update:

PROJECT_STATUS.md

Record:

Current phase

Completed features

Pending features

Known issues

Next phase

For every issue:

Issue ID
Date
Page
Description
Severity
Status
Root Cause
Resolution
Files Changed


Do not move to the next phase with unresolved blocking errors.

66. FINAL QUALITY STANDARD

The final website should look like a website produced by a professional:

UI/UX designer

Brand designer

Frontend engineer

Motion designer

Travel marketing team

It should NOT look like:

"AI generated travel website."

The final experience should be:

Minimalist Editorial

Cinematic

Premium Travel

Indian Trust

Hajj & Umrah Expertise

International Travel

67. FINAL HERO DESIGN SUMMARY

The final homepage hero must specifically follow this hierarchy:

TRANSPARENT NAVIGATION

[ SUPRIYA TRAVELS LOGO ]

Home About Packages Services Destinations Contact

                          [ Plan Your Journey ]


            SUPRIYA TRAVELS OF INDIA

             Journeys That
             Stay With You.

    From sacred journeys to unforgettable escapes,
  travel with comfort, care and complete confidence.

      [ Explore Our Packages ]

         [ Plan Your Journey ]

              SCROLL TO EXPLORE
                   │
                   │


FULL-BLEED CINEMATIC VIDEO BACKGROUND

Use the supplied reference video as the visual background.

Maintain the editorial typography and minimalist composition.

The hero should feel calm, luxurious and cinematic.

68. NON-NEGOTIABLE REQUIREMENTS

Use the supplied Supriya Travels logo.

Use Instrument Serif for major display typography.

Use Inter for UI/body.

Maintain hero H1 letter-spacing of -2.46px.

Use the supplied cinematic video as hero background.

Use the Editorial Cinematic hero composition.

Use Framer Motion.

Use GSAP + ScrollTrigger where appropriate.

Use Lenis for smooth scrolling.

Make every destination independently accessible.

Build at least 5 core pages.

Make the site fully responsive.

Make the site SEO-ready.

Do not fabricate company information.

Do not make the website look AI-generated.

Avoid excessive animations.

Optimize the hero video for performance.

Keep the website CMS-ready.

Maintain clean TypeScript architecture.

Test every phase before continuing.

The final result should be a visually premium, fast, accessible, responsive and conversion-focused travel website specifically designed for:

SUPRIYA TRAVELS OF INDIA

The website should immediately communicate:

"This is a trusted, premium travel company that can handle my journey professionally."

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/deb29f38-96d0-4285-8011-9ce4d72ed502).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
