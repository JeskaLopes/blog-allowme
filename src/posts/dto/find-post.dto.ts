import { BaseQueryParametersDto } from "src/shared/dto/base-query-parameters.dto";

export class FindPostQueryDto extends BaseQueryParametersDto{
    createdAt: Date;
}