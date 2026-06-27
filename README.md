# FCPS Education Proxy

## Quick Start

### Using jsDelivr CDN

Access the proxy directly via jsDelivr:

```
https://cdn.jsdelivr.net/gh/thoochso-a11y/fcps-education/index.svg
```

Or with latest version:
```
https://cdn.jsdelivr.net/gh/thoochso-a11y/fcps-education@latest/index.svg
```

### How to Use

1. Visit the jsDelivr link above in your browser
2. Enter any URL you want to access through the proxy
3. The proxy will bypass filters and restrictions

## Proxy Files

- `index.svg` - Main proxy entry point (runs in SVG context)
- `index.html` - HTML fallback
- `sw.js` - Service worker initialization
- `s_sw.js` - Scramjet service worker
- `loadersw.js` - Service worker with caching
- `q/` - Ultraviolet proxy engine files
- `UqXob4bh.js` - Application loader

## Technology Stack

- **Ultraviolet** - Web proxy engine
- **Service Workers** - Request interception
- **jsDelivr** - CDN delivery (bypasses filters)
- **SVG-based** - Runs inside SVG for stealth
