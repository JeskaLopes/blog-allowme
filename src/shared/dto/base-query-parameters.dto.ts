export abstract class BaseQueryParametersDto{
    order: 'ASC' | 'DESC';
    page: number;
    limit: number;
}