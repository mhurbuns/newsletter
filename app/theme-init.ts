export function themeInitScript() {
  // Minimal “set theme ASAP” script to reduce flash of incorrect theme.
  return `
(function () {
  try {
    var key = 'cm-theme';
    var stored = localStorage.getItem(key);
    var theme = (stored === 'light' || stored === 'dark')
      ? stored
      : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();`.trim();
}

