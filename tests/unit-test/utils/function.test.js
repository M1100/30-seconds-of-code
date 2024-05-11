import { throttle } from '../../../src/utils/function';

describe('throttle', () => {
  // Mock function to use in tests
  const mockFn = jest.fn();

  // Mock timer functions
  jest.useFakeTimers();

  beforeEach(() => {
    // Clear mock function calls before each test
    mockFn.mockClear();
  });

  test('it should invoke the provided function immediately', () => {
    const throttledFn = throttle(mockFn, 100);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('it should throttle consecutive calls within the wait period', () => {
    const throttledFn = throttle(mockFn, 100);

    // First call
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Second call within wait period
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Fast-forward time by 50ms
    jest.advanceTimersByTime(50);

    // Third call within wait period
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Fast-forward time by another 50ms
    jest.advanceTimersByTime(50);

    // Fourth call after wait period
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  // test('it should handle multiple calls with different arguments', () => {
  //   const throttledFn = throttle(mockFn, 100);

  //   // Call with argument 'a'
  //   throttledFn('a');
  //   expect(mockFn).toHaveBeenCalledWith('a');

  //   // Fast-forward time by 50ms
  //   jest.advanceTimersByTime(50);

  //   // Call with argument 'b'
  //   throttledFn('b');
  //   expect(mockFn).toHaveBeenCalledTimes(1); // Should not be called again yet

  //   // Fast-forward time by another 50ms
  //   jest.advanceTimersByTime(50);

  //   // Call with argument 'c' after wait period
  //   throttledFn('c');
  //   expect(mockFn).toHaveBeenCalledWith('c');
  // });
});
