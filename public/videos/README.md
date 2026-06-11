# Hero Video

Place your worship video file here.

## Requirements
- Filename: `hero.mp4` (required) and optionally `hero.webm`
- Resolution: 1920×1080px (1080p) recommended
- Format: H.264 MP4 for widest browser support; WebM for better compression
- Duration: 30–120 seconds, looping seamlessly
- Content: Worship, instruments, congregation, nature
- Size: Keep under 15MB for fast loading

## Tips
- Mute the audio track from the file itself (the HTML `muted` attribute handles it but smaller files help)
- Trim to a visually interesting loop point
- Convert with FFmpeg:
  ```
  ffmpeg -i input.mp4 -vf "scale=1920:1080" -c:v libx264 -crf 23 -an public/videos/hero.mp4
  ffmpeg -i input.mp4 -vf "scale=1920:1080" -c:v libvpx-vp9 -crf 30 -an public/videos/hero.webm
  ```
