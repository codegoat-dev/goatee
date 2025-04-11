// Page.test.js
import { describe, it, expect } from 'vitest';
import { Page } from '../src/core/Page.js';
import { Head } from "../src/core/Head.js";
import { Body } from "../src/core/Body.js";

describe('Page', () => {
  it('should render correctly', () => {
    const instance = new Page(new Head('Title'), new Body());
    expect(instance.render()).toMatch(/<.*>/);
  });
});
