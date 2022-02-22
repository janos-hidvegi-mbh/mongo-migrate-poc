import {hello} from './index';

describe('Welcome', () => {
    it('should work', () => {
        expect(hello).toBe(hello);
    })
});
