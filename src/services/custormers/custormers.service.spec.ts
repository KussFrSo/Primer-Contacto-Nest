import { Test, TestingModule } from '@nestjs/testing';
import { CustormersService } from './custormers.service';

describe('CustormersService', () => {
  let service: CustormersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustormersService],
    }).compile();

    service = module.get<CustormersService>(CustormersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
