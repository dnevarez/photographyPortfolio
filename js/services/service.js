angular.module('photo')
.factory('mainSvc', function(){

  const eventsPageList = [
    {coverImgURL:'https://hd.unsplash.com/photo-1472589757312-2f192d867ee2', detail: 'weddings'},
    {coverImgURL:'https://hd.unsplash.com/photo-1431308305062-f218b6fe520a', detail: 'concerts'},
    {coverImgURL:'https://hd.unsplash.com/photo-1465487031582-bbc9519cc957', detail: 'concerts'},
  ]

  const peoplePageList = [
    {coverImgURL:'https://hd.unsplash.com/photo-1460904577954-8fadb262612c', detail: 'eyes', photographer: 'Alexandru Zdrobău', unsplashURL: 'https://unsplash.com/@alexandruz'},
    {coverImgURL:'https://images.unsplash.com/photo-1474325874720-4b395be870c4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=c86e3e35fc53da7f20fbdb553b1eacd2', detail: 'canoe', photographer: 'Monica Gozalo', unsplashURL: 'https://unsplash.com/@monicagozalo'},
    {coverImgURL:'http://unsplash.com/photos/Sgthj0HW6ec/download', detail: 'music', photographer: 'Clem Onojeghuo', unsplashURL: 'https://unsplash.com/@clemono2'},
  ]

  const travelPageList = [
    {coverImgURL:'https://hd.unsplash.com/photo-1444412667101-4eccfdeeff07', detail: 'amethyst on the water', photographer: 'hieu le', unsplashURL: 'https://unsplash.com/@lehieu'},
    {coverImgURL:'https://hd.unsplash.com/photo-1459184289964-e2d4cefe27af', detail: 'shells', photographer: 'Pura Comunicação', unsplashURL: 'https://unsplash.com/@puracomunicacao'},
    {coverImgURL:'https://hd.unsplash.com/photo-1470396346435-249d74f1ba5a', detail: 'above the city', photographer: 'Lee Key', unsplashURL: 'https://unsplash.com/@lee_key'},
  ]

  return {

    eventsPage: () => {
      return eventsPageList;
    },
    peoplePage: () => {
      return peoplePageList;
    },
    travelPage: () => {
      return travelPageList;
    }
  }
})
