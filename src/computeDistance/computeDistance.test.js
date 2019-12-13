import computeDistance from './computeDistance';
describe ('compute distance', () => {
  it('should subtract the difference', () => {
    const result = computeDistance(5, 2);
    expect(result).toBe(3);
  })

  it('should handle 2 negative values', () => {
    const result = computeDistance(-5, -2);
    expect(result).toBe(3);
  })

  
})