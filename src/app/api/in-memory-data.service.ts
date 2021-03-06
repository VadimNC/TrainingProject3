import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const listOrders = [
      {
        id: 1,
        name: 'order-1',
        status: 'Open',
        createdWhen: '01/01/2018',
        comments: 'Це дліІІІІІІІІІінющий коментар, але якщо на нього навести.. Якщо на нього навести - він з`являється у розгорнотому вигляді і Ви можете побачити його увесь! Будь ласка!',
        assigned: 'ADMIN'
      },
      {
        id: 2,
        name: 'order-2',
        status: 'Open',
        createdWhen: '02/01/2018',
        comments: 'SDFGHJKL ryisfls;dfus ;lsf;lsd;sdfug ;sdflsudf ',
        assigned: 'ADMIN'
      },
      {id: 3, name: 'order-3', status: 'Closed', createdWhen: '03/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 4, name: 'order-4', status: 'Open', createdWhen: '05/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 5, name: 'order-5', status: 'Closed', createdWhen: '11/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 6, name: 'order-6', status: 'Open', createdWhen: '16/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 7, name: 'order-7', status: 'Open', createdWhen: '21/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 8, name: 'order-8', status: 'Open', createdWhen: '02/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 9, name: 'order-9', status: 'Closed', createdWhen: '03/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 10, name: 'order-10', status: 'Open', createdWhen: '05/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 11, name: 'order-11', status: 'Open', createdWhen: '11/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 12, name: 'order-12', status: 'Closed', createdWhen: '16/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 13, name: 'order-13', status: 'Open', createdWhen: '21/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 14, name: 'order-14', status: 'Open', createdWhen: '02/01/2018', comments: '', assigned: 'ADMIN'},
      {
        id: 15,
        name: 'order-15',
        status: 'Closed',
        createdWhen: '03/01/2018',
        comments: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.   Dicta dolorem dolorum earum in incidunt, molestiae natus nisi ullam voluptatibus! Amet commodi dolorem eos iusto minima rem repellat repudiandae sapiente voluptatum!'
        , assigned: 'ADMIN'
      },
      {id: 16, name: 'order-16', status: 'Open', createdWhen: '05/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 17, name: 'order-17', status: 'Open', createdWhen: '11/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 18, name: 'order-18', status: 'Open', createdWhen: '16/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 19, name: 'order-19', status: 'Open', createdWhen: '21/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 20, name: 'order-20', status: 'Open', createdWhen: '02/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 21, name: 'order-21', status: 'Closed', createdWhen: '03/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 22, name: 'order-22', status: 'Open', createdWhen: '05/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 23, name: 'order-23', status: 'Open', createdWhen: '11/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 24, name: 'order-24', status: 'Open', createdWhen: '16/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 25, name: 'order-25', status: 'Closed', createdWhen: '21/01/2018', comments: '', assigned: 'ADMIN'},
      {id: 26, name: 'order-26', status: 'Open', createdWhen: '21/01/2018', comments: '', assigned: 'ADMIN'}
    ];
    return {listOrders};
  }

  constructor() {
  }
}
