export const ARCANOS = {
  1: 'O Pioneiro',
  2: 'O Diplomata',
  3: 'O Criador',
  4: 'O Construtor',
  5: 'O Explorador',
  6: 'O Guardião',
  7: 'O Sábio',
  8: 'O Realizador',
  9: 'O Humanista',
  11: 'O Iluminado',
  22: 'O Mestre Construtor',
  33: 'O Mestre do Amor',
};

const destino = {
  1: `Você nasceu para liderar. Seu destino é trilhar caminhos que ainda não existem, abrir portas com coragem e mostrar ao mundo que é possível ser original sem pedir permissão. A independência não é apenas um traço de personalidade — é a sua missão.

Ao longo da vida, você será colocado repetidamente em posições onde precisará agir sozinho, tomar decisões difíceis e confiar em sua própria bússola interior. Cada desafio é um convite para fortalecer a confiança em si mesmo.

O risco do seu caminho está na tendência ao isolamento ou à arrogância quando a insegurança se disfarça de autossuficiência. Seu maior crescimento virá quando aprender a liderar com generosidade, incluindo as pessoas sem abrir mão da sua essência.`,

  2: `Sua alma veio ao mundo com o dom da mediação. Você sente o que os outros sentem antes mesmo que eles mesmos percebam, e isso te torna um instrumento de paz em ambientes de conflito. O seu destino está ligado à construção de pontes — entre pessoas, ideias e mundos aparentemente opostos.

A parceria é o seu território natural. Você floresce em relacionamentos profundos, colaborações criativas e espaços onde a sutileza é valorizada. Sua força não está no volume da voz, mas na qualidade da escuta.

O desafio do caminho 2 é a codependência e o medo de se posicionar. Quando você aprender que dizer não também é um ato de amor, sua capacidade de servir ao outro se multiplicará.`,

  3: `Você veio para expressar. Sua vida é uma obra de arte em construção, e o seu papel no mundo é trazer leveza, criatividade e alegria para os espaços que habita. O número 3 vibra com a comunicação em todas as suas formas — escrita, fala, arte, música, humor.

Onde quer que você vá, você inspira. Pessoas se sentem mais vivas em sua presença, e isso não é coincidência — é o efeito da sua energia 3 funcionando em pleno potencial. O universo te deu o dom de transformar o ordinário em extraordinário.

Seu maior desafio é a dispersão. Com tantos talentos e interesses, a tentação de começar sem terminar é constante. Quando você escolher aprofundar ao invés de apenas espalhar, sua criatividade se tornará uma força transformadora de verdade.`,

  4: `Sua missão é construir. O destino 4 chama você a criar estruturas sólidas — na carreira, na família, nos projetos que abraça. Você não tem medo do trabalho duro; na verdade, é nele que você encontra significado e dignidade.

A confiabilidade é um dos seus maiores presentes. Quando você assume um compromisso, as pessoas sabem que podem contar com você. Esse tipo de integridade é raro e valioso, e o mundo precisa de mais pessoas como você para funcionar.

O perigo do caminho 4 é a rigidez. Quando as regras se tornam mais importantes do que as pessoas, você perde o fio de ouro que conecta o trabalho ao propósito. Flexibilidade não é fraqueza — é a sabedoria que transforma estrutura em legado.`,

  5: `Liberdade é a sua palavra sagrada. Você veio ao mundo para experimentar, questionar, viajar — literal e metaforicamente. O destino 5 é marcado por transformações, mudanças de rota e encontros que expandem a consciência.

Você tem um magnetismo natural que atrai pessoas e oportunidades diferentes. Sua curiosidade é insaciável, e é exatamente essa característica que te permite ver o que os outros não veem, conectar pontos que parecem desconexos e encontrar soluções criativas onde outros veem obstáculos.

O desafio do 5 é o excesso. Quando a busca por experiências se torna fuga de responsabilidade, o potencial se dissipa. Sua evolução está em aprender que a verdadeira liberdade não é ausência de compromisso — é escolher conscientemente onde ancorar sua energia.`,

  6: `Você nasceu para cuidar. O destino 6 é o número do amor incondicional, da família, da responsabilidade afetiva. Você tem uma capacidade natural de perceber o que os outros precisam e agir para que se sintam amados e seguros.

Sua presença tem um efeito estabilizador nas pessoas e nos ambientes. Onde há conflito, você traz harmonia; onde há desespero, você traz esperança. Essa capacidade de criar lar — não apenas físico, mas emocional — é um dom extraordinário.

O risco do caminho 6 é o martírio silencioso. Quando você cuida de todos mas esquece de si mesmo, a exaustão inevitavelmente chega. Aprender a receber com a mesma graça com que você dá é a sua maior lição espiritual.`,

  7: `Sua jornada é interior. O destino 7 é o do estudioso, do investigador da alma, do ser que não se satisfaz com respostas superficiais. Você precisa entender o porquê das coisas — não apenas como funcionam, mas qual o significado por trás delas.

Você é naturalmente introspectivo e pode parecer distante para quem não te conhece bem. Mas por dentro, sua mente nunca para: você está sempre processando, analisando, conectando padrões que a maioria simplesmente não percebe. Esse é o seu superpoder silencioso.

O desafio do 7 é o isolamento como mecanismo de defesa. Quando o mundo parece barulhento demais, a solidão se torna um refúgio que pode virar uma prisão. Sua evolução está em compartilhar o que você descobriu — o mundo precisa da sua sabedoria.`,

  8: `Você veio para manifestar. O destino 8 é o número do poder, da abundância e da autoridade conquistada pelo esforço. Você tem uma visão natural para o que pode ser construído, otimizado e multiplicado — em negócios, na liderança e na vida material.

Sua relação com o dinheiro e o poder é um dos seus maiores campos de aprendizado. Quando você usa esses recursos a serviço de algo maior do que você mesmo, o 8 funciona em sua vibração mais alta — gerando prosperidade real e duradoura.

O risco do caminho 8 está na inversão: quando o poder se torna um fim em si mesmo, você perde a bússola. Controle, workaholism e obsessão por status são os desvios do 8. Sua grandeza real vem quando o sucesso externo reflete uma riqueza interior igualmente desenvolvida.`,

  9: `Sua missão é servir à humanidade. O destino 9 carrega a energia da compaixão universal, da sabedoria acumulada e do desejo genuíno de deixar o mundo melhor do que encontrou. Você não consegue ficar indiferente ao sofrimento alheio — isso não é fraqueza, é sua vocação.

Você tem uma visão panorâmica da vida que muitos levam anos para desenvolver. Enxerga padrões, compreende motivações humanas com profundidade e tem a capacidade de transformar experiências dolorosas em sabedoria que pode ajudar outros.

O desafio do 9 é o apego a resultados. Quando você espera que o mundo reconheça o quanto você dá, a decepção é inevitável. Sua evolução está em servir com leveza, sem expectativa de retorno — e paradoxalmente, é exatamente aí que tudo começa a retornar.`,

  11: `Você é um canal. O 11 é o primeiro número mestre, vibra com intuição altíssima, sensibilidade espiritual e o potencial de iluminar multidões. Você veio ao mundo com um fio direto ao invisível — sonhos vívidos, percepções que vão além da lógica, sensações que se provam certas.

Carregar o destino 11 não é fácil. A intensidade da sua percepção pode ser esmagadora, e o mundo pode parecer barulhento, cruel ou incompreensível para alguém que sente tudo tão fundo. Mas essa mesma sensibilidade é o veículo da sua missão.

Quando você aprende a confiar na sua intuição sem tentar explicá-la racionalmente, e quando encontra formas de traduzir o que percebe em mensagens que o mundo pode receber, você se torna uma força de transformação genuína. Sua vida é um ensinamento vivo.`,

  22: `Você é um arquiteto do impossível. O 22 é o número mestre da manifestação em grande escala — você não veio para construir apenas para si mesmo, mas para criar estruturas que beneficiem muitas pessoas por muito tempo. Seus sonhos têm dimensões coletivas.

A tensão do 22 é entre o 4 (o construtor prático) e o 11 (o visionário intuitivo). Você sente os dois dentro de você: o impulso de criar sistemas sólidos e a visão de algo que ainda não existe. Quando esses dois lados trabalham juntos, você é praticamente imparável.

Seu maior risco é a paralisia diante da grandiosidade da sua própria visão. Quando o projeto parece grande demais, você pode se esconder na perfeição ou na procrastinação. A chave é começar — mesmo imperfeito, mesmo pequeno. O universo acelera quando você dá o primeiro passo.`,

  33: `O 33 é o mais raro e mais exigente dos números mestres. Você veio carregando o potencial do amor incondicional em sua forma mais elevada — não o amor romântico ou familiar apenas, mas a compaixão que abraça a humanidade inteira sem julgamento.

Sua presença tem um efeito de cura nos ambientes que você habita. Pessoas se sentem vistas, acolhidas e seguras quando estão com você. Isso não é exagero — é a vibração do 33 operando através da sua existência. Você é um instrumento de amor com pernas.

O peso do 33 está na tentação de carregar os outros no lugar de caminhar ao lado. Quando você se martiriza em nome do amor, perde a leveza que é a sua maior ferramenta de transformação. Seu caminho é demonstrar que é possível amar profundamente sem se dissolver no outro.`,
};

const alma = {
  1: `A sua alma deseja ser única. Por dentro, existe um fogo de independência que muitas vezes você contém por medo de parecer arrogante ou de magoar as pessoas. Mas essa necessidade de singularidade é sagrada — ela é o chamado da sua essência mais profunda.

Você sonha com autonomia. Seja em que área for — trabalho, relacionamentos, projetos pessoais — sua alma se ressente quando precisa pedir permissão ou se enquadrar em moldes que não foram feitos para você. Essa resistência não é teimosia; é integridade.

Nutrir esse fogo interior com projetos próprios, escolhas corajosas e espaço para ser exatamente quem você é não é egoísmo — é cuidar da fonte de onde toda a sua contribuição para o mundo emana.`,

  2: `Sua alma foi feita para conectar. O que você mais deseja, no nível mais profundo, é pertencer — ter ao seu lado pessoas que te entendem de verdade, com quem você pode baixar a guarda e simplesmente ser. A solidão pesa em você de uma forma que vai além do físico.

Você sente as emoções alheias como se fossem suas, e isso pode ser exaustivo quando não há limites claros. Mas também é essa mesma porosidade que faz de você uma das pessoas mais empáticas que existem — alguém capaz de oferecer uma qualidade de presença que a maioria das pessoas nunca experimentou.

Sua alma pede que você invista em vínculos verdadeiros, não em muitos — em poucos e profundos. É nesse espaço de intimidade real que você se reabastece e encontra sentido.`,

  3: `Sua alma quer se expressar. Lá dentro, existe um universo de ideias, imagens, histórias e emoções esperando para ser compartilhado com o mundo. Quando você não encontra canais de expressão, algo murcha em você — uma espécie de sufocamento silencioso.

Criatividade não é um hobby para você: é oxigênio. Seja pela escrita, pela fala, pela arte, pela moda, pela culinária ou por qualquer outra forma — sua alma precisa criar para se sentir viva e inteira. Quando isso flui, você irradia.

O que sua alma mais teme é não ser ouvida, não deixar uma marca. Isso não é vaidade — é o reconhecimento instintivo de que você tem algo genuíno para oferecer. Confie nisso.`,

  4: `Sua alma busca segurança. O que você mais deseja por dentro é estabilidade — saber que tem uma base sólida sob os pés, que as pessoas ao seu redor são confiáveis, que amanhã será parecido com hoje em termos de estrutura e previsibilidade.

Isso não significa que você teme a mudança, mas que você precisa de uma fundação firme para se sentir livre para crescer. Como uma árvore que só pode se expandir quando tem raízes profundas, você floresce quando tem ordem, rotina e comprometimento na sua vida.

Sua alma se satisfaz no trabalho bem feito, no lar organizado, nos compromissos honrados. Há uma dignidade profunda na forma como você aborda as responsabilidades — e isso é algo para celebrar, não minimizar.`,

  5: `Sua alma anseia por liberdade. Lá dentro, existe um aventureiro que se sufoca quando preso em rotinas rígidas, relacionamentos sufocantes ou ambientes que não permitem movimento. Você precisa de ar — de espaço para explorar, experimentar e descobrir.

A variedade não é capricho para você: é necessidade da alma. Novas experiências, novos lugares, novas ideias e novas perspectivas são o alimento que mantém sua chama acesa. Quando você se permite isso, você brilha de uma forma que é impossível ignorar.

Sua alma tem medo de estagnar, de desperdiçar a vida em uma versão menor de quem você poderia ser. Esse medo, quando transformado em combustível e não em ansiedade, é exatamente o que te mantém em movimento e em crescimento.`,

  6: `Sua alma foi tecida com fios de amor. O que você mais deseja, no nível mais íntimo, é amar e ser amado de forma plena, incondicional e recíproca. Família, lar, pertencimento — essas palavras ressoam em você de uma forma que vai além do convencional.

Você tem um instinto protetor poderoso. Quando as pessoas ao seu redor estão bem, você está bem. Quando há sofrimento à sua volta, é difícil para você descansar enquanto não faz algo a respeito. Esse cuidado genuíno é um dom — mas precisa de fronteiras para não se tornar fardo.

Sua alma se nutre de harmonia, de conexões afetivas saudáveis e de espaços onde o amor é expresso e recebido com naturalidade. Criar esse ambiente é ao mesmo tempo sua missão e sua recompensa.`,

  7: `Sua alma busca verdade. Lá dentro, existe um filósofo insaciável que não se contenta com explicações superficiais, narrativas prontas ou crenças herdadas sem questionamento. Você precisa entender — e não qualquer entender, mas um entendimento profundo, quase espiritual.

A solidão não te assusta; às vezes, é o único lugar onde você consegue ouvir seus próprios pensamentos. Você precisa de silêncio para processar o que experiencia, e ambientes caóticos ou barulhentos te drenam rapidamente. Isso não é antissocial — é a forma da sua alma se recarregar.

O que sua alma mais teme é a superficialidade — uma vida vivida na casca das coisas, sem profundidade, sem sentido, sem o mistério que torna a existência fascinante. Sua missão interior é encontrar e viver esse significado.`,

  8: `Sua alma deseja conquistar. Por dentro, existe uma ambição legítima e poderosa — não de dominar os outros, mas de se tornar a melhor versão de si mesmo e de construir algo que tenha peso, valor e permanência no mundo.

Você tem uma relação profunda com a ideia de realização. Metas cumpridas, projetos concluídos, reconhecimento pelo trabalho bem feito — esses não são apenas marcos externos, mas confirmações de que você está no caminho certo. Sua autoestima está intimamente ligada ao que você constrói.

Sua alma teme a mediocridade e o desperdício de potencial. Esse medo, quando canalizado com equilíbrio, te impulsiona. Quando se torna obsessão, te aprisiona. O segredo é aprender que abundância não é apenas material — é também interna.`,

  9: `Sua alma é oceânica. Você sente o mundo de uma forma ampla, quase sem fronteiras, e carrega dentro de si uma compaixão que às vezes te surpreende. Histórias de sofrimento te tocam fundo; injustiças te perturbam de verdade; a beleza do mundo te comove até as lágrimas.

Você tem uma memória emocional rica e uma sabedoria que parece vir de muito além desta vida. Pessoas instintivamente te procuram para conselhos, para desabafar, para sentir que alguém realmente entende — e você geralmente entende, mesmo sem explicar como.

O que sua alma mais precisa é de permissão para deixar ir. Você acumula emoções, relacionamentos e situações que já cumpriram seu ciclo. Aprender a soltar — com amor e sem culpa — é o ato mais profundo de cuidado que você pode oferecer a si mesmo.`,

  11: `Sua alma é um radar espiritual. Você sente coisas que não consegue explicar, percebe intenções antes de qualquer palavra ser dita e frequentemente sabe o desfecho das situações antes que elas se concluam. Essa intuição não é imaginação — é o seu sistema de orientação mais confiável.

Por dentro, você carrega uma sensibilidade que pode ser intensa demais em ambientes de baixa frequência. Ambientes tóxicos, conversas vazias e relacionamentos superficiais te esgotam de um jeito que vai além do cansaço físico — é uma exaustão da alma.

O que sua essência mais deseja é encontrar pessoas e espaços que vibrem na mesma frequência — onde você possa ser sensível sem ser fraco, intuitivo sem ser julgado, profundo sem ser solitário.`,

  22: `Sua alma carrega uma visão. Por dentro, você tem imagens de algo grandioso que poderia ser criado, construído ou transformado. Não é arrogância — é a percepção genuína de que você tem capacidade para impactar muitas vidas se escolher usar seus dons em escala.

A tensão que você sente frequentemente é entre o idealismo da visão e a pragmática da realidade. Por dentro, você sabe que é capaz de muito mais do que está fazendo; por fora, o caminho pode parecer longo demais. Essa distância entre potencial e manifestação é o seu maior campo de trabalho interior.

Sua alma se nutre quando você vê o impacto real do que construiu. Não elogios vagos, mas evidências concretas de que algo que você criou está tornando a vida de pessoas reais melhor. Esse é o seu combustível mais puro.`,

  33: `Sua alma é feita de amor. Não o amor romântico apenas, mas uma compaixão que abarca tudo — a criança perdida, o ancião só, o estranho no ônibus, a natureza, o silêncio. Você sente uma conexão com a vida que vai além das fronteiras do ego.

Por dentro, você carrega um desejo profundo de curar — não apenas pessoas, mas ambientes, relacionamentos, padrões coletivos. Você percebe a dor invisível dos outros e tem um instinto quase automático de querer aliviá-la.

O que sua alma mais precisa é de permissão para receber. Você dá com tanta naturalidade que esqueceu como é ser cuidado. Quando você aprende a se permitir ser amado — completamente, sem resistência — você se torna ainda mais capaz de dar.`,
};

const personalidade = {
  1: `Para o mundo, você projeta confiança e determinação. As pessoas te veem como alguém que sabe onde quer chegar e não pede desculpas por isso. Há uma presença marcante em você — quando você entra em um ambiente, as pessoas percebem.

Você transmite independência. Mesmo quando está em grupo, há uma aura de autoconfiança que faz as pessoas te respeitarem naturalmente. Sua opinião tem peso; sua postura, autoridade. Isso não vem de arrogância — vem de uma clareza genuína sobre quem você é.

O que você projeta pode, às vezes, afastar pessoas que precisariam de mais suavidade para se aproximar. Cultivar a gentileza na forma como você se apresenta não diminui sua força — ela a torna mais acessível e, portanto, mais poderosa.`,

  2: `O mundo te enxerga como alguém gentil, receptivo e confiável. Há algo em você que faz as pessoas se sentirem imediatamente à vontade — como se pudessem baixar a guarda e ser elas mesmas. Esse é um dom raro e precioso.

Você projeta diplomacia. Em situações de tensão, sua presença naturalmente suaviza os ânimos. As pessoas te procuram para intermediar, para escutar, para oferecer uma perspectiva equilibrada. Sua paciência e sutileza são visíveis — mesmo quando você acha que está apenas sendo normal.

O risco da sua personalidade 2 é ser percebido como indeciso ou sem opinião própria, especialmente quando você está apenas sendo cuidadoso antes de se posicionar. Aprender a expressar seu ponto de vista com a mesma gentileza que você usa para ouvir os outros é o que completa sua presença.`,

  3: `Para o mundo, você é luz. Carismático, expressivo e divertido, você é o tipo de pessoa que transforma o ambiente pelo simples fato de estar nele. Seu senso de humor, sua criatividade e sua capacidade de contar histórias fazem de você uma presença magnética.

Você projeta entusiasmo e originalidade. As pessoas adoram estar ao seu redor porque você as faz sentir mais vivas, mais inspiradas, mais conectadas com o lado lúdico da vida. Ideias surgem quando você está por perto, e conversas ficam mais interessantes com a sua participação.

O que pode trabalhar contra você é a percepção de superficialidade quando você está apenas sendo leve. Quando você mostra as camadas mais profundas da sua criatividade e inteligência, as pessoas se surpreendem — e ficam ainda mais encantadas.`,

  4: `O mundo te vê como alguém sólido, confiável e sério. Há uma estabilidade em você que as pessoas percebem intuitivamente — você parece alguém que faz o que promete, que não some nas dificuldades, que pode ser contado nos momentos que importam.

Você projeta competência e organização. Em ambientes profissionais, isso te coloca em posições de responsabilidade naturalmente. As pessoas confiam a você projetos importantes, não porque você se autopromocionou, mas porque sua entrega fala por si.

O desafio da sua personalidade é parecer inflexível ou excessivamente formal para pessoas que precisam de mais leveza. Quando você permite que o seu lado mais humano e bem-humorado apareça, a combinação de seriedade e calor humano se torna irresistível.`,

  5: `Para o mundo, você é eletrizante. Sua energia contagia, sua curiosidade inspira e sua liberdade provoca. As pessoas te veem como alguém diferente — não necessariamente fácil de definir, mas impossível de ignorar. Você não se enquadra em categorias prontas, e isso fascina.

Você projeta aventura e abertura. Ao seu redor, conversas viram mais interessantes, planos viram mais ousados e possibilidades que pareciam fechadas de repente se abrem. Você tem o dom de expandir o horizonte das pessoas pelo simples fato de existir.

O que pode trabalhar contra você é a percepção de instabilidade ou falta de comprometimento quando você está apenas sendo fiel à sua natureza. Mostrar que você pode ser livre e confiável ao mesmo tempo é o equilíbrio que completa a sua presença no mundo.`,

  6: `O mundo te enxerga como protetor e acolhedor. Há uma warmth em você que as pessoas sentem antes mesmo de você dizer uma palavra — algo que comunica segurança, cuidado e presença genuína. Você é o tipo de pessoa que as pessoas ligam quando estão em apuros.

Você projeta responsabilidade e harmonia. Em grupos, você naturalmente assume o papel de cuidar das dinâmicas — garantindo que todos se sintam incluídos, que os conflitos sejam resolvidos e que o ambiente seja saudável. Isso não é esforço consciente: é quem você é.

O risco da sua personalidade é carregar expectativas que você mesmo criou. Quando as pessoas aprendem que podem contar com você, elas às vezes exigem mais do que você tem para dar. Aprender a cuidar de si com a mesma atenção que você cuida dos outros é o que sustenta sua presença a longo prazo.`,

  7: `Para o mundo, você projeta mistério e profundidade. Há algo em você que as pessoas percebem mas não conseguem nomear — uma inteligência silenciosa, uma observação acurada, uma presença que não precisa de palavras para se fazer sentir.

Você é visto como alguém pensativo e diferente. Em conversas, você raramente diz o óbvio — quando fala, é algo que faz os outros pararem e pensar. Essa qualidade te dá autoridade intelectual mesmo quando você não está buscando atenção.

O desafio é que sua reserva pode ser interpretada como frieza ou distância por quem não te conhece. Quando você escolhe se abrir — mesmo que parcialmente — a profundidade que você carinha por dentro se torna ainda mais impactante do que a distância misteriosa.`,

  8: `O mundo te enxerga como poderoso e determinado. Você projeta uma aura de competência e autoridade que faz as pessoas te respeitarem antes mesmo de conhecerem seus feitos. Há algo em sua postura, em sua forma de falar e de decidir que comunica: esta pessoa sabe o que está fazendo.

Você transmite ambição e confiança. Em ambientes profissionais, você naturalmente assume posições de liderança — não necessariamente porque você quis, mas porque as pessoas instintivamente olham para você quando é preciso tomar uma decisão difícil.

O risco da sua personalidade é parecer intimidador ou inacessível. Quando você demonstra vulnerabilidade e generosidade além da competência, você se torna não apenas respeitado mas genuinamente admirado — e isso abre portas que o poder sozinho não consegue.`,

  9: `Para o mundo, você projeta sabedoria e compaixão. As pessoas sentem que você as entende de um jeito que vai além do que foi dito. Há algo em sua presença que comunica: este é um lugar seguro. Você pode ser você mesmo aqui.

Você é visto como alguém com visão de mundo ampla e coração generoso. Em conversas, você tem a habilidade de ver além do ponto de vista individual e oferecer perspectivas que ajudam as pessoas a saírem de ciclos de pensamento estreitos. Isso te torna um conselheiro natural.

O desafio da sua personalidade é a percepção de distância emocional quando você está apenas processando internamente. Quando você permite que as pessoas vejam sua própria vulnerabilidade — e não apenas sua sabedoria — a conexão que se cria é profunda e transformadora.`,

  11: `O mundo percebe algo especial em você, mesmo que não saiba nomear. Há uma intensidade em seus olhos, uma sensibilidade em suas palavras e uma presença que faz as pessoas sentirem que estão diante de alguém que vê mais do que o normal.

Você projeta espiritualidade e profundidade intuitiva. As pessoas te procuram em momentos de crise não apenas por conselhos práticos, mas porque sua presença, por si só, tem um efeito calmante e orientador. Você é o tipo de pessoa que as pessoas sentem que devem conhecer, mesmo sem saber por quê.

O risco da sua personalidade 11 é a intensidade que pode sobrecarregar quem está acostumado à superficialidade. Calibrar sua presença — sabendo quando se aprofundar e quando ser leve — é o que torna sua intensidade um dom e não um obstáculo.`,

  22: `Para o mundo, você projeta visão e capacidade de realização em grande escala. As pessoas te veem como alguém que pensa diferente — não apenas resolver o problema imediato, mas redesenhar o sistema. Há uma grandiosidade na forma como você concebe soluções.

Você transmite seriedade e potencial. Em ambientes de trabalho, sua capacidade de enxergar o quadro completo te coloca naturalmente em posições estratégicas. As pessoas percebem que você não está apenas pensando no próximo passo — você está construindo algo que durará.

O desafio da sua personalidade é a pressão que você coloca sobre si mesmo diante do potencial que os outros percebem em você. Quando você se permite ser humano — imperfeito, em processo — você descobre que o mundo te admira não apenas pelo que você constrói, mas por quem você é enquanto constrói.`,

  33: `O mundo te enxerga como uma fonte de amor e cura. Há algo em sua presença que faz as pessoas se sentirem vistas, aceitas e amadas — não de forma sentimental, mas de uma forma profunda e real que as transforma. Você é um dos raros seres humanos cuja presença, por si só, é terapêutica.

Você projeta generosidade e compaixão sem limite aparente. As pessoas acorrem a você com seus problemas, suas dores e seus sonhos porque sabem — instintivamente — que você não vai julgá-las e que vai encontrar algo valioso no que elas trazem.

O risco da sua personalidade 33 é tornar-se um repositório das dores alheias sem espaço para as suas próprias. Quando você aprende a honrar seus próprios limites — e a comunicar quando está cheio — você se torna ainda mais capaz de servir ao amor que é a sua essência.`,
};

const licao = {
  1: `Sua lição de vida é aprender a ser você mesmo — completamente, sem pedir desculpas. Em vidas passadas ou nas fases iniciais desta, você aprendeu a se moldar ao que os outros esperavam, a minimizar sua voz para manter a paz. Agora é hora do contrário.

A independência que você precisa desenvolver não é apenas prática — é existencial. Significa ter a coragem de definir quem você é pelos seus próprios termos, de tomar decisões que façam sentido para você mesmo quando ninguém ao seu redor entende, de liderar sua própria vida antes de qualquer outra coisa.

Cada vez que você cede o comando da sua existência a uma opinião externa, você adia a sua própria evolução. E cada vez que você age com coragem a partir da sua verdade interior — por menor que seja o gesto — você avança significativamente no seu caminho de alma.`,

  2: `Sua lição de vida gira em torno de relacionamentos e equilíbrio. Você veio para aprender a arte da parceria verdadeira — não a fusão que apaga as fronteiras, nem o isolamento que as torna intransponíveis, mas o espaço dinâmico e rico que existe entre dois seres inteiros.

Cooperar sem se perder, ser sensível sem se dissolver, confiar sem ingenuidade — esses são os grandes aprendizados do seu caminho. O universo vai colocar em sua vida pessoas e situações que testam exatamente esses limites, repetidamente, até que você encontre o equilíbrio.

A paciência é uma das suas maiores ferramentas nessa jornada. As coisas que mais importam — vínculos reais, harmonia genuína, paz interior — não se conquistam na pressa. Elas pedem tempo, cuidado e a disposição de olhar honestamente para si mesmo.`,

  3: `Sua lição é expressar-se autenticamente. Você veio para aprender a confiar na sua voz — não na voz que agrada, que provoca, que performa — mas na sua voz real, aquela que vem de dentro e que às vezes você mesmo mal consegue ouvir em meio ao barulho.

A criatividade não é apenas uma habilidade no seu caminho — é uma prática espiritual. Quando você se expressa genuinamente, você não está apenas comunicando: você está cumprindo uma função cósmica de trazer ao mundo algo que só poderia existir através de você. Isso tem peso.

Seu aprendizado passa por superar o medo do julgamento. A crítica que você mais teme virá — e não vai destruí-lo. Na verdade, cada vez que você se expõe e sobrevive, você descobre que a autenticidade é uma proteção muito mais poderosa do que a performance.`,

  4: `Sua lição é construir com propósito. Você veio para aprender o valor da disciplina, da organização e do trabalho comprometido — não como obrigações externas, mas como expressões de integridade e amor-próprio.

O universo vai te colocar em situações onde você precisará terminar o que começa, honrar o que prometeu e construir pacientemente mesmo quando os resultados demoram a aparecer. Essas situações não são punições — são oportunidades de fortalecer a confiança em você mesmo.

A lição 4 também carrega um ensinamento sobre o corpo e a saúde. Cuidar da sua base física — sono, alimentação, movimento, rotina — é parte do seu caminho espiritual. Quando o templo está em ordem, tudo o mais flui com mais facilidade.`,

  5: `Sua lição é abraçar a mudança como aliada. Você veio para aprender que a vida não precisa de controle para ser segura — ela precisa de confiança. A segurança que você busca não está na estabilidade das circunstâncias, mas na solidez da sua relação consigo mesmo.

O universo vai trazer mudanças — algumas que você escolheu, muitas que você não escolheu. Cada uma delas é um portal para uma versão mais expandida de si mesmo. A resistência prolonga o desconforto; a abertura o transforma.

Sua evolução também passa por aprender a usar a liberdade com sabedoria. Não toda porta que se abre precisa ser cruzada; não toda oportunidade precisa ser abraçada. Discernir entre o impulso que expande e o impulso que dispersa é uma das habilidades mais sofisticadas do seu caminho.`,

  6: `Sua lição envolve amor, responsabilidade e fronteiras. Você veio para aprender a cuidar — de verdade, com presença — sem se perder no cuidado. O equilíbrio entre dar e receber, entre servir e se preservar, é o coração do seu aprendizado.

O universo vai te colocar em situações onde você precisará dizer não com amor, onde precisará deixar as pessoas enfrentarem as consequências das próprias escolhas, onde precisará reconhecer que nem todo problema é seu para resolver. Cada um desses momentos é uma aula.

Sua lição também carrega a cura da família — seja a família de origem ou a que você constrói. Padrões emocionais antigos pedem reconhecimento e transformação. Quando você os vê com clareza e decide conscientemente quais perpetua e quais dissolve, você libera não apenas a si mesmo, mas as gerações que virão.`,

  7: `Sua lição é confiar no que não pode ser visto. Você veio para aprender que existem dimensões da realidade que não se provam — apenas se experienciam. A fé, a intuição e o mistério são partes legítimas da sua jornada, não ilusões a serem descartadas pela razão.

O universo vai te convidar repetidamente à solitude e à contemplação. Não como punição, mas como o ambiente onde você tem acesso às suas percepções mais profundas. Resistir a isso é como tentar ver as estrelas com as luzes da cidade acesas — possível, mas muito mais difícil.

Seu aprendizado também passa por compartilhar o que você descobre. A sabedoria acumulada em solidão só se completa quando encontra o mundo. Escrever, ensinar, conversar, criar — qualquer forma que você escolher de exteriorizar o seu interior é parte integral da sua missão.`,

  8: `Sua lição é uma relação saudável com poder e abundância. Você veio para aprender que prosperidade não é sorte — é uma consequência natural de agir com integridade, utilizar seus talentos com coragem e colocar sua energia a serviço de algo significativo.

O universo vai testar sua relação com dinheiro, autoridade e reconhecimento de formas variadas. Haverá ciclos de abundância e escassez, de poder e vulnerabilidade. Cada ciclo ensina algo que o anterior não podia ensinar. Resistir aos ciclos os prolonga; fluir com eles os acelera.

Sua maior lição está em entender que o poder externo é apenas um reflexo do poder interno. Quando você lidera a partir de valores, age a partir de propósito e constrói a partir de integridade, a abundância não é apenas um resultado — é um estado natural de ser.`,

  9: `Sua lição é completude e desapego. Você veio ao final de um ciclo de aprendizado de alma — o número 9 carrega a sabedoria de todos os números anteriores e pede que você agora a utilize em serviço, sem apego aos frutos da ação.

O universo vai te colocar em situações de encerramento — relacionamentos que terminam, fases que se concluem, versões de si mesmo que precisam ser deixadas para trás. Sua evolução depende da sua capacidade de honrar esses encerramentos com gratidão, sem agarrar o que já cumpriu seu propósito.

Sua lição mais profunda é descobrir que você é mais do que sua história. As experiências que acumulou, as dores que carrega e as conquistas que alcançou são capítulos — não o livro inteiro. Quando você encontra o narrador por trás de todas as histórias, encontra sua essência mais verdadeira.`,

  11: `Sua lição é confiar na sua percepção. Você veio com um nível de sensibilidade e intuição que o mundo convencional frequentemente desqualifica — e você, em resposta, aprendeu a questionar o que sente, a racionalizá-lo ou a silenciá-lo. Sua evolução exige o caminho oposto.

O universo vai te colocar em situações onde a lógica aponta para um lado e a sua intuição aponta para outro. Cada vez que você honra o que percebe — mesmo sem poder explicar — e está certo, você fortalece a confiança nesse sistema interno extraordinário que você possui.

Sua lição também envolve aprender a viver com alta sensibilidade em um mundo de baixa frequência. Criar ambientes que te nutram, desenvolver práticas que te protejam e encontrar pessoas que vibrem em sintonia com você não é luxo — é necessidade espiritual e pré-requisito para cumprir sua missão.`,

  22: `Sua lição é manifestar em grande escala sem perder o chão. Você veio com a capacidade de transformar visões extraordinárias em realidades concretas — mas essa capacidade só se desenvolve quando você aprende a equilibrar o sonho com a disciplina, a inspiração com a execução.

O universo vai te dar visões que parecem grandes demais. Sua tendência pode ser recuar diante da grandiosidade ou, pelo contrário, se perder no idealismo sem nunca colocar a mão na massa. Ambos são desvios. O caminho do 22 é o da construção paciente e corajosa.

Sua maior lição está em servir. O 22 não foi dado para acumulação pessoal — foi dado para impacto coletivo. Quando você percebe que os recursos, o talento e a visão que possui são ferramentas a serviço de algo maior, o universo se reorganiza para apoiar o que você está construindo.`,

  33: `Sua lição é amar sem condições e sem se dissolver. Você veio com uma capacidade de amor que transcende os limites do pessoal — você sente o coletivo, o universal, o que ainda não tem nome. Sua evolução está em aprender a expressar esse amor de forma sustentável.

O universo vai te colocar em situações onde o amor incondicional é testado — onde você precisará amar alguém que te magoou, servir sem reconhecimento, permanecer presente diante da dor alheia sem perder sua centralidade. Cada um desses testes é uma iniciação.

Sua lição mais profunda é entender que você não pode dar o que não tem. Cuidar de si — com a mesma compaixão que você oferece ao mundo — não é egoísmo, é a condição necessária para que o amor que você carrega continue fluindo. Você é o canal; mantenha o canal limpo.`,
};

export const INTERPRETACOES = { destino, alma, personalidade, licao };
