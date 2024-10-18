import { Injectable } from '@angular/core';
import { iTodo } from '../moduls/i-todo';
import { iUsers } from '../moduls/i-users';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  usersArr: iUsers[] = [
    {
      id: 1,
      firstName: 'Terry',
      lastName: 'Medhurst',
      email: 'atuny0@sohu.com',
      image: 'https://robohash.org/hicveldicta.png',
      title: 'Help Desk Operator',
    },
    {
      id: 2,
      firstName: 'Sheldon',
      lastName: 'Quigley',
      email: 'hbingley1@plala.or.jp',
      image: 'https://robohash.org/doloremquesintcorrupti.png',
      title: 'Senior Cost Accountant',
    },
    {
      id: 3,
      firstName: 'Terrill',
      lastName: 'Hills',
      email: 'rshawe2@51.la',
      image: 'https://robohash.org/consequunturautconsequatur.png',
      title: 'Mechanical Systems Engineer',
    },
    {
      id: 4,
      firstName: 'Miles',
      lastName: 'Cummerata',
      email: 'yraigatt3@nature.com',
      image: 'https://robohash.org/facilisdignissimosdolore.png',
      title: 'Paralegal',
    },
    {
      id: 5,
      firstName: 'Mavis',
      lastName: 'Schultz',
      email: 'kmeus4@upenn.edu',
      image: 'https://robohash.org/adverovelit.png',
      title: 'Web Developer I',
    },
    {
      id: 6,
      firstName: 'Alison',
      lastName: 'Reichert',
      email: 'jtreleven5@nhs.uk',
      image: 'https://robohash.org/laboriosamfacilisrem.png',
      title: 'Civil Engineer',
    },
    {
      id: 7,
      firstName: 'Oleta',
      lastName: 'Abbott',
      email: 'dpettegre6@columbia.edu',
      image: 'https://robohash.org/cupiditatererumquos.png',
      title: 'Sales Associate',
    },
    {
      id: 8,
      firstName: 'Ewell',
      lastName: 'Mueller',
      email: 'ggude7@chron.com',
      image: 'https://robohash.org/quiaharumsapiente.png',
      title: 'Clinical Specialist',
    },
    {
      id: 9,
      firstName: 'Demetrius',
      lastName: 'Corkery',
      email: 'nloiterton8@aol.com',
      image: 'https://robohash.org/reprehenderitquosreslaborum.png',
      title: 'Environmental Specialist',
    },
    {
      id: 91,
      firstName: 'Arne',
      lastName: 'Jacobs',
      email: 'hyaknov2i@hhs.gov',
      image: 'https://robohash.org/necessitatibusvoluptatemvero.png',
      title: 'Automation Specialist I',
    },
    {
      id: 92,
      firstName: 'Emely',
      lastName: 'Schmitt',
      email: 'clambol2j@bloglovin.com',
      image: 'https://robohash.org/cumqueharumsunt.png',
      title: 'Executive Secretary',
    },
    {
      id: 93,
      firstName: 'Fabiola',
      lastName: 'Oberbrunner',
      email: 'dduggan2k@simplemachines.org',
      image: 'https://robohash.org/undeutveritatis.png',
      title: 'Quality Engineer',
    },
    {
      id: 94,
      firstName: 'Kari',
      lastName: 'Schinner',
      email: 'jtossell2l@drupal.org',
      image: 'https://robohash.org/quisquamhicin.png',
      title: 'Paralegal',
    },
    {
      id: 95,
      firstName: 'Rory',
      lastName: 'Conn',
      email: 'cchomiszewski2m@cbsnews.com',
      image: 'https://robohash.org/autcommodivoluptas.png',
      title: 'Help Desk Operator',
    },
    {
      id: 96,
      firstName: 'Cristobal',
      lastName: 'Watsica',
      email: 'bgoby2n@washingtonpost.com',
      image: 'https://robohash.org/deseruntfaciliset.png',
      title: 'Physical Therapy Assistant',
    },
    {
      id: 97,
      firstName: 'Allene',
      lastName: 'Harber',
      email: 'cdavydochkin2o@globo.com',
      image: 'https://robohash.org/adipiscisiteius.png',
      title: 'Structural Analysis Engineer',
    },
    {
      id: 98,
      firstName: 'Lempi',
      lastName: 'Runte',
      email: 'zstenning2p@list-manage.com',
      image: 'https://robohash.org/estetlaudantium.png',
      title: 'Registered Nurse',
    },
    {
      id: 99,
      firstName: 'Terrell',
      lastName: 'Schuppe',
      email: 'flesslie2q@google.nl',
      image: 'https://robohash.org/maioresethic.png',
      title: 'Senior Quality Engineer',
    },
    {
      id: 100,
      firstName: 'Tevin',
      lastName: 'Prohaska',
      email: 'pcumbes2r@networkadvertising.org',
      image: 'https://robohash.org/eosvoluptasquia.png',
      title: 'VP Sales',
    },
  ];
  constructor() {}

  getUserWithToDo(todoList: iTodo[]): iUsers[] {
    return this.usersArr.map((user) => {
      const foundToDo = todoList.find((toDo) => user.id === toDo.userId);
      if (!foundToDo) return user;
      return {
        ...user,
        toDo: foundToDo,
      };
    });
  }
}
