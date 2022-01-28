/* tslint:disable:no-unused-variable */

import {ReversePipe1} from "./reverse.pipe1";

describe('Pipe: ReversePipe', () => {
  it('should reverse the inputs', () => {
    let reversePipe = new ReversePipe1();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});
