/* Aekant Villa — Chatbot Widget
 * Self-contained: injects its own styles, creates its own DOM.
 * No external dependencies. Stacks above the existing WhatsApp FAB.
 */
(function () {
  'use strict';

  // ─── CONFIG ────────────────────────────────────────────────────────────────
  var WA_NUMBER = '918668331054';
  var WA_BASE   = 'https://wa.me/' + WA_NUMBER;

  // ─── KNOWLEDGE BASE ────────────────────────────────────────────────────────
  var KB = [
    {
      id: 'pricing',
      patterns: ['price', 'rate', 'cost', 'tariff', 'how much', 'pricing', 'budget', 'rent', 'charge', 'fee'],
      response: '**Our Rates** 💰\n\n• **Weekday** (Mon–Thu): ₹8,000–₹9,000 / night\n• **Weekend** (Fri–Sun): ₹10,000–₹12,000 / night\n• **Long Weekend / Holidays**: ₹12,000 / night\n\nRates cover the **entire villa** for up to 12 guests — not per person.\n\nIncludes private pool, all 3 bedrooms, fully-equipped kitchen, bonfire area & outdoor seating.\n\n*Catering available on request at extra cost.*',
      quickReplies: ['What\'s included?', 'How to book?', 'Max guests?'],
      whatsapp: false
    },
    {
      id: 'location',
      patterns: ['location', 'where', 'distance', 'how to reach', 'directions', 'address', 'mumbai', 'pune', 'nashik', 'far', 'km', 'hours', 'alwand', 'trimbak', 'route'],
      response: '**Location** 📍\n\n**Alwand village, near Vaitarna Dam Backwaters, Trimbakeshwar, Nashik — Maharashtra**\n\n**Travel Time:**\n• From Mumbai — 3.5 hrs (185 km)\n• From Thane — 3 hrs (170 km)\n• From Pune — 4 hrs (200 km)\n• From Nashik city — 35 min\n\nNearest landmark: Trimbakeshwar Temple (15 km)\n\nWe share a precise Google Maps link on booking.',
      quickReplies: ['Book via WhatsApp', 'Things to do nearby?', 'Check-in time?'],
      whatsapp: false
    },
    {
      id: 'amenities',
      patterns: ['amenities', 'facilities', 'features', 'pool', 'swimming', 'bedroom', 'bathroom', 'kitchen', 'wifi', 'internet', 'ac', 'air condition', 'tv', 'bonfire', 'terrace', 'parking'],
      response: '**Villa Amenities** 🏡\n\n🏊 **Private Swimming Pool** (year-round)\n🛏️ **3 AC Bedrooms** — sleeps up to 12\n🚿 **4 Bathrooms** with hot water\n🍳 **Fully Equipped Kitchen**\n🔥 **Bonfire Pit** (on request)\n🌄 **Mountain & Valley Views** from terrace\n💧 **Vaitarna Backwater Views**\n📶 **WiFi** throughout\n🅿️ **Ample Parking**\n\n*No pets · No smoking indoors*',
      quickReplies: ['Pricing?', 'Can we cook?', 'Book now'],
      whatsapp: false
    },
    {
      id: 'checkin',
      patterns: ['check in', 'check-in', 'checkin', 'check out', 'checkout', 'check-out', 'timing', 'arrival', 'departure', 'time', 'clock'],
      response: '**Check-in & Check-out** ⏰\n\n• **Check-in:** 1:00 PM\n• **Check-out:** 11:00 AM\n\nEarly check-in or late check-out can be arranged in advance (subject to availability and may incur extra charges).',
      quickReplies: ['Book via WhatsApp', 'What\'s included?', 'Location?'],
      whatsapp: false
    },
    {
      id: 'food',
      patterns: ['food', 'catering', 'cook', 'meal', 'breakfast', 'lunch', 'dinner', 'eat', 'chef', 'cooking', 'barbeque', 'bbq'],
      response: '**Food & Catering** 🍽️\n\nThe kitchen is **fully equipped** — bring groceries and cook your own meals!\n\nWe also offer **catering on request**: a cook & staff can be arranged at extra cost.\n\nSeveral local dhabas and restaurants are a short drive away too. Just let us know your preference when booking.',
      quickReplies: ['Pricing?', 'Book via WhatsApp', 'Amenities?'],
      whatsapp: false
    },
    {
      id: 'capacity',
      patterns: ['how many', 'people', 'guests', 'capacity', 'group', 'family', 'friends', 'corporate', 'party', 'max', 'accommodate', 'fit'],
      response: '**Guest Capacity** 👨‍👩‍👧‍👦\n\nAekant Villa comfortably hosts **up to 12 guests**.\n\n• 3 Bedrooms → 6 guests in beds\n• Extra mattresses available for remaining guests\n\n**Perfect for:**\n• Family & extended-family stays\n• Friend group trips\n• Corporate offsites (up to 12 pax)\n• Couple retreats\n\n*Groups larger than 12? Message us to discuss.*',
      quickReplies: ['Pricing?', 'Amenities?', 'Book now'],
      whatsapp: false
    },
    {
      id: 'booking',
      patterns: ['book', 'booking', 'reserve', 'reservation', 'availability', 'available', 'whatsapp', 'contact', 'confirm', 'pay', 'advance', 'deposit'],
      response: '**How to Book** 📲\n\nBooking is simple — message us on WhatsApp!\n\n1. Share your **dates** (check-in & check-out)\n2. Mention **number of guests**\n3. We confirm availability & share payment details\n4. **50% advance** secures your booking\n\nWe typically respond within a few hours. 🙏',
      quickReplies: ['Open WhatsApp', 'Pricing?', 'Check-in time?'],
      whatsapp: true
    },
    {
      id: 'activities',
      patterns: ['activities', 'things to do', 'nearby', 'attractions', 'places', 'sightseeing', 'trimbakeshwar', 'vaitarna', 'temple', 'dam', 'trek', 'igatpuri', 'brahmagiri'],
      response: '**Nearby Attractions** 🗺️\n\n• **Trimbakeshwar Temple** — sacred Jyotirlinga, 15 km\n• **Vaitarna Dam** — scenic backwaters right by the villa\n• **Brahmagiri Hill** — trekking & sunrise views, 20 km\n• **Anjneri Hill** — Hanuman\'s birthplace, 25 km\n• **Nashik City** — wine country, temples & markets, 35 min\n• **Igatpuri** — trekking, lakes & Vipassana, 40 km\n\nOr simply relax at the private pool — that\'s a full day too! 😄',
      quickReplies: ['Location?', 'Pricing?', 'Book now'],
      whatsapp: false
    },
    {
      id: 'pets',
      patterns: ['pet', 'dog', 'cat', 'animal', 'bring pet', 'puppy'],
      response: 'We\'re sorry — **pets are not permitted** at Aekant Villa to maintain a clean and comfortable environment for all guests.',
      quickReplies: ['Other questions?', 'Book now', 'Amenities?'],
      whatsapp: false
    },
    {
      id: 'smoking',
      patterns: ['smoke', 'smoking', 'cigarette', 'hookah', 'vape', 'shisha'],
      response: '**Smoking is not permitted indoors.** Guests may smoke only in designated outdoor areas.',
      quickReplies: ['Amenities?', 'Book now', 'Pricing?'],
      whatsapp: false
    }
  ];

  var INIT_REPLIES = ['Pricing & Rates', 'Location', 'Amenities', 'How to Book', 'Things to do'];
  var FALLBACK     = 'I\'m not sure about that — but I can help with **pricing, location, amenities, and bookings**. Or reach us directly on WhatsApp for anything specific! 😊';

  // ─── STYLES ────────────────────────────────────────────────────────────────
  var CSS = [
    /* Floating chat button */
    '#avchat-btn{position:fixed;bottom:100px;right:24px;width:56px;height:56px;background:#2E7D32;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 18px rgba(46,125,50,.45);z-index:9800;transition:transform .2s,box-shadow .2s}',
    '#avchat-btn:hover{transform:scale(1.08);box-shadow:0 6px 24px rgba(46,125,50,.55)}',
    '#avchat-btn svg{width:26px;height:26px;fill:#fff;flex-shrink:0}',
    '#avchat-badge{position:absolute;top:1px;right:1px;width:13px;height:13px;background:#D4AF37;border-radius:50%;border:2.5px solid #fff;display:none}',
    '#avchat-badge.show{display:block}',

    /* Chat window */
    '#avchat-win{position:fixed;bottom:168px;right:24px;width:355px;max-height:530px;background:#fff;border-radius:20px;box-shadow:0 10px 50px rgba(0,0,0,.18);display:flex;flex-direction:column;z-index:9801;overflow:hidden;transform:scale(.88) translateY(16px);opacity:0;pointer-events:none;transform-origin:bottom right;transition:transform .28s cubic-bezier(.34,1.56,.64,1),opacity .2s}',
    '#avchat-win.open{transform:scale(1) translateY(0);opacity:1;pointer-events:auto}',

    /* Header */
    '#avchat-hd{background:#2E7D32;padding:13px 16px;display:flex;align-items:center;gap:11px;flex-shrink:0}',
    '.avchat-av{width:38px;height:38px;background:rgba(255,255,255,.15);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.15rem;flex-shrink:0}',
    '.avchat-hi{flex:1;min-width:0}',
    '.avchat-hn{font-family:"Playfair Display",Georgia,serif;font-size:.95rem;font-weight:600;color:#fff;line-height:1.2}',
    '.avchat-hs{font-size:.69rem;color:rgba(255,255,255,.75);margin-top:2px;display:flex;align-items:center;gap:5px}',
    '.avchat-dot{width:7px;height:7px;background:#D4AF37;border-radius:50%;animation:avchat-pulse 2s infinite;flex-shrink:0}',
    '@keyframes avchat-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.55;transform:scale(.8)}}',
    '#avchat-cls{background:none;border:none;cursor:pointer;color:rgba(255,255,255,.75);padding:4px;border-radius:6px;display:flex;align-items:center;transition:color .15s,background .15s}',
    '#avchat-cls:hover{color:#fff;background:rgba(255,255,255,.15)}',
    '#avchat-cls svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round}',

    /* Messages area */
    '#avchat-msgs{flex:1;overflow-y:auto;padding:14px 12px;display:flex;flex-direction:column;gap:9px;background:#F9F8F5;scroll-behavior:smooth}',
    '#avchat-msgs::-webkit-scrollbar{width:4px}',
    '#avchat-msgs::-webkit-scrollbar-track{background:transparent}',
    '#avchat-msgs::-webkit-scrollbar-thumb{background:#d0cfc9;border-radius:4px}',

    /* Bubbles */
    '.avchat-m{max-width:83%;display:flex;flex-direction:column;gap:3px;animation:avchat-in .2s ease}',
    '@keyframes avchat-in{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}',
    '.avchat-m.bot{align-self:flex-start}',
    '.avchat-m.user{align-self:flex-end}',
    '.avchat-b{padding:9px 12px;border-radius:15px;font-size:.82rem;line-height:1.58;color:#2A2A26;word-break:break-word}',
    '.avchat-m.bot .avchat-b{background:#fff;border:1px solid #e8e4dc;border-bottom-left-radius:4px}',
    '.avchat-m.user .avchat-b{background:#2E7D32;color:#fff;border-bottom-right-radius:4px}',
    '.avchat-b strong{font-weight:600}',

    /* WhatsApp CTA inside bubble */
    '.avchat-wa{display:inline-flex;align-items:center;gap:7px;background:#25D366;color:#fff;border:none;border-radius:999px;padding:7px 15px;font-size:.78rem;font-weight:600;cursor:pointer;text-decoration:none;margin-top:8px;transition:background .15s}',
    '.avchat-wa:hover{background:#1da851;color:#fff}',
    '.avchat-wa svg{width:15px;height:15px;fill:#fff;flex-shrink:0}',

    /* Quick replies */
    '#avchat-qr{display:flex;flex-wrap:wrap;gap:6px;padding:8px 12px 6px;background:#F9F8F5}',
    '.avchat-qrb{background:#fff;border:1.5px solid #D4AF37;color:#2A2A26;border-radius:999px;padding:5px 11px;font-size:.74rem;cursor:pointer;transition:background .15s,color .15s;white-space:nowrap;font-family:inherit}',
    '.avchat-qrb:hover{background:#D4AF37;color:#fff}',

    /* Typing indicator */
    '.avchat-typing{display:flex;gap:4px;align-items:center;padding:9px 12px;background:#fff;border:1px solid #e8e4dc;border-radius:15px;border-bottom-left-radius:4px;align-self:flex-start;width:fit-content}',
    '.avchat-typing span{width:7px;height:7px;background:#aaa;border-radius:50%;animation:avchat-bounce 1.2s infinite}',
    '.avchat-typing span:nth-child(2){animation-delay:.15s}',
    '.avchat-typing span:nth-child(3){animation-delay:.3s}',
    '@keyframes avchat-bounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}',

    /* Input bar */
    '#avchat-ft{display:flex;align-items:center;gap:8px;padding:9px 12px;background:#fff;border-top:1px solid #edeae3;flex-shrink:0}',
    '#avchat-inp{flex:1;border:1.5px solid #ddd;border-radius:999px;padding:8px 13px;font-size:.82rem;color:#2A2A26;outline:none;transition:border-color .15s;font-family:inherit;background:#fafaf8}',
    '#avchat-inp:focus{border-color:#2E7D32}',
    '#avchat-inp::placeholder{color:#bbb}',
    '#avchat-snd{width:36px;height:36px;background:#2E7D32;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s}',
    '#avchat-snd:hover{background:#205A24}',
    '#avchat-snd svg{width:15px;height:15px;fill:#fff}',

    /* Mobile: slide up from bottom */
    '@media(max-width:420px){#avchat-win{bottom:0;right:0;left:0;width:100%;max-height:75vh;border-radius:20px 20px 0 0;transform-origin:bottom center}',
    '#avchat-btn{bottom:88px;right:16px}}'
  ].join('');

  // ─── HELPERS ──────────────────────────────────────────────────────────────
  function fmt(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  function matchKB(input) {
    var lower = input.toLowerCase();
    for (var i = 0; i < KB.length; i++) {
      var item = KB[i];
      for (var j = 0; j < item.patterns.length; j++) {
        if (lower.indexOf(item.patterns[j]) !== -1) return item;
      }
    }
    return null;
  }

  function waUrl(msg) {
    return WA_BASE + '?text=' + encodeURIComponent(msg || 'Hi! I would like to enquire about booking Aekant Villa.');
  }

  // ─── BUILD DOM ─────────────────────────────────────────────────────────────
  function init() {
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    // Floating button
    var btn = document.createElement('button');
    btn.id = 'avchat-btn';
    btn.setAttribute('aria-label', 'Open villa chat assistant');
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M12 2C6.48 2 2 6.12 2 11.2c0 2.8 1.31 5.32 3.38 7.08L4 22l3.93-1.37A10.3 10.3 0 0 0 12 21.4C17.52 21.4 22 17.28 22 12.2S17.52 2 12 2z"/>' +
      '</svg>' +
      '<span id="avchat-badge"></span>';

    // Chat window
    var win = document.createElement('div');
    win.id = 'avchat-win';
    win.setAttribute('role', 'dialog');
    win.setAttribute('aria-label', 'Aekant Villa Chat Assistant');
    win.innerHTML =
      '<div id="avchat-hd">' +
        '<div class="avchat-av">🌿</div>' +
        '<div class="avchat-hi">' +
          '<div class="avchat-hn">Aekant Villa</div>' +
          '<div class="avchat-hs"><span class="avchat-dot"></span>Villa Assistant · Replies quickly</div>' +
        '</div>' +
        '<button id="avchat-cls" aria-label="Close chat">' +
          '<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
        '</button>' +
      '</div>' +
      '<div id="avchat-msgs"></div>' +
      '<div id="avchat-qr"></div>' +
      '<div id="avchat-ft">' +
        '<input id="avchat-inp" type="text" placeholder="Ask about pricing, location…" autocomplete="off" maxlength="300"/>' +
        '<button id="avchat-snd" aria-label="Send message">' +
          '<svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>' +
        '</button>' +
      '</div>';

    document.body.appendChild(btn);
    document.body.appendChild(win);

    var msgs   = win.querySelector('#avchat-msgs');
    var qrWrap = win.querySelector('#avchat-qr');
    var inp    = win.querySelector('#avchat-inp');
    var badge  = btn.querySelector('#avchat-badge');
    var isOpen = false;

    // ── Open / Close ──────────────────────────────────────────────────────
    function openChat() {
      isOpen = true;
      win.classList.add('open');
      badge.classList.remove('show');
      btn.setAttribute('aria-expanded', 'true');
      if (msgs.children.length === 0) {
        setTimeout(function () {
          addMsg('Namaste! 🙏 Welcome to **Aekant Villa**.\n\nI\'m your villa assistant. Ask me anything about rates, amenities, location, or how to book!', 'bot', false);
          setQR(INIT_REPLIES);
        }, 280);
      }
      setTimeout(function () { inp.focus(); }, 300);
    }

    function closeChat() {
      isOpen = false;
      win.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', function () {
      if (isOpen) { closeChat(); } else { openChat(); }
    });
    win.querySelector('#avchat-cls').addEventListener('click', closeChat);

    // ── Messages ──────────────────────────────────────────────────────────
    function scrollDown() {
      msgs.scrollTop = msgs.scrollHeight;
    }

    function addMsg(text, role, showWA) {
      var wrap   = document.createElement('div');
      wrap.className = 'avchat-m ' + role;
      var bubble = document.createElement('div');
      bubble.className = 'avchat-b';
      bubble.innerHTML = fmt(text);
      wrap.appendChild(bubble);

      if (showWA) {
        var a = document.createElement('a');
        a.className = 'avchat-wa';
        a.href      = waUrl('Hi! I would like to book Aekant Villa. Please share availability.');
        a.target    = '_blank';
        a.rel       = 'noopener noreferrer';
        a.innerHTML =
          '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.48 2 2 6.48 2 12c0 1.777.467 3.448 1.285 4.898L2 22l5.232-1.266A9.952 9.952 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>' +
          ' Book on WhatsApp';
        wrap.appendChild(a);
      }

      msgs.appendChild(wrap);
      scrollDown();
    }

    function showTyping() {
      var t = document.createElement('div');
      t.className = 'avchat-typing avchat-m';
      t.innerHTML = '<span></span><span></span><span></span>';
      msgs.appendChild(t);
      scrollDown();
      return t;
    }

    function setQR(replies) {
      qrWrap.innerHTML = '';
      if (!replies || !replies.length) return;
      replies.forEach(function (label) {
        var b = document.createElement('button');
        b.className = 'avchat-qrb';
        b.textContent = label;
        b.addEventListener('click', function () {
          if (label === 'Open WhatsApp') {
            window.open(waUrl('Hi! I would like to book Aekant Villa.'), '_blank', 'noopener,noreferrer');
          } else {
            sendMsg(label);
          }
        });
        qrWrap.appendChild(b);
      });
    }

    function botReply(match) {
      if (!match) {
        addMsg(FALLBACK, 'bot', false);
        setQR(INIT_REPLIES);
        return;
      }
      addMsg(match.response, 'bot', match.whatsapp);
      setQR(match.quickReplies && match.quickReplies.length ? match.quickReplies : INIT_REPLIES);
    }

    function sendMsg(text) {
      var trimmed = (text || '').trim();
      if (!trimmed) return;
      inp.value = '';
      addMsg(trimmed, 'user', false);
      setQR([]);

      var typing = showTyping();
      var delay  = 600 + Math.floor(Math.random() * 400);
      setTimeout(function () {
        typing.parentNode && typing.parentNode.removeChild(typing);
        botReply(matchKB(trimmed));
      }, delay);
    }

    win.querySelector('#avchat-snd').addEventListener('click', function () { sendMsg(inp.value); });
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') sendMsg(inp.value); });

    // Nudge badge after 4 s if chat not yet opened
    setTimeout(function () {
      if (!isOpen) badge.classList.add('show');
    }, 4000);
  }

  // ─── BOOT ──────────────────────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
