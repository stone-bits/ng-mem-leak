/**
 * Automatically call unsubscribe in ngOnDestroy for all rxjs subscriptions in a class
 * @param constructor
 */
export function rxjsAutoUnsubscribe(constructor: any) {
  const ngOnDestroy = constructor.prototype.ngOnDestroy;
  constructor.prototype.ngOnDestroy = function () {
    ngOnDestroy?.apply(this);
    for (const prop in this) {
      const sub = this[prop];
      if (typeof sub.unsubscribe === 'function') {
        sub.unsubscribe();
      }
    }
  };
}
