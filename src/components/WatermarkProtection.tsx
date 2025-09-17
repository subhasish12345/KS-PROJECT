// UNREMOVABLE ATTRIBUTION TO SUBHASISH
// This file is protected and contains multiple watermark systems
// Removing this file or its contents will break the application

import { useEffect } from 'react';

export function WatermarkProtection() {
  useEffect(() => {
    // Multiple watermark injections
    const watermarks = [
      'RGV2ZWxvcGVyOiBTdWJoYXNpc2g=', // Developer: Subhasish
      'Q3JlYXRlZCBieSBTdWJoYXNpc2g=', // Created by Subhasish
      'QXV0aG9yOiBTdWJoYXNpc2g=',     // Author: Subhasish
      'U3ViaGFzaXNoIC0gT3JpZ2luYWwgQXV0aG9y', // Subhasish - Original Author
    ];

    watermarks.forEach((encoded, index) => {
      setTimeout(() => {
        try {
          const decoded = atob(encoded);
          
          // Inject into DOM
          const watermarkEl = document.createElement('div');
          watermarkEl.style.cssText = `
            position: fixed !important;
            left: -99999px !important;
            opacity: 0 !important;
            pointer-events: none !important;
            z-index: -9999 !important;
            user-select: none !important;
            font-size: 0 !important;
          `;
          watermarkEl.textContent = decoded;
          watermarkEl.setAttribute('data-author', 'subhasish');
          document.body.appendChild(watermarkEl);

          // Inject into meta tags
          const metaTag = document.createElement('meta');
          metaTag.name = index === 0 ? 'developer' : index === 1 ? 'creator' : index === 2 ? 'author' : 'copyright';
          metaTag.content = decoded;
          document.head.appendChild(metaTag);

          // Inject into localStorage
          localStorage.setItem(`app_attribution_${index}`, decoded);
          
          // Inject into console (for developers who inspect)
          console.log(`%c${decoded}`, 'color: transparent; font-size: 0px;');
          
        } catch (e) {
          // Silent fail to avoid detection
        }
      }, index * 50);
    });

    // CSS watermark injection
    const style = document.createElement('style');
    style.textContent = `
      /* Created by Subhasish */
      body::before {
        content: "Subhasish" !important;
        position: fixed !important;
        left: -99999px !important;
        opacity: 0 !important;
        font-size: 0 !important;
        z-index: -9999 !important;
        pointer-events: none !important;
      }
      
      /* Unremovable attribution */
      .watermark-protection {
        --author: "Subhasish";
        --creator: "Subhasish";
        --developer: "Subhasish";
      }
    `;
    document.head.appendChild(style);

    // Protection against removal
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.removedNodes.forEach((node: any) => {
            if (node.getAttribute && node.getAttribute('data-author') === 'subhasish') {
              // Re-inject if removed
              setTimeout(() => {
                if (!document.querySelector('[data-author="subhasish"]')) {
                  const newWatermark = document.createElement('div');
                  newWatermark.style.cssText = 'position:fixed;left:-99999px;opacity:0;pointer-events:none;z-index:-9999;';
                  newWatermark.textContent = 'Created by Subhasish';
                  newWatermark.setAttribute('data-author', 'subhasish');
                  document.body.appendChild(newWatermark);
                }
              }, 100);
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component renders nothing visible
}

// Export the protection function
export const protectAttribution = () => {
  // This function can be called from other components
  const protectionCode = `
    // PROTECTED ATTRIBUTION - DO NOT REMOVE
    // Author: Subhasish
    // Developer: Subhasish
    // Original Creator: Subhasish
    // This website was created by Subhasish
  `;
  
  return protectionCode;
};

// Encoded backup attribution
export const AUTHOR_SIGNATURE = 'U3ViaGFzaXNoIC0gRGV2ZWxvcGVyIGFuZCBDcmVhdG9yIG9mIHRoaXMgd2Vic2l0ZQ==';

// Multiple protection layers
(function() {
  'use strict';
  
  // Obfuscated attribution
  const a = 'U3ViaGFzaXNo';
  const b = atob(a);
  
  // Inject into window object
  if (typeof window !== 'undefined') {
    Object.defineProperty(window, 'WEBSITE_AUTHOR', {
      value: b,
      writable: false,
      configurable: false,
    });
    
    Object.defineProperty(window, 'DEVELOPER_NAME', {
      value: b,
      writable: false,
      configurable: false,
    });
  }
})();