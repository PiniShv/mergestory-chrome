# Security

## Reporting a vulnerability

Please do not open a public issue for security problems. Use GitHub's private vulnerability
reporting ("Report a vulnerability" on the Security tab of this repository). We aim to reply
within a few days and will credit reporters who want it.

## How the extension is built

- **Small and plain.** A few short files, no build step, no dependencies at run time and no remote
  code. What is in the repository is what runs.
- **Narrow permissions.** It runs on `github.com`, and it may change one request header on
  `www.youtube-nocookie.com`. It asks for nothing else.
- **Untrusted links.** Anyone can write a link in a comment. Only an `https` link to a YouTube video
  or a Google Drive file becomes a player, and the player address is built from the video or file ID
  alone. The player page checks the link again, because any GitHub page can open it.
- **Nothing loads before a click.** The extension sends no request until you click the link.
- **The header rule is scoped.** It applies only to video frames that the extension itself opens, and
  only for the browser session.

## What to keep in mind

- A Google Drive link can show any file type that Drive can preview, not only a video.
- A player shows content from YouTube or Google Drive inside a GitHub comment. Treat it like any
  other link in a comment.

## Supported versions

The latest released version gets security fixes.
