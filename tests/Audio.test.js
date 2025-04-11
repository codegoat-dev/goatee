// Audio.test.js
import { describe, it, expect } from 'vitest';
import { Audio } from '../src/core/Audio.js';

describe('Audio', () => {
  it('should render correctly', () => {
    const instance = new Audio({ src: 'audio.mp3' });
    expect(instance.render()).toMatch(/<.*>/);
  });
});
