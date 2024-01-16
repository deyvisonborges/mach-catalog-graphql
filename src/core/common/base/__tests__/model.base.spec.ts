import { BaseModel } from '../model.base';

describe('Common Base / Base Model', () => {
  it('should create a base model instance', () => {
    const baseModelInstance = new BaseModel({});
    expect(baseModelInstance).toEqual({
      id: '',
      active: baseModelInstance.active,
      createdAt: baseModelInstance.createdAt,
      updatedAt: baseModelInstance.updatedAt,
    });
  });
});
