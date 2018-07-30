export class ResponseProductos {
    content: Content[];
    pageable: Pageable;
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    sort: Sort;
    numberOfElements: number;
    first: boolean;
}

export class Content {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    categoria: Categoria;
}

export class Pageable {
    sort: Sort;
    offset: number;
    pageSize: number;
    pageNumber: number;
    paged: boolean;
    unpaged: boolean;
}

export class Categoria {
    id: number;
    nombre: string;
}

export class Sort {
    sorted: boolean;
    unsorted: boolean;
}
