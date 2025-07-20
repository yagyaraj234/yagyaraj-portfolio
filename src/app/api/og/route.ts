import { ImageResponse } from 'next/og';
import React from 'react';

export async function GET() {
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
        },
      },
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
            padding: '40px',
          },
        },
        React.createElement('div', { style: { fontSize: 60, marginBottom: 20 } }, "👋 Hey I'm Yagyaraj"),
        React.createElement(
          'div',
          {
            style: {
              fontSize: 32,
              margin: 0,
              marginBottom: 24,
              color: '#a1a1aa',
              fontWeight: 'normal',
            },
          },
          'Full-Stack Software Engineer'
        ),
        React.createElement(
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
          ['React', 'Next.js', 'TypeScript', 'Node.js'].map((skill, index) =>
            React.createElement(
              'div',
              {
                key: index,
                style: {
                  backgroundColor: '#27272a',
                  color: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: 6,
                  fontSize: 18,
                  border: '1px solid #3f3f46',
                },
              },
              skill
            )
          )
        ),
        React.createElement(
          'div',
          {
            style: {
              fontSize: 24,
              margin: 0,
              marginTop: 32,
              color: '#71717a',
              maxWidth: 700,
              lineHeight: 1.4,
            },
          },
          'transforming complex problems into simple, beautiful solutions'
        )
      ),
      React.createElement('div', {
        style: {
          position: 'absolute',
          top: 60,
          right: 60,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#eab308',
        },
      }),
      React.createElement('div', {
        style: {
          position: 'absolute',
          bottom: 60,
          left: 60,
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: '#eab308',
        },
      }),
      React.createElement('div', {
        style: {
          position: 'absolute',
          top: 120,
          left: 120,
          width: 4,
          height: 4,
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