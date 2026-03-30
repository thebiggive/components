import { VideoService } from '../video';

describe('VideoService', () => {
  describe('getEmbedHtml', () => {
    it.each([
      ['https://www.youtube.com/watch?v=dQw4w9WgXcQ', null, '<iframe loading="lazy" src="https://youtube.com/embed/dQw4w9WgXcQ"></iframe>'],
      [
        'https://vimeo.com/123456789',
        null,
        `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/123456789?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
      ],
      ['https://youtube.com/some/other/path', null, `<iframe loading="lazy" src="https://youtube.com/some/other/path"></iframe>`],
      [
        'https://player.vimeo.com/video/123456789',
        'My Video',
        `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/123456789?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="My Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
      ],
      [
        'https://player.vimeo.com/video/123456789',
        null,
        `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/123456789?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
      ],
      [
        'https://player.vimeo.com/video/123456789',
        '',
        `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/123456789?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
      ],
      ['https://example.com/video.mp4', null, `<video controls src="https://example.com/video.mp4"></video>`],
    ] as const)('Returns appropriate HTML embed snippet for Video URL', (url: string, title: string | null, expectedSnippet: string) => {
      expect(VideoService.getEmbedHtml(url, title)).toBe(expectedSnippet);
    });
  });
});
