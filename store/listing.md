# Chrome Web Store listing

The text to paste into the developer dashboard. Keep it in step with the README.

## Store listing

- **Name:** MergeStory
- **Summary (132 characters at most):** Play the MergeStory video inside the pull request page.
- **Category:** Developer Tools
- **Language:** English
- **Homepage:** https://mergestory.pinishv.com/
- **Support:** https://github.com/PiniShv/mergestory-chrome/issues

### Description

MergeStory turns a pull request into a short, narrated video and posts a comment with the link.

This extension plays that video inside the pull request page. Click the MergeStory link in the
comment, and the video plays right there, next to the code. You stay on the page.

- Works on github.com.
- Plays videos published to YouTube and Google Drive. Any other link opens as before.
- Nothing loads from a video host until you click.
- Ctrl-click or Cmd-click still opens the video in a new tab.
- Collects no data. No settings, no account.

Open source: https://github.com/PiniShv/mergestory-chrome

MergeStory is free and open source: https://github.com/PiniShv/MergeStory

GitHub, YouTube and Google Drive are trademarks of their owners. This extension is not affiliated
with them.

### Images

- **Icon:** `icons/128.png`
- **Screenshot (1280x800):** `store/screenshot.png`

## Privacy practices

- **Single purpose:** Play the MergeStory video of a pull request inside the pull request page.
- **Host permission `github.com` (content script):** The extension finds a click on the MergeStory
  video link in a pull request and puts the video player in the comment.
- **Host permission `www.youtube-nocookie.com`:** The video player loads from this address.
- **`declarativeNetRequestWithHostAccess`:** YouTube refuses to play a request that has no Referer
  header, and an extension page sends none. One session rule adds the header, only on video frames
  that the extension itself opens.
- **Remote code:** No. All code is in the package.
- **Data use:** The extension collects no user data. Tick none of the data boxes, and confirm the
  three statements.
- **Privacy policy:** https://github.com/PiniShv/mergestory-chrome/blob/main/PRIVACY.md

## Distribution

- **Visibility:** Public
- **Regions:** All
- **Price:** Free
