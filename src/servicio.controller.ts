import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ServicioService } from "./servicio.service";

@Controller("/servicio")
export class ServicioController{
    constructor(
        private readonly servicio:ServicioService
    ){

    }

    @Get()
    async getList(){
        return await this.servicio.getList();
    }

    @Post()
    async create(
        @Body() data
    ){
        return await this.servicio.create(data);
    }

    @Delete("/:id")
    async remove(
        @Param("id") id
    ){
        return await this.servicio.remove(id);
    }
}