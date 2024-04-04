export class UniqueObjectsSet extends Set {
  constructor(items: any[]) {
    super(items)
    const array: any[] = []
    for (const item of this) {
      if (array.includes(item.name)) {
        this.delete(item)
      } else {
        array.push(item.name)
      }
    }
  }
}
