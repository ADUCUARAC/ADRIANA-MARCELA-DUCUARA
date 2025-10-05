import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { TransactionsModule } from './transactions/transactions.module';
import { AccountsModule } from './accounts/accounts.module';
import { LoansModule } from './loans/loans.module';

@Module({
  imports: [
    ClientModule,
    TransactionsModule,
    AccountsModule,
    LoansModule,
  ],
  controllers: [],   // vacío
  providers: [],     // vacío
})
export class AppModule {}
