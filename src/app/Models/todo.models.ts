//export to give permiisson to any declartion
//which will acess out side this file 

export interface ITodo{
    task:string;
    createdon:Date;

}
export interface ITodoEdit{
    item:ITodo;
    index:number;
}

//orm-pojo-modal-response