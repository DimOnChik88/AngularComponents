import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exchangePipe'
})
export class ExchangePipePipe implements PipeTransform {

    async transform(value: number): Promise<number> {
      try {
        const exchange = await fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
        const exchangeValue = await exchange.json();
        console.log(exchangeValue[0].sale);
        const priceUSD = exchangeValue[0].sale * value;
        console.log(priceUSD);

        return priceUSD;
      } catch (e) {
        console.error('Cant get exchange course', e.message);
      }
    }

}
