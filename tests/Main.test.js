// Main.test.js
import { describe, it, expect } from 'vitest';
import { Main } from '../src/core/Main.js';

describe('Main', () => {
  it('should render correctly', () => {
    const instance = new Main();
    expect(instance.render()).toMatch(/<.*>/);
  });
});
