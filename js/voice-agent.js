/* Aekant Villa — Voice Agent Web Button
 *
 * SETUP REQUIRED before this works:
 * 1. Sign up at https://vapi.ai
 * 2. Create an assistant using the prompt in vapi/agent-prompt.md
 * 3. Copy your Assistant ID from Vapi dashboard → Assistants
 * 4. Copy your Public Key from Vapi dashboard → Account → API Keys
 * 5. Replace the two placeholder values below with your real values
 */

(function () {
  'use strict';

  var VAPI_PUBLIC_KEY  = 'YOUR_VAPI_PUBLIC_KEY';   // Replace this
  var VAPI_ASSISTANT_ID = 'YOUR_ASSISTANT_ID';      // Replace this

  // Don't run if not configured
  if (VAPI_PUBLIC_KEY === 'YOUR_VAPI_PUBLIC_KEY') return;

  // ── Load Vapi SDK ──────────────────────────────────────────────────────────
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@vapi-ai/web@latest/dist/vapi.min.js';
  script.onload = function () { initVoiceAgent(); };
  document.head.appendChild(script);

  // ── Styles ────────────────────────────────────────────────────────────────
  var CSS = [
    '#av-voice-btn{position:fixed;bottom:168px;right:91px;width:56px;height:56px;background:#2E7D32;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 18px rgba(46,125,50,.45);z-index:9800;transition:transform .2s,box-shadow .2s}',
    '#av-voice-btn:hover{transform:scale(1.08)}',
    '#av-voice-btn svg{width:24px;height:24px;fill:#fff;flex-shrink:0}',
    '#av-voice-btn.listening{background:#C62828;animation:av-ring 1.5s infinite}',
    '@keyframes av-ring{0%,100%{box-shadow:0 0 0 0 rgba(198,40,40,.4)}70%{box-shadow:0 0 0 14px rgba(198,40,40,0)}}',
    '#av-voice-toast{position:fixed;bottom:234px;right:80px;background:#1D2B1E;color:#fff;padding:8px 14px;border-radius:10px;font-size:.78rem;font-family:-apple-system,system-ui,sans-serif;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .2s;z-index:9802}',
    '#av-voice-toast.show{opacity:1}',
    '@media(max-width:420px){#av-voice-btn{bottom:156px;right:80px}}'
  ].join('');

  var style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  // ── Build button ──────────────────────────────────────────────────────────
  var btn = document.createElement('button');
  btn.id = 'av-voice-btn';
  btn.setAttribute('aria-label', 'Talk to villa AI assistant');
  btn.title = 'Talk to our AI assistant';
  btn.innerHTML =
    '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.93V21h2v-2.07A7 7 0 0 0 19 12h-2z"/>' +
    '</svg>';

  var toast = document.createElement('div');
  toast.id = 'av-voice-toast';
  toast.textContent = 'Connecting…';

  document.body.appendChild(btn);
  document.body.appendChild(toast);

  function showToast(msg, duration) {
    toast.textContent = msg;
    toast.classList.add('show');
    if (duration) setTimeout(function () { toast.classList.remove('show'); }, duration);
  }

  // ── Vapi integration ──────────────────────────────────────────────────────
  function initVoiceAgent() {
    if (!window.Vapi) { console.warn('Vapi SDK not loaded'); return; }

    var vapi  = new window.Vapi(VAPI_PUBLIC_KEY);
    var inCall = false;

    btn.addEventListener('click', function () {
      if (inCall) {
        vapi.stop();
      } else {
        btn.classList.add('listening');
        showToast('Connecting to Aekant Villa AI…');
        vapi.start(VAPI_ASSISTANT_ID);
      }
    });

    vapi.on('call-start', function () {
      inCall = true;
      btn.setAttribute('aria-label', 'End call');
      showToast('Connected — speak now 🎙️', 3000);
    });

    vapi.on('call-end', function () {
      inCall = false;
      btn.classList.remove('listening');
      btn.setAttribute('aria-label', 'Talk to villa AI assistant');
      showToast('Call ended', 2500);
    });

    vapi.on('error', function (e) {
      console.error('Vapi error:', e);
      inCall = false;
      btn.classList.remove('listening');
      showToast('Could not connect. Please try WhatsApp.', 3500);
    });
  }
})();
