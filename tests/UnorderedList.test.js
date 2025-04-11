// UnorderedList.test.js
import { describe, it, expect } from 'vitest';
import { UnorderedList } from '../src/core/UnorderedList.js';

describe('UnorderedList', () => {
  it('should render correctly', () => {
    const instance = new UnorderedList();
    expect(instance.render()).toMatch(/<.*>/);
  });
});
