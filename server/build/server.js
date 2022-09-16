"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/ads', (req, res) => {
    res.json([
        { id: 1, name: 'Anuncio 01' },
        { id: 2, name: 'Anuncio 02' },
        { id: 3, name: 'Anuncio 03' },
        { id: 4, name: 'Anuncio 04' },
        { id: 5, name: 'Anuncio 05' },
        { id: 6, name: 'Anuncio 06' },
    ]);
});
app.listen(3333);
