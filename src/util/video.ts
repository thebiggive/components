export class VideoService {
  static getEmbedHtml(url: string, title: string | null) {
    url = this.replacePageURLwithEmbedURL(url);

    if (url.match(/youtube\.com/g)) {
      return `<iframe loading="lazy" src="${url}"></iframe>`;
    } else if (url.match(/player\.vimeo\.com/g)) {
      const titlePart = title !== null && title.length > 0 ? ` title="${title}"` : '';
      return `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="${url}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;"${titlePart}></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    } else {
      return `<video controls src="${url}"></video>`;
    }
  }

  /**
   * If the user supplied a URL to view a page video in a page on youtube or vimeo,
   * we replace it with the URL to the related embedabble iframe.
   */
  private static replacePageURLwithEmbedURL(url: string) {
    let YoutubeMatch: RegExpMatchArray | null = null;
    let VimeoMatch: RegExpMatchArray | null = null;

    if ((YoutubeMatch = url.match(/youtube.com\/watch\?v=([a-zA-Z0-9]+)/))) {
      url = `https://youtube\.com/embed/${YoutubeMatch[1]}`;
    } else if ((VimeoMatch = url.match(/vimeo.com\/([0-9]+)/))) {
      url = `https://player\.vimeo\.com/video/${VimeoMatch[1]}`;
    }
    return url;
  }
}
