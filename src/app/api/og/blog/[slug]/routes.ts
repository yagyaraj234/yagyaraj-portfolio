import { ImageResponse } from 'next/og';
import React from 'react';
import { getPostMetadata } from '@/lib/mdx-utils';

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
          backgroundColor: '#0f0f0f',
          color: 'white',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          padding: '40px',
        },
      },
      // Background gradient overlay
      React.createElement('div', {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)',
        },
      }),
      // Main content
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
            maxWidth: '800px',
          },
        },
        // Blog post indicator
        React.createElement('div', {
          style: {
            fontSize: 18,
            color: '#a1a1aa',
            marginBottom: 20,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: '500',
          }
        }, 'Blog Post'),
        // Title
        React.createElement('div', {
          style: {
            fontSize: 48,
            fontWeight: 'bold',
            marginBottom: 24,
            lineHeight: 1.2,
            color: '#ffffff',
          }
        }, title),
        // Author
        React.createElement('div', {
          style: {
            fontSize: 24,
            color: '#a1a1aa',
            marginBottom: 32,
          }
        }, `by ${author}`),
        // Tags
        tags.length > 0 && React.createElement(
          'div',
          {
            style: {
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              justifyContent: 'center',
              maxWidth: 600,
            },
          },
          tags.slice(0, 4).map((tag, index) =>
            React.createElement(
              'div',
              {
                key: index,
                style: {
                  backgroundColor: '#27272a',
                  color: '#ffffff',
                  padding: '6px 12px',
                  borderRadius: 6,
                  fontSize: 14,
                  border: '1px solid #3f3f46',
                  textTransform: 'capitalize',
                },
              },
              tag
            )
          )
        )
      ),
      // Decorative elements
      React.createElement('div', {
        style: {
          position: 'absolute',
          top: 40,
          right: 40,
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: '#eab308',
        },
      }),
      React.createElement('div', {
        style: {
          position: 'absolute',
          bottom: 40,
          left: 40,
          width: 4,
          height: 4,
          borderRadius: '50%',
          backgroundColor: '#eab308',
        },
      }),
      React.createElement('div', {
        style: {
          position: 'absolute',
          top: 80,
          left: 80,
          width: 3,
          height: 3,
          borderRadius: '50%',
          backgroundColor: '#a1a1aa',
        },
      }),
      React.createElement('div', {
        style: {
          position: 'absolute',
          bottom: 80,
          right: 80,
          width: 2,
          height: 2,
          borderRadius: '50%',
          backgroundColor: '#a1a1aa',
        },
      })
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
