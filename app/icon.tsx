import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '0',
            background: 'linear-gradient(to top right, hsl(221.2 83.2% 53.3%), hsl(280 100% 70%), hsl(262.1 83.3% 57.8%))',
            opacity: '0.8',
            transform: 'rotate(45deg)',
          }}
        />
        <span
          style={{
            position: 'relative',
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          DN
        </span>
      </div>
    ),
    {
      ...size,
    }
  )
}