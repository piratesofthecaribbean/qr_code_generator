import QRCode from 'qrcode';
import { useEffect, useState } from 'react';

const presets = [
  { name: 'Forest', dark: '#12372a', accent: '#b7f34a' },
  { name: 'Emerald', dark: '#064e3b', accent: '#6ee7b7' },
  { name: 'Midnight', dark: '#172033', accent: '#a3e635' },
  { name: 'Grape', dark: '#3b0764', accent: '#c4b5fd' },
];

function Icon({ children }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  );
}

function App() {
  const [text, setText] = useState('https://example.com');
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState('Creating your QR code…');
  const [darkColor, setDarkColor] = useState(presets[0].dark);
  const [accentColor, setAccentColor] = useState(presets[0].accent);
  const [size, setSize] = useState(360);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const generateQRCode = async () => {
      if (!text.trim()) {
        setImageUrl('');
        setStatus('Add something above to create a QR code.');
        return;
      }

      try {
        setStatus('Creating your QR code…');
        const url = await QRCode.toDataURL(text.trim(), {
          margin: 2,
          width: size,
          errorCorrectionLevel: 'H',
          color: { dark: darkColor, light: '#ffffff' },
        });
        setImageUrl(url);
        setStatus('Ready to scan');
      } catch {
        setImageUrl('');
        setStatus('Something went wrong. Please try again.');
      }
    };

    const timer = window.setTimeout(generateQRCode, 180);
    return () => window.clearTimeout(timer);
  }, [text, darkColor, size]);

  const copyText = async () => {
    if (!text.trim()) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const applyPreset = (preset) => {
    setDarkColor(preset.dark);
    setAccentColor(preset.accent);
  };

  return (
    <main style={{ '--accent': accentColor }}>
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="QR Bloom home">
          <span className="brand-mark">
            <Icon><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM15 14h2v2h-2zM18 14h2v4h-2zM14 18h3v2h-3z" /></Icon>
          </span>
          QR<span>Bloom</span>
        </a>
        <span className="privacy-pill">
          <span className="pulse" /> Private by design
        </span>
      </nav>

      <section className="intro" id="top">
        <div className="eyebrow"><span>✦</span> Free · Fast · No sign-up</div>
        <h1>Turn anything into<br />a <em>beautiful QR.</em></h1>
        <p>Create crisp, custom QR codes in seconds. Everything happens in your browser, so your data stays yours.</p>
      </section>

      <section className="workspace" aria-label="QR code generator">
        <div className="editor glass-card">
          <div className="section-heading">
            <span className="step">1</span>
            <div><h2>Add your content</h2><p>Paste a link, message, or any text.</p></div>
          </div>

          <label htmlFor="qr-input">Your link or text</label>
          <div className="input-wrap">
            <Icon><path d="M10.6 13.4a4.7 4.7 0 0 0 6.6.1l2.1-2.1a4.7 4.7 0 0 0-6.6-6.6l-1.2 1.1M13.4 10.6a4.7 4.7 0 0 0-6.6-.1l-2.1 2.1a4.7 4.7 0 0 0 6.6 6.6l1.1-1.1" /></Icon>
            <input id="qr-input" value={text} onChange={(event) => setText(event.target.value)} placeholder="https://your-link.com" autoFocus />
            {text && <button className="icon-button" onClick={() => setText('')} aria-label="Clear input">×</button>}
          </div>
          <div className="input-meta"><span>{text.length} characters</span><button onClick={copyText}>{copied ? 'Copied!' : 'Copy text'}</button></div>

          <div className="divider" />

          <div className="section-heading compact">
            <span className="step">2</span>
            <div><h2>Make it yours</h2><p>Choose a style and export size.</p></div>
          </div>

          <span className="field-label">Color style</span>
          <div className="presets">
            {presets.map((preset) => (
              <button key={preset.name} className={darkColor === preset.dark ? 'preset active' : 'preset'} onClick={() => applyPreset(preset)} aria-label={`${preset.name} color style`}>
                <span style={{ background: preset.dark }}><i style={{ background: preset.accent }} /></span>
                {preset.name}
              </button>
            ))}
          </div>

          <div className="size-row">
            <label htmlFor="size">Export size <strong>{size}px</strong></label>
            <input id="size" type="range" min="240" max="720" step="120" value={size} onChange={(event) => setSize(Number(event.target.value))} />
            <div><span>Small</span><span>Large</span></div>
          </div>
        </div>

        <div className="result glass-card">
          <div className="preview-top">
            <div><span className="live-dot" /> LIVE PREVIEW</div>
            <span>{status}</span>
          </div>
          <div className="qr-stage">
            <div className="corner c1" /><div className="corner c2" /><div className="corner c3" /><div className="corner c4" />
            {imageUrl ? <img src={imageUrl} alt="Generated QR code" /> : <div className="empty">Your QR code<br />will appear here</div>}
          </div>
          <p className="scan-note"><Icon><path d="M3 11a9 9 0 0 1 15.5-5.9M21 13a9 9 0 0 1-15.5 5.9M18 2v4h-4M6 22v-4h4" /></Icon> Updates automatically as you type</p>
          <a className={`download ${!imageUrl ? 'disabled' : ''}`} href={imageUrl || undefined} download="qrbloom-code.png">
            <Icon><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" /></Icon>
            Download PNG
          </a>
          <p className="quality">High quality · Scan-ready · No watermark</p>
        </div>
      </section>

      <footer>Made for sharing, not tracking. <span>QRBloom never stores your content.</span></footer>
    </main>
  );
}

export default App;
