/**
 * The intro loading screen plays once per browser session. After that, the
 * page shows straight away: on reload and when coming back from a write-up.
 */
const INTRO_SEEN_KEY = "intro-seen";

/** On <html> when the intro was seen; globals.css hides the loading screen with it. */
export const INTRO_SEEN_ATTR = "data-intro-seen";

/**
 * Runs in <head> before the page is painted, so a returning visitor never
 * sees a flash of the loading screen before React takes over.
 */
export const introSeenScript = `try{if(sessionStorage.getItem("${INTRO_SEEN_KEY}"))document.documentElement.setAttribute("${INTRO_SEEN_ATTR}","")}catch(e){}`;

export function markIntroSeen() {
  document.documentElement.setAttribute(INTRO_SEEN_ATTR, "");
  try {
    sessionStorage.setItem(INTRO_SEEN_KEY, "1");
  } catch {
    // Storage blocked (private mode): the intro just plays again next time.
  }
}
