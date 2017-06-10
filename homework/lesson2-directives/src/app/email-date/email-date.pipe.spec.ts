import { EmailDatePipe } from './email-date.pipe';

describe('EmailDatePipe', () => {
    it('create an instance', () => {
        const pipe = new EmailDatePipe();
        expect(pipe).toBeTruthy();
    });
});
