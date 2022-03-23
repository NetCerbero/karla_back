import { Injectable } from "@nestjs/common";
import { FirebaseAdmin, InjectFirebaseAdmin } from "nestjs-firebase";

@Injectable()
export class ServicioService{
    constructor(
        @InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin
    ){}

    async getList(){
        const rsp = await this.firebase.db.collection("servicio").get();
        return rsp.docs.map((e) => ({
            id: e.id,
            nombre: e.get("servicio"),
            comentario: e.get("comentario"),
            tipo : e.get("tipo")
        }));
    }

    async create(data:any){
        await this.firebase.db.collection("servicio").add(data);
    }

    async remove(id){
        await this.firebase.db.collection("servicio").doc(id).delete();
    }
}