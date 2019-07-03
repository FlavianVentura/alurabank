System.register(["./controllers/NegocicaoController"], function (exports_1, context_1) {
    "use strict";
    var NegocicaoController_1, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (NegocicaoController_1_1) {
                NegocicaoController_1 = NegocicaoController_1_1;
            }
        ],
        execute: function () {
            controller = new NegocicaoController_1.NegociacaoController();
            document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));
        }
    };
});
