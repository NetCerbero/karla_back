import { Injectable } from '@nestjs/common';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';

@Injectable()
export class AppService {
  constructor(
    @InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin
  ) {}
  async getHello() {
    //return this.firebase.db;
    const doc =  await this.firebase.db.collection("/usuario").get();
    return doc.docs.map((e ) => ({
      nombre:e.get("nombre"),
      apellido:e.get("apellido"),
      id: e.id
    }));
  }

  async create(usuario:any){
    const doc = await this.firebase.db.collection("/usuario").add(usuario);
    console.log("doc",doc);
  }

}
