// Container.test.js
import { describe, it, expect } from 'vitest';
import { Container } from '../src/core/Container.js';

describe('Container', () => {
  it('should render correctly', () => {
    const instance = new Container();
    expect(instance.render()).toMatch(/<.*>/);
  });
});
