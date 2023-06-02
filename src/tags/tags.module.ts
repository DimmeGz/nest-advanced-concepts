import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { OnApplicationBootstrap } from '@nestjs/common/interfaces';

@Module({
  controllers: [TagsController],
  providers: [TagsService]
})
export class TagsModule implements OnApplicationBootstrap {
  constructor(private readonly moduleRef: ModuleRef) {}

  async onApplicationBootstrap() {
    const contextId = ContextIdFactory.create()
    this.moduleRef.registerRequestByContextId({ hello: 'world'}, contextId)
    const tagsServiceProvider = await this.moduleRef.resolve(TagsService, contextId);
    // console.log(tagsServiceProvider);

    // const contextId = ContextIdFactory.create()
    // const tagsServices = await Promise.all([
    //   this.moduleRef.resolve(TagsService, contextId),
    //   this.moduleRef.resolve(TagsService, contextId)
    // ])
    // console.log(tagsServices[0] === tagsServices[1]);
  }
}
