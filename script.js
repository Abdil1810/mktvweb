const playlistURL = 'https://raw.githubusercontent.com/Abdil1810/channel.m3u8/refs/heads/main/list.m3u8';

async function loadPlaylist() {
  const res = await fetch(playlistURL);
  const text = await res.text();
  const lines = text.split('\n');

  let container = document.getElementById('channel-list');

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('#EXTINF')) {
      const name = lines[i].split(',')[1];
      const url = lines[i + 1];

      let btn = document.createElement('button');
      btn.innerText = name;
      btn.onclick = () => play(url);
      btn.tabIndex = 0;

      container.appendChild(btn);
    }
  }
}

function play(url) {
  const video = document.getElementById('player');
  video.src = url;
  video.play();
}

window.onload = loadPlaylist;
