import { Test, TestingModule } from '@nestjs/testing';
import { uploadController } from './study-material.controller';

describe('StudyMaterialController', () => {
  let controller: uploadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [uploadController],
    }).compile();

    controller = module.get<uploadController>(uploadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
