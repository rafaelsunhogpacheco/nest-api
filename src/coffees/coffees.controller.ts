import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get('flavour')
    findAll() {
        return 'This action returns all coffees';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} coffee`;
    }
}
