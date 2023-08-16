import { IsIn, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

export class CreateVideoDto {

    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description?: string | null;

    @IsInt()
    @IsNotEmpty()
    @MinLength(1)
    category_id: number;
}
