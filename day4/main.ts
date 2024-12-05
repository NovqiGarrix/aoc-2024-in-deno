export function part1(grid: string[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const pattern = "XMAS";
  let count = 0;

  const directions = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, -1], // Left
    [0, 1], // Right
    [-1, -1], // Up-Left
    [-1, 1], // Up-Right
    [1, -1], // Down-Left
    [1, 1], // Down-Right
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      for (const [dr, dc] of directions) {
        let match = true;
        for (let i = 0; i < pattern.length; i++) {
          const nr = r + i * dr;
          const nc = c + i * dc;
          if (
            nr < 0 || nr >= rows || nc < 0 || nc >= cols ||
            grid[nr][nc] !== pattern[i]
          ) {
            match = false;
            break;
          }
        }
        if (match) {
          count++;
        }
      }
    }
  }

  return count;
}

export function part2(grid: string[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const isMasOrSam = (a: string, b: string, c: string): boolean => {
    const str = a + b + c;
    return str === 'MAS' || str === 'SAM';
  };

  for (let i = 1; i < rows - 1; i++) {
    for (let j = 1; j < cols - 1; j++) {
      if (grid[i][j] && grid[i][j] === 'A') {
        if (
          isMasOrSam(grid[i - 1][j - 1] || '', grid[i][j] || '', grid[i + 1][j + 1] || '') &&
          isMasOrSam(grid[i - 1][j + 1] || '', grid[i][j] || '', grid[i + 1][j - 1] || '')
        ) {
          count++;
        }
      }
    }
  }
  return count;
}
