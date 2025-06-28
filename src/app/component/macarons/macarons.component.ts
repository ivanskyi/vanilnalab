import { Component } from '@angular/core';

interface Macaron {
  id: number;
  name: string;
  description: string;
  image: string;
  flavors: string[];
  price: number;
}

@Component({
  selector: 'app-macarons',
  templateUrl: './macarons.component.html',
  styleUrls: ['./macarons.component.scss']
})
export class MacaronsComponent {
  macarons: Macaron[] = [
    {
      id: 1,
      name: 'Ванільний Мрія',
      description: 'Класичний макарон з ніжним ванільним кремом та мадагаскарською ваніллю',
      image: 'assets/images/macaron-vanilla.jpg',
      flavors: ['Ваніль', 'Крем'],
      price: 45
    },
    {
      id: 2,
      name: 'Шоколадна Спокуса',
      description: 'Розкішний макарон з бельгійським шоколадом та ганашем',
      image: 'assets/images/macaron-chocolate.jpg',
      flavors: ['Шоколад', 'Ганаш'],
      price: 50
    },
    {
      id: 3,
      name: 'Малинова Фантазія',
      description: 'Яскравий макарон зі свіжою малиною та кремом маскарпоне',
      image: 'assets/images/macaron-raspberry.jpg',
      flavors: ['Малина', 'Маскарпоне'],
      price: 48
    },
    {
      id: 4,
      name: 'Лимонна Свіжість',
      description: 'Освіжаючий макарон з лимонним курдом та цедрою',
      image: 'assets/images/macaron-lemon.jpg',
      flavors: ['Лимон', 'Цедра'],
      price: 47
    },
    {
      id: 5,
      name: 'Фісташкова Розкіш',
      description: 'Вишуканий макарон з сицилійськими фісташками',
      image: 'assets/images/macaron-pistachio.jpg',
      flavors: ['Фісташки', 'Горіхи'],
      price: 55
    },
    {
      id: 6,
      name: 'Троянда Романтика',
      description: 'Ніжний макарон з трояндовою водою та рожевими пелюстками',
      image: 'assets/images/macaron-rose.jpg',
      flavors: ['Троянда', 'Квіти'],
      price: 52
    },
    {
      id: 7,
      name: 'Карамельна Насолода',
      description: 'Солодкий макарон з морською сіллю та карамеллю',
      image: 'assets/images/macaron-caramel.jpg',
      flavors: ['Карамель', 'Морська сіль'],
      price: 49
    },
    {
      id: 8,
      name: 'Лавандова Мрія',
      description: 'Ароматний макарон з прованською лавандою та медом',
      image: 'assets/images/macaron-lavender.jpg',
      flavors: ['Лаванда', 'Мед'],
      price: 53
    }
  ];
}
