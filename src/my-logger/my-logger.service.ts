import { Injectable, LogLevel, Scope } from '@nestjs/common';
import { ConsoleLogger } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT})
export class MyLogger extends ConsoleLogger{
    customLog() {
        this.log('LOGGER')
    }
}
