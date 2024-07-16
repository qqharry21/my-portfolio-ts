import dynamic, { type DynamicOptions } from 'next/dynamic';

export function dynamicImport<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends React.ComponentType<any>,
  I extends { [K2 in K]: T },
  K extends keyof I,
>(factory: () => Promise<I>, name: K, options?: DynamicOptions): I {
  return Object.create({
    [name]: dynamic(() => factory().then((module) => ({ default: module[name] })), { ...options }),
  });
}

// Usage
// const { Home } = dynamicImport(() => import(/* webpackChunkName: "home" */"./Home"), "Home", {...});
