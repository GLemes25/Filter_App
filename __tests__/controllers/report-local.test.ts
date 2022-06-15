import { ReportController } from '../../src/report/report-controller';

const weightAt = ReportController.weightAt;
test('weightAt', () => {
  expect(weightAt(300, 50)).toBe(10);
});

const priceAt = ReportController.priceAt;
test('priceAt', () => {
  expect(priceAt(1000, 10)).toBe(100);
});

const timeCourseString = ReportController.timeCourseString;
test('time Course String', () => {
  expect(timeCourseString('11/02/2002', '11/05/2002')).toBe(90);
});

const expectedAverageWeight = ReportController.expectedAverageWeight;
test('expected Average Weight', () => {
  expect(expectedAverageWeight(260, 270, new Date('2021-05-15'), new Date('2021-05-30'), new Date('2021-05-20'))).toBe(
    286.67,
  );
});

const GMD = ReportController.GMD;
test('Ganho de Massa Diario', () => {
  expect(GMD(260, 435, new Date('2021-05-15'), new Date('2022-01-03'))).toBe(0.75);
});
