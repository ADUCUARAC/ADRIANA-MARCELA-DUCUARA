import { Module } from '@nestjs/common';
import { LoanController } from './loans.controller';

@Module({
  controllers: [LoanController],  // ← aquí va el nombre real
})
export class LoansModule {}