export class VideoService {
  static getEmbedHtml(url: string, title: string | null) {
    if (url.match(/youtube\.com/g)) {
      return `<iframe loading="lazy" src="${url}"></iframe>`;
    } else if (url.match(/player\.vimeo\.com/g)) {
      const titlePart = title !== null && title.length > 0 ? ` title="${title}"` : '';
      return `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="${url}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;"${titlePart}></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    } else {
      return `<video controls src="${url}"></video>`;
    }
  }
}
