// Click to play: nothing loads from a video host until the reviewer clicks a video link.
// One listener on the document also covers GitHub's in-page navigation.

document.addEventListener(
  'click',
  (event) => {
    // A modified click (new tab, new window) keeps its normal meaning.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest?.('.markdown-body a[href]');
    if (!link) return;
    // A team can word its comment as it likes, so the link text is not checked. A video link counts
    // when it is on a pull request page and the text block around it names MergeStory.
    if (!/^\/[^/]+\/[^/]+\/pull\/\d+/.test(location.pathname)) return;
    const body = link.closest('.markdown-body');
    if (!body.textContent.includes('MergeStory') || !embedUrl(link.href)) return;
    event.preventDefault();

    let player = body.querySelector('iframe.mergestory-player');
    // A second link to another video gets its own player, in its own place.
    if (player && player.dataset.href !== link.href) {
      player.remove();
      player = null;
    }
    if (!player) {
      player = document.createElement('iframe');
      player.className = 'mergestory-player';
      player.dataset.href = link.href;
      player.title = 'MergeStory video';
      player.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media';
      player.allowFullscreen = true;
      player.style.cssText =
        'display:block;width:100%;aspect-ratio:16/9;border:0;border-radius:6px;margin:8px 0';
      // GitHub only allows its own frames. A page of this extension is allowed, and it holds the player.
      player.src = `${chrome.runtime.getURL('player.html')}#${encodeURIComponent(link.href)}`;
      (link.closest('p') ?? link).after(player);
      // The preview image did its job; the player takes its place.
      const poster = body.querySelector('img[alt="MergeStory video preview"]');
      if (poster) (poster.closest('p') ?? poster).hidden = true;
    }
    player.scrollIntoView({ block: 'nearest' });
    player.focus();
  },
  true,
);
