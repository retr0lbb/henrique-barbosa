interface UseTerminalSpawnPositionProps {
  innerPadding?: number;
  canvasWidth: number;
  canvasHeight: number;
  numberOfChildren: number;
  expectTerminalWidth: number;
  expectTerminalHeight: number;
}

export function useTerminalSpawnPosition({
  canvasHeight,
  canvasWidth,
  expectTerminalHeight,
  expectTerminalWidth,
  numberOfChildren,
  innerPadding = 0,
}: UseTerminalSpawnPositionProps) {
  const maxSpawnYPos = canvasHeight - expectTerminalHeight;
  const maxSpawnXPos = canvasWidth - expectTerminalWidth;

  const x = Math.floor(Math.random() * maxSpawnXPos) - 2 * innerPadding;
  const y = Math.floor(Math.random() * maxSpawnYPos) - 2 * innerPadding;

  const zIndex = numberOfChildren + 1;

  console.log(`Spawn Coordinates: X: ${x}, Y: ${y}`);
  return { x, y, zIndex };
}
