import {describe ,it, expect,vi} from 'vitest';
import { generateReportData } from './data';


describe('generateReportData', () => {
    it('should logFn if provided ', () => {
        const logger = vi.fn();

        generateReportData(logger);
        expect(logger).toBeCalled();
    })
})