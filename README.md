# QRBloom - Beautiful QR Code Generator

A fast, private, and beautiful QR code generator built with React and Vite. Create custom QR codes in seconds with no sign-up required.

## Features

✨ **Beautiful QR Codes** - Create stunning, custom-colored QR codes with multiple color presets  
⚡ **Fast & Responsive** - Lightning-fast generation with real-time preview  
🔒 **Private by Design** - Everything happens in your browser—your data stays yours  
🎨 **Customizable** - Choose from preset color styles or customize dark/light colors  
📏 **Adjustable Size** - Export QR codes in multiple sizes (240px to 720px)  
📱 **No Sign-up** - Get started instantly without creating an account  
✅ **Scan-Ready** - High-quality QR codes with error correction level H  
💾 **Easy Download** - Export your QR codes as PNG images  

## Color Presets

- **Forest** - Dark green (`#12372a`) with lime accent (`#b7f34a`)
- **Emerald** - Deep emerald (`#064e3b`) with teal accent (`#6ee7b7`)
- **Midnight** - Dark navy (`#172033`) with lime accent (`#a3e635`)
- **Grape** - Deep purple (`#3b0764`) with violet accent (`#c4b5fd`)

## Tech Stack

- **React 18.3** - UI framework
- **Vite 5.4** - Build tool and dev server
- **QRCode.js** - QR code generation library
- **CSS3** - Custom styling with glass-morphism effects

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/piratesofthecaribbean/qr_code_generator.git
cd qr_code_generator

# Install dependencies
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Building for Production

Build the project for deployment:

```bash
npm run build
```

This generates optimized files in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Usage

1. **Enter Content** - Paste a URL, message, or any text in the input field
2. **Customize Style** - Select a color preset or customize colors
3. **Adjust Size** - Use the slider to choose export size (240px - 720px)
4. **Download** - Click "Download PNG" to save your QR code

The QR code updates automatically as you type with a 180ms debounce for optimal performance.

## Project Structure

```
├── src/
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # React entry point
│   └── style.css         # Global styles
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## How It Works

1. **Input Handling** - The app listens to user input and debounces updates (180ms)
2. **QR Generation** - Uses the QRCode.js library to generate codes with:
   - Error correction level: H (30% data recovery)
   - Margin: 2px
   - Custom colors: Dark and light colors configurable
3. **Real-time Preview** - Live preview updates as you type
4. **Download** - Generated codes export as high-quality PNG images

## Performance

- Lightweight bundle with minimal dependencies
- Efficient re-rendering with React hooks
- Debounced QR generation to prevent excessive computations
- CSS animations with GPU acceleration

## Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Security & Privacy

- **Zero Server Storage** - No data is sent to any server
- **Client-side Only** - All processing happens in your browser
- **No Tracking** - Complete privacy—we never store your QR code content
- **No Sign-up Required** - Completely anonymous usage

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please open an issue on the GitHub repository.

---

**Made with ❤️ for sharing, not tracking.**
