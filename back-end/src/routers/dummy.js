const express = require('express')

const router = new express.Router()


// Sends get request to get all items
router.get('/api/dummy/users', async (req, res) => {

  res.send([
    {
      "id": 1,
      "name": "Krista Mcdaniel",
      "age": 18,
      "address": "9914 Gallagher Crossing Apt. 651\nEast Jared, NM 87144",
      "description": "Religious tend few design. Trial window mother stay financial expect.\nSince sit heavy. Focus mention individual here news trouble. Dinner nice black everyone other."
    },
    {
      "id": 2,
      "name": "Lawrence Fry",
      "age": 19,
      "address": "1808 Sandoval Mountain Suite 547\nEdwardshire, PA 02124",
      "description": "Study economic TV. Since deep group tell. Every really turn inside.\nExist physical back top beat. Future choose service budget rather two. Loss table six whether long."
    },
    {
      "id": 3,
      "name": "Samantha Rodriguez",
      "age": 23,
      "address": "4641 Ruiz Stravenue Apt. 193\nSouth Mary, CO 10382",
      "description": "Movement general receive lay light. Interesting concern yet over piece these data. Key institution against second nature kitchen."
    },
    {
      "id": 4,
      "name": "Charles Johnson",
      "age": 21,
      "address": "USCGC Patterson\nFPO AP 76489",
      "description": "National back house especially skin. Range country pick discussion card interesting seem.\nCulture their trouble fund or responsibility."
    },
    {
      "id": 5,
      "name": "Miguel Wright",
      "age": 19,
      "address": "2337 Howe Island Apt. 787\nPort Maryshire, CO 71956",
      "description": "Exactly cup every field. According else buy improve.\nSpeak win final product anything. During plan true subject today. Subject both condition behavior contain student force relate."
    },
    {
      "id": 6,
      "name": "Julia Woods",
      "age": 21,
      "address": "155 Taylor Isle\nSouth Amy, NM 16064",
      "description": "Travel stay school lead seek before. Everybody be well mission.\nCause accept weight note. Cause during financial. More crime morning increase.\nOver lawyer clear bad threat up."
    },
    {
      "id": 7,
      "name": "Robert Bennett",
      "age": 19,
      "address": "3537 Orozco Branch Suite 838\nRiveraborough, DE 09131",
      "description": "Much decision return anyone commercial. East eye bag third money information.\nOperation kid laugh everybody seek debate easy."
    },
    {
      "id": 8,
      "name": "Johnny Barton",
      "age": 23,
      "address": "PSC 1540, Box 0255\nAPO AP 90368",
      "description": "Third pick majority sport debate. Meet born care as.\nData data such fear entire agent remain. Nor win money system air administration who.\nBody among create still apply hold rate commercial."
    },
    {
      "id": 9,
      "name": "Katherine Burch",
      "age": 25,
      "address": "079 Richardson Parks\nLake Tracifurt, SD 98090",
      "description": "World think middle discover. Democrat smile place organization show factor region. What happen alone tax pattern federal can.\nExist audience per point we. Half consumer image beat set agency."
    },
    {
      "id": 10,
      "name": "Ashley Wilson",
      "age": 15,
      "address": "1175 Victor Squares\nAllenhaven, ND 81491",
      "description": "Myself example effect treat even court. When I pull. Along stop exactly exist sport."
    },
    {
      "id": 11,
      "name": "Daniel Moore",
      "age": 16,
      "address": "81228 Kevin Spurs\nMannmouth, TN 58225",
      "description": "Few yes common price similar generation. Could nature fall among.\nNow window age area material. Talk this evidence represent thought budget expert door. Chance certainly task exactly five enter."
    },
    {
      "id": 12,
      "name": "Alexander Smith",
      "age": 23,
      "address": "5996 Sanchez Falls\nPerezland, RI 12007",
      "description": "Statement worry ago because argue. Finally plan true. Find they agent partner.\nGeneral want garden ten. Door send election join issue on."
    },
    {
      "id": 13,
      "name": "Matthew Jackson",
      "age": 22,
      "address": "62099 Michelle Crescent Apt. 175\nChapmanville, MT 09383",
      "description": "Writer sure put discover you. Majority care once church sure modern age. To visit loss who enough over herself.\nDecision mouth source need series no though. Someone them research child."
    },
    {
      "id": 14,
      "name": "Amy Nixon",
      "age": 25,
      "address": "01444 Perez Mountains Suite 276\nTylerville, ND 52829",
      "description": "Success scene off how century. Fact ahead box PM several strategy food.\nSchool add remain because. Middle down now first daughter have. Throughout home civil herself."
    },
    {
      "id": 15,
      "name": "Michael Gomez",
      "age": 18,
      "address": "32176 Clark Dale\nKathleenmouth, MT 93058",
      "description": "Hot kitchen mission rich across. Yes network seek ask in really table. Physical today trial clearly however service."
    },
    {
      "id": 16,
      "name": "Sarah Jackson",
      "age": 16,
      "address": "0109 Newman Hollow\nLaurenberg, IN 29647",
      "description": "By government institution trade peace indicate upon. Source vote a six better north.\nSocial serious strong reach simple. Consumer morning everything time. Make represent career affect present."
    },
    {
      "id": 17,
      "name": "Kimberly Hughes",
      "age": 16,
      "address": "USCGC Mccoy\nFPO AA 55223",
      "description": "Difficult economic information morning southern staff he. Expert would figure television.\nCourse system positive fund pick fish. Old member activity true security bad per."
    },
    {
      "id": 18,
      "name": "Sara Robinson",
      "age": 25,
      "address": "8982 Williams Spur Suite 480\nWest Michaelton, UT 74265",
      "description": "Language budget benefit race hundred right but. Process when become student administration. Have condition nothing mention."
    },
    {
      "id": 19,
      "name": "Sharon Howard",
      "age": 16,
      "address": "8010 Elizabeth Lakes\nAnitachester, VT 99438",
      "description": "Professor skin guess free range leave Congress. Recognize hotel table whether draw rather charge enter. Theory mean recognize my benefit gas what then."
    },
    {
      "id": 20,
      "name": "Joshua Velez",
      "age": 19,
      "address": "2152 Nelson Viaduct\nMatthewton, VT 48000",
      "description": "Black new look pick issue shake rather.\nPlay debate spring foreign PM fact research. Minute another think arm gas low. In right approach sound less media test seat."
    }
  ])

})

module.exports = router
