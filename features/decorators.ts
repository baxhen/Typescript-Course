class Boat {
  @testDecorator
  color: string = 'red';
  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }
  @logError('Oops boat wan sunk on ocean')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swich');
    } else {
      console.log('brum');
    }
  }
}

function classDecorator(constructor: typeof Boat): void {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number): void {
  console.log(key, index);
}

function testDecorator(target: any, key: string): void {
  console.log(target);
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}
