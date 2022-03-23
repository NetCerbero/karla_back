import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PostService } from "./post.service";

@Controller("post")
export class PostController{

    constructor(
        private readonly service:PostService
    ){

    }
    @Get("/:id")
    async getbyUser(
        @Param("id") id
    ){
        return await this.service.getOne(id);
    }
    @Post("/:id")
    async createbyUser(
        @Param("id") id,
        @Body() data
    ){
        return await this.service.create(id,data);
    }
}