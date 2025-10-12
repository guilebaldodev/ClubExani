type SimuladorCanjeado = {
  fecha: string;
  monedasPagadas: number;
  simuladorId: string;
  uso_justo: number;
};


export type Usuarios= {
    _id:string;
    clerkId:string;
    rol:string;
    monedas:number;
    simuladoresCanjeados: SimuladorCanjeado[];
    nombre?:string;
    estado?:string;
    edad?:number;
    createdAt?:string;
    updatedAt?:string;
}