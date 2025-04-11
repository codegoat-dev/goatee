// Code.test.js
import { describe, it, expect } from 'vitest';
import { Code } from '../src/core/Code.js';

describe('Code', () => {
  it('should render correctly', () => {
    const instance = new Code('console.log("Hello")');
    expect(instance.render()).toMatch(/<.*>/);
  });
});
