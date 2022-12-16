const router = require("express").Router();

router.get("/", (req, res) => {
    res.send({
        "versao": "1.0",
        "titulo": "Projeto Cuidando-delas",
        "descrição": "Uma aplicação voltada para mulheres com foco na prevenção de doenças, fazendo ações com base em estudos, oferecendo beneficios, apoio e informação. A proposta é focar na pessoa e não nas doenças. Qualidade de vida para as mulheres de todas as idades."
    })
})

module.exports = router