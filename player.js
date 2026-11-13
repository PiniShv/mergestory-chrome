// Any GitHub page can open this file with any address after the #, so the link is checked again here.
const src = embedUrl(decodeURIComponent(location.hash.slice(1)));

async function play() {
  // YouTube refuses to play (error 153) when the request has no Referer header, and an
  // extension page sends none. This rule adds one, only for players this extension opens.
  await chrome.declarativeNetRequest.updateSessionRules({
    removeRuleIds: [1],
    addRules: [
      {
        id: 1,
        action: {
          type: 'modifyHeaders',
          requestHeaders: [{ header: 'Referer', operation: 'set', value: 'https://mergestory.pinishv.com/' }],
        },
        condition: {
          urlFilter: '||www.youtube-nocookie.com/embed/',
          resourceTypes: ['sub_frame'],
          initiatorDomains: [chrome.runtime.id],
        },
      },
    ],
  });
  const frame = document.createElement('iframe');
  frame.title = 'MergeStory video';
  frame.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media';
  frame.allowFullscreen = true;
  frame.src = src;
  document.body.append(frame);
}

if (src) play();
