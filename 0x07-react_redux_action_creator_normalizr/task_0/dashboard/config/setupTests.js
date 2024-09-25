// setupTests.js
import '@testing-library/jest-dom/extend-expect';

jest.mock('aphrodite', () => ({
    StyleSheet: {
      create: () => ({}),
    },
    css: () => '',
  }));