# MergeStory for Chrome

Plays the [MergeStory](https://mergestory.pinishv.com/) video inside the pull request page.

MergeStory posts a comment on a pull request with a link to a short video that explains the change.
With this extension, a click on that link plays the video in the comment. You stay on the page.

## What it does

- Works on `github.com`.
- Plays videos published to YouTube and Google Drive. Other links open as before.
- Loads nothing from a video host until you click. YouTube plays through `youtube-nocookie.com`.
- Collects no data and has no settings.

## Install from source

1. Open `chrome://extensions` and turn on **Developer mode**.
2. Choose **Load unpacked** and pick this folder.

## Permissions

- `github.com`: to see a click on the MergeStory link.
- `youtube-nocookie.com` and header changes: YouTube refuses to play a request that has no
  `Referer` header. The extension adds one that names the MergeStory site, only for the players it opens.

## Test

```bash
node embed.test.js
```
