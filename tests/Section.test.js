// Section.test.js
import { describe, it, expect } from 'vitest';
import { Section } from '../src/core/Section.js';

describe('Section', () => {
  it('should render correctly', () => {
    const instance = new Section();
    expect(instance.render()).toMatch(/<.*>/);
  });
});
