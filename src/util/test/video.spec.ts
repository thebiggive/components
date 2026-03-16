import { VideoService } from '../video';

describe('VideoService', () => {
  describe('getEmbedHtml', () => {
    it('should return a YouTube embed iframe for a YouTube watch URL with alphanumeric ID', () => {
      const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      const expected = '<iframe loading="lazy" src="https://youtube.com/embed/dQw4w9WgXcQ"></iframe>';
      expect(VideoService.getEmbedHtml(url, null)).toBe(expected);
    });

    it('should return a Vimeo player iframe for a Vimeo URL with numeric ID', () => {
      const url = 'https://vimeo.com/123456789';
      const expected = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/123456789?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      expect(VideoService.getEmbedHtml(url, null)).toBe(expected);
    });

    it('should return a generic YouTube iframe for other YouTube URLs', () => {
      const url = 'https://youtube.com/some/other/path';
      const expected = `<iframe loading="lazy" src="${url}"></iframe>`;
      expect(VideoService.getEmbedHtml(url, null)).toBe(expected);
    });

    it('should return a generic Vimeo iframe with title for Vimeo Player URLs', () => {
      const url = 'https://player.vimeo.com/video/123456789';
      const title = 'My Video';
      const expected = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="${url}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="${title}"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      expect(VideoService.getEmbedHtml(url, title)).toBe(expected);
    });

    it('should return a generic Vimeo iframe without title for Vimeo Player URLs when title is null', () => {
      const url = 'https://player.vimeo.com/video/123456789';
      const expected = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="${url}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      expect(VideoService.getEmbedHtml(url, null)).toBe(expected);
    });

    it('should return a generic Vimeo iframe without title for Vimeo Player URLs when title is empty', () => {
      const url = 'https://player.vimeo.com/video/123456789';
      const title = '';
      const expected = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="${url}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      expect(VideoService.getEmbedHtml(url, title)).toBe(expected);
    });

    it('should return a video tag for other URLs', () => {
      const url = 'https://example.com/video.mp4';
      const expected = `<video controls src="${url}"></video>`;
      expect(VideoService.getEmbedHtml(url, null)).toBe(expected);
    });
  });
});
