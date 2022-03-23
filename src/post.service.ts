import { Injectable } from "@nestjs/common";
import { FirebaseAdmin, InjectFirebaseAdmin } from "nestjs-firebase";

@Injectable()
export class PostService{
    constructor(
        @InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin
      ) {}
    
    async getOne(id:any){
        const doc =  await this.firebase.db.collection("/usuario").doc(id).collection("post").get();
        return doc.docs.map((e) => ({id:e.id,contenido:e.get("contenido"), titulo:e.get("title")}));
    }

    async create(id:any, data:any){
        const doc = await this.firebase.db.collection("/usuario").doc(id).collection("post").add(data);
    }
}