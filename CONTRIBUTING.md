# Contributing to MergeStory for Chrome

Thank you for helping. This extension is small on purpose: it plays the MergeStory video inside the
pull request page, and nothing more.

## Set up

You need Node.js 22.12 or newer.

```bash
npm install
```

```bash
npm run check
```

`npm run check` runs the linter and the tests. To try the extension, open `chrome://extensions`, turn
on **Developer mode**, choose **Load unpacked** and pick this folder. Press the reload button on the
extension card after each change.

## Where things live

- `manifest.json`: what the extension may do.
- `embed.js`: turns a watch link into a player address. The only place that decides what may load.
- `content.js`: runs on `github.com` and puts the player in the comment.
- `player.html` and `player.js`: the extension page that holds the video player.
- `icons/`: the icons, made from the MergeStory logo.
- `store/`: the text for the Chrome Web Store listing.

## Pull requests

- Keep pull requests focused. One topic per pull request.
- Add or update tests for behaviour changes. Tests must not need network access.
- Run `npm run check` before you push.
- Write in plain English in code comments and docs: short sentences and common words.
- A new permission needs a good reason. Say why in the pull request and in the README table.
- Add a line to the changelog for a change that users will notice.
- Never commit secrets or private data.
- Your contribution is licensed under the Apache License 2.0, like the rest of the project (section 5 of
  the license).

## How changes land

- `main` is protected. Every change goes through a pull request.
- The CI `check` job and CodeQL must pass, and the branch must be up to date with `main`.
- Pull requests are squash-merged. The pull request title and description become the commit message.

## Releasing

1. Set the new version in `manifest.json` and `package.json`, run `npm install` so the lockfile
   follows, and add the section to the changelog. Merge that.
2. Run `npm run package` on a clean checkout of `main`.
3. Upload `mergestory-chrome.zip` in the Chrome Web Store developer dashboard. The listing text is in
   [store/listing.md](store/listing.md).
4. Push a tag with the same version, for example `v0.1.0`.

## Reporting security problems

Do not open a public issue. Use GitHub's private vulnerability reporting: open the Security tab of the
repository and choose "Report a vulnerability". See [SECURITY.md](SECURITY.md).

## Code of conduct

Everyone who takes part in this project follows the [Code of Conduct](CODE_OF_CONDUCT.md).
