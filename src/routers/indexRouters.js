const router = require("express").Router();

router.get("/home", (req, res) => {
    res.send({
        "versao": "1.0",
        "titulo": "Projeto Cuidando-delas",
        "descrição": "Oferecer serviço de saúde física e mental na região de Fortaleza/CE. A aplicação contemplará ações de rastreamento (prevenção de risco), promoção à saúde (qualidade de vida), gestão de crônicos (linhas de cuidado) e atendimento às condições agudas para mulheres. O foco do cuidado será a pessoa, e não a doença, por meio de ações preventivas e estímulo ao autocuidado."
    })
})

module.exports = router;
