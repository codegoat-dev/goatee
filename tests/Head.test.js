// Head.test.js
import { describe, it, expect } from 'vitest';
import { Head } from '../src/core/Head.js';

describe('Head', () => {
  it('should render correctly', () => {
    const instance = new Head('Title');
    expect(instance.render()).toMatch(/<.*>/);
  });
});
