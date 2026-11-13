// Maps a MergeStory watch link to a player address. Returns null for any other link.
// Both the page script and the player use it, so the player never trusts what the page sends.
function embedUrl(href) {
  let u;
  try {
    u = new URL(href);
  } catch {
    return null;
  }
  if (u.protocol !== 'https:') return null;
  const id =
    u.hostname === 'www.youtube.com' && u.pathname === '/watch'
      ? u.searchParams.get('v')
      : u.hostname === 'youtu.be'
        ? u.pathname.slice(1)
        : null;
  if (id && /^[\w-]{6,20}$/.test(id)) return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
  const file = u.hostname === 'drive.google.com' && /^\/file\/d\/([\w-]{10,100})(?:\/|$)/.exec(u.pathname);
  // shortcut: Drive previews any file type, not only video; the link alone cannot tell them apart.
  if (file) return `https://drive.google.com/file/d/${file[1]}/preview`;
  // shortcut: YouTube and Google Drive links only; add a host here when MergeStory gets a new publisher.
  return null;
}

if (typeof module !== 'undefined') module.exports = { embedUrl };
