import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'IEEE CS AI/ML Bootcamp 2026';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#000000',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #F9A318',
            borderRadius: '999px',
            padding: '8px 20px',
            color: '#F9A318',
            fontSize: '20px',
            fontWeight: 500,
            marginBottom: '32px',
          }}
        >
          Premier University · Invite-only
        </div>

        <div
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#FAFAFA',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '28px',
          }}
        >
          IEEE CS AI/ML Bootcamp 2026
        </div>

        <div
          style={{
            width: '120px',
            height: '4px',
            backgroundColor: '#F9A318',
            marginBottom: '32px',
          }}
        />

        <div
          style={{
            fontSize: '32px',
            color: '#A3A3A3',
            letterSpacing: '-0.01em',
          }}
        >
          Learn. Build. Innovate.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
