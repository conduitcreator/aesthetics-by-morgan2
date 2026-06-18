import * as React_2 from 'react';

/** Groups AccordionItems with hairline dividers. */
export declare function Accordion({ children, className }: AccordionProps): React_2.JSX.Element;

/**
 * A single disclosure row built on native <details>/<summary>, so it is keyboard
 * accessible with no JS. The clay "+" rotates to "×" and the title turns clay when open.
 */
export declare function AccordionItem({ title, children, defaultOpen, className }: AccordionItemProps): React_2.JSX.Element;

export declare interface AccordionItemProps {
    /** The always-visible summary label. */
    title: React_2.ReactNode;
    /** Revealed content. */
    children: React_2.ReactNode;
    /** Start expanded. Default false. */
    defaultOpen?: boolean;
    className?: string;
}

export declare interface AccordionProps {
    /** A set of <AccordionItem> children. */
    children: React_2.ReactNode;
    className?: string;
}

/**
 * The ABM call-to-action button. Clay fill by default (use it sparingly, for the
 * primary action), or `variant="secondary"` for the espresso outline. Pass `href`
 * to render a brand-styled link instead of a `<button>`.
 */
export declare function Button({ variant, href, className, children, ...rest }: ButtonProps): React_2.JSX.Element;

export declare interface ButtonProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual style. `primary` = clay fill (the main CTA); `secondary` = espresso outline. */
    variant?: ButtonVariant;
    /** When set, the button renders as a styled anchor pointing at this URL. */
    href?: string;
}

export declare type ButtonVariant = 'primary' | 'secondary';

/**
 * Flat ABM content card: linen or ivory fill, hairline greige border, no shadow
 * (the system is deliberately shadowless). Set `lift` for an interactive hover.
 */
export declare function Card({ surface, lift, className, children, ...rest }: CardProps): React_2.JSX.Element;

export declare interface CardProps extends React_2.HTMLAttributes<HTMLDivElement> {
    /** Fill surface. `linen` (default) or `ivory` for contrast within a linen section. */
    surface?: 'linen' | 'ivory';
    /** Add the gentle hover lift (rises 4px, border warms to clay). Default false. */
    lift?: boolean;
    children: React_2.ReactNode;
}

/**
 * Full-width warm call-to-action band, centered: eyebrow, the roman+italic
 * lockup, supporting copy, and one clay CTA. This is where clay reads as the
 * intended soft terracotta rather than a hot accent.
 */
export declare function CTABand({ eyebrow, roman, italic, body, ctaLabel, ctaHref, surface, className, }: CTABandProps): React_2.JSX.Element;

export declare interface CTABandProps {
    /** Optional eyebrow above the heading. */
    eyebrow?: React_2.ReactNode;
    /** Roman headline line. */
    roman: React_2.ReactNode;
    /** Italic clay accent line (rendered inline after the roman). */
    italic?: React_2.ReactNode;
    /** Supporting copy under the heading. */
    body?: React_2.ReactNode;
    /** CTA label. */
    ctaLabel: React_2.ReactNode;
    /** CTA target. Default "#contact". */
    ctaHref?: string;
    /** Band surface. Both are light, so ink stays espresso. Default blush. */
    surface?: 'blush' | 'linen';
    className?: string;
}

/**
 * Small uppercase, wide-tracked label that sits above headings. Taupe on light
 * backgrounds; switch to `tone="blush"` when placed on the espresso surface.
 */
export declare function Eyebrow({ tone, className, children, ...rest }: EyebrowProps): React_2.JSX.Element;

export declare interface EyebrowProps extends React_2.HTMLAttributes<HTMLParagraphElement> {
    /** Label text. Use sentence-case words; the component uppercases visually. */
    children: React_2.ReactNode;
    /** `taupe` on light surfaces (default); `blush` on the espresso surface. */
    tone?: 'taupe' | 'blush';
}

/**
 * Espresso footer with the logo, tagline, an "Explore" link column, and a
 * "Connect" column (Instagram, email, location). Ivory ink on the espresso surface.
 */
export declare function Footer({ tagline, nav, instagram, email, location, className, }: FooterProps): React_2.JSX.Element;

export declare interface FooterLink {
    label: React_2.ReactNode;
    href: string;
}

export declare interface FooterProps {
    /** Short brand line under the logo. */
    tagline?: React_2.ReactNode;
    /** "Explore" column links. */
    nav?: FooterLink[];
    /** Instagram handle + URL. */
    instagram?: {
        handle: string;
        href: string;
    };
    /** Contact email. */
    email?: string;
    /** Location line. */
    location?: React_2.ReactNode;
    className?: string;
}

/**
 * Full-bleed hero: a background image under an espresso scrim, with the signature
 * type lockup in ivory (the italic line stays ivory here, not clay, so it reads
 * calm over the dark image), supporting copy, and one clay CTA.
 */
export declare function Hero({ eyebrow, roman, italic, body, image, primaryCtaLabel, primaryCtaHref, secondaryCtaLabel, secondaryCtaHref, minHeight, className, }: HeroProps): React_2.JSX.Element;

export declare interface HeroProps {
    /** Eyebrow above the headline (rendered in blush over the scrim). */
    eyebrow?: React_2.ReactNode;
    /** Roman headline line (ivory). */
    roman: React_2.ReactNode;
    /** Italic accent line (rendered ivory, not clay, for calm over the dark image). */
    italic?: React_2.ReactNode;
    /** Supporting copy. */
    body?: React_2.ReactNode;
    /** Background image (full-bleed, behind an espresso scrim). */
    image?: {
        src: string;
        alt?: string;
    };
    /** Primary (clay) CTA. */
    primaryCtaLabel?: React_2.ReactNode;
    primaryCtaHref?: string;
    /** Secondary (ivory outline) CTA. */
    secondaryCtaLabel?: React_2.ReactNode;
    secondaryCtaHref?: string;
    /** Min height. Default '100svh'. */
    minHeight?: string;
    className?: string;
}

/**
 * The ABM logo: an SVG emblem (clay hairline ring + Cormorant "abm" monogram)
 * with the optional wordmark. The monogram uses currentColor, so it follows `tone`
 * (or any text color you set), while the ring stays clay.
 */
export declare function Logo({ tone, showWordmark, subtitle, href, className, }: LogoProps): React_2.JSX.Element;

export declare interface LogoProps {
    /** Ink color for the monogram + wordmark. `espresso` on light, `ivory` on dark. */
    tone?: 'espresso' | 'ivory';
    /** Show the "Aesthetics by Morgan" wordmark beside the emblem. Default true. */
    showWordmark?: boolean;
    /** Small line under the wordmark. Pass null to hide. */
    subtitle?: React_2.ReactNode;
    /** Render as a link to this URL (adds an accessible label). */
    href?: string;
    className?: string;
}

export declare interface MarqueeImage {
    src: string;
    alt: string;
}

/**
 * Top navigation bar with the ABM logo, links, and a clay CTA, plus a built-in
 * mobile menu. Use `transparent` when it sits over the hero (ivory ink); omit it
 * for the solid ivory bar (espresso ink) used after scroll.
 */
export declare function NavBar({ links, ctaLabel, ctaHref, transparent, className, }: NavBarProps): React_2.JSX.Element;

export declare interface NavBarProps {
    /** Primary navigation links. */
    links?: NavLink[];
    /** CTA button label. */
    ctaLabel?: React_2.ReactNode;
    /** CTA target. Default "#contact". */
    ctaHref?: string;
    /** Transparent over a dark hero (ivory ink) vs solid ivory bar (espresso ink). */
    transparent?: boolean;
    className?: string;
}

export declare interface NavLink {
    label: React_2.ReactNode;
    href: string;
}

/**
 * Auto-scrolling horizontal banner of vertical image cards (reel covers / photos).
 * Loops seamlessly, pauses on hover/focus, fades at both edges, and falls back to
 * a normal scrollable strip when the user prefers reduced motion. Images are
 * duplicated internally for the seamless loop; pass each only once.
 */
export declare function PortfolioMarquee({ images, aspect, speedSeconds, className, }: PortfolioMarqueeProps): React_2.JSX.Element;

export declare interface PortfolioMarqueeProps {
    /** Images to scroll. Each renders as a fixed-width vertical card. */
    images: MarqueeImage[];
    /** Card aspect ratio. Default '4/5' (Instagram post). */
    aspect?: '4/5' | '9/16' | '1/1';
    /** Seconds for one full loop (higher = slower). Default 45. */
    speedSeconds?: number;
    className?: string;
}

/**
 * The ABM section heading: an optional eyebrow above a Cormorant headline, with
 * the signature roman line plus an italic clay accent line. Use `inlineItalic`
 * when the accent should flow on the same line (e.g. "...providers who want to grow.").
 */
export declare function SectionHeading({ roman, italic, eyebrow, as, size, inlineItalic, align, className, }: SectionHeadingProps): React_2.JSX.Element;

export declare interface SectionHeadingProps {
    /** The roman (upright) headline line. */
    roman: React_2.ReactNode;
    /** Optional italic clay accent line, the signature ABM type move. */
    italic?: React_2.ReactNode;
    /** Optional eyebrow above the heading. */
    eyebrow?: React_2.ReactNode;
    /** Heading element to render. Default `h2`. */
    as?: 'h1' | 'h2' | 'h3';
    /** Type scale. `lg` = hero-ish, `md` = section (default), `sm` = subsection. */
    size?: 'lg' | 'md' | 'sm';
    /** Render the italic accent on the same line as the roman (inline) vs below (block). */
    inlineItalic?: boolean;
    /** Text alignment. */
    align?: 'left' | 'center';
    className?: string;
}

/**
 * A service offering card: optional image header, eyebrow, title, description,
 * an accordion of tiers, and an enquire CTA. Built on Card (ivory, lift).
 */
export declare function ServiceCard({ eyebrow, title, description, image, tiers, footnote, ctaLabel, ctaHref, className, }: ServiceCardProps): React_2.JSX.Element;

export declare interface ServiceCardProps {
    /** Small category label above the title (e.g. "In person"). */
    eyebrow?: React_2.ReactNode;
    /** Service name. */
    title: React_2.ReactNode;
    /** One-line description. */
    description?: React_2.ReactNode;
    /** Optional image header (bleeds to the card's top edge). */
    image?: {
        src: string;
        alt: string;
    };
    /** Pricing/offer tiers, shown as an accordion. */
    tiers?: ServiceTier[];
    /** Optional small note under the tiers. */
    footnote?: React_2.ReactNode;
    /** CTA label. Default "Enquire". */
    ctaLabel?: React_2.ReactNode;
    /** CTA target. Default "#contact". */
    ctaHref?: string;
    className?: string;
}

export declare interface ServiceTier {
    title: React_2.ReactNode;
    body: React_2.ReactNode;
    defaultOpen?: boolean;
}

/**
 * Small pill label for statuses or categories (e.g. "Most booked", "In-person").
 * Blush fill by default; use `linen` for a quieter tag inside blush contexts.
 */
export declare function Tag({ variant, className, children, ...rest }: TagProps): React_2.JSX.Element;

export declare interface TagProps extends React_2.HTMLAttributes<HTMLSpanElement> {
    /** Tag label. */
    children: React_2.ReactNode;
    /** `blush` (default) or quieter `linen` fill. Text is always espresso. */
    variant?: 'blush' | 'linen';
}

/**
 * A calm testimonial card: a Cormorant quote on a flat card, with attribution.
 * Quotation marks are rendered for you.
 */
export declare function TestimonialCard({ quote, name, detail, lift, className }: TestimonialCardProps): React_2.JSX.Element;

export declare interface TestimonialCardProps {
    /** The quote text (without surrounding quotation marks; they are added). */
    quote: React_2.ReactNode;
    /** Attribution name / role. */
    name: React_2.ReactNode;
    /** Optional second line, e.g. location. */
    detail?: React_2.ReactNode;
    /** Gentle hover lift. Default true. */
    lift?: boolean;
    className?: string;
}

/**
 * Root wrapper that establishes the Aesthetics by Morgan styling scope. Provides
 * the brand fonts and ink color and the `.abm-root` ancestor every ABM component
 * relies on for its tokens, focus rings, and base typography. Wrap your app (or
 * any ABM subtree) in exactly one ThemeProvider.
 */
export declare function ThemeProvider({ children, className, canvas }: ThemeProviderProps): React_2.JSX.Element;

export declare interface ThemeProviderProps {
    /** Content rendered inside the ABM design-system scope. */
    children: React_2.ReactNode;
    /** Extra className applied to the root wrapper. */
    className?: string;
    /** Paint the ivory brand canvas on the wrapper. Default false (transparent). */
    canvas?: boolean;
}

export { }
