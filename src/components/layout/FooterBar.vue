<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <RouterLink to="/" class="footer-logo">
            <img src="/logoentier.svg" alt="Abu Zaynah" class="footer-logo-img" />
          </RouterLink>
          <p class="footer-tagline">L'excellence à l'état pur</p>
          <div class="footer-social">
            <a href="https://wa.me/33745563692" target="_blank" rel="noopener" class="social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href="https://www.snapchat.com/add/abouzaynah" target="_blank" rel="noopener" class="social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.166 0C8.778 0 5.885 1.63 4.283 4.39c-.796 1.38-.957 2.96-.957 4.41 0 .48.03.958.07 1.428-.27.14-.57.21-.87.21-.46 0-.87-.16-1.23-.44-.1-.08-.21-.12-.33-.12-.25 0-.47.2-.47.45 0 .16.08.31.22.4.54.35 1.18.54 1.84.55.12 0 .25-.01.37-.02-.16.56-.26 1.14-.26 1.74 0 .1.01.2.01.3-.13.09-.3.14-.46.14-.26 0-.5-.1-.7-.27-.1-.08-.22-.13-.34-.13-.27 0-.49.22-.49.49 0 .19.1.36.27.44 1.02.55 1.72 1.61 1.72 2.85 0 .54-.14 1.05-.37 1.5-.08.16-.12.33-.12.5 0 .56.44 1.02 1 1.02.18 0 .36-.05.51-.14.73-.43 1.57-.67 2.44-.67.29 0 .58.03.86.08.62.9 1.62 1.48 2.74 1.48.45 0 .88-.1 1.27-.27.39.17.82.27 1.27.27 1.12 0 2.12-.58 2.74-1.48.28-.05.57-.08.86-.08.87 0 1.71.24 2.44.67.15.09.33.14.51.14.56 0 1-.46 1-1.02 0-.17-.04-.34-.12-.5-.23-.45-.37-.96-.37-1.5 0-1.24.7-2.3 1.72-2.85.17-.08.27-.25.27-.44 0-.27-.22-.49-.49-.49-.12 0-.24.05-.34.13-.2.17-.44.27-.7.27-.16 0-.33-.05-.46-.14 0-.1.01-.2.01-.3 0-.6-.1-1.18-.26-1.74.12.01.25.02.37.02.66-.01 1.3-.2 1.84-.55.14-.09.22-.24.22-.4 0-.25-.22-.45-.47-.45-.12 0-.23.04-.33.12-.36.28-.77.44-1.23.44-.3 0-.6-.07-.87-.21.04-.47.07-.948.07-1.428 0-1.45-.16-3.03-.957-4.41C18.115 1.63 15.222 0 11.834 0h.332z"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Navigation</h4>
          <ul class="footer-links">
            <li><RouterLink to="/">Accueil</RouterLink></li>
            <li><RouterLink to="/boutique">Boutique</RouterLink></li>
            <li><RouterLink to="/commander">Commander</RouterLink></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Contact</h4>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 1.22h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.91 8.8a16 16 0 006.29 6.29l.96-.96a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>
            +33 7 45 56 36 92
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <a href="mailto:contact.abuzaynah@gmail.com">contact.abuzaynah@gmail.com</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2025 Abu Zaynah. Tous droits réservés.</p>
        <p>Fait avec soin par <a href="https://ib-studio.fr" target="_blank" rel="noopener">IB Studio</a> — <a href="#">Mentions légales</a></p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  background: var(--brown);
  border-top: 1px solid rgba(255,255,255,0.05);
  padding: 60px 0 32px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 56px;
  margin-bottom: 48px;
}

.footer-logo {
  display: block;
  margin-bottom: 8px;
}

.footer-logo-img {
  height: 50px;
  width: auto;
  display: block;
  filter: brightness(0) invert(1);
}

.footer-tagline {
  font-size: 0.84rem;
  color: rgba(255,255,255,0.42);
  font-style: italic;
  margin-bottom: 22px;
}

.footer-social { display: flex; gap: 10px; }

.social-link {
  width: 36px; height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(200,134,10,0.28);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.45);
  transition: var(--transition);
}
.social-link:hover {
  background: var(--gold);
  border-color: var(--gold);
  color: var(--white);
}

.footer-col h4 {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 18px;
}

.footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.footer-links a { font-size: 0.86rem; color: rgba(255,255,255,0.48); transition: color var(--transition); }
.footer-links a:hover { color: var(--gold); }

.footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.86rem;
  color: rgba(255,255,255,0.48);
  margin-bottom: 10px;
  transition: color var(--transition);
}
.footer-contact-item:hover { color: rgba(255,255,255,0.72); }
.footer-contact-item svg { width: 15px; height: 15px; color: var(--gold); flex-shrink: 0; margin-top: 3px; }
.footer-contact-item a { color: inherit; }

.footer-bottom {
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,0.07);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}
.footer-bottom p { font-size: 0.77rem; color: rgba(255,255,255,0.28); }
.footer-bottom a { color: rgba(200,134,10,0.65); transition: color var(--transition); }
.footer-bottom a:hover { color: var(--gold); }

@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr; gap: 36px; }
  .footer-bottom { flex-direction: column; text-align: center; }
}
</style>
