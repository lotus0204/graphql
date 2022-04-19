"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
let PersonResolver = class PersonResolver {
    async getAllPerson() {
        return [
            {
                id: "1",
                name: "이규혁",
                number: "+82 10-1234-5678",
                email: "lee@kyuhyuk.kr",
            },
            { id: "2", name: "변정원", number: "+82 10-8765-4321" },
        ];
    }
};
__decorate([
    (0, graphql_1.Query)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonResolver.prototype, "getAllPerson", null);
PersonResolver = __decorate([
    (0, graphql_1.Resolver)("Person")
], PersonResolver);
exports.PersonResolver = PersonResolver;
//# sourceMappingURL=person.resolver.js.map