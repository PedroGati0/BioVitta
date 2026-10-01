// BioVitta — catálogo, carrinho, busca, WhatsApp e formulário
const PRODUCTS = [
  {
    "id": 1,
    "name": "Protetor Solar Facial ISDIN Fusion Water FPS60 50ml",
    "price": 89.9,
    "category": "Protetores",
    "image": "https://images-1.eucerin.com/~/media/eucerin%20relaunch%20media/eucerin/local/latam/packshot/br/proteccion%20solar/69767-eucerin-sun-face-gel-cream-oil-control-fps60-50ml_packshot.jpg?hash=A0FED20B35855A19594420ED39765BB6&rh=2000&rw=2000&rx=0&ry=0",
    "fallback": "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/f/4/4/d3c8670d74e845aba4a51fe231e7cb14-screen.jpg",
    "tag": "Destaque"
  },
  {
    "id": 2,
    "name": "Protetor Solar Facial Needs Beauty FPS70 40g",
    "price": 33.67,
    "category": "Protetores",
    "image": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "fallback": "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/f/4/4/d3c8670d74e845aba4a51fe231e7cb14-screen.jpg",
    "tag": "Destaque"
  },
  {
    "id": 3,
    "name": "Protetor Solar Facial Nivea Sun Toque Seco FPS70 40ml",
    "price": 35.99,
    "category": "Protetores",
    "image": "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/f/4/4/d3c8670d74e845aba4a51fe231e7cb14-screen.jpg",
    "fallback": "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/f/4/4/d3c8670d74e845aba4a51fe231e7cb14-screen.jpg",
    "tag": "Destaque"
  },
  {
    "id": 4,
    "name": "Protetor Solar Facial Anasol Oil Free FPS50 60g",
    "price": 32.88,
    "category": "Protetores",
    "image": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "fallback": "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/f/4/4/d3c8670d74e845aba4a51fe231e7cb14-screen.jpg",
    "tag": "Destaque"
  },
  {
    "id": 5,
    "name": "Protetor Solar Facial Neutrogena Sun Fresh FPS70 40g",
    "price": 49.31,
    "category": "Protetores",
    "image": "https://images-1.eucerin.com/~/media/eucerin%20relaunch%20media/eucerin/local/latam/packshot/br/proteccion%20solar/69767-eucerin-sun-face-gel-cream-oil-control-fps60-50ml_packshot.jpg?hash=A0FED20B35855A19594420ED39765BB6&rh=2000&rw=2000&rx=0&ry=0",
    "fallback": "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/f/4/4/d3c8670d74e845aba4a51fe231e7cb14-screen.jpg",
    "tag": "Destaque"
  },
  {
    "id": 6,
    "name": "Protetor Solar La Roche-Posay Anthelios FPS80 40g",
    "price": 67.7,
    "category": "Protetores",
    "image": "https://images-1.eucerin.com/~/media/eucerin%20relaunch%20media/eucerin/local/latam/packshot/br/proteccion%20solar/69767-eucerin-sun-face-gel-cream-oil-control-fps60-50ml_packshot.jpg?hash=A0FED20B35855A19594420ED39765BB6&rh=2000&rw=2000&rx=0&ry=0",
    "fallback": "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/f/4/4/d3c8670d74e845aba4a51fe231e7cb14-screen.jpg",
    "tag": ""
  },
  {
    "id": 7,
    "name": "Protetor Solar Nivea Sun Protect & Bronze FPS30 125ml",
    "price": 59.99,
    "category": "Protetores",
    "image": "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/f/4/4/d3c8670d74e845aba4a51fe231e7cb14-screen.jpg",
    "fallback": "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/f/4/4/d3c8670d74e845aba4a51fe231e7cb14-screen.jpg",
    "tag": ""
  },
  {
    "id": 8,
    "name": "Protetor Solar Nivea Sun Spray Protect & Toque Seco FPS50 200ml",
    "price": 71.99,
    "category": "Protetores",
    "image": "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/f/4/4/d3c8670d74e845aba4a51fe231e7cb14-screen.jpg",
    "fallback": "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/f/4/4/d3c8670d74e845aba4a51fe231e7cb14-screen.jpg",
    "tag": ""
  },
  {
    "id": 9,
    "name": "Protetor Solar Eucerin Sun Oil Control FPS60",
    "price": 159.89,
    "category": "Protetores",
    "image": "https://images-1.eucerin.com/~/media/eucerin%20relaunch%20media/eucerin/local/latam/packshot/br/proteccion%20solar/69767-eucerin-sun-face-gel-cream-oil-control-fps60-50ml_packshot.jpg?hash=A0FED20B35855A19594420ED39765BB6&rh=2000&rw=2000&rx=0&ry=0",
    "fallback": "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/f/4/4/d3c8670d74e845aba4a51fe231e7cb14-screen.jpg",
    "tag": ""
  },
  {
    "id": 10,
    "name": "Protetor Solar Nivea Sun Protect & Hidrata FPS50 200ml",
    "price": 49.99,
    "category": "Protetores",
    "image": "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/f/4/4/d3c8670d74e845aba4a51fe231e7cb14-screen.jpg",
    "fallback": "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/f/4/4/d3c8670d74e845aba4a51fe231e7cb14-screen.jpg",
    "tag": ""
  },
  {
    "id": 11,
    "name": "Desodorante Dove Original Aerosol 150ml",
    "price": 15.99,
    "category": "Desodorantes",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mglbqm4b9csg57",
    "fallback": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mglbqm4b9csg57",
    "tag": ""
  },
  {
    "id": 12,
    "name": "Desodorante Rexona Men Impacto 150ml",
    "price": 12.99,
    "category": "Desodorantes",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-22100-c7mtoyfpm7iv4d",
    "fallback": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mglbqm4b9csg57",
    "tag": ""
  },
  {
    "id": 13,
    "name": "Desodorante Nivea Invisible 150ml",
    "price": 11.72,
    "category": "Desodorantes",
    "image": "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/f/4/4/d3c8670d74e845aba4a51fe231e7cb14-screen.jpg",
    "fallback": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mglbqm4b9csg57",
    "tag": ""
  },
  {
    "id": 14,
    "name": "Desodorante Rexona Clinical Classic 150ml",
    "price": 18.99,
    "category": "Desodorantes",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-22100-c7mtoyfpm7iv4d",
    "fallback": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mglbqm4b9csg57",
    "tag": ""
  },
  {
    "id": 15,
    "name": "Desodorante Dove Men Care Sem Perfume 150ml",
    "price": 19.99,
    "category": "Desodorantes",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mglbqm4b9csg57",
    "fallback": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mglbqm4b9csg57",
    "tag": ""
  },
  {
    "id": 16,
    "name": "Desodorante Nivea Men Deep Carvão Ativado 150ml",
    "price": 15.69,
    "category": "Desodorantes",
    "image": "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/f/4/4/d3c8670d74e845aba4a51fe231e7cb14-screen.jpg",
    "fallback": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mglbqm4b9csg57",
    "tag": ""
  },
  {
    "id": 17,
    "name": "Desodorante Rexona Cotton Dry 250ml",
    "price": 28.45,
    "category": "Desodorantes",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-22100-c7mtoyfpm7iv4d",
    "fallback": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mglbqm4b9csg57",
    "tag": ""
  },
  {
    "id": 18,
    "name": "Desodorante Giovanna Baby Neutral 150ml",
    "price": 24.06,
    "category": "Desodorantes",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mglbqm4b9csg57",
    "fallback": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mglbqm4b9csg57",
    "tag": ""
  },
  {
    "id": 19,
    "name": "Desodorante Herbíssimo Vanilla 50ml",
    "price": 8.9,
    "category": "Desodorantes",
    "image": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "fallback": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mglbqm4b9csg57",
    "tag": ""
  },
  {
    "id": 20,
    "name": "Desodorante Old Spice Brisa do Mar 250ml",
    "price": 24.9,
    "category": "Desodorantes",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-22100-c7mtoyfpm7iv4d",
    "fallback": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mglbqm4b9csg57",
    "tag": ""
  },
  {
    "id": 21,
    "name": "Fralda Pampers Premium Care M 34 unidades",
    "price": 69.99,
    "category": "Infantil",
    "image": "https://cdn.ultrafarma.com.br/static/produtos/819043/large-637671653655494255-819043.jpg",
    "fallback": "https://cdn.ultrafarma.com.br/static/produtos/819043/large-637671653655494255-819043.jpg",
    "tag": ""
  },
  {
    "id": 22,
    "name": "Fralda Pampers Premium Care P 40 unidades",
    "price": 85.99,
    "category": "Infantil",
    "image": "https://cdn.ultrafarma.com.br/static/produtos/819043/large-637671653655494255-819043.jpg",
    "fallback": "https://cdn.ultrafarma.com.br/static/produtos/819043/large-637671653655494255-819043.jpg",
    "tag": ""
  },
  {
    "id": 23,
    "name": "Fralda Pampers Premium Care G 30 unidades",
    "price": 85.99,
    "category": "Infantil",
    "image": "https://cdn.ultrafarma.com.br/static/produtos/819043/large-637671653655494255-819043.jpg",
    "fallback": "https://cdn.ultrafarma.com.br/static/produtos/819043/large-637671653655494255-819043.jpg",
    "tag": ""
  },
  {
    "id": 24,
    "name": "Fralda Huggies Natural Care RN 34 unidades",
    "price": 42.99,
    "category": "Infantil",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-7rblm-lp4n6l4n0m4c1d",
    "fallback": "https://cdn.ultrafarma.com.br/static/produtos/819043/large-637671653655494255-819043.jpg",
    "tag": ""
  },
  {
    "id": 25,
    "name": "Fralda Huggies Máxima Proteção M 40 unidades",
    "price": 58.99,
    "category": "Infantil",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-7rblm-lp4n6l4n0m4c1d",
    "fallback": "https://cdn.ultrafarma.com.br/static/produtos/819043/large-637671653655494255-819043.jpg",
    "tag": ""
  },
  {
    "id": 26,
    "name": "Fralda MamyPoko Cuidado Real M 68 unidades",
    "price": 140.99,
    "category": "Infantil",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-7rblm-lp4n6l4n0m4c1d",
    "fallback": "https://cdn.ultrafarma.com.br/static/produtos/819043/large-637671653655494255-819043.jpg",
    "tag": ""
  },
  {
    "id": 27,
    "name": "Fralda MamyPoko Cuidado Real G 60 unidades",
    "price": 140.99,
    "category": "Infantil",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-7rblm-lp4n6l4n0m4c1d",
    "fallback": "https://cdn.ultrafarma.com.br/static/produtos/819043/large-637671653655494255-819043.jpg",
    "tag": ""
  },
  {
    "id": 28,
    "name": "Lenço Umedecido MamyPoko 200 unidades",
    "price": 38.99,
    "category": "Infantil",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-7rblm-lp4n6l4n0m4c1d",
    "fallback": "https://cdn.ultrafarma.com.br/static/produtos/819043/large-637671653655494255-819043.jpg",
    "tag": ""
  },
  {
    "id": 29,
    "name": "Fralda Needs Baby Comfort M 70 unidades",
    "price": 52.43,
    "category": "Infantil",
    "image": "https://cdn.ultrafarma.com.br/static/produtos/819043/large-637671653655494255-819043.jpg",
    "fallback": "https://cdn.ultrafarma.com.br/static/produtos/819043/large-637671653655494255-819043.jpg",
    "tag": ""
  },
  {
    "id": 30,
    "name": "Lenço Umedecido Needs Baby Comfort 120 unidades",
    "price": 12.67,
    "category": "Infantil",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-7rblm-lp4n6l4n0m4c1d",
    "fallback": "https://cdn.ultrafarma.com.br/static/produtos/819043/large-637671653655494255-819043.jpg",
    "tag": ""
  },
  {
    "id": 31,
    "name": "Shampoo Elseve Liso dos Sonhos 400ml",
    "price": 43.99,
    "category": "Cabelos",
    "image": "https://tdc0tj.vtexassets.com/arquivos/ids/184526/7908615060606-Shampoo-Loreal-Paris-Glycolic-Gloss-400ml_1.png?v=638446571341030000",
    "fallback": "https://tdc0tj.vtexassets.com/arquivos/ids/184526/7908615060606-Shampoo-Loreal-Paris-Glycolic-Gloss-400ml_1.png?v=638446571341030000",
    "tag": ""
  },
  {
    "id": 32,
    "name": "Shampoo Elseve Glycolic Gloss 400ml",
    "price": 39.04,
    "category": "Cabelos",
    "image": "https://tdc0tj.vtexassets.com/arquivos/ids/184526/7908615060606-Shampoo-Loreal-Paris-Glycolic-Gloss-400ml_1.png?v=638446571341030000",
    "fallback": "https://tdc0tj.vtexassets.com/arquivos/ids/184526/7908615060606-Shampoo-Loreal-Paris-Glycolic-Gloss-400ml_1.png?v=638446571341030000",
    "tag": ""
  },
  {
    "id": 33,
    "name": "Shampoo Pantene Pro-V Liso Extremo 400ml",
    "price": 33.39,
    "category": "Cabelos",
    "image": "https://tdc0tj.vtexassets.com/arquivos/ids/184526/7908615060606-Shampoo-Loreal-Paris-Glycolic-Gloss-400ml_1.png?v=638446571341030000",
    "fallback": "https://tdc0tj.vtexassets.com/arquivos/ids/184526/7908615060606-Shampoo-Loreal-Paris-Glycolic-Gloss-400ml_1.png?v=638446571341030000",
    "tag": ""
  },
  {
    "id": 34,
    "name": "Shampoo TRESemmé Reconstrução e Força 650ml",
    "price": 38.99,
    "category": "Cabelos",
    "image": "https://cr-net-public-prod.s3.amazonaws.com/variation_image/B0D41D516C4827B3EEF01239F3F8BE48.a1ed7dcb-51bb-4396-bc63-ac56d88fc836",
    "fallback": "https://tdc0tj.vtexassets.com/arquivos/ids/184526/7908615060606-Shampoo-Loreal-Paris-Glycolic-Gloss-400ml_1.png?v=638446571341030000",
    "tag": ""
  },
  {
    "id": 35,
    "name": "Shampoo Dove Bond Intense Repair 350ml",
    "price": 26.99,
    "category": "Cabelos",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-22100-c7mtoyfpm7iv4d",
    "fallback": "https://tdc0tj.vtexassets.com/arquivos/ids/184526/7908615060606-Shampoo-Loreal-Paris-Glycolic-Gloss-400ml_1.png?v=638446571341030000",
    "tag": ""
  },
  {
    "id": 36,
    "name": "Shampoo Head & Shoulders Men Menthol Sport 400ml",
    "price": 30.9,
    "category": "Cabelos",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-22100-c7mtoyfpm7iv4d",
    "fallback": "https://tdc0tj.vtexassets.com/arquivos/ids/184526/7908615060606-Shampoo-Loreal-Paris-Glycolic-Gloss-400ml_1.png?v=638446571341030000",
    "tag": ""
  },
  {
    "id": 37,
    "name": "Shampoo Tío Nacho Ervas Milenares 415ml",
    "price": 43.99,
    "category": "Cabelos",
    "image": "https://tdc0tj.vtexassets.com/arquivos/ids/184526/7908615060606-Shampoo-Loreal-Paris-Glycolic-Gloss-400ml_1.png?v=638446571341030000",
    "fallback": "https://tdc0tj.vtexassets.com/arquivos/ids/184526/7908615060606-Shampoo-Loreal-Paris-Glycolic-Gloss-400ml_1.png?v=638446571341030000",
    "tag": ""
  },
  {
    "id": 38,
    "name": "Shampoo Phytoervas Controle de Oleosidade 250ml",
    "price": 28.9,
    "category": "Cabelos",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-7rblm-lp4n6l4n0m4c1d",
    "fallback": "https://tdc0tj.vtexassets.com/arquivos/ids/184526/7908615060606-Shampoo-Loreal-Paris-Glycolic-Gloss-400ml_1.png?v=638446571341030000",
    "tag": ""
  },
  {
    "id": 39,
    "name": "Shampoo Elseve Liso dos Sonhos Super Alinhador 400ml",
    "price": 35.99,
    "category": "Cabelos",
    "image": "https://tdc0tj.vtexassets.com/arquivos/ids/184526/7908615060606-Shampoo-Loreal-Paris-Glycolic-Gloss-400ml_1.png?v=638446571341030000",
    "fallback": "https://tdc0tj.vtexassets.com/arquivos/ids/184526/7908615060606-Shampoo-Loreal-Paris-Glycolic-Gloss-400ml_1.png?v=638446571341030000",
    "tag": ""
  },
  {
    "id": 40,
    "name": "Shampoo Pantene Bambu 400ml",
    "price": 29.9,
    "category": "Cabelos",
    "image": "https://tdc0tj.vtexassets.com/arquivos/ids/184526/7908615060606-Shampoo-Loreal-Paris-Glycolic-Gloss-400ml_1.png?v=638446571341030000",
    "fallback": "https://tdc0tj.vtexassets.com/arquivos/ids/184526/7908615060606-Shampoo-Loreal-Paris-Glycolic-Gloss-400ml_1.png?v=638446571341030000",
    "tag": ""
  },
  {
    "id": 41,
    "name": "Sabonete Granado Enxofre 90g",
    "price": 10.93,
    "category": "Higiene",
    "image": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "fallback": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "tag": ""
  },
  {
    "id": 42,
    "name": "Sabonete Nivea Creme Care 90g",
    "price": 5.09,
    "category": "Higiene",
    "image": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "fallback": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "tag": ""
  },
  {
    "id": 43,
    "name": "Sabonete Dove Original 90g",
    "price": 5.99,
    "category": "Higiene",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mglbqm4b9csg57",
    "fallback": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "tag": ""
  },
  {
    "id": 44,
    "name": "Sabonete Protex Classic 85g",
    "price": 4.99,
    "category": "Higiene",
    "image": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "fallback": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "tag": ""
  },
  {
    "id": 45,
    "name": "Sabonete Líquido Granado Bebê 250ml",
    "price": 23.99,
    "category": "Higiene",
    "image": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "fallback": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "tag": ""
  },
  {
    "id": 46,
    "name": "Sabonete Líquido Nivea Óleo de Banho 200ml",
    "price": 32.99,
    "category": "Higiene",
    "image": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "fallback": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "tag": ""
  },
  {
    "id": 47,
    "name": "Fio Dental Reach Essencial Menta 100m",
    "price": 14.69,
    "category": "Higiene",
    "image": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "fallback": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "tag": ""
  },
  {
    "id": 48,
    "name": "Cotonetes Johnson & Johnson 75 unidades",
    "price": 6.65,
    "category": "Higiene",
    "image": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "fallback": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "tag": ""
  },
  {
    "id": 49,
    "name": "Loção Nivea Milk 72h 200ml",
    "price": 34.0,
    "category": "Higiene",
    "image": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "fallback": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "tag": ""
  },
  {
    "id": 50,
    "name": "Hidratante Corporal Dove 200ml",
    "price": 29.9,
    "category": "Higiene",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mglbqm4b9csg57",
    "fallback": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16475.jpg",
    "tag": ""
  }
];

const brl = value => value.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const WA = "5519992990839";
let cart = JSON.parse(localStorage.getItem("biovittaCart") || "[]");

function whatsappUrl(product){
  return `https://wa.me/${WA}?text=${encodeURIComponent(`Olá, gostaria de pedir o produto: ${product.name}`)}`;
}

function renderProducts(list=PRODUCTS){
  const grid=document.getElementById("productsGrid");
  if(!grid)return;
  grid.innerHTML=list.map(p=>`
    <article class="product-card">
      <div class="product-image">
        ${p.tag?`<span class="tag">${p.tag}</span>`:""}
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='${p.fallback}'">
      </div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <h3>${p.name}</h3>
        ${p.old?`<span class="old-price">De ${brl(p.old)}</span>`:""}
        <div class="price">${brl(p.price)}</div>
        <div class="product-actions">
          <button class="btn btn-primary" onclick="addToCart(${p.id})">Adicionar</button>
          <a class="btn whatsapp" href="${whatsappUrl(p)}" target="_blank" rel="noopener" aria-label="Pedir ${p.name} pelo WhatsApp">☏</a>
        </div>
      </div>
    </article>`).join("");
}

function addToCart(id){
  const product=PRODUCTS.find(p=>p.id===id);
  const existing=cart.find(i=>i.id===id);
  if(existing)existing.qty++;
  else cart.push({id:product.id,name:product.name,price:product.price,qty:1});
  saveCart();openCart();
}
function saveCart(){localStorage.setItem("biovittaCart",JSON.stringify(cart));renderCart();}
function renderCart(){
  const items=document.getElementById("cartItems");
  const count=document.getElementById("cartCount");
  const total=document.getElementById("cartTotal");
  if(!items)return;
  count.textContent=cart.reduce((s,i)=>s+i.qty,0);
  items.innerHTML=cart.length?cart.map(i=>`
    <div class="cart-item">
      <div class="cart-thumb">✚</div>
      <div><h4>${i.name}</h4><small>${i.qty} × ${brl(i.price)}</small></div>
      <button class="remove-item" onclick="removeFromCart(${i.id})" aria-label="Remover">×</button>
    </div>`).join(""):`<div class="empty-cart">🛒<p>Seu carrinho está vazio.</p></div>`;
  total.textContent=brl(cart.reduce((s,i)=>s+i.price*i.qty,0));
}
function removeFromCart(id){cart=cart.filter(i=>i.id!==id);saveCart();}
function openCart(){document.getElementById("cartDrawer")?.classList.add("open");document.getElementById("overlay")?.classList.add("active");}
function closeCart(){document.getElementById("cartDrawer")?.classList.remove("open");document.getElementById("overlay")?.classList.remove("active");}

function filterProducts(category){
  renderProducts(PRODUCTS.filter(p=>p.category===category));
  const clear=document.getElementById("clearFilter");
  if(clear){clear.hidden=false;clear.textContent=`Ver todos • ${category}`;}
  document.getElementById("ofertas")?.scrollIntoView({behavior:"smooth"});
}

function setupSearch(){
  const form=document.getElementById("searchForm"),input=document.getElementById("searchInput");
  if(!form||!input)return;
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const term=input.value.trim().toLowerCase();
    const result=PRODUCTS.filter(p=>`${p.name} ${p.category}`.toLowerCase().includes(term));
    renderProducts(result);
    const clear=document.getElementById("clearFilter");
    if(clear){clear.hidden=false;clear.textContent=result.length?`${result.length} resultado(s) • Ver todos`:"Nenhum resultado • Ver todos";}
    document.getElementById("ofertas")?.scrollIntoView({behavior:"smooth"});
  });
}

function setupCarousel(){
  const slides=[...document.querySelectorAll(".hero-slide")],dots=document.getElementById("heroDots");
  if(!slides.length||!dots)return;
  dots.innerHTML=slides.map((_,i)=>`<button class="${i===0?"active":""}" aria-label="Slide ${i+1}"></button>`).join("");
  const buttons=[...dots.children];let index=0;
  const go=i=>{index=i;slides.forEach((s,n)=>s.classList.toggle("active",n===i));buttons.forEach((b,n)=>b.classList.toggle("active",n===i));};
  buttons.forEach((b,i)=>b.addEventListener("click",()=>go(i)));
  setInterval(()=>go((index+1)%slides.length),6000);
}

function setupCareerForm(){
  const form=document.getElementById("applicationForm");
  if(!form)return;
  const phone=document.getElementById("phone");
  phone?.addEventListener("input",()=>{
    let v=phone.value.replace(/\D/g,"").slice(0,11);
    if(v.length>6)v=v.replace(/^(\d{2})(\d{5})(\d{0,4}).*/,"($1) $2-$3");
    else if(v.length>2)v=v.replace(/^(\d{2})(\d{0,5}).*/,"($1) $2");
    phone.value=v;
  });
  form.addEventListener("submit",e=>{
    if(!form.checkValidity()){
      e.preventDefault();
      form.classList.add("show-validation");
      form.querySelector(":invalid")?.focus();
      return;
    }
    const file=document.getElementById("resume").files[0];
    if(file && file.size>5*1024*1024){
      e.preventDefault();
      alert("O currículo deve ter no máximo 5 MB.");
      return;
    }
  });
}

document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("year")?.replaceChildren(String(new Date().getFullYear()));
  renderProducts();renderCart();setupSearch();setupCarousel();setupCareerForm();
  document.getElementById("cartBtn")?.addEventListener("click",openCart);
  document.getElementById("closeCart")?.addEventListener("click",closeCart);
  document.getElementById("overlay")?.addEventListener("click",closeCart);
  document.getElementById("checkoutBtn")?.addEventListener("click",()=>{
    if(!cart.length){alert("Adicione pelo menos um produto ao carrinho.");return;}
    const lines=cart.map(i=>`${i.qty}x ${i.name} — ${brl(i.price*i.qty)}`).join("\n");
    const total=brl(cart.reduce((s,i)=>s+i.price*i.qty,0));
    const text=`Olá, gostaria de finalizar meu pedido na BioVitta:\n${lines}\nTotal estimado: ${total}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`,"_blank");
  });
  document.querySelectorAll("[data-category]").forEach(el=>el.addEventListener("click",()=>filterProducts(el.dataset.category)));
  document.getElementById("clearFilter")?.addEventListener("click",()=>{renderProducts();document.getElementById("clearFilter").hidden=true;});
});
