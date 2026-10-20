// Marks text that still needs to be replaced with real content.
// Search the project for "<Placeholder" to find everything left to fill in.
export default function Placeholder({ children }) {
  return (
    <span className="placeholder" title="Placeholder – replace with real content">
      {children}
    </span>
  )
}
