 interface coordinates{
    lat:string,
    lng:string
  }
  interface address{
    street:string,
    suite:string,
    city:string,
    zipcode:string,
    geo:coordinates
  }
  export interface user{
  id:number,
  name:string,
  email:string,
  address:address
  }