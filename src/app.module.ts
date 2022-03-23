import { Module } from '@nestjs/common';
import { FirebaseModule } from 'nestjs-firebase';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { ServicioController } from './servicio.controller';
import { ServicioService } from './servicio.service';

@Module({
  imports: [
    FirebaseModule.forRoot({
      googleApplicationCredential: "src/firebase.json",
    }),
  ],
  controllers: [AppController,PostController,ServicioController],
  providers: [AppService,PostService,ServicioService],
})
export class AppModule {}
