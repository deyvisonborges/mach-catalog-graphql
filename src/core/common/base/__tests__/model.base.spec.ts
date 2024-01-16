import { BaseModel } from '../model.base';

describe('Common Base / Base Model', () => {
  it('must create an instance of the base model', () => {
    const baseModelInstance = new BaseModel({});
    expect(baseModelInstance).toEqual({
      id: baseModelInstance.id,
      active: baseModelInstance.active,
      createdAt: baseModelInstance.createdAt,
      updatedAt: baseModelInstance.updatedAt,
    });
  });
});
