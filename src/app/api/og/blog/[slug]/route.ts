import { ImageResponse } from 'next/og';
import React from 'react';
import { getPostMetadata } from '@/lib/mdx-utils';

export const runtime = 'nodejs';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const postMetadata = getPostMetadata(slug);

  if (!postMetadata) {
    return new Response('Post not found', { status: 404 });
  }

  const { title, author = 'Yagyaraj', tags = [] } = postMetadata;

  return new ImageResponse(
    React.createElement(
      'div',
      {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          color: '#000000',
          fontFamily: '"Geist", "Inter", "Helvetica Neue", sans-serif',
          position: 'relative',
          // Adding a subtle dot grid pattern for texture
          backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        },
      },
      // Structural Border (Frame)
      React.createElement('div', {
        style: {
          position: 'absolute',
          top: 24,
          left: 24,
          right: 24,
          bottom: 24,
          border: '4px solid #000000',
          pointerEvents: 'none',
          zIndex: 0,
        },
      }),
      
      // Main content container
      React.createElement(
        'div',
        {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            textAlign: 'center',
            maxWidth: '860px',
            padding: '48px',
            backgroundColor: 'rgba(255,255,255,0.8)', // Slight frosting to ensure text legibility over grid
            backdropFilter: 'blur(2px)',
          },
        },
        // Blog Post Indicator (Pill style)
        React.createElement(
          'div', 
          {
            style: {
              fontSize: 16,
              fontWeight: '700',
              color: '#000000',
              marginBottom: 24,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              border: '2px solid #000000',
              padding: '6px 16px',
              borderRadius: '99px',
              backgroundColor: '#ffffff',
            }
          }, 
          'Blog Post'
        ),
        // Title
        React.createElement('div', {
          style: {
            fontSize: 64, // Increased size for impact
            fontWeight: '900',
            marginBottom: 24,
            lineHeight: 1.1,
            color: '#000000',
            letterSpacing: '-0.03em', // Tighter tracking makes it look more premium
          }
        }, title),
        
        // Author
        React.createElement('div', {
          style: {
            fontSize: 22,
            color: '#52525b', // Zinc-600
            marginBottom: 40,
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }
        }, [
          React.createElement('span', { key: 'by', style: { opacity: 0.6 } }, 'Written by'),
          React.createElement('span', { key: 'name', style: { color: '#000000', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#d4d4d8' } }, author)
        ]),

        // Tags
        tags.length > 0 && React.createElement(
          'div',
          {
            style: {
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              justifyContent: 'center',
              maxWidth: 700,
            },
          },
          tags.slice(0, 4).map((tag, index) =>
            React.createElement(
              'div',
              {
                key: index,
                style: {
                  // Inverted high-contrast style
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  padding: '8px 16px',
                  fontSize: 16,
                  fontWeight: '600',
                  borderRadius: 4, // Sharper corners for tech feel
                  textTransform: 'lowercase',
                },
              },
              `#${tag}`
            )
          )
        )
      ),
      // Corner Accents (Geometric, not random dots)
      React.createElement('div', {
        style: {
          position: 'absolute',
          top: 24,
          left: 24,
          width: 0,
          height: 0,
          borderTop: '24px solid #000000',
          borderRight: '24px solid transparent',
        },
      }),
      React.createElement('div', {
        style: {
          position: 'absolute',
          bottom: 24,
          right: 24,
          width: 0,
          height: 0,
          borderBottom: '24px solid #000000',
          borderLeft: '24px solid transparent',
        },
      })
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}