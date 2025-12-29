import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Return Home
      </Link>
    </div>
  )
}
