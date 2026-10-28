/** Interactive when `href` is given (real link, keyboard + focus ring); otherwise purely decorative. */
export function BrandMark({ monogram = "N", href, label = "Home" }: { monogram?: string; href?: string; label?: string }) {
  return href
    ? <a className="tl-brand" href={href} aria-label={label}>{monogram}</a>
    : <span className="tl-brand" aria-hidden="true">{monogram}</span>;
}
