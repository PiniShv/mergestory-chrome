# Privacy policy

MergeStory for Chrome collects no data.

- **Nothing is collected, stored or sent by the extension.** It has no analytics, no telemetry, no
  account and no server.
- **It reads the page only when you click a link.** On a pull request page it checks two things: is
  the link a YouTube or Google Drive video link, and does the comment or description around it name
  MergeStory. The check happens in your browser. Nothing is kept and nothing is sent.
- **A video host is contacted only when you click.** The player then loads from
  `www.youtube-nocookie.com` or `drive.google.com`. From that moment the privacy policy of Google
  applies to the player, as it does when you open the link in a tab.
- **One request header is added.** YouTube needs a `Referer` header to play. The extension sets it to
  the MergeStory site address, only on the players it opens. It never contains the page you are on.

Questions: open an issue in this repository.
