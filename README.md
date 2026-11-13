<p align="center"><img src="icons/128.png" width="96" height="96" alt="MergeStory"></p>

# MergeStory for Chrome

Play the [MergeStory](https://mergestory.pinishv.com/) video inside the pull request page.

[MergeStory](https://github.com/PiniShv/MergeStory) turns a pull request into a short, narrated video
and posts a comment with the link. With this extension, a click on that link plays the video in the
comment. You stay on the page, next to the code.

## What it does

- **Works on `github.com`.** Other git hosts come when MergeStory can post to them.
- **Plays YouTube and Google Drive videos.** Any other link opens as before.
- **Click to play.** Nothing loads from a video host until you click. YouTube plays through
  `youtube-nocookie.com`.
- **Your shortcuts still work.** Ctrl-click or Cmd-click opens the video in a new tab.
- **No data, no settings, no account.** See the [privacy policy](PRIVACY.md).

## Install

The Chrome Web Store listing is on its way. Until then, install from source:

1. Download this repository, or clone it.
2. Open `chrome://extensions` and turn on **Developer mode**.
3. Choose **Load unpacked** and pick the folder.

It should also work in other Chromium browsers, such as Edge and Brave.

## Permissions

| Permission | Why |
| --- | --- |
| Read `github.com` pages | To see a click on the MergeStory link and put the player in the comment. |
| `youtube-nocookie.com` and header changes | YouTube refuses to play a request that has no `Referer` header, and an extension page sends none. The extension adds one that names the MergeStory site, only for the players it opens. |

## How it works

GitHub only allows frames from its own sites. A page of the extension is allowed, so the extension
puts its own small page in the comment, and that page holds the video player. The link is checked
twice, once on the GitHub page and once in the player: only a YouTube video or a Google Drive file
can load.

## Develop

```bash
npm install
```

```bash
npm run check
```

`npm run package` builds `mergestory-chrome.zip`, the file that goes to the Chrome Web Store. See
[CONTRIBUTING.md](CONTRIBUTING.md).

## Documentation

- [Privacy policy](PRIVACY.md)
- [Security](SECURITY.md)
- [Contributing](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Changelog](CHANGELOG.md)

## License

[Apache License 2.0](LICENSE).

GitHub, YouTube, Google Drive and Chrome are trademarks of their owners. This project is not
affiliated with them.
