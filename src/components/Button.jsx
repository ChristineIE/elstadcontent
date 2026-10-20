import { Link } from 'react-router-dom'

// A button that is either a router link (when `to` is given) or a normal button.
// variant: 'primary' (filled Ignition) or 'outline'
// arrow: adds a small arrow after the label
export default function Button({ to, variant = 'primary', arrow = false, children, ...rest }) {
  const className = `btn btn--${variant}`
  const content = (
    <>
      {children}
      {arrow && (
        <span className="btn__arrow" aria-hidden="true">
          →
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {content}
      </Link>
    )
  }

  return (
    <button className={className} {...rest}>
      {content}
    </button>
  )
}
