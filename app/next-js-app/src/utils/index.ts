export function getExecutionTime(fn: () => void): number {
  const start: number = Date.now();
  void fn();
  return Date.now() - start;
}

export function isEmpty(target: any[] | Record<any, any> | string): boolean {
  if (!target) return true;

  if (typeof target === 'object') {
    if (target.constructor === Array) {
      return target.length === 0;
    } else if(target.constructor === Object) {
      return Object.keys(target).length === 0;
    }
  }

  if (typeof target === 'string') {
    const removedSpaceTarget: string = (target as string).trim();
    return removedSpaceTarget.length === 0;
  }

  return target.length === 0;
}