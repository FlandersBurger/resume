export const makeReadable = (n: number): string => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const makePercentage = (n: number, decimals: number = 2): string => `${(n * 100).toFixed(decimals)}%`;
